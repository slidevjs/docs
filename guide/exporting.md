# エクスポート

## PDF

> PDFもしくはPNGへのエクスポートはレンダリングのために[Playwright](https://playwright.dev)に依存しています。したがって、この機能を使用するためには[`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary)をインストールする必要があります。
> CI環境でエクスポートを行う場合は、[the playwright CI guide](https://playwright.dev/docs/ci)が参考になります。

`playwright-chromium`のインストール

```bash
$ npm i -D playwright-chromium
```

次のコマンドを使用してスライドをPDFにエクスポートします。

```bash
$ slidev export
```

しばらくすると、スライドが`./slides-exports.pdf`に出力されます。

### クリックステップをエクスポートする

> v0.21から使用可能です

デフォルトでは、Slidevはクリックアニメーションを無効にして、スライド単位で1ページをエクスポートします。複数のステップがあるスライドを複数のページにエクスポートしたい場合は、`--with-clicks`オプションを指定します。

```bash
$ slidev export --with-clicks
```

## PNGs

`--format png`オプションを指定した場合、Slidevは各スライドをPDFの代わりにPNG画像として出力します。

```bash
$ slidev export --format png
```

## シングルページアプリケーション (SPA)

[静的ホスティング](/guide/hosting)を参照してください。
