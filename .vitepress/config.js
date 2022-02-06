// @ts-check

const Guide = [
  {
    text: 'なぜSlidevを使うのか',
    link: '/guide/why',
  },
  {
    text: 'はじめに',
    link: '/guide/',
  },
  {
    text: 'インストール',
    link: '/guide/install',
  },
  {
    text: 'Markdownシンタックス',
    link: '/guide/syntax',
  },
  {
    text: 'ナビゲーション',
    link: '/guide/navigation',
  },
  {
    text: 'アニメーション',
    link: '/guide/animations',
  },
  {
    text: 'エクスポート',
    link: '/guide/exporting',
  },
  {
    text: '静的ホスティング',
    link: '/guide/hosting',
  },
  {
    text: 'レコーディング',
    link: '/guide/recording',
  },
  {
    text: 'プレゼンターモード',
    link: '/guide/presenter-mode',
  },
  {
    text: '描画と注釈',
    link: '/guide/drawing',
  },
  {
    text: 'エディタサポート',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: 'テーマを使用する',
    link: '/themes/use',
  },
  {
    text: 'テーマギャラリー',
    link: '/themes/gallery',
  },
  {
    text: 'テーマを作成する',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'English',
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
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'カスタマイズ',
    link: '/custom/',
  },
  {
    text: 'ディレクトリ構造',
    link: '/custom/directory-structure',
  },
  {
    text: 'フォント',
    link: '/custom/fonts',
  },
  {
    text: 'シンタックスハイライト',
    link: '/custom/highlighters',
  },
  {
    text: 'Vueの設定',
    link: '/custom/config-vue',
  },
  {
    text: 'Viteの設定',
    link: '/custom/config-vite',
  },
  {
    text: 'Windi CSSの設定',
    link: '/custom/config-windicss',
  },
  {
    text: 'Monacoの設定',
    link: '/custom/config-monaco',
  },
  {
    text: 'KaTeXの設定',
    link: '/custom/config-katex',
  },
  {
    text: 'Mermaidの設定',
    link: '/custom/config-mermaid',
  },
  {
    text: 'ショートカットの設定',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vueグローバルコンテキスト',
    link: '/custom/vue-context',
  },
  {
    text: 'グローバルレイヤー',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'ショーケース',
    link: '/showcases',
  },
  {
    text: '学習リソース',
    link: '/resources/learning',
  },
  {
    text: 'キュレーションカバー',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'Guide',
    children: Guide,
  },
  {
    text: 'Themes',
    children: Theme,
  },
  {
    text: 'Customizations',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: [
      {
        text: 'コンポーネント',
        link: '/builtin/components',
      },
      {
        text: 'レイアウト',
        link: '/builtin/layouts',
      },
    ],
  },
]

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
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:en']
      }
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
        text: 'Theme',
        items: Theme,
      },
      {
        text: 'Customize',
        items: Customizations,
      },
      {
        text: 'Resources',
        items: Resources,
      },
      {
        text: 'English',
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
}
