import { de } from './de';
import { en } from './en';

export type Locale = 'de' | 'en';

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

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    features: string;
    prices: string;
    location: string;
    contact: string;
    switchLabel: string;
    switchHref: string;
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
  country: { de: 'Österreich', en: 'Austria' },
  email: 'office@camping-primusbauer.at',
  phoneDisplay: '+43 (0) 664 / 914 96 97',
  phoneHref: '+436649149697',
  lat: 47.7361,
  lon: 13.4091,
} as const;

export const translations: Record<Locale, Dictionary> = { de, en };

export function getDict(locale: Locale): Dictionary {
  return translations[locale];
}
