# Exporting

## PDF

> Exporting to PDF or PNG relies on [Playwright](https://playwright.dev) for rendering. You will therefore need to install [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) to use this feature.
> If you are doing exporting in a CI environment, [the playwright CI guide](https://playwright.dev/docs/ci) can be helpful.

Install `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Now export your slides to PDF using the following command

```bash
$ slidev export
```

After a few seconds, your slides will be ready at `./slides-exports.pdf`.

## PNGs

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

You can also build the slides into a self-hostable SPA. The generic command is:

```bash
$ slidev build
```

The generated application will be available under `dist/`. 

However you will often want to host the SPA under a subroute. This is typically the case when hosting on popular platforms like [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), or [Vercel](https://vercel.com/). In that case you will want to use the `--base` option for building, to ensure that internal references are preserved.

Example: if you want to host the SPA on a GitHub repository with URL `https://github.com/why-not-try-calmer/Hackathon2021`, you will need to build with:

```bash
$ slidev build --base /Hackathon2021/   # mind the trailing "/"
```

Now you can share your slides with the rest of the world with a single link.

### Base Path

To deploy your slides under sub-routes, you will need to pass the `--base` option. For example:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Refer to [Vite's documentation](https://vitejs.dev/guide/build.html#public-base-path) for more details.

### Provide Downloadable PDF

You can provide a downloadable PDF to the viewers of your SPA. You can enable it by the following config:

```md
---
download: true
---
```

Now, Slidev will generate a pdf file along with the build and a download button will appear in the SPA.

You can also provide a custom url to the PDF. In that case, the rendering process will be skipped.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Examples

Here are a few examples of the exported SPA:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)
