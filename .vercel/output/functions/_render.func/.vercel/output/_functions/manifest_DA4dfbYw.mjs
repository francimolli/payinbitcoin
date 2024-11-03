import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CJJgof_G.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_H2LVesOC.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/francis/Scrivania/blog-template/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.8_rollup@4.24.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BZ4wGRA7.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_page_.CKyM-5zp.css"},{"type":"external","src":"/_astro/_slug_.B-y1-8w-.css"}],"routeData":{"route":"/category/[category]/[page]","isIndex":false,"type":"page","pattern":"^\\/category\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["category","page"],"component":"src/pages/category/[category]/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CJD6dMKP.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_page_.CKyM-5zp.css"},{"type":"external","src":"/_astro/_slug_.B-y1-8w-.css"}],"routeData":{"route":"/post/[...slug]","isIndex":false,"type":"page","pattern":"^\\/post(?:\\/(.*?))?\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/post/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BffTDbfH.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_page_.CKyM-5zp.css"},{"type":"external","src":"/_astro/_slug_.B-y1-8w-.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BZ4wGRA7.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_page_.CKyM-5zp.css"},{"type":"external","src":"/_astro/_slug_.B-y1-8w-.css"}],"routeData":{"route":"/tags/[...tag]","isIndex":true,"type":"page","pattern":"^\\/tags(?:\\/(.*?))?\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/tags/[...tag]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.7JvzF64l.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_page_.CKyM-5zp.css"},{"type":"external","src":"/_astro/_slug_.B-y1-8w-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://payinbitcoin.org/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/post/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/post/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/Category.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/ListCategories.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/HeaderLink.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/tags/[...tag]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[...tag]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/ListPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/ListRelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/TabletOfContentsHeading.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/TableOfContents.astro",{"propagation":"in-tree","containsHead":false}],["/home/francis/Scrivania/blog-template/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tags/[...tag]/index@_@astro":"pages/tags/_---tag_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.8_rollup@4.24.3_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/category/[category]/[page]@_@astro":"pages/category/_category_/_page_.astro.mjs","\u0000@astro-page:src/pages/post/[...slug]@_@astro":"pages/post/_---slug_.astro.mjs","/home/francis/Scrivania/blog-template/node_modules/.pnpm/astro@4.16.8_rollup@4.24.3_typescript@5.2.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx?astroContentCollectionEntry=true":"chunks/Peer-to-peer-P2P_DxMBX8eG.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx?astroContentCollectionEntry=true":"chunks/Una-Rivoluzione-Oltre-la-Moneta_Bh60tofg.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx?astroPropagatedAssets":"chunks/Peer-to-peer-P2P_DZ4XFc6p.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx?astroPropagatedAssets":"chunks/Una-Rivoluzione-Oltre-la-Moneta_DCTMcS6n.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx":"chunks/Peer-to-peer-P2P_B2FZ3CnL.mjs","/home/francis/Scrivania/blog-template/src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx":"chunks/Una-Rivoluzione-Oltre-la-Moneta_CEznAv0Q.mjs","\u0000@astrojs-manifest":"manifest_DA4dfbYw.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.7JvzF64l.js","/home/francis/Scrivania/blog-template/node_modules/.pnpm/@pagefind+default-ui@1.0.4/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.CQUEo8s8.js","/astro/hoisted.js?q=1":"_astro/hoisted.CJD6dMKP.js","/astro/hoisted.js?q=2":"_astro/hoisted.BZ4wGRA7.js","/astro/hoisted.js?q=3":"_astro/hoisted.BffTDbfH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/peer-to-peer.B6sTZDMM.svg","/_astro/logo.Tonf19ay.svg","/_astro/_page_.CKyM-5zp.css","/_astro/_slug_.B-y1-8w-.css","/demo.gif","/favicon.svg","/logo.png","/open-graph.png","/openblog-lighthouse-score.svg","/project.png","/robots.txt","/_astro/hoisted.7JvzF64l.js","/_astro/hoisted.BZ4wGRA7.js","/_astro/hoisted.BffTDbfH.js","/_astro/hoisted.CJD6dMKP.js","/_astro/ui-core.CQUEo8s8.js","/admin/index.html","/fonts/Manrope-Bold.woff2","/fonts/Manrope-ExtraBold.woff2","/fonts/Manrope-ExtraLight.woff2","/fonts/Manrope-Light.woff2","/fonts/Manrope-Medium.woff2","/fonts/Manrope-Regular.woff2","/fonts/Manrope-SemiBold.woff2","/admin/assets/SchemaReference.es-3b3e57a0.js","/admin/assets/brace-fold.es-f2e3735d.js","/admin/assets/closebrackets.es-e969742b.js","/admin/assets/codemirror.es-52e8b92d.js","/admin/assets/codemirror.es2-5884f31a.js","/admin/assets/comment.es-39699bae.js","/admin/assets/dialog.es-dffe62e7.js","/admin/assets/dialog.es2-02b3b4e7.js","/admin/assets/foldgutter.es-b6cee46a.js","/admin/assets/forEachState.es-b2033c2b.js","/admin/assets/hint.es-d6705044.js","/admin/assets/hint.es2-ac289a6c.js","/admin/assets/index-2571b6e1.js","/admin/assets/index-53853e77.css","/admin/assets/index-a7d6ec29.js","/admin/assets/info-addon.es-c9b2027b.js","/admin/assets/info.es-782c1edf.js","/admin/assets/javascript.es-3c6957c5.js","/admin/assets/jump-to-line.es-d901ea33.js","/admin/assets/jump.es-b5dde3c6.js","/admin/assets/lint.es-fe7166bb.js","/admin/assets/lint.es2-58e44f91.js","/admin/assets/lint.es3-aacd012b.js","/admin/assets/matchbrackets.es-97d2e827.js","/admin/assets/matchbrackets.es2-f53f57e6.js","/admin/assets/mode-indent.es-057a4f6a.js","/admin/assets/mode.es-24a95a95.js","/admin/assets/mode.es2-3b5994d0.js","/admin/assets/mode.es3-6cf9f217.js","/admin/assets/search.es-1c15f5ea.js","/admin/assets/searchcursor.es-b1a352a2.js","/admin/assets/searchcursor.es2-cbfe7cae.js","/admin/assets/show-hint.es-b981493e.js","/admin/assets/sublime.es-e2a3eb60.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Qs/1cQAR2eAZAmiqudfRhMdWnsQOlAJODNCj8/yw9bU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
