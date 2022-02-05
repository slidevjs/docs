# フォント

> v0.20から使用可能です

HTMLやCSSを使ってスライドのフォントやスタイルを自由にカスタマイズすることができますが、Slidevはそれらを楽に扱うための便利な方法も提供しています。

フロントマターで、以下のように設定します。

```yaml
---
fonts:
  # basically the text
  sans: 'Robot'
  # use with `font-serif` css class from windicss
  serif: 'Robot Slab'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
---
```

フォントは**[Google Fonts](https://fonts.google.com/)から自動的にインポート**されます。つまり、Google Fontsで利用可能なフォントを直接利用することができます。

## ローカルフォント

デフォルトでは、Slidevは`fonts`で指定されたすべてのフォントはGoogle Fontsのものとして認識します。ローカルのフォントを使用したい場合は、`fonts.local`を指定して、自動インポートを無効にします。 

```yaml
---
fonts:
  # CSSにおけるfont-familyの指定のように、`,`を使用することでフォールバックのためのフォントを複数指定できます。
  sans: 'Helvetica Neue,Robot'
  # 'Helvetica Neue'をローカルフォントとして指定します。
  local: 'Helvetica Neue'
---
```

## 太さと斜体

デフォルトでは、Slidevは各フォントに対して、`200`、`400`、`6000`の3つの太さをインポートします。次のように指定することができます：

```yaml
---
fonts:
  sans: 'Robot'
  # デフォルト
  weights: '200,400,600'
  # デフォルトで`false`になっている斜体フォントをインポートします。
  italic: false
---
```

この設定はすべてのWebフォントに適用されます。各フォントの太さをより細かく制御するには、[HTML](/custom/directory-structure.html#index-html)とCSSで手動でインポートする必要があります。

## フォントのフォールバック

ほとんどのケースでは、"特別なフォント"を指定するだけで、Slidevがフォールバックフォントを追加してくれます。例：

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

これは次のようになります 

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

フォールバックフォントを無効化するには、次のように設定します。

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## プロバイダー

- オプション： `google` | `none`
- デフォルト： `google`

現時点ではGoogleフォントのみをサポートしていますが、将来的にはほかのプロバイダーも追加する予定です。`none`を指定すると、自動インポート機能を完全に無効にし、すべてのフォントをローカルに扱えるようになります。

```yaml
---
fonts:
  provider: 'none'
---
```


