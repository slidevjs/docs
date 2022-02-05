# Windi CSSの設定

<Environment type="node" />

Markdownは当然ですが、埋め込まれたHTMLマークアップをサポートしています。したがって、好きなようにコンテンツをスタイルすることができます。いくつかの利便性を提供するために、[Windi CSS](https://github.com/windicss/windicss)を内蔵し、クラスユーティリティを使用して、直接マークアップにスタイルを設定することができます。

例：

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Windi CSS v3.0](https://windicss.org/posts/v30.html)の[Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode)はデフォルトで有効になっています。

## 設定

Windi CSSを設定するために、以下の内容で`setup/windicss.ts`を作成し、ビルトインの設定を拡張します。

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// ビルトインのWindi CSSの設定を拡張する
export default defineWindiSetup(() => ({
  shortcuts: {
    // デフォルトの背景をカスタマイズします
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // フォントはここで置き換えることができますが、`index.html`のWebフォントのリンクの更新を忘れないようにしてください
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

詳細は[Windi CSS configurations](https://windicss.org/guide/configuration.html)を参照してください。
