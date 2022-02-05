# Vueグローバルコンテキスト

Slidevは高度な条件やナビゲーションのコントロールのために、[グローバルVueコンテキスト](https://v3.ja.vuejs.org/api/application-config.html#globalproperties) `$slidev`を注入しています。

## 使い方

MarkdownやVueテンプレートのどこでも、["Mustache"タグ](https://v3.ja.vuejs.org/guide/template-syntax.html)を使ってアクセスできます。

```md
<!-- slides.md -->

# Page 1

Current page is: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>
```

## プロパティ

### `$slidev.nav`

スライドナビゲーションのプロパティとコントロールを保持するリアクティブオブジェクトです。 例：

```js
$slidev.nav.next() // go next step

$slidev.nav.nextSlide() // go next slide (skip v-clicks)

$slidev.nav.go(10) // go slide #10
```

```js
$slidev.nav.currentPage // current slide number

$slidev.nav.currentLayout // current layout id

$slidev.nav.clicks // current clicks count
```

利用できるプロパティの詳細については、[nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts)のエクスポートを参照してください。

### `$slidev.configs`

`slides.md`の[フロントマターの設定](/custom/#フロントマターの設定)をパースしたものを保持するリアクティブオブジェクトです。 例：

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs`

テーマの設定をパースしたものを保持するリアクティブオブジェクトです。

```yaml
---
title: My First Slidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```
