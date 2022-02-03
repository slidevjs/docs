# はじめに

## 概要

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> はWebベースのスライド作成およびプレゼンテーションツールです。開発者がMarkdownでコンテンツを書くことに集中しつつ、HTMLとVueコンポーネントを用いて、プレゼンテーションにインタラクティブなデモを埋め込んだピクセルパーフェクトなレイアウトとデザインを提供できるようにも設計されています。

機能豊富なマークダウンファイルを使用して、ライブコーディング、PDFエクスポート、プレゼンテーションのレコーディングのような、多くのビルトインインテグレーションとともに、瞬時に再読み込みが可能な美しいスライドを生成します。webで動くので、Slidevを使ってどんなことでもできます - 可能性は無限大です。

プロジェクトの論理的根拠については [なぜSlidevを使うのか](/guide/why) のセクションで詳しく説明しています。

### 機能

- 📝 [**Markdown-based**](/guide/syntax.html) - お気に入りのエディタとワークフローを使用
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - ビルトインのシンタックスハイライト、ライブコーディング、 etc
- 🎨 [**Themable**](/themes/gallery.html) - テーマはnpmパッケージで共有・利用が可能
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) オンデマンドユーティリティ、 使いやすい埋め込まれたスタイルシート
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - Vueコンポーネントをシームレスに埋め込み
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - 別のウィンドウ、スマートフォンでさえもスライドを操作
- 🎨 [**Drawing**](/guide/drawing.html) - スライドに描画し、注釈をつける
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - LaTeX数式のビルトインサポート
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - 説明ともにダイアグラムを作成 
- 🌟 [**Icons**](/guide/syntax.html#icons) - どんなアイコンセットからでも、直接アイコンにアクセス
- 💻 [**Editors**](/guide/editors.html) - 統合されたエディタ、もしくは [VS Code拡張機能](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - ビルトインのレコーディングとカメラビュー
- 📤 [**Portable**](/guide/exporting.html) - PDF、PNG、またはホスト可能なSPAにエクスポート
- ⚡️ [**Fast**](https://vitejs.dev) - [Vite](https://vitejs.dev) によって提供されたインスタントリロード
- 🛠 [**Hackable**](/custom/config-vite.html) - Viteプラグイン、 Vue components、 どんなnpmパッケージも使用可能

### 技術スタック

これらのツールや技術を組み合わせることで、Slidevは実現されています。

- [Vite](https://vitejs.dev) - 非常に高速なフロントエンドツール
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - 必要に応じてHTMLとVueコンポーネントを使いつつ、コンテンツに集中できます
- [Windi CSS](https://github.com/windicss/windicss) - オンデマンドなユーティリティファーストのCSSフレームワーク、 スライドを自在にスタイリング
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - ファーストクラスのコードスニペットサポートとライブコーディング機能
- [RecordRTC](https://recordrtc.org) - ビルトインのレコーディングとカメラビュー
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - アイコンセットコレクション
- [Drauu](https://github.com/antfu/drauu) - 描画とアノテーションのサポーと
- [KaTeX](https://katex.org/) - LaTeX数式のレンダリング
- [Mermaid](https://mermaid-js.github.io/mermaid) - テキストによる図解

### はじめてのプレゼンテーションを作成する

<br>

#### オンラインで試す

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### ローカルで作成する

NPMで作成：

```bash
$ npm init slidev
```

Yarnで作成：

```bash
$ yarn create slidev
```

プロンプトに従って、今すぐスライドを作り始めましょう！ Markdownシンタックスの詳細は、 [シンタックスガイド](/guide/syntax)を参照してください。

### コマンドラインインターフェース

Slidevがインストールされたプロジェクトでは、 npmスクリプトで `slidev` バイナリを使用することができます。

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

あるいは [`npx`](https://www.npmjs.com/package/npx) で使用することができます。

```bash
$ npx slidev
```

その他のオプションについては、 `slidev --help` を実行してください。

### Markdown シンタックス

Slidevはプロジェクトルートの配下にある `slides.md` を読み取り、スライドに変換します。 変更を加えると、 スライドのコンテンツに即時に反映されます。 例：

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

SlidevのMarkdownシンタックスについては [シンタックスガイド](/guide/syntax) を参照してください。
