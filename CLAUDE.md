# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for **Camping Primusbauer am Wolfgangsee** (a campsite in Abersee, Austria), built with Astro 5. Fully static output, no client-side framework — the only browser JavaScript is the mobile nav toggle in `Header.astro`.

## Commands

```sh
npm run dev       # dev server at http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve dist/ locally
```

There are no tests or linters configured. Verify changes with `npm run build` (catches Astro/TS errors) and by viewing the affected pages.

## Architecture

**One landing page, rendered three times.** `src/pages/index.astro` (de), `src/pages/en/index.astro`, and `src/pages/cs/index.astro` are thin wrappers that render `src/layouts/Landing.astro` with a `locale` prop. `Landing.astro` composes `Base.astro` (head/SEO/hreflang/OG) plus the section components in `src/components/` (Header, Hero, About, Features, Prices, Explore, Location, Contact, Footer). Every component takes a single `locale` prop.

**i18n via i18next, resolved at build time.** `src/i18n/index.ts` initializes one i18next instance with resources from `de.ts`, `en.ts`, `cs.ts` (German is default and fallback) and exports:
- `getT(locale)` — fixed translator; components call `t('section.key')`, and arrays/objects (price rows, feature cards, about paragraphs) use `t(key, { returnObjects: true })` with a type cast.
- `LOCALES` — single source for locale metadata (URL path, label, og:locale); drives the header language switcher and hreflang tags.
- `SITE` — untranslated facts: name, owner, address, phone, email, map coordinates.
- `Dictionary` interface — all three resource files are typed against it, so adding a string to one language forces it in all three.

Locale routes are also declared in `astro.config.mjs` (`i18n.locales`). Adding a language means: new `src/i18n/<lang>.ts`, entry in `LOCALES`, entry in `astro.config.mjs`, `country` entry in `SITE`, and a `src/pages/<lang>/index.astro` wrapper.

**Content is data.** All visible text, including the 2026 price table (`prices.rows`) and facilities cards (`features.items`), lives in the `src/i18n/*.ts` dictionaries — components contain no prose. Price numbers must stay identical across the three files; only labels are translated. The price data originates from the owner's printed price list (see git history / `.context/attachments`).

**Images** go through `astro:assets` (`<Picture>` in Hero, `getImage` for the OG image in Base). The hero photo is `src/assets/lake.jpg`; the logo mark is hand-written SVG (`src/assets/logo.svg`, favicon variant in `public/favicon.svg`).

**Styling**: design tokens (colors from the campsite logo — blue `--blue`, red/orange `--accent`) and shared `.section`/`.btn`/`.container` classes live in `src/styles/global.css`; everything else is scoped `<style>` inside each component. System font stack only — no external font or any third-party requests except the OpenStreetMap iframe in `Location.astro`.
