# ショートカットの設定

> v0.20から使用可能です

<Environment type="client" />

以下の内容で`./setup/shortcuts.ts`を作成します：

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

セットアップによって、[ナビゲーション](/guide/navigation#navigation-bar)で言及されているショートカットに対して、カスタム設定を使用することができます。上記の設定により、次のアニメーションやスライドへの移動は<kbd>enter</kbd>に、前のアニメーションやスライドへの移動は<kbd>backspace</kbd>に割り当てられます。

設定用の関数は、いくつかのナビゲーションメソッドを持つオブジェクトを受け取り、いくつかのショートカット設定を含む配列を返します。詳細については型定義を参照してください。

キーが押されたときのイベントについての詳細は、[useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/)を参照してください。
