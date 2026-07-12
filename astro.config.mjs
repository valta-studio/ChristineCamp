// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.camping-primusbauer.at',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'cs'],
  },
});
