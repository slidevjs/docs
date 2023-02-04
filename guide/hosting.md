
# Static Hosting

## Build Single Page Applications (SPA)

You can also build the slides into a self-hostable SPA:

```bash
$ slidev build
```

The generated application will be available under `dist/` and then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.

### Base Path

To deploy your slides under sub-routes, you will need to pass the `--base` option. For example:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Refer to [Vite's documentation](https://vitejs.dev/guide/build.html#public-base-path) for more details.

### Provide Downloadable PDF

You can provide a downloadable PDF to the viewers of your SPA with the following config:

```md
---
download: true
---
```

Slidev will generate a PDF file along with the build, and a download button will be displayed in the SPA.

You can also provide a custom URL for the PDF. In that case, the rendering process will be skipped.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## Examples

Here are a few examples of the exported SPA:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

For more, check out [Showcases](/showcases).

## Hosting

We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.

### Netlify

- [Netlify](https://netlify.com/)

Create `netlify.toml` in your project root with the following content.

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

Then go to your Netlify dashboard and create a new site with the repository.

### Vercel

- [Vercel](https://vercel.com/)

Create `vercel.json` in your project root with the following content.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Then go to your Vercel dashboard and create a new site with the repository.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

To deploy your slides on GitHub Pages:
- Push your Slidev project to your repository.
- Create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions:

```yaml
name: Deploy slides to Github Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine packager manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v2
      - name: Restore cache
        uses: actions/cache@v3
        with:
          path: |
            dist
            .cache
          key: ${{ runner.os }}-gatsby-build-${{ hashFiles('dist') }}
          restore-keys: |
            ${{ runner.os }}-gatsby-build-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Slidev
        env:
          PREFIX_PATHS: 'true'
        run: ${{ steps.detect-package-manager.outputs.manager }} run build --base ${{ github.event.repository.name }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Github Actions". Click on save.
- Finally, after the workflow is executed, when you push to your `main` branch, a link to the slides should appear under Settings>Pages.
