// @ts-check

const Guide = [
	{
		text: 'Porque usar Slidev',
		link: '/guide/why',
	},
	{
		text: 'Começar',
		link: '/guide/',
	},
	{
		text: 'Instalar',
		link: '/guide/install',
	},
	{
		text: 'Sintaxe Markdown',
		link: '/guide/syntax',
	},
	{
		text: 'Navegação',
		link: '/guide/navigation',
	},
	{
		text: 'Animações',
		link: '/guide/animations',
	},
	{
		text: 'Exportar',
		link: '/guide/exporting',
	},
	{
		text: 'Gravar Apresentação',
		link: '/guide/recording',
	},
	{
		text: 'Modo de Apresentador',
		link: '/guide/presenter-mode',
	},
	{
		text: 'Integrações com Editores',
		link: '/guide/editors',
	},
	{
		text: 'Perquntas Frequentes',
		link: '/guide/faq',
	},
];

const Theme = [
	{
		text: 'Usar Modelo',
		link: '/themes/use',
	},
	{
		text: 'Galeria de Modelos',
		link: '/themes/gallery',
	},
	{
		text: 'Escrever um Modelo',
		link: '/themes/write-a-theme',
	},
];

const Translations = [
	{
		text: 'Português',
	},
	{
		text: '简体中文',
		link: 'https://cn.sli.dev{{pathname}}',
	},
	{
		text: 'Français',
		link: 'https://fr.sli.dev{{pathname}}',
	},
	{
		text: 'Español',
		link: 'https://es.sli.dev{{pathname}}',
	},
	{
		text: 'Русский',
		link: 'https://ru.sli.dev{{pathname}}',
	},
];

const Customizations = [
	{
		text: 'Personalizações',
		link: '/custom/',
	},
	{
		text: 'Estrutura de Pastas',
		link: '/custom/directory-structure',
	},
	{
		text: 'Fontes / Tipos de Letra',
		link: '/custom/fonts',
	},
	{
		text: 'Highlighters de Sintaxe',
		link: '/custom/highlighters',
	},
	{
		text: 'Configurar Vue',
		link: '/custom/config-vue',
	},
	{
		text: 'Configurar Vite',
		link: '/custom/config-vite',
	},
	{
		text: 'Configurar Windi CSS',
		link: '/custom/config-windicss',
	},
	{
		text: 'Configurar Monaco',
		link: '/custom/config-monaco',
	},
	{
		text: 'Configurar KaTeX',
		link: '/custom/config-katex',
	},
	{
		text: 'Configurar Mermaid',
		link: '/custom/config-mermaid',
	},
	{
		text: 'Configurar Atalhos',
		link: '/custom/config-shortcuts',
	},
	{
		text: 'Contexto Global - Vue',
		link: '/custom/vue-context',
	},
	{
		text: 'Camadas Globais',
		link: '/custom/global-layers',
	},
];

const Resources = [
	{
		text: 'Para Mostrar',
		link: '/showcases',
	},
	{
		text: 'Imagens de Capas',
		link: '/resources/covers',
	},
];

const slidebars = [
	{
		text: 'Guia',
		children: Guide,
	},
	{
		text: 'Modelos',
		children: Theme,
	},
	{
		text: 'Personalizações',
		children: Customizations,
	},
	{
		text: 'Integrado',
		children: [
			{
				text: 'Components',
				link: '/builtin/components',
			},
			{
				text: 'Layouts',
				link: '/builtin/layouts',
			},
		],
	},
];

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
	title: 'Slidev',
	description: 'Presentation slides for developers',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		['meta', { name: 'author', content: 'Anthony Fu' }],
		['meta', { property: 'og:title', content: 'Slidev' }],
		[
			'meta',
			{ property: 'og:image', content: 'https://sli.dev/og-image.png' },
		],
		[
			'meta',
			{
				property: 'og:description',
				content: 'Apresentações para desenvolvedores',
			},
		],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:creator', content: '@slidevjs' }],
		[
			'meta',
			{ name: 'twitter:image', content: 'https://sli.dev/og-image.png' },
		],
		['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
		[
			'link',
			{
				rel: 'preconnect',
				crossorigin: 'anonymous',
				href: 'https://fonts.gstatic.com',
			},
		],
		[
			'link',
			{
				href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600',
				rel: 'stylesheet',
			},
		],
	],
	themeConfig: {
		repo: 'slidevjs/docs',
		logo: '/logo.svg',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: 'Sugere alterações para esta página',

		nav: [
			{
				text: 'Guia',
				items: Guide,
			},
			{
				text: 'Modelo',
				items: Theme,
			},
			{
				text: 'Customize',
				items: Customizations,
			},
			{
				text: 'Recursos',
				items: Resources,
			},
			{
				text: 'Português',
				items: Translations,
			},
		],

		sidebar: {
			'/guide/': slidebars,
			'/themes/': slidebars,
			'/custom/': slidebars,
			'/builtin/': slidebars,
			'/resources/': slidebars,
			'/': slidebars,
		},
	},
};
