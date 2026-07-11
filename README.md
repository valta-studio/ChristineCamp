# Camping Primusbauer am Wolfgangsee

Static website for the family-run campsite **Camping Primusbauer** in Abersee am Wolfgangsee, Austria. Built with [Astro](https://astro.build) — no client-side framework, fully static output.

## Languages

- German (default): `/`
- English: `/en/`

All texts and the 2026 price table live in `src/i18n/de.ts` and `src/i18n/en.ts`.

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

Edit the `prices.rows` arrays in `src/i18n/de.ts` and `src/i18n/en.ts` — the table renders from this data on both language versions.
