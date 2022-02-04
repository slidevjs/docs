# インストール

## スターターテンプレート

> Slidevは[**Node.js >=14.0**](https://nodejs.org/)で動作します

まずは公式スターターテンプレートを利用してみてください。

NPMで使用する：

```bash
$ npm init slidev@latest
```

Yarnで使用する：

```bash
$ yarn create slidev
```

表示されるプロンプトに従って操作をすると、スライドショーが http://localhost:3030/ で自動的に立ち上がります。

スターターテンプレートには基本的な設定やSlidevの使い方を説明した短いデモも収録されています。

## マニュアルインストール

Slidevを手動でインストールしたい、または既存のプロジェクトに統合したい場合は、次のようにします：

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> [pnpm](https://pnpm.io)を使用している場合、Slidevを正しく動作させるために[shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist)オプションを有効にする必要があることに注意してください。
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## グローバルインストール

> v0.14から使用可能です

以下のコマンドで、Slidevをグローバルにインストール可能です。

```bash
$ npm i -g @slidev/cli
```

毎回プロジェクトを作成することなく、どこでも`slidev`コマンドを使用できるようになります。

```bash
$ slidev
```

このコマンドはローカルの`@slidev/cli`が`node_modules`にあれば、それを実行します。

## Docker上にインストールする

コンテナでプレゼンテーションを迅速に実行する必要がある場合、あらかじめ組み込まれている[docker](https://hub.docker.com/r/stig124/slidev)イメージ（メンテナー：[stig124](https://github.com/Stig124)）を使うか、あるいは自分でビルドします。

詳しくは[slidevjs/container repo](https://github.com/slidevjs/container)を参照してください。
