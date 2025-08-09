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

### Contact form (static hosting)

This site uses Formspree for the contact form backend. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in repository secrets to your Formspree endpoint, so the deploy workflow injects it at build time.

## Deploy to GitHub Pages

1. Set repo Settings → Pages → Source: `gh-pages` branch.
2. Ensure `GITHUB_PAGES=true` during build so `basePath` and `assetPrefix` are set.
3. Deploy:

```bash
npm run deploy
```

This pushes the `out/` folder to the `gh-pages` branch using `gh-pages`.
