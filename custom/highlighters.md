# シンタックスハイライト

Slidevには2種類のシンタックスハイライトが付属しており、好みに合わせて選択できます：

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism**は最も人気のあるシンタックスハイライトの1つです。ハイライトはトークンクラスにコードを追加することで行われ、CSSによって色付けされます。[オフィシャルテーマ](https://github.com/PrismJS/prism-themes)を確認したり、[`prism-theme-vars`](https://github.com/antfu/prism-theme-vars)を使用して簡単にテーマを作成/カスタマイズすることができます。

一方で**Shiki**はTextMateの文法に対応したシンタックスハイライトです。色付きのトークンを生成するため、追加のCSSは必要ありません。充実した文法サポートにより、生成された色はVS Codeで見るのと同じように非常に正確です。またShikiには[多くのビルトインテーマ](https://github.com/shikijs/shiki/blob/master/docs/themes.md)が付属しています。Shikiの欠点は、ハイライトを行うためにTextMateのテーマ（VS Codeのテーマと互換性あり）も必要で、カスタマイズが少し難しくなることです。

Slidevのテーマは通常PrismとShikiの双方をサポートしていますが、使用するテーマによっては、どちらか一方しかサポートしていない場合があります。

選択肢がある場合、基本的にトレードオフです：

- **Prism**はカスタマイズが容易です。
- **Shiki**はより正確にハイライトできます。

デフォルトでは、SlidevはPrismを使用します。フロントマターを修正することで、この設定を変更できます：

```yaml
---
highlighter: shiki
---
```

## Prismの設定

Prismを設定する場合には、テーマのCSSをインポートするか、[`prism-theme-vars`](https://github.com/antfu/prism-theme-vars)を使用してテーマを設定することで、ライトモードとダークモードの両方のテーマを設定することができます。詳しくはドキュメントを参照してください。

## Shikiの設定

<Environment type="node" />

以下の内容で`./setup/shiki.ts`ファイルを作成します。

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

利用可能なテーマの名前については、[Shikiのドキュメント](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes)を参照してください。

自身のテーマを使用したい場合は次のようにします：

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```
