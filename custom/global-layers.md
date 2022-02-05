# グローバルレイヤー

> v0.17から使用可能です

グローバルレイヤーを使用すると、スライド間で**永続的な**カスタムコンポーネントを持つことができます。これはフッター、スライドをまたぐアニメーション、グローバルエフェクトなどに便利です。

Slidevはこのために2つのレイヤーを提供しています。プロジェクトのルートに`global-top.vue`や`global-bottom.vue`を作成すると、自動的にピックアップされます。

レイヤーの関係性：

- グローバルトップ (`global-top.vue`)
- スライド
- グローバルボトム (`global-bottom.vue`)

## 例

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

`Your Name`という文字はすべてのスライドに表示されます。

条件付きで有効にするには、[Vueグローバルコンテキスト](/custom/vue-context)を使用して適用します。

```html
<!-- Page 4からフッターを隠します-->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- "cover"レイアウトからフッターを隠します -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- ページ用フッターの一例 -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```
