# Mermaidの設定

<Environment type="client" />

以下の内容で`./setup/mermaid.ts`を作成します：

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

セットアップにより、[Mermaid](https://mermaid-js.github.io/)のカスタムデフォルト設定を使用することができます。詳細については、型の定義とドキュメントを参照してください。
