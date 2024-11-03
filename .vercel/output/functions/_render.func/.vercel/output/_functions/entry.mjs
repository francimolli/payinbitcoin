import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DxQ_j5un.mjs';
import { manifest } from './manifest_DA4dfbYw.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/category/_category_/_page_.astro.mjs');
const _page2 = () => import('./pages/post/_---slug_.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/tags.astro.mjs');
const _page5 = () => import('./pages/tags/_---tag_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.8_rollup@4.24.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/category/[category]/[page].astro", _page1],
    ["src/pages/post/[...slug].astro", _page2],
    ["src/pages/rss.xml.ts", _page3],
    ["src/pages/tags/index.astro", _page4],
    ["src/pages/tags/[...tag]/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d07a65ff-3355-45e8-9d6b-3085cfbb81e7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
