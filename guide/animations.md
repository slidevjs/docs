# アニメーション

## クリックアニメーション

### `v-click`

要素に対して"クリックアニメーション"を適用するには、`v-click`ディレクティブか`<v-click>`コンポーネントを使用することができます。

```md
# Hello

<!-- コンポーネントの使用方法: "次へ"を押すまで、ここから下の内容は表示されません -->
<v-click>

Hello World

</v-click>

<!-- ディレクティブの使用方法: 2回目の"次へ"を押すまで、ここから下の内容は表示されません -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

`v-after`は`v-click`に似ていますが、直前の`v-click`がトリガーされたときに要素を可視化します。

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

"次へ"ボタンを押した時に、`Hello`と`World`の両方が一緒に表示されます。 

### `v-click-hide`

`v-click`と同じですが、要素を表示するのではなく、クリックした後に要素を非表示にします。

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks`はコンポーネントとしてのみ提供されています。これは`v-click`ディレクティブをそのすべての子要素に適用するためのショートハンドです。特にリストを扱う場合に便利です。

```md
<v-clicks>

- 項目 1
- 項目 2
- 項目 3
- 項目 4

</v-clicks>
```

"次へ"をクリックするたびに、項目が表示されるようになります。

### カスタムクリックカウント

デフォルトでは、Slidevは次のスライドに行く前に必要なステップ数をカウントします。`clicks`というフロントマターオプションを記述することで、この設定をオーバーライドできます。

```yaml
---
# このスライドでは、次のスライドに行くまでに10回クリックする
clicks: 10
---
```

### 並び替え

ディレクティブにクリックインデックスを渡すことで、公開する順番をカスタマイズすることができます。

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- 順番が逆転する -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- 3回クリックした後に見えるようになる -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### 要素のトランジション

要素に`v-click`ディレクティブを適用すると、`slidev-vclick-target`というクラス名が付与されます。要素が非表示になった場合、クラス名`slidev-vclick-hidden`が付与されます。例：

```html
<div class="slidev-vclick-target slidev-vclick-hidden">テキスト</div>
```

クリックすると、以下のようになります

```html
<div class="slidev-vclick-target">テキスト</div>
```

デフォルトでは、これらのクラスにはわずかな透明度のトランジションが適用されます。

```css
// デフォルト

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

トランジション効果をカスタマイズするために、カスタムスタイルシートでそれらをオーバーライドすることができます。

例えば、スケールアップのトランジションは次のようにして実現することができます：

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

特定のスライドもしくはレイアウトにのみアニメーションを適用する場合

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

詳細は[スタイルのカスタマイズ](/custom/directory-structure#style)を参照してください。

## モーション

Slidevは[@vueuse/motion](https://motion.vueuse.org/)を内蔵しています。任意の要素にモーションを適用するために`v-motion`ディレクティブを使用することができます。例：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

`Slidev`というテキストは初期化時に`-80px`から元の位置へ移動します。

> 注: Slidevはパフォーマンスのために次のスライドをプリロードします、つまり、ページに遷移する前にアニメーションが始まる可能性があります。正しく動作させるために、特定のスライドに対してプリロードを無効にすることができます。
>
> ```md
> ---
> preload: false
> ---
> ```
>
> もしくは要素のライフサイクルを`v-if`で制御することで、きめ細やかな制御を行うこともできます。
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

詳細: [デモ](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## ページのトランジション

> 現在のバージョンでは、スライドのビルトインサポートはまだ提供されていません。次のメジャーバージョンでサポートする予定です。それまでは、カスタムスタイルやライブラリを使ってスライドを作成することができます。
