import { getStdout, stdoutFile } from './libav-helpers';
import LibAV, { type Packet, type Stream } from './libav';
import { audioStreamToConfig, packetToEncodedAudioChunk, packetToEncodedVideoChunk, videoStreamToConfig } from '../libavjs-webcodecs-bridge/bridge';

export async function sampleDemux(file: File, readOpts?: {
    // OUTPUT limit, in bytes
    limit?: number,
    // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
    unify?: boolean,
    // Version of ff_copyout_packet to use
    copyoutPacket?: "default"
}): Promise<{streams: Stream[], configs: (AudioDecoderConfig | VideoDecoderConfig | null)[], packets: Record<number, Packet[]>, frameRate: number}> {
    /* NOTE: noworker is not mandatory (this is in a worker, so it's fine)! */
    const libav = await LibAV.LibAV({noworker: true});
    await libav.mkreadaheadfile("input", file);

    // calcualte framerate
    await stdoutFile(libav);
    await libav.ffprobe('-v', '0', '-of', 'compact=p=0', '-select_streams', '0', '-show_entries', 'stream=r_frame_rate', 'input');
    const stdout = await getStdout(libav);
    const [, a, b] = stdout.match(/r_frame_rate=(\d+)\/(\d+)/) ?? [, 0, 0];
    const frameRate = +a / +b;

    const [fmt_ctx, streams] = await libav.ff_init_demuxer_file("input");

    const configs = await Promise.all(streams.map(stream => {
        if (stream.codec_type === libav.AVMEDIA_TYPE_AUDIO)
            return audioStreamToConfig(libav, stream);
        else if (stream.codec_type === libav.AVMEDIA_TYPE_VIDEO)
            return videoStreamToConfig(libav, stream);
        else
            return null;
    }));

    const pkt = await libav.av_packet_alloc();
    const [, packets] = await libav.ff_read_frame_multi(fmt_ctx, pkt, readOpts);

    libav.terminate();

    return {streams, configs, packets, frameRate};
}

export async function sampleMux(filename: string, codec: string, packets: (EncodedAudioChunk | EncodedVideoChunk | EncodedVideoChunk)[], extradata?: Uint8Array) {
    const libavPackets = [];
    for (const packet of packets) {
        const ab = new ArrayBuffer(packet.byteLength);
        packet.copyTo(ab);
        const pts = ~~(packet.timestamp / 1000);
        libavPackets.push({
            data: new Uint8Array(ab),
            pts, ptshi: 0,
            dts: pts, dtshi: 0,
            flags: (packet.type === "key") ? 1 : 0
        });
    }

    const libav = await LibAV.LibAV({noworker: true});

    /* Decode a little bit (and use extradata) just to make sure everything
     * necessary for a header is in place */
    let [, c, pkt, frame] = await libav.ff_init_decoder(codec);
    await libav.AVCodecContext_time_base_s(c, 1, 1000);
    await libav.ff_decode_multi(c, pkt, frame, [libavPackets[0]]);
    if (extradata) {
        const extradataPtr = await libav.malloc(extradata.length);
        await libav.copyin_u8(extradataPtr, extradata);
        await libav.AVCodecContext_extradata_s(c, extradataPtr);
        await libav.AVCodecContext_extradata_size_s(c, extradata.length);
    }

    // Now mux it
    const [oc, , pb] = await libav.ff_init_muxer(
        {filename, open: true}, [[c, 1, 1000]]);
    await libav.avformat_write_header(oc, 0);
    await libav.ff_write_multi(oc, pkt, libavPackets);
    await libav.av_write_trailer(oc);
    await libav.ff_free_muxer(oc, pb);
    const ret = await libav.readFile(filename);
    libav.terminate();
    return ret;
}

export async function decodeAudio(init: AudioDecoderConfig, packets: Packet[], stream: Stream) {
    // Feed them into the decoder
    const decoder = new AudioDecoder({
        output: frame => {
            const copyOpts = {
                planeIndex: 0,
                format: "f32-planar"
            } as const;
            const ab = new ArrayBuffer(frame.allocationSize(copyOpts));
            frame.copyTo(ab, copyOpts);
            postMessage({c: "frame", idx: stream.index, a: true, frame: ab}, '/', [ab]);
            frame.close();
        },
        error: x => console.error
    });
    decoder.configure(init);
    for (const packet of packets) {
        const eac = packetToEncodedAudioChunk(packet, stream);
        decoder.decode(eac);
    }

    // Wait for it to finish
    await decoder.flush();
    decoder.close();
}

export async function decodeVideo(init: VideoDecoderConfig, packets: Packet[], stream: Stream) {
    // Feed them into the decoder
    let frameP: Promise<void> = Promise.resolve();
    const decoder = new VideoDecoder({
        output: frame => {
            frameP = frameP.then(async function() {
                const ib = await createImageBitmap(frame);
                postMessage({c: "frame", idx: stream.index, v: true, frame: ib}, '/', [ib]);
                frame.close();
            }).catch(console.error);
        },
        error: x => console.error
    });
    decoder.configure(init);

    for (const packet of packets.slice(0, 128)) {
        const evc = packetToEncodedVideoChunk(packet, stream);
        decoder.decode(evc);
    }

    // Wait for it to finish
    await decoder.flush();
    await frameP;
    decoder.close();
}