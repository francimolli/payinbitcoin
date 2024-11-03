import { _ as __astro_tag_component__, F as Fragment, d as createVNode } from './astro/server_H2LVesOC.mjs';
import { $ as $$Image } from './_astro_assets_CKu4AG-g.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/peer-to-peer.svg",
  "category": "Iniziare",
  "description": "Peer-to-peer (P2P)",
  "pubDate": "2024-11-01T23:00:00.000Z",
  "tags": ["p2p"],
  "title": "Peer-to-peer (P2P)",
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
    children: [createVNode(_components.p, {
      children: "Per conoscere il significato di peer-to-peer \xE8 importante passare per il concetto di uguaglianza, applicata i nodi di una rete qualsiasi. Rispetto al pi\xF9 usuale modello gerarchico client-server: qui i server forniscono i servizi e i client li \u201Cconsumano\u201D, all\u2019interno di una rete peer-to-peer ogni nodo \xE8 simultaneamente fornitore e consumatore di risorse. \xC8 un\u2019architettura orizzontale che garantisce intanto maggiore resilienza, poich\xE9 l\u2019eventuale disconnessione di alcuni nodi non compromette il funzionamento dell\u2019intera rete, e allo stesso tempo maggiore scalabilit\xE0, dato che ogni nuovo peer aggiunge contemporaneamente capacit\xE0 di servizio e di consumo al network."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Un esempio di protocollo p2p \xE8 ", createVNode(_components.a, {
          href: "https://it.wikipedia.org/wiki/BitTorrent",
          title: "BitTorrent",
          children: "BitTorrent"
        })]
      }), "\n"]
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
const url = "src/content/blog/Peer-to-peer-P2P.mdx";
const file = "/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
