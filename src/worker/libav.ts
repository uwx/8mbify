import LibAV, { type LibAVWrapper } from '../libav.js/libav-5.1.6.1.1-2e129ab-all';
export { LibAV as default };
export type * from 'libav.js';

const libavVersion = '5.1.6.1.1-2e129ab';
const libavVariant = 'all';

declare module globalThis {
    export var LibAV: LibAVWrapper;
}

globalThis.LibAV = LibAV;

console.log('libav setup');

LibAV.factory = (async () => {
    console.log('importing libav');
    return (await import(`../libav.js/libav-5.1.6.1.1-2e129ab-all.wasm`)).default;
})();
LibAV.wasmurl = (await import(`./libav.js/libav-5.1.6.1.1-2e129ab-all.wasm.wasm?url`)).default;
