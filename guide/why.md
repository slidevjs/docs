# なぜSlidevを使うのか

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)や[Apple Keynote](https://www.apple.com/keynote/)など、機能豊富で汎用的なWYSIWYGのスライド作成ツールがたくさんあります。これらは非常に直感的で簡単に学ぶことができる一方で、アニメーションやチャート、その他の多くの機能を使った素晴らしいスライドを作成するのに非常によく機能します。では、なぜわざわざSlidevを作ったのでしょうか？

Slidevの目的は、開発者が既に慣れ親しんでいるツールや技術を使って、プレゼンテーションをさらに面白く、表現力豊かに、そして魅力的にするための柔軟性と対話性を提供することです。

WYSIWYGエディタで作業していると、スタイリングオプションに気を取られがちです。Slidevはコンテンツとビジュアルを分離することでそれを改善します。これによって、一度に1つのことに集中できるようになり、同時にコミュニティのテーマを再利用できるようになります。Slidevは他のスライドデッキビルダーに完全に取って代わろうとはしていません。むしろ、開発者コミュニティに応えることに重点をおいています。

## Slidev

![](/screenshots/cover.png)

ここでは、いくつかのSlidevのクールな機能を紹介します：

## Markdownベース

Slidevは拡張されたMarkdown形式を使用して、スライドを単一のプレーンテキストファイルに保存し、整理します。これにより、コンテンツの作成に集中することができます。またコンテンツとスタイルが分離されているので、異なるテーマに楽に切り替えることが可能です。

詳しくは[SlidevのMarkdownシンタックス](/guide/syntax)を参照してください。

## テーマブル

Slidevのテーマは、npmパッケージを使用して共有とインストールができます。そして1行設定するだけでテーマを適用することができます。

[テーマギャラリー](/themes/gallery)や[テーマの書き方を学ぶ](/themes/write-a-theme)をチェックしてみてください。

## デベロッパーフレンドリー

Slidevは開発者のためにコード巣にペットのファーストクラスのサポートを提供します。[Prism](https://prismjs.com/)と[Shiki](https://github.com/shikijs/shiki)の両方をサポートし、ピクセルパーフェクトなシンタックスハイライトを実現しつつ、いつでもコードを修正することができます。[Monaco editor](https://microsoft.github.io/monaco-editor/) を内蔵し、オートコンプリート、タイプホバーリング、TypeScriptの型チェックサポートにより、プレゼンテーションでのライブコーディングやデモも可能になります。

詳しくは[ハイライター](/custom/highlighters)と[Monacoの設定](/custom/config-monaco)を参照してください。

## 高速

Slidevは[Vite](https://vitejs.dev/)、[Vue 3](https://v3.vuejs.org/)、そして[Windi CSS](https://windicss.org/)を利用しており、もっとも素晴らしいオーサリング体験を提供しています。あなたが行ったすべての変更は、**即時に**あなたのスライドに反映されます。

詳しくは[技術スタック](/guide/#tech-stack)をご覧ください。

## インタラクティブ & エクスプレッシブ

Markdownファイルの中に直接Vueのカスタムコンポーネントを記述することができます。また、プレゼンテーションの中でそれらとやりとりすることで、より面白く、より直感的にアイデアを表現することができます。

## レコーディングサポート

Slidevはビルトインのレコーディング機能とカメラービューを提供します。カメラービューを含めたプレゼンテーションを共有したり、画面とカメラで別々に録画・保存することも可能です。すべてSlidevだけで完結しており、追加のツールは必要ありません。

詳しくは[レコーディング](/guide/recording)を参照してください。

## ポータブル

コマンド1つでスライドをPDF、PNG、あるいはホスティング可能なSPAとしてエクスポートでき、どこへでも共有することができます。

詳しくは[エクスポート](/guide/exporting)を参照してください。

## ハッカブル

Web技術を使用していることにより、WebアプリでできることはSlidevでも実現可能です。例えば、WebGL、APIリクエスト、iframe、あるいはライブシェアリングなどが利用可能です。あなたの想像力次第でなんでもできます！

## 試してみる

百聞は一件にしかずということで、実際にSlidevを使ってみましょう。 コマンドを実行：

```bash
$ npm init slidev
```

またはプレビュー:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
