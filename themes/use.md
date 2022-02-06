# テーマを使用する

Slidevのテーマを変更するのは驚くほど簡単です。フロントマターに`theme:`フィールドを追加するだけです。

```yaml
---
theme: seriph
---
```

サーバーを起動すると、テーマの自動インストールを促すメッセージが表示されます。

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

あるいは以下の方法で手動でテーマをインストールします

```bash
$ npm install @slidev/theme-seriph
```

以上、新しいテーマをお楽しみください。各テーマの使い方の詳細については、テーマのREADMEを参照してください。

あなたのテーマを共有したいですか？[テーマの書き方](/themes/write-a-theme)を参照してください。

## テーマの取り出し

現在のテーマを完全に制御したい場合は、ローカルファイルシステム上に**取り出し**して好きなように変更することができます。次のコマンドを実行します。

```bash
$ slidev theme eject
```

現在使用しているテーマを`./theme`に出力し、フロントマターを次のように変更します。

```yaml
---
theme: ./theme
---
```

また、これは既存のテーマをベースにテーマを作成するのに参考になります。その際は、元のテーマと作者について言及することを忘れないでください :)

## ローカルテーマ

前のセクションでおわかりのように、プロジェクトにローカルテーマを指定することができます。themeフィールドに**相対パス**を指定します。

```yaml
---
theme: ./path/to/theme
---
```

詳細は[テーマの書き方](/themes/write-a-theme)を参照してください。
