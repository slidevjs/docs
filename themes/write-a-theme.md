# テーマを作成する

最初のテーマを作成するために、ジェネレータを作成することを推奨します。

```bash
$ npm init slidev-theme
```

作成されたテーマを修正し、試すことができます。例として [公式テーマ](/themes/gallery)を参照することもできます。

## できること

テーマでは次のことができます：

- グローバルスタイル
- デフォルトの設定を指定する (フォント、 カラースキーマ、 ハイライト、など）
- カスタムレイアウトを指定する、もしくは既存のレイアウトを上書きする
- カスタムコンポーネントを指定する、もしくは既存のコンポーネントを上書きする
- Windi CSSの設定を拡張する
- MonacoやPrismのようなツールの設定をする

## 規約

テーマはnpmレジストリに公開され、以下の規約に従います。

- パッケージ名は`slidev-theme-`から始めます。例： `slidev-theme-awesome`
- `package.json`の`keywords`フィールドに、`slidev-theme`と`slidev`を追加します。

## セットアップ

テーマのテスト用プレイグラウンドをセットアップするには、以下のようなフロントマターで`example.md`を作成し、現在のディレクトリをテーマとして使用することをSlidevに伝えます。

```md
---
theme: ./
---
```

オプションで、いくつかのスクリプトを`package.json`に追加することもできます。

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

テーマを公開するには`npm publish`を実行すればOKです。ビルドプロセスは必要ありません（つまり、`.vue`と`.ts`ファイルを直接公開することができ、Slidevはスマートなのでそれらを読み込むことができます）。

テーマのコントリビューションポイントはローカルカスタマイズと同じ規約に従います。[命名規約についてはドキュメント](/custom/)を参照してください。

## デフォルトの設定

> v0.19から使用可能です

テーマでは`package.json`を介して、デフォルトの[設定](/custom/#フロントマターの設定)を指定できます。

```json
// package.json
{
  "slidev": {
    "default": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

フォントは[Googleフォント](https://fonts.google.com/)から自動でインポートされます。

詳細は[フォント](/custom/fonts)と[フロントマターの設定](/custom/#frontmatter-configures)を参照してください。

## メタデータ

### カラースキーマ

デフォルトでは、Slidevはライトモードとダークモードの両方をサポートするテーマを想定しています。もしデザインされたカラースキーマだけでテーマを表示したいなら、`package.json`で明示的に指定する必要があります。

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

テーマのスタイルを作成する際にダークモードにアクセスするには、ダークモード特有の設定を`dark`クラスで囲みます：

```css
/* 全体に適用されるCSS */

html:not(.dark) {
  /* ライトモードのCSS */
}

html.dark {
  /* ダークモードのCSS */
}
```

SLidevはカラースキーマを切り替えるために、ページの`html`要素の`dark`クラスを切り替えます。

### シンタックスハイライト

シンタックスハイライトの色もテーマで指定することができます。[Prism](https://prismjs.com/)と[Shiki](https://github.com/shikijs/shiki)の両方をサポートしています。詳細は[シンタックスハイライトについてのドキュメント](/custom/highlighters)を参照してください。

どちらかだけをサポートすることもできます。サンプルとして、デフォルトテーマを参照してください [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts) 

また`package.json`でサポートしているシンタックスハイライトを指定することを忘れないでください。

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "all"
  }
}
```

### Slidevのバージョン

テーマが新しく追加されたSlidevの機能に依存している場合は、テーマが正しく動作するのに必要な最小のSlidevのバージョンを指定する必要があります。

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

ユーザーが指定されたバージョンよりも古いSlidevを使用している場合、例外が発生します。
