interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'spank',
	title: 'pay in bitcoin',
	description: 'un piccolo blog fatto su misura per creare una piccola comunità di bitcoiners',
	lang: 'it-IT',
	ogLocale: 'it_IT',
	shareMessage: 'orangpillare',
	paginationSize: 6 // Number of posts per page
}
