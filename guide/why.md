# Porque usar **Slidev**

Existem diversos criadores de apresentações/slides **WYSIWYG**, ricos em recursos e de uso geral, como [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) e [Apple Keynote](https://www.apple.com/keynote/). Estes funcionam bem para fazer slides com animações, gráficos e outras coisas, ao mesmo tempo que não muito intuitivos e fácil aprendizagem. Então, porque não usar o **Slidev**?

O **Slidev** tem como objetivo fornecer flexibilidade e interactividade para que os desenvolvedores possam tornar as suas apresentações ainda mais interessantes e atrativas, recorrendo a ferramentas e tecnologias com as quais já estão familiarizados.

Ao trabalhar com editores **WYSIWYG**, é fácil haver distrações com as opções de estilo, animações, etc.. O **Slidev** corrige isso, separando o conteúdo e os recursos visuais (estilos, etc.). Isto permite concentração numa coisa de cada vez, permitindo a reutilização de temas da comunidade. O **Slidev** não tem como objetivo substituir inteiramente outros construtores de apresentações/slides, mas sim em focar na comunidade de desenvolvedores.

## Slidev

![](/screenshots/cover.png)

Aqui estão alguns dos recursos mais interessantes do **Slidev**:

## Baseado em Markdown

O **Slidev** usa um formato de Markdown extendido para armazenar todos os teus slides num único ficheiro de texto simples. Assim consegues estar focado apenas no conteúdo. E como o conteúdo e os estilos estão separados, isso torna possível alternar entre diferentes temas sem esforço.

Leia mais sobre [Sintaxe de Markdown do Slidev](/guide/syntax).

## Uso de Temas

Os temas para o **Slidev** podem ser partilhados e instalados através de *packages* **npm**/**yarn**. Para aplicar apenas é precisa uma linha de configuração.

Conheça a nossa [galeria de temas][/themes/gallery] ou [saiba como criar o seu tema](/themes/write-a-theme).

## Developer Friendly

Slidev provides first-class support for code snippets for developers. It supports both [Prism](https://prismjs.com/) and [Shiki](https://github.com/shikijs/shiki) to get pixel perfect syntax highlighting, while still being able to modify the code at any time. With [Monaco editor](https://microsoft.github.io/monaco-editor/) built-in, it also empowers you to do live coding / demonstration in your presentation with autocompletion, type hovering, and even TypeScript type check support.

Learn more about [highlighters](/custom/highlighters) and [Monaco configuration](/custom/config-monaco).

## Rápido

O **Slidev** conta com [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) e [Windi CSS](https://windicss.org/), proporcionando uma experiência maravilhosa. Todas as alterações realizadas nos teus slides são refletivas **instantaneamente**.


Saiba mais sobre a [stack tecnológica utilizada](/guide/#tech-stack).

## Interactive & Expressive

You can write custom Vue components and use them directly inside your markdown file. You can also interact with them inside the presentation to express your idea in a more interesting and intuitive way.

## Suporta Gravação

O **Slidev** conta com gravação integrada, bem como visualização da câmera. Assim podes partilhar a tua apresentação com a visualização da tua câmara interna. Tudo de uma só vez, sem necessidade de nenhuma ferramenta adicional.

Sabe mais sobre [gravação da tua apresentação aqui](/guide/recording).

## Portable

Export your slides into PDF, PNGs, or even a hostable Single-page Application (SPA) with a single command, and share them anywhere.

Read more about that in the [exporting docs](/guide/exporting).

## Hackable

Being powered by web technologies, anything that can be done in a web app is also possible with Slidev. For example, WebGL, API requests, iframes, or even live sharing. It's up to your imagination!

## Dá uma chance

Brincar com o **Slidev** vai te dizer mais do que mil palavras. Estás apenas a um comando de distância:


```bash
$ npm init slidev
```

Ou com **Yarn**:

```bash
$ yarn create slidev
```

Ou vê uma pequena preview do **Slidev**:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
