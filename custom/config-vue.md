# Vueの設定

<Environment type="client" />

Slidevはクライアントサイドでアプリケーションをレンダリングするために[Vue 3](https://v3.ja.vuejs.org/)を使用しています。カスタムプラグインや設定を追加することで、アプリケーションを拡張することができます。

以下の内容で`./setup/main.ts`を作成します：

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

これはSlidevアプリのメインエントランスとしても使用することができ、アプリ起動前にいくつかの初期化を行うことができます。

詳細： [アプリケーションAPI](https://v3.ja.vuejs.org/api/application-api.html#component)
