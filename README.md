Personal portfolio for Vraj Patel, AI Software Engineer — built with Next.js + Tailwind, exported as a static site for GitHub Pages.

## Local development

```bash
npm run dev
```

## Build and static export

```bash
npm run build
```

The static site is emitted to `out/` (configured via `next.config.ts`).

## Deploy to GitHub Pages

1. Set repo Settings → Pages → Source: `gh-pages` branch.
2. Ensure `GITHUB_PAGES=true` during build so `basePath` and `assetPrefix` are set.
3. Deploy:

```bash
npm run deploy
```

This pushes the `out/` folder to the `gh-pages` branch using `gh-pages`.
