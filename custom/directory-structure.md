# ディレクトリ構造

Slidevは設定面を最小化し、機能拡張を柔軟かつ直感的に行うために、いくつかのディレクトリ構造の規約を採用しています。

基本的な構造は以下の通りです：

```bash
your-slidev/
  ├── components/       # カスタムコンポーネント
  ├── layouts/          # カスタムレイアウト
  ├── public/           # 静的アセット
  ├── setup/            # カスタムセットアップ/フック
  ├── styles/           # カスタムスタイル
  ├── index.html        # index.htmlへのインジェクション
  ├── slides.md         # メインスライド
  └── vite.config.ts   # 拡張されたviteの設定
```

すべてオプションです。

## コンポーネント

規約： `./components/*.{vue,js,ts,jsx,tsx,md}`

このディレクトリ内のコンポーネントは、ファイル名と同じコンポーネント名で、スライドのMarkdownで直接使用することができます。

例：

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# My Slide

<MyComponent :count="4"/>

<!-- both namings work -->

<hello-world foo="bar">
  Slot
</hello-world>
```

この機能は[`vite-plugin-components`](https://github.com/antfu/vite-plugin-components)によって提供されています。詳細はこちらを参照してください。

またSlidevはいくつかの[built-in components](/builtin/components)を提供していますので、それを利用することもできます。

## レイアウト

規約： `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

レイアウトには任意のファイル名を使用することができます。そしてファイル名を使用して、YAMLヘッダでレイアウトを参照します。

```yaml
---
layout: my-cool-theme
---
```

作成したレイアウトがビルトインのレイアウトやテーマと同じ名前の場合、カスタムレイアウトがビルトイン/テーマレイアウトより優先されます。優先順位は`ローカル > テーマ > ビルトイン`の順です。

レイアウトコンポーネントでは、スライドのコンテンツに対して`<slot />`を使用します。例：

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## 静的アセット

規約： `./public/*`

このディレクトリに配置されているアセットは、開発中はルートパス`/`で提供され、そのままdistディレクトリのルートにコピーされます。詳細は[Vite's `public` directory](https://vitejs.dev/guide/assets.html#the-public-directory)を参照してください。

## スタイル

規約： `./style.css` | `./styles/index.{css,js,ts}`

この規約に従って配置されたファイルは、Appのルートに注入されます。複数のCSSをインポートする必要がある場合は、以下のような構造を作成し、インポートの順序を自分で管理することができます。

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

スタイルは[Windi CSS](http://windicss.org/)と[PostCSS](https://postcss.org/)で処理されるため、CSSのネストや[at-directives](https://windicss.org/features/directives.html)をそのまま使用することができます。例：

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[シンタックスについて詳しく学ぶ](https://windicss.org/features/directives.html)

## `index.html`

規約： `index.html`

`index.html`はメインの`index.html`にmeteタグやscriptを注入する機能を提供します。

例えば、次のようなカスタム`index.html`の場合：

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

最終的にホストされる`index.html`は次のようになります。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## グローバルレイヤー

規約： `global-top.vue` | `global-bottom.vue`

詳細： [グローバルレイヤー](/custom/global-layers)

