# KaTeXの設定

<Environment type="node" />

以下の内容で`./setup/katex.ts`を作成します：

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

この設定により、[KaTex Options](https://katex.org/docs/options.html)のカスタム設定を提供することができます。詳細については、型の定義とドキュメントを参照してください。
