# Markdownシンタックス

スライドは **一つのマークダウンファイル** (デフォルト： `./slides.md`) の中に記述されます。 

[Markdownの機能](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)は通常通り使用することができ、インラインHTMLとVueコンポーネントが追加でサポートされています。[Windi CSS](https://windicss.org)を使ったスタイリングもサポートされています。スライドを区切るには改行で囲まれた`---`を使用してください。 

~~~md
# Slidev

Hello, World!

---

# ページ 2

コードブロックを直接使用してハイライト表示する

//```ts
console.log('Hello, World!')
//```

---

# ページ 3

Windi CSSとVueコンポーネントを直接使用して、スライドをスタイリングし、リッチにすることができます。

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## フロントマター & レイアウト

スライドのセパレータを[フロントマターブロック](https://jekyllrb.com/docs/front-matter/)に変換して、各スライドのレイアウトやその他のメタデータを指定します。各フロントマターはトリプルダッシュで始まり、トリプルダッシュで終わります。その間にあるテキストは[YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/)形式のデータオブジェクトになります。例：

~~~md
---
layout: cover
---

# Slidev

これはカバーページです。

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# ページ 2

これはレイアウト`center`とバックグラウンドイメージが指定されたページです。

---

# ページ 3

これはいかなる追加のメタデータもない、デフォルトのページです。
~~~

詳細は[カスタマイズ](/custom/)を参照してください。

## コードブロック

Slidevを構築した大きな理由の1つは、自分のコードをスライド上で正しく見せる必要があるためです。SlidevではMarkdownフレーバーなコードブロックを使って、期待通りコードをハイライトすることができます。

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

Slidevはシンタックスハイライターとして[Prism](http://prismjs.com)と[Shiki](https://github.com/shiki/shiki)をサポートしています。詳細は[コードハイライト](/custom/highlighters)を参照してください。

### 行のハイライト

特定の行をハイライトするためには、ブラケット`{}`の中に単純に行番号を追加するだけです。行番号のカウントは1から始まります。

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

ハイライトを複数ステップに分けて変更するには、`|`を使用して行番号を分割してください。例：

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

このサンプルでは、はじめに`a: Ref<number> | number`と`b: Ref<number> | number`を、次にクリックがされた後に`return computed(() => unref(a) + unref(b))`を、最後にコードブロック全体をハイライトします。詳細は[クリックアニメーションガイド](/guide/animations)を参照してください。

### Monacoエディタ

プレゼンテーション中になんらかの変更を加えたいときは、言語名の後ろに`{monaco}`を追加するだけで、ブロックが完全なMonacoエディタに切り替わります！

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

詳細は[Monacoの設定](/custom/config-monaco)を参照してください。

## 埋め込みスタイル

Markdownで直接`<style>`タグを使用すると、**現在のスライド**のスタイルをオーバーライドすることができます。

```md
# このページはRed

<style>
h1 {
  color: red
}
</style>

---

# 次のスライドには適用されない
```

Markdown内の`<style>`タグは常に[scoped](https://vue-loader.vuejs.org/guide/scoped-css.html)です。グローバルにスタイルをオーバーライドする場合は、[カスタマイズセクション](/custom/directory-structure#style)を参照してください。

[Windi CSS](https://windicss.org)を搭載しているため、 ネストしたCSSや[directives](https://windicss.org/features/directives.html) (e.g. `@apply`)を直接利用することができます。

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## 静的アセット

Markdownで書くのと同じように、リモートまたはローカルのURLを指定して画像を使用することができます。

リモートのアセットについては、ビルトインの[`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets)が初回実行時にディスクにキャッシュするため、あとで大きなサイズの画像を読み込み場合でもすぐに読み込むことができます。

```md
![リモートの画像](https://sli.dev/favicon.png)
```

ローカルのアセットについては、[`public`フォルダ](/custom/directory-structure.html#public)に格納し、**頭にスラッシュ**をつけて参照します。

```md
![ローカルの画像](/pic.png)
```

カスタムサイズやスタイルを適用したい場合は、`<img>`タグに変換することもできます。

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## ノート

各スライドにメモを取ることもできます。メモは[プレゼンターモード](/guide/presenter-mode)に表示され、プレゼンテーションの際に参照することができます。

Markdownでは、各スライドの最後のコメントブロックはノートとして扱われます。

~~~md
---
layout: cover
---

# ページ 1

これはカバーページです。

<!-- これはノートです -->

---

# ページ 2

<!-- これは、スライドの内容より前にあるため、ノートではありません。 -->

2ページ目

<!--
これもまたノートです
-->
~~~

## アイコン

Slidevを使用すると、Markdownの中でほとんどすべての人気のあるオープンソースのアイコンセットに**直接**アクセスすることができます。[`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons)と[Iconify](https://iconify.design/)によって提供されています。

命名は[Iconify](https://iconify.design/)の`{collection-name}-{icon-name}`の形式に従います。例：

- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos)
- その他にも。..

利用可能なすべてのアイコンは[Icônes](https://icones.js.org/)で閲覧・検索できます。

### アイコンのスタイリング

他のHTML同様にアイコンをスタイルすることができます。例：

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## スロット

> v0.18から使用可能です

[名前付きスロット](https://v3.ja.vuejs.org/guide/component-slots.html#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%8F%E3%82%99%E3%83%83%E3%82%AF%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84)を使用して、複数のコントリビュートポイントを提供できるレイアウトもあります。

例えば、[`two-cols`レイアウト](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue)では、左 (`default`スロット）と右 (`right` スロット）の2つのカラムを並べることができるようになります。

```md
---
layout: two-cols
---

<template v-slot:default>

# 左

これは左側に表示されます。

</template>
<template v-slot:right>

# 右

これは右側に表示されます。

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>左</h3>
<p>これは左側に表示されます。</p>
</div>
<div>
<h3>右</h3>
<p>これは右側に表示されます。</p>
</div>
</div>

またスロット名のショートハンドシンタックスシュガー`::name::`も用意されています。次の例は前に示した例と全く同じように動作します。

```md
---
layout: two-cols
---

# 左

これは左側に表示されます。

::right::

# 右

これは右側に表示されます。
```

またデフォルトのスロットを明示的に指定し、カスタムオーダーで提供することも可能です。

```md
---
layout: two-cols
---

::right::

# 右

これは右側に表示されます。

::default::

# 左

これは左側に表示されます。
```

## 設定

必要な設定はすべてMarkdownファイルで定義することができます。 例：

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

これはカバーページです。
```

詳細は[フロントマターの設定](/custom/#frontmatter-configures)を参照してください。

## LaTeX

Slidevは[KaTeX](https://katex.org/)によってLaTeXをサポートしています。

<Tweet id="1392246507793915904" />

### インライン

インラインで表示する場合は、LaTeXの両側を1つの`$`で囲います。

```md
$\sqrt{3x-1}+(1+x)^2$
```

### ブロック

ブロックで表示するには、2つの (`$$`)を使います。このモードではより大きな記号を使用し、結果を中央に配置します。

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

詳細： [デモ](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

## 図形

[Mermaid](https://mermaid-js.github.io/mermaid)を利用して、Markdownのテキスト記述から図 / グラフを作成することも可能です。

`mermaid`として指定されたコードブロックは図形に変換されます。 例：

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
//```
~~~

さらにオプションオブジェクトを渡すことで、スケーリングやテーマを指定することができます。オブジェクトのシンタックスはJavaScriptのオブジェクトリテラルで、文字列には引用符（`'`)を、キーの間には（`,`)を追加する必要があります。

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

詳細： [デモ](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## マルチプルエントリー

> v0.15から使用可能です

slides.md`を複数のファイルに分割して、好きなように整理することができます。

`slides.md` :

```md
# ページ 1

これは通常のページです。

---
src: ./subpage2.md
---

<!-- このページは'./subpage2.md'から読み込まれます -->
インラインコンテンツは無視されます
```

`subpage2.md` :

```md
# ページ 2

このページは別のファイルのものです
```

### フロントマターのマージ

フロントマターはメインのエントリーと外部のMarkdownページの両方から指定することができます。もし同じキーがある場合は、**メインエントリに記載されている内容がより優先度が高くなります**。例：

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# カバー

カバーページ
```

以下のページと同じように評価されます：

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# カバー

カバーページ
```

### ページの再利用

マルチエントリーにより、ページの再利用が用意になります。例：

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# reuse
src: ./content.md
---
```
