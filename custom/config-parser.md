# Configure and Extend the Parser

Slidev parses your presentation file (e.g. `slides.md`) in three steps:

1. A "preparsing" step is carried out: the file is split into slides using the `---` separator, and considering the possible frontmatter blocks.
2. Each slide is parsed with an external library.
3. Slidev resolves the special frontmatter property `src: ....`, which allows to include other md files.

## Markdown Parser

Configuring the markdown parser used in step 2 can be done by [configuring Vite internal plugins](/custom/config-vite#configure-internal-plugins).

## Preparser Extensions

> Available since v0.36.0

The preparser (step 1 above) is highly extensible and allows to implement custom syntaxes for your md files. Extending the preparser is considered **an advanced feature** and is susceptible to break [editor integrations](/guide/editors) due to implicit changes in the syntax.

To customize it, create `./setup/preparser.ts` file with the following content:


```ts
import type { SlidevPreparserState } from '@slidev/types'
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup((filepath) => {
  return [
    {
      // disabled: true, // to disable
      handle(s) {
        if (s.mode === 'content' && s.lines[s.i] === '@@@') {
          s.lines[s.i] = 'hello'
          return true
        }
      },
    }
  ]
})
```

This example systematically replaces any `@@@` line by a line with `hello`. It illustrates the structure of a preparser configuration file and some of the main concepts the preparser involves:
- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file) and could use this information (e.g., enable extensions based on the presentation file).
- The function must return a list of preparser extensions.
- An extension usually defines a `handle(s)` function that receives a preparser state and can mutate it.
- The `handle` function must return true in case it modified the state. 
- Part of the state `s` is most often used:
  - `lines`: the list of lines, that can modified, spliced, etc
  - `i`: the current cursor position in the list of lines
  - `mode`: notable values include `content`, `frontmatter`, `codeblock` to distinguish what the preparser is currently parsing

Check out the [type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts) for more details about the `SlidevPreparserExtension` and `SlidevPreparserState` interfaces, and the modes predefined in `SlidevPreparserMode`.

## Example Preparser Extensions

Considering a use case where (part of) your presentation is mainly showing cover images and including other md files. You might want a compact notation where for instance (part of) `slides.md` is as follows:

```md

@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Questions?
see you next time

```

To allow these `@src:` and `@cover` syntaxes, create a `./setup/preparser.ts` file with the following content:


```ts
import type { SlidevPreparserState } from '@slidev/types'
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup((filepath) => {
  return [
    {
      handle(s) {
        const l = s.lines[s.i]
        if (s.mode === 'content' && l.match(/^@cover:/i)) {
          s.lines.splice(s.i, 1, // remove a line and add 5 new ones
            '---',
            'layout: cover',
            `background: ${l.replace(/^@cover: */i, '')}`,
            '---',
            '')
          return true
        }
        if (s.mode === 'content' && l.match(/^@src:/i)) {
          s.lines.splice(s.i, 1,
            '---',
            `src: ${l.replace(/^@src: */i, '')}`,
            '---',
            '')
          return true
        }
      },
    }
  ]
})
```

And that's it.