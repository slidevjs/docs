# レイアウト

## ビルトインレイアウト

> テーマはレイアウトの動作を上書きすることがあるため、使い方やパラメータ、サンプルを正しく知るには、各テーマのドキュメントを参照するのがよいでしょう。


### `center`

コンテンツを画面中央に表示します。

### `cover`

プレゼンテーションの表紙を表示するために使用します。プレゼンテーションのタイトルや、コンテキストを含めることができます。

### `default`

最も基本的なレイアウトで、あらゆる種類のコンテンツを表示することができます。

### `end`

プレゼンテーションの最後のページです。

### `fact`

事実やデータを画面上で大きく目立たせて見せるために使用します。

### `full`

画面のすべてのスペースを使って、コンテンツを表示します。

### `image-left`

画面の左側に画像を表示し、右側にコンテンツを配置します。

#### 使い方

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

画面右側に画像を表示し、左側にコンテンツを配置します。

#### 使い方

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

画像をページのメインコンテンツとして表示します。

#### 使い方

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```


### `iframe-left`

画面の左側にWebページを表示し、右側にコンテンツを配置します。

#### 使い方

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

画面の右側にWebページを表示し、左側にコンテンツを配置します。

#### 使い方

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Webページをメインコンテンツとして表示します。

#### 使い方

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

プレゼンテーションの始まりに使用します。一般的にはプレゼンテーションのタイトル、簡潔な説明、著者などです。

### `none`

スタイルなしのレイアウトです。

### `quote`

引用文を目立つように表示します。

### `section`

新しいプレゼンテーションのセクションの開始を示すために使用します。

### `statement`

断言/宣言をメインページのコンテンツとして表示します。

### `two-cols`

ページのコンテンツを2列に分割します。

#### 使い方


```md
---
layout: two-cols
---

# 左

これは左側に表示されます。

::right::

# 右

これは右側に表示されます。
```

## カスタムレイアウト

プロジェクトルートの配下に`layouts/`というディレクトリを作成し、そこにカスタムしたVueのレイアウトコンポーネントを配置します。

詳細は[レイアウト](/custom/directory-structure#レイアウト)のセクションを参照してください。

## テーマが提供するレイアウト

テーマはレイアウトを提供したり、既存のレイアウトを上書きすることができます。テーマが提供するレイアウトについては、各テーマのドキュメントを参照してください。
