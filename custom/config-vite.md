# Viteの設定

<Environment type="node" />

Slidevは[Vite](http://vitejs.dev/)を搭載しています。つまり、Viteの素晴らしいプラグインシステムを利用して、スライドをさらにカスタマイズすることができます。

`vite.config.ts`があれば、それが採用されます。

Slidevには以下のプラグインがあらかじめ設定されています：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

詳細は[pre-configurations here](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts)を参照してください。

## 内部プラグインの設定

> v0.21から使用可能です

上記のビルトインプラグインのリストを設定するために、以下の内容で`vite.config.ts`を作成します。Slidevはこれらのプラグインに対して、いくつかあらかじめ設定されたオプションを保持していることに注意してください。この使い方はそれらの設定を上書きし、アプリケーションが潜在的に壊れる原因になる可能性があります。これは**高度な機能**として扱い、何を行っているのかを確認してから次に進んでください。

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

その他のオプションについては[type declarations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50)を参照してください。
