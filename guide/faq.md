# FAQ

## グリッド

SlidevはWebをベースにしているので、グリッドレイアウトを自由に適用することができます。[CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/)、[flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、あるいは[Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)で制御することができます。

また[Windi CSS](https://windicss.org/)が内蔵されているので、参考までにそれを使った簡単な方法を紹介します：

```html
<div class="grid grid-cols-2 gap-4">
<div>

最初のカラム

</div>
<div>

2番目のカラム

</div>
</div>
```

さらに、各カラムのサイズをカスタマイズすることも可能です。:

```html
<div class="grid grid-cols-[200px,1fr,10%] gap-4">
<div>

最初のカラム (200px)

</div>
<div>

2番目のカラム (自動調整)

</div>
<div>

3番目のカラム (親のコンテナに対して10%)

</div>
</div>
```

詳細は[Windi CSS Grids](https://windicss.org/utilities/grid.html)を参照してください。

## ポジショニング

スライドは固定サイズ（デフォルトは`980x552px`）で定義され、ユーザーのスクリーンに合わせて拡大・縮小されます。画面に合わせて拡大・縮小されるため、absolute positionを使用しても安全です。

例:

```html
<div class="absolute left-30px bottom-30px">
これは左下寄せのフッターです
</div>
```

キャンバスの実際の大きさを変更するには、最初のフロントマターで`canvasWidth`オプションを指定します。

```yaml
---
canvasWidth: 800
---
```

## フォントサイズ

スライドのフォントサイズが小さすぎると感じる場合、いくつかの方法で調整することができます:

### ローカルスタイルをオーバーライドする

インライン`<style>`タグで、各スライドごとのスタイルをオーバーライドすることができます。

```md
# ページ 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# ページ 2

ここには適用されません
```

詳細: [埋め込みスタイル](/guide/syntax.html#埋め込みスタイル)

### グローバルスタイルをオーバーライドする

カスタムグローバルスタイルを定義するには、次のように`./style.css`を作成します。

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

詳細: [グローバルスタイル](/custom/directory-structure.html#style)

### キャンバスの拡大・縮小

キャンバスの実寸を変更すると、すべてのコンテンツ（テキスト、画像、コンポーネントなど）とスライドが拡大・縮小されます。

```yaml
---
# default: 980
# キャンバスが小さくなれば、視覚的なサイズは大きくなります。
canvasWidth: 800
---
```

### Transformの使用

CSSのtransformプロパティの薄いラッパーである、ビルトインコンポーネント`<Transform />`を提供しています。

```md
<Transform :scale="1.4">

- 項目 1
- 項目 2

</Transform>
```
