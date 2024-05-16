<script lang="ts">
    import { proxy, wrap, type Remote } from "comlink";
    import { type Api } from "./worker/worker";
    import humanizeDuration from "humanize-duration";
    import { wrapAsync } from "./comlink-async";
    import { Button, Container, Input, Label } from "@sveltestrap/sveltestrap";

    let videoBitrateKilobits: number;
    let audioBitrateKilobits: number;
    let durationSeconds: number;
    let originalFrameRate: number;
    let videoStreams: Awaited<ReturnType<Api["start"]>>["videoStreams"];
    let audioStreams: Awaited<ReturnType<Api["start"]>>["audioStreams"];

    let actualVideoBitrateKilobits: number;
    let actualAudioBitrateKilobits: number;

    let targetSizeKilobytes = 25000;

    let scale = 1;
    let frameRate: number;

    $: {
        audioBitrateKilobits = 96;
        videoBitrateKilobits = Math.floor((targetSizeKilobytes * 8) / durationSeconds); // in kilobits/sec

        // edge case: we cannot fit enough 96kbps audio in
        if (videoBitrateKilobits / 10 < audioBitrateKilobits) {
            // edge case: opus needs at least 6kbps
            if (videoBitrateKilobits / 10 < 6) {
                // edge case: the video has less than 10kbps to spare
                if (videoBitrateKilobits < 10) {
                    // just leave it. it'll be too big.
                    console.warn("video is too long to fit under the size limit");
                    audioBitrateKilobits = 6;
                } else {
                    videoBitrateKilobits -= 6;
                    audioBitrateKilobits = 6;
                }
            } else {
                audioBitrateKilobits = Math.floor(videoBitrateKilobits / 10);
                videoBitrateKilobits -= audioBitrateKilobits;
            }
        }

        actualVideoBitrateKilobits = videoBitrateKilobits;
        actualAudioBitrateKilobits = audioBitrateKilobits;
    }

    let worker: Remote<Api>;

    let step = '';
    let isFileLoaded = false;

    async function start(e: Event) {
        const file = (e.currentTarget as HTMLInputElement).files?.[0];
        if (!file) return;

        console.log("no bitches?");

        worker ??= await wrapAsync<Api>(
            new Worker(new URL("./worker/worker.ts", import.meta.url), {
                type: "module",
            }),
        );
        console.log("gogo gadget web worker");
        ({ durationSeconds, frameRate: originalFrameRate, videoStreams, audioStreams } = await worker.start(file, proxy(newStep => step = newStep)));

        frameRate = originalFrameRate;

        console.log(videoStreams);
        console.log(audioStreams);

        videoUrl = undefined;

        isFileLoaded = true;
        step = '';

        // let data = [];
        // worker.onmessage = async ev => {
        // const cmd = ev.data;
        // if (cmd.c === "chunk") {
        // // A chunk of data
        // data.push(cmd.chunk);
        // } else if (cmd.c === "done") {
        // // Received all data
        // const f = new File(data, "out.mp4", { type: "video/mp4" });
        // const v = document.createElement("video");
        // v.controls = true;
        // v.src = URL.createObjectURL(f);
        // document.body.appendChild(v);
        // }
        // };

        // worker.postMessage(file);
    }

    let videoUrl: string | undefined;

    async function transcode() {
        let width: number | undefined = undefined;
        let height: number | undefined = undefined;
        if (scale < 1) {
            width = scale * videoStreams[0].width;
            height = scale * videoStreams[0].height;
        }
        const video = await worker.transcode(actualVideoBitrateKilobits, actualAudioBitrateKilobits, width, height, frameRate, proxy((newStep: string) => step = newStep));

        const f = new File([video], "out.mp4", {type: "video/mp4"});
        if (videoUrl) {
            URL.revokeObjectURL(videoUrl);
            videoUrl = undefined;
        }
        videoUrl = URL.createObjectURL(f);
    }

    function toDuration(duration: number) {
        return humanizeDuration(Math.round(duration * 1000));
    }
</script>

<Container fluid>
    <Input type="file" on:change={start} id="file" label="Input file:&nbsp;" />

    {#if step != ''}
    <p>{step}</p>
    {/if}

    {#if isFileLoaded}
        <p>
            Video duration: {toDuration(durationSeconds)}
        </p>

        <p>
            <Label>Target size:</Label>
            <Input type="select" bind:value={targetSizeKilobytes}>
                <option value={8000}>8 MB</option>
                <option value={25000}>25 MB</option>
                <option value={50000}>50 MB</option>
                <option value={100000}>100 MB</option>
            </Input>
        </p>

        <p>
            <Label>Video bitrate: {actualVideoBitrateKilobits} kbps</Label>
            <Input type="range" bind:value={actualVideoBitrateKilobits} min={0} max={videoBitrateKilobits} step={1} />
        </p>

        <p>
            <Label>Audio bitrate: {actualAudioBitrateKilobits} kbps</Label>
            <Input type="range" bind:value={actualAudioBitrateKilobits} min={0} max={audioBitrateKilobits} step={1} />
        </p>

        <p>
            <Label>Video scale: {scale}x ({Math.round(videoStreams?.[0]?.width * scale)}x{Math.round(videoStreams?.[0]?.height * scale)})</Label>
            <Input type="range" bind:value={scale} min={0} max={1} step={0.01} />
        </p>

        <p>
            <Label>Video framerate: {frameRate}</Label>
            <Input type="range" bind:value={frameRate} min={0} max={originalFrameRate} step={1} />
        </p>

        <Button on:click={transcode}>Transcode</Button>

        {#if videoUrl}
        <!-- svelte-ignore a11y-media-has-caption -->
        <p>
            <video controls src={videoUrl}/>
        </p>
        {/if}

        {#if videoStreams}
            <h3>Video streams</h3>

            {#each videoStreams as stream, i}
                <h4>Stream {i + 1}</h4>
                <ul>
                    <li>Duration: {toDuration(stream.duration)}</li>
                    <li>Framerate: {originalFrameRate} fps</li>
                    <li>Resolution: {stream.width}x{stream.height}</li>
                </ul>
            {/each}
        {/if}
        {#if audioStreams}
            <h3>Audio streams</h3>

            {#each audioStreams as stream, i}
                <h4>Stream {i + 1}</h4>
                <ul>
                    <li>Duration: {toDuration(stream.duration)}</li>
                    <li>Sample Rate: {Math.round(stream.sampleRate / 1000)}hz</li>
                    <li>Channels: {stream.numberOfChannels}</li>
                </ul>
            {/each}
        {/if}
    {/if}
</Container>
