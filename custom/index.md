# カスタマイズ

Slidevは、スタイリングからツールの設定まで、フルカスタマイズが可能です。Slidevの配下にあるツール（[Vite](/custom/config-vite)、[Windi CSS](/custom/config-windicss)、 [Monaco](/custom/config-monaco)など）を設定することが可能です。

## フロントマターの設定

最初のスライドのフロントマターで、Slidevの設定をすることができます。以下に各オプションのデフォルト値を示しています。

```yaml
---
# テーマのIDもしくはパッケージ名
theme: 'default'
# スライドのタイトル 指定されていない場合、最初のヘッダーから自動的に推測されます。
title: ''
# webページのタイトルテンプレート `%s`は各ページのタイトルで置き換えられます。
titleTemplate: '%s - Slidev'

# SPAビルドにおけるPDFダウンロードを有効化します。カスタムURLを使用することも可能です。 
download: true
# シンタックスハイライト 'prism'か'shiki'が選択可能です。
highlighter: 'prism'
# コードブロックに行番号を表示します。
lineNumbers: false
# Monacoエディタを有効化します。デフォルトでは開発環境のみ有効です。
monaco: 'dev'

# スライドのカラースキーマを変更します。'auto'、'light'または'dark'を指定可能です。
colorSchema: 'auto'
# vue-routerのためのrouterModeを指定します。"history"または"hash"が指定可能です。
routerMode: 'history'
# スライドのアスペクト比を指定します。
aspectRatio: '16/9'
# canvasの実際の横幅を指定します。単位はpxです。
canvasWidth: 980

# フォントはGoogle Fontsから自動的にimportされます。
# 詳細: https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# デフォルトのフロントマターはすべてのスライドに適用されます。
defaults:
  layout: 'default'
  # ...

# スライドの情報をMarkdownで記述することができます。
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
---
```

より詳しいオプションは[type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts)を参照してください。

## ディレクトリ構造

Slidevはディレクトリ構造の規約を利用して、設定を最小化し、機能の拡張を柔軟かつ直感的に行えるようにしています。

[ディレクトリ構造](/custom/directory-structure)のセクションを参照してください。

## ツールを設定する

- [ハイライター](/custom/highlighters)
- [Vueの設定](/custom/config-vue)
- [Viteの設定](/custom/config-vite)
- [Windi CSSの設定](/custom/config-windicss)
- [Monacoの設定](/custom/config-monaco)
- [KaTeXの設定](/custom/config-katex)
- [Mermaidの設定](/custom/config-mermaid)
