import { a as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, c as createAstro, e as renderComponent } from './astro/server_H2LVesOC.mjs';
import 'kleur/colors';
import 'clsx';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl font-bold first-letter:uppercase"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/francis/Scrivania/blog-template/src/components/Title.astro", void 0);

const $$Shape = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Gradient Definitions --> <defs> <linearGradient id="bitcoinGradient" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#FF9900"></stop> <stop offset="100%" style="stop-color:#F7931A"></stop> </linearGradient> <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:white;stop-opacity:0.3"></stop> <stop offset="100%" style="stop-color:white;stop-opacity:0"></stop> </linearGradient> </defs> <!-- Background Circle with Gradient --> <circle cx="100" cy="100" r="90" fill="url(#bitcoinGradient)"></circle> <!-- Decorative Glow Effect --> <circle cx="100" cy="100" r="85" fill="url(#glowGradient)"></circle> <!-- Network Pattern --> <g stroke="white" stroke-width="0.5" opacity="0.2"> <circle cx="100" cy="100" r="70" fill="none"></circle> <circle cx="100" cy="100" r="55" fill="none"></circle> <line x1="30" y1="100" x2="170" y2="100"></line> <line x1="100" y1="30" x2="100" y2="170"></line> <line x1="45" y1="45" x2="155" y2="155"></line> <line x1="45" y1="155" x2="155" y2="45"></line> </g> <!-- Dynamic Lightning Elements --> <!-- Central Bitcoin Symbol with Shadow --> <text x="102" y="134" font-family="Arial, sans-serif" font-size="85" font-weight="bold" fill="rgba(0,0,0,0.2)" text-anchor="middle">₿</text> <text x="100" y="128" font-family="Arial, sans-serif" font-size="85" font-weight="bold" fill="white" text-anchor="middle">₿</text> <!-- Circular Text --> <path id="circle-text-path" d="M100,25 A75,75 0 1,1 99.9,25" fill="none"></path> <text fill="white" font-size="16" font-family="Arial Black, sans-serif" letter-spacing="2"> <textPath href="#circle-text-path" startOffset="5%"> PAY IN BITCOIN</textPath> </text> <!-- Decorative Elements --> <g fill="white" opacity="0.8"> <circle cx="100" cy="30" r="2"></circle> <circle cx="100" cy="170" r="2"></circle> <circle cx="30" cy="100" r="2"></circle> <circle cx="170" cy="100" r="2"></circle> </g> <!-- Subtle Inner Ring --> <circle cx="100" cy="100" r="65" fill="none" stroke="white" stroke-width="0.5" opacity="0.3"></circle> </svg>`;
}, "/home/francis/Scrivania/blog-template/src/components/icons/Shape.astro", void 0);

const $$Astro = createAstro("https://payinbitcoin.org/");
const $$TitlePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitlePage;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-start items-center gap-2 title"> ${renderComponent($$result, "Shape", $$Shape, {})} ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate`${title}` })} </div>`;
}, "/home/francis/Scrivania/blog-template/src/components/TitlePage.astro", void 0);

export { $$TitlePage as $ };
