# 静的ホスティング

## シングルページアプリケーション(SPA)を構築する 

スライドをセルフホスティング可能なSPAとして構築することができます：

```bash
$ slidev build
```

生成されたアプリケーションは`dist/`の配下に配置され、[GitHub Pages](https://pages.github.com/)、[Netlify](https://netlify.app/)、[Vercel](https://vercel.com/)など、好きな場所にホストすることができます。これでリンク1つで世界中の人とスライドを共有することできます。

### ベースパス

サブルート下にスライドをデプロイするには、`--base`オプションを指定する必要があります。例：

```bash
$ slidev build --base /talks/my-cool-talk/
```

詳細は[Viteのドキュメント](https://vitejs.dev/guide/build.html#public-base-path)を参照してください。

### ダウンロード可能なPDFを提供する

以下の設定により、SPAの閲覧者向けにダウンロード可能なPDFを提供することができます：

```md
---
download: true
---
```

SLidevはビルドと一緒にPDFファイルを生成し、SPAにダウンロードボタンが表示されます。

またPDFに対してカスタムURLを指定することもできます。その場合、レンダリング処理はスキップされます。

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## サンプル

以下はSPAとしてエクスポートされた例です:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

詳しくは[Showcases](/showcases)を参照してください。

## ホスティング

`npm init slidev@lastest`を使って、サービスをそのままホスティングするために必要な設定ファイルが含まれたプロジェクトの雛形を生成することを推奨します。

### Netlify

- [Netlify](https://netlify.com/)

プロジェクトルートに以下の内容で`netlify.toml`を作成します。

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Netlifyのダッシュボードを開き、リポジトリを指定して新しいサイトを作成してください。

### Vercel

- [Vercel](https://vercel.com/)

プロジェクトルートに以下の内容で`vercel.json`を作成します。

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Vercelのダッシュボードを開き、リポジトリを指定して新しいサイトを作成してください。

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

GitHub Actionsを使用してGitHub Pagesにスライドをデプロイするために、以下の内容で`.github/workflows/deploy.yml`を作成してください。

```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
