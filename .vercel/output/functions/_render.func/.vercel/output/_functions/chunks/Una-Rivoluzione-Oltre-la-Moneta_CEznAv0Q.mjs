import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from './astro/server_H2LVesOC.mjs';
import { $ as $$Image } from './_astro_assets_CKu4AG-g.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/logo.svg",
  "category": "Iniziare",
  "description": "Una rivoluzione oltre la moneta",
  "pubDate": "2024-11-01T23:00:00.000Z",
  "draft": false,
  "tags": ["p2p", "open-source", "moneta"],
  "title": "Una rivoluzione oltre la moneta",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Bitcoin \xE8 un\u2019innovativa rete di pagamento e un nuovo tipo di denaro. [\u2026] la gestione delle transazioni e l\u2019emissione di bitcoin viene effettuata collettivamente dalla rete (peer-to-peer).\xA0Bitcoin \xE8 open-source; la sua progettazione \xE8 pubblica, nessuno possiede o controlla Bitcoin e\xA0ognuno pu\xF2 prendere parte al progetto. Attraverso alcune delle sue uniche propriet\xE0, Bitcoin permette utilizzi entusiasmanti che non potrebbero essere coperti da nessun altro sistema di pagamento precedente."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["[Fonte ", createVNode(_components.a, {
        href: "https://bitcoin.org",
        title: "Bitcoin.org",
        children: "bitcoin.org"
      }), "]"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx";
const file = "/home/francis/Scrivania/blog-template/src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/francis/Scrivania/blog-template/src/content/blog/Una-Rivoluzione-Oltre-la-Moneta.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
