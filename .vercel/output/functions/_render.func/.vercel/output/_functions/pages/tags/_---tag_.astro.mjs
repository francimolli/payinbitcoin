/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_H2LVesOC.mjs';
import 'kleur/colors';
import { a as getPostByTag, g as getTags, $ as $$BaseLayout } from '../../chunks/BaseLayout_BJqM2-yA.mjs';
import { $ as $$ListPosts } from '../../chunks/ListPosts_BocwIFXH.mjs';
import { $ as $$TitlePage } from '../../chunks/TitlePage_BTQWfaTf.mjs';
import 'clsx';
import 'reading-time';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://payinbitcoin.org/");
async function getStaticPaths() {
  const tags = await getTags();
  return tags.map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { tag } = Astro2.props;
  const posts = await getPostByTag(tag);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tag }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitlePage", $$TitlePage, { "title": tag })} ${renderComponent($$result2, "ListPosts", $$ListPosts, { "posts": posts })} ` })}`;
}, "/home/francis/Scrivania/blog-template/src/pages/tags/[...tag]/index.astro", void 0);

const $$file = "/home/francis/Scrivania/blog-template/src/pages/tags/[...tag]/index.astro";
const $$url = "/tags/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
