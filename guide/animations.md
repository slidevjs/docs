# Animations

## Click Animations

### `v-click`

To apply "click animations" for elements, you can use the `v-click` directive or `<v-click>` components

```md
# Hello

<!-- Component usage: this will be invisible until you press "next" -->
<v-click>

Hello World

</v-click>

<!-- Directive usage: this will be invisible until you press "next" the second time -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

The usage of `v-after` is similar to `v-click` but it will turn the element visible when the previous `v-click` is triggered.

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

When you click the "next" button, both `Hello` and `World` will show up together.

### `v-click-hide`

Same as `v-click` but instead of making the element appear, it makes the element invisible after clicking.

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks` is only provided as a component. It's a shorthand to apply the `v-click` directive to all its child elements. It is especially useful when working with lists.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

An item will become visible each time you click "next".

It accepts a `depth` props for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

### Custom Clicks Count

By default, Slidev counts how many steps are needed before going to the next slide. You can override this setting by passing the `clicks` frontmatter option:

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

### Ordering

Passing the click index to your directives, you can customize the order of the revealing

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- the order is reversed -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- visible after 3 clicks -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### Element Transitions

When you apply the `v-click` directive to your elements, it will attach the class name `slidev-vclick-target` to it. When the elements are hidden, the class name `slidev-vclick-hidden` will also be attached. For example:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

After a click, it will become

```html
<div class="slidev-vclick-target">Text</div>
```

By default, a subtle opacity transition is applied to those classes:

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

You can override them to customize the transition effects in your custom stylesheets. 

For example, you can achieve the scaling up transitions by: 

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

To specify animations for only certain slide or layout

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

Learn more about [customizing styles](/custom/directory-structure#style).

## Motion

Slidev has [@vueuse/motion](https://motion.vueuse.org/) built-in. You can use the `v-motion` directive to any elements to make apply motion on them. For example

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

The text `Slidev` will move from `-80px` to its original position on initialization.

> Note: Slidev preloads the next slide for performance, which means the animations might start before you navigate to the page. To get it works properly, you can disable the preloading for the particular slide
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Or control the element life-cycle with `v-if` to have fine-grained controls
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

Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
