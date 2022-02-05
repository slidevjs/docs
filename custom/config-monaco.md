# Monacoの設定

<Environment type="client" />

以下の内容で`./setup/monaco.ts`を作成します。

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // 設定するためには`monaco`を使用します
})
```

詳細は[configuring Monaco](https://github.com/Microsoft/monaco-editor)を参照してください。

## 使い方

スライドでMonacoを使用するには、コードスニペットに`{monaco}`を追加するだけです：

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

これを以下のように変更します

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## エクスポート

デフォルトでは、Monacoは`開発者`モードのみで動作します。エクスポートされたSPAでMonacoを使用したい場合は、フロントマターで設定してください：

```yaml
---
monaco: true # デフォルト "dev"
---
```

## 型の自動インストール

MonacoでTypeScriptを使用する場合、依存関係のある型は自動的にクライアントサイドにインストールされます。

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

上記の例では、`vue`と`@vueuse/core`はdependencies / devDependenciesとしてローカルにインストールされています。あとはSlidevが自動的にエディタに対応した型を作成します。

## テーマの設定

テーマはライトテーマ/ダークテーマをベースにSlidevで制御されています。テーマをカスタマイズしたい場合は、テーマのIDをsetup関数に指定します：

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

カスタムテーマを使用する場合には次のようにします：

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> Slidev用のテーマを作成する場合は、setup関数内で動的`import()`を使用すると、より良いtree-shakingとcode-splittingの結果を得ることができます。
