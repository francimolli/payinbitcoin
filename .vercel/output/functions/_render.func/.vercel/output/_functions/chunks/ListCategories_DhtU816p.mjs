import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from './astro/server_H2LVesOC.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, d as getCategories } from './BaseLayout_BJqM2-yA.mjs';
import 'reading-time';
import './_astro_content_DKscRaPH.mjs';

function sluglify(text) {
  return text.replace(/\s+/g, "-");
}
function unsluglify(text) {
  return text.replace(/-/g, " ");
}

const $$Astro$1 = createAstro("https://payinbitcoin.org/");
const $$Category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Category;
  const { name = "Vedi tutte", activeCategory } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const unsluglifyNameCategory = sluglify(name.toLowerCase());
  const isActive = activeCategory?.toLocaleLowerCase() === unsluglifyNameCategory || currentPath === "/" && name === "Vedi tutte";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(name === "Vedi tutte" ? "/" : sluglify(`/category/${unsluglifyNameCategory}/1`), "href")}${addAttribute(cn(
    `text-gray-600 dark:text-gray-300  pb-2.5 first-letter:uppercase font-medium hover:text-gray-800 border-b-2 border-opacity-0 dark:border-opacity-0 border-black dark:border-white dark:hover:border-white hover:border-opacity-100 transition-colors duration-150 ease-linear  `,
    isActive && `border-black border-b-2 text-black z-10  dark:border-white dark:text-white dark:border-opacity-100 border-opacity-100`
  ), "class")}> ${name} </a>`;
}, "/home/francis/Scrivania/blog-template/src/components/Category.astro", void 0);

const $$Astro = createAstro("https://payinbitcoin.org/");
const $$ListCategories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListCategories;
  const categories = await getCategories();
  const { activeCategory } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-wrap min-w-full gap-5"> ${renderComponent($$result, "Category", $$Category, {})} ${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "name": category, "activeCategory": activeCategory })}`)} <div class="hidden sm:block absolute w-full bottom-0 border-b-2 -z-40 dark:border-gray-600"></div> </div>`;
}, "/home/francis/Scrivania/blog-template/src/components/ListCategories.astro", void 0);

export { $$ListCategories as $, sluglify as s, unsluglify as u };
