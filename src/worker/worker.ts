/*
 * This (un)license applies only to this sample code, and not to
 * libavjs-webcodecs-bridge as a whole:
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or distribute
 * this software, either in source code form or as a compiled binary, for any
 * purpose, commercial or non-commercial, and by any means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors of
 * this software dedicate any and all copyright interest in the software to the
 * public domain. We make this dedication for the benefit of the public at
 * large and to the detriment of our heirs and successors. We intend this
 * dedication to be an overt act of relinquishment in perpetuity of all present
 * and future rights to this software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

globalThis._scriptDir = undefined;

import LibAV, { type LibAV as LibAVType, type Packet, type Stream, type LibAVSync } from './libav';
import { packetToEncodedVideoChunk, packetToEncodedAudioChunk } from '../libavjs-webcodecs-bridge/bridge';
import { Muxer, ArrayBufferTarget } from 'mp4-muxer';
import { expose } from 'comlink';
import { exposeAsync } from '../comlink-async';

import { sampleDemux } from './worker-util';

console.log('done with libav');

let streams: Stream[];
let configs: (AudioDecoderConfig | VideoDecoderConfig | null)[];
let allPackets: Record<number, Packet[]>;

export class Api {
    async start(file: File, progressCallback: (step: string) => void) {
        // Demux the file
        console.log('demuxing file');
        progressCallback('Demuxing file...');

        let frameRate: number;
        let formatDuration: number;

        ({streams, configs, packets: allPackets, frameRate, formatDuration} = await sampleDemux(file, {unify: true}));

        console.log({streams, configs, allPackets, frameRate});

        // Prepare for transcoding
        console.log('Prepare for transcoding');
        progressCallback('Prepare for transcoding');

        const DURATION_NA = -9223372036854776;

        const durationSeconds = Math.max(...streams.map(stream => stream.duration !== DURATION_NA ? stream.duration : formatDuration));
        return {
            durationSeconds,
            frameRate,
            videoStreams: [...(function*() {
                for (let streamIndex = 0; streamIndex < streams.length; streamIndex++) {
                    const stream = streams[streamIndex];

                    if (stream.codec_type !== LibAV.AVMEDIA_TYPE_VIDEO) continue;

                    const config = configs[streamIndex] as VideoDecoderConfig;

                    yield {
                        duration: stream.duration !== DURATION_NA ? stream.duration : formatDuration,
                        framerate: 1/((stream.time_base_num/stream.time_base_den)*1000),
                        width: config.codedWidth!,
                        height: config.codedHeight!,
                    };
                }
            })()],
            audioStreams: [...(function*() {
                for (let streamIndex = 0; streamIndex < streams.length; streamIndex++) {
                    const stream = streams[streamIndex];

                    if (stream.codec_type !== LibAV.AVMEDIA_TYPE_AUDIO) continue;

                    const config = configs[streamIndex] as AudioDecoderConfig;

                    yield {
                        duration: stream.duration !== DURATION_NA ? stream.duration : formatDuration,
                        sampleRate: config.sampleRate,
                        numberOfChannels: config.numberOfChannels,
                    };
                }
            })()]
        }
    }

    async transcode(
        videoBitrateKilobits: number,
        audioBitrateKilobits: number,
        widthOverride?: number,
        heightOverride?: number,
        framerateOverride?: number,
        progressCallback?: (step: string) => void,
    ) {
        let outStreams: {
            inIdx: number;
            type: string;
            config: AudioEncoderConfig | VideoEncoderConfig;
            decoder: AudioDecoder | VideoDecoder;
            encoder: AudioEncoder | VideoEncoder;
        }[] = [];

        let decoders: (AudioDecoder | VideoDecoder)[] = [];

        let muxer: Muxer<ArrayBufferTarget>;

        let queuedVideoFrames = 0;
        let queuedAudioFrames = 0;

        let encodedVideoFrames = 0;
        let encodedAudioFrames = 0;

        let decodedVideoFrames = 0;
        let decodedAudioFrames = 0;

        let lastProgress = -1;

        function updateProgress() {
            const THRESHOLD = 0.05; // over .1%
            let newProgress = (encodedVideoFrames / queuedVideoFrames) * 100;
            if (Math.abs(newProgress - lastProgress) >= THRESHOLD) {
                lastProgress = newProgress;
                progressCallback?.(`Transcoding approx. ${newProgress.toFixed(2)}% completed (${encodedVideoFrames} out of ${queuedVideoFrames} frames)`);
            }
        }

        for (let streamIndex = 0; streamIndex < streams.length; streamIndex++) {
            const inStream = streams[streamIndex];

            if (configs[streamIndex] === null) continue;

            if (inStream.codec_type === LibAV.AVMEDIA_TYPE_VIDEO) {
                const decodeConfig = configs[streamIndex] as VideoDecoderConfig;

                const framerate = 1/((inStream.time_base_num/inStream.time_base_den)*1000)

                // ENCODING
                const oi = outStreams.length;
                const enc = new VideoEncoder({
                    output: (chunk, meta) => {
                        muxer.addVideoChunk(chunk, meta);
                        encodedVideoFrames++;
                        updateProgress();
                        // progressCallback?.(`queuedVideoFrames: ${queuedVideoFrames}, queuedAudioFrames: ${queuedAudioFrames}, encodedVideoFrames: ${encodedVideoFrames}, encodedAudioFrames: ${encodedAudioFrames}, decodedVideoFrames: ${decodedVideoFrames}, decodedAudioFrames: ${decodedAudioFrames}`);
                    },
                    error: err => console.error(`video encoder ${oi}: ${err.toString()}`)
                });
                const config: VideoEncoderConfig = {
                    codec: "avc1.4d002a",
                    bitrate: videoBitrateKilobits * 1000, // TODO
                    bitrateMode: 'constant',
                    width: widthOverride ?? decodeConfig.codedWidth!,
                    height: heightOverride ?? decodeConfig.codedHeight!,
                    framerate: framerateOverride,
                };
                enc.configure(config);

                // DECODING
                const dec = new VideoDecoder({
                    output: frame => {
                        enc.encode(frame);
                        frame.close();
                        decodedVideoFrames++;
                        // progressCallback?.(`queuedVideoFrames: ${queuedVideoFrames}, queuedAudioFrames: ${queuedAudioFrames}, encodedVideoFrames: ${encodedVideoFrames}, encodedAudioFrames: ${encodedAudioFrames}, decodedVideoFrames: ${decodedVideoFrames}, decodedAudioFrames: ${decodedAudioFrames}`);
                    },
                    error: err => console.error(`video decoder ${oi}: ${err.toString()}`)
                });
                decoders.push(dec);
                dec.configure(decodeConfig);

                outStreams.push({
                    inIdx: streamIndex,
                    type: "video",
                    config,
                    decoder: dec,
                    encoder: enc,
                });

            } else if (inStream.codec_type === LibAV.AVMEDIA_TYPE_AUDIO) {
                const decodeConfig = configs[streamIndex] as AudioDecoderConfig;

                // ENCODING
                const oi = outStreams.length;
                const enc = new AudioEncoder({
                    output: (chunk, meta) => {
                        muxer.addAudioChunk(chunk, meta);
                        encodedAudioFrames++;
                        // progressCallback?.(`queuedVideoFrames: ${queuedVideoFrames}, queuedAudioFrames: ${queuedAudioFrames}, encodedVideoFrames: ${encodedVideoFrames}, encodedAudioFrames: ${encodedAudioFrames}, decodedVideoFrames: ${decodedVideoFrames}, decodedAudioFrames: ${decodedAudioFrames}`);
                    },
                    error: err => console.error(`audio encoder ${oi}: ${err.toString()}`)
                });
                const config: AudioEncoderConfig = {
                    codec: "opus",
                    sampleRate: decodeConfig.sampleRate,
                    numberOfChannels: decodeConfig.numberOfChannels,
                    bitrate: Math.max(audioBitrateKilobits*1000,6000),
                };
                enc.configure(config);

                // DECODING
                const dec = new AudioDecoder({
                    output: frame => {
                        enc.encode(frame);
                        frame.close();
                        decodedAudioFrames++;
                        // progressCallback?.(`queuedVideoFrames: ${queuedVideoFrames}, queuedAudioFrames: ${queuedAudioFrames}, encodedVideoFrames: ${encodedVideoFrames}, encodedAudioFrames: ${encodedAudioFrames}, decodedVideoFrames: ${decodedVideoFrames}, decodedAudioFrames: ${decodedAudioFrames}`);
                    },
                    error: err => console.error(`audio decoder ${oi}: ${err.toString()}`)
                });
                decoders.push(dec);
                dec.configure(decodeConfig);

                outStreams.push({
                    inIdx: streamIndex,
                    type: "audio",
                    config,
                    decoder: dec,
                    encoder: enc,
                });

            }
        }

        // Prepare for muxing
        console.log('Prepare for muxing');
        progressCallback?.('Initiating transcode...');
        muxer = new Muxer({
            target: new ArrayBufferTarget(),
            video: {
                codec: 'avc',
                width: (outStreams.find(e => e.type == 'video')?.config as VideoEncoderConfig).width,
                height: (outStreams.find(e => e.type == 'video')?.config as VideoEncoderConfig).height,
            },
            audio: {
                codec: 'opus',
                numberOfChannels: (outStreams.find(e => e.type == 'audio')?.config as AudioEncoderConfig).numberOfChannels,
                sampleRate: (outStreams.find(e => e.type == 'audio')?.config as AudioEncoderConfig).sampleRate,
            },
            fastStart: 'in-memory'
        });

        // Transcode
        for (const packet of allPackets[0]) {
            const dec = decoders[packet.stream_index!];
            if (!dec)
                continue;

            const inStream = streams[packet.stream_index!];
            if (inStream.codec_type === LibAV.AVMEDIA_TYPE_VIDEO /* video */) {
                queuedVideoFrames++;
                dec.decode(packetToEncodedVideoChunk(packet, inStream));
            } else if (inStream.codec_type === LibAV.AVMEDIA_TYPE_AUDIO /* audio */) {
                queuedAudioFrames++;
                dec.decode(packetToEncodedAudioChunk(packet, inStream));
            }
        }

        // Flush
        for (const stream of outStreams) {
            await stream.decoder.flush();
            stream.decoder.close();
            await stream.encoder.flush();
            stream.encoder.close();
        }

        muxer.finalize();

        const { buffer } = muxer.target;

        progressCallback?.('Transcode complete');

        return buffer;
    }
}

exposeAsync(new Api());
