import i18next from 'i18next';
import { de } from './de';
import { en } from './en';
import { cs } from './cs';

export type Locale = 'de' | 'en' | 'cs';

export interface PriceRow {
  label: string;
  note?: string;
  off: string;
  peak: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Sight {
  title: string;
  distance: string;
  text: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    features: string;
    prices: string;
    explore: string;
    location: string;
    contact: string;
    langLabel: string;
    menuLabel: string;
  };
  hero: {
    tagline: string;
    intro: string;
    ctaPrices: string;
    ctaContact: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  features: {
    kicker: string;
    title: string;
    items: Feature[];
  };
  prices: {
    kicker: string;
    title: string;
    lead: string;
    colItem: string;
    colOff: string;
    colOffSub: string;
    colPeak: string;
    colPeakSub: string;
    rows: PriceRow[];
    footnote: string;
  };
  explore: {
    kicker: string;
    title: string;
    lead: string;
    items: Sight[];
    activitiesTitle: string;
    activities: string[];
  };
  location: {
    kicker: string;
    title: string;
    lead: string;
    addressLabel: string;
    directions: string;
    mapLink: string;
    mapTitle: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    host: string;
  };
  footer: {
    rights: string;
  };
}

export const SITE = {
  name: 'Camping Primusbauer',
  subtitle: 'am Wolfgangsee',
  owner: 'Christine Bruckenberger',
  street: 'Schwand 43',
  town: 'A-5342 Abersee am Wolfgangsee',
  country: { de: 'Österreich', en: 'Austria', cs: 'Rakousko' },
  email: 'office@camping-primusbauer.at',
  phoneDisplay: '+43 (0) 664 / 914 96 97',
  phoneHref: '+436649149697',
  lat: 47.7361,
  lon: 13.4091,
} as const;

export const LOCALES = [
  { code: 'de', label: 'Deutsch', short: 'DE', path: '/', ogLocale: 'de_AT' },
  { code: 'en', label: 'English', short: 'EN', path: '/en/', ogLocale: 'en_GB' },
  { code: 'cs', label: 'Česky', short: 'CS', path: '/cs/', ogLocale: 'cs_CZ' },
] as const satisfies ReadonlyArray<{
  code: Locale;
  label: string;
  short: string;
  path: string;
  ogLocale: string;
}>;

export function getLocaleMeta(locale: Locale) {
  return LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
}

i18next.init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    cs: { translation: cs },
  },
  lng: 'de',
  fallbackLng: 'de',
  supportedLngs: LOCALES.map((l) => l.code),
  initImmediate: false,
  interpolation: { escapeValue: false },
});

/** Fixed translator for one locale; use `{ returnObjects: true }` for arrays/objects. */
export function getT(locale: Locale) {
  return i18next.getFixedT(locale);
}
