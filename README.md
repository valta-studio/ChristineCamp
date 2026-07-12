# Camping Primusbauer am Wolfgangsee

Static website for the family-run campsite **Camping Primusbauer** in Abersee am Wolfgangsee, Austria. Built with [Astro](https://astro.build) — no client-side framework, fully static output.

## Languages

- German (default): `/`
- English: `/en/`
- Czech: `/cs/`

Translations are managed with [i18next](https://www.i18next.com/): resources live in `src/i18n/de.ts`, `src/i18n/en.ts` and `src/i18n/cs.ts` and are resolved at build time via `getT(locale)` from `src/i18n/index.ts` (German is the fallback language).

## Development

```sh
npm install
npm run dev       # http://localhost:4321
```

## Build & deploy

```sh
npm run build     # outputs static site to dist/
npm run preview   # serve the built site locally
```

The `dist/` folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, …).

## Updating prices

Edit the `prices.rows` arrays in `src/i18n/de.ts`, `src/i18n/en.ts` and `src/i18n/cs.ts` — the table renders from this data on all language versions.
