const id = "Peer-to-peer-P2P.mdx";
						const collection = "blog";
						const slug = "peer-to-peer-p2p";
						const body = "\nPer conoscere il significato di peer-to-peer è importante passare per il concetto di uguaglianza, applicata i nodi di una rete qualsiasi. Rispetto al più usuale modello gerarchico client-server: qui i server forniscono i servizi e i client li \"consumano\", all'interno di una rete peer-to-peer ogni nodo è simultaneamente fornitore e consumatore di risorse. È un'architettura orizzontale che garantisce intanto maggiore resilienza, poiché l'eventuale disconnessione di alcuni nodi non compromette il funzionamento dell'intera rete, e allo stesso tempo maggiore scalabilità, dato che ogni nuovo peer aggiunge contemporaneamente capacità di servizio e di consumo al network.\n\n> Un esempio di protocollo p2p è [BitTorrent](https://it.wikipedia.org/wiki/BitTorrent 'BitTorrent')\n";
						const data = {title:"Peer-to-peer (P2P)",description:"Peer-to-peer (P2P)",pubDate:new Date(1730502000000),heroImage:
						new Proxy({"src":"/_astro/peer-to-peer.B6sTZDMM.svg","width":800,"height":600,"format":"svg","fsPath":"/home/francis/Scrivania/blog-template/src/assets/images/peer-to-peer.svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/francis/Scrivania/blog-template/src/assets/images/peer-to-peer.svg";
							}
							
							return target[name];
						}
					})
					,category:"Iniziare",tags:["p2p"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/francis/Scrivania/blog-template/src/content/blog/Peer-to-peer-P2P.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
