import type { Dictionary } from './index';

export const de: Dictionary = {
  meta: {
    title: 'Camping Primusbauer am Wolfgangsee – Campingplatz in Abersee, Salzkammergut',
    description:
      'Familiär geführter Campingplatz direkt am Wolfgangsee in Abersee im Salzkammergut. Stellplätze am Seeufer für Zelt, Wohnwagen und Wohnmobil. Preise 2026, Anfahrt und Kontakt.',
  },
  nav: {
    about: 'Der Platz',
    gallery: 'Galerie',
    features: 'Ausstattung',
    prices: 'Preise',
    explore: 'Ausflüge',
    location: 'Anfahrt',
    faq: 'FAQ',
    contact: 'Kontakt',
    langLabel: 'Sprache',
    menuLabel: 'Menü',
  },
  hero: {
    tagline: 'Camping direkt am Wolfgangsee',
    intro:
      'Aufwachen mit Blick auf türkisblaues Wasser und die Berge des Salzkammerguts – auf unserem familiär geführten Campingplatz in Abersee.',
    ctaPrices: 'Preise 2026',
    ctaContact: 'Kontakt aufnehmen',
  },
  about: {
    kicker: 'Herzlich willkommen',
    title: 'Urlaub am Primusbauer',
    paragraphs: [
      'Unser Campingplatz liegt in Schwand bei Abersee, unmittelbar am Südufer des Wolfgangsees – zwischen St. Gilgen und Strobl, mitten im Salzkammergut. Vom Platz aus sind es nur wenige Schritte bis zum Kiesstrand und ins klare Wasser des Sees.',
      'Ob mit Zelt, Wohnwagen oder Wohnmobil: Bei uns finden Sie Ihren Platz zum Durchatmen. Die Seeuferplätze bieten freien Blick über den See bis zu den Bergen – ideal zum Baden, für Bootsausflüge und als Ausgangspunkt für Wanderungen auf Schafberg und Zwölferhorn.',
      'Wir freuen uns auf Ihren Besuch – Familie Bruckenberger.',
    ],
  },
  gallery: {
    kicker: 'Impressionen',
    title: 'Einblicke in den Campingplatz',
    lead:
      'Vom Stellplatz bis zum Seeufer: Entdecken Sie den Campingplatz und die Bergwelt rund um den Wolfgangsee.',
    openLabel: 'Foto öffnen',
    viewerLabel: 'Fotogalerie',
    closeLabel: 'Galerie schließen',
    previousLabel: 'Vorheriges Foto',
    nextLabel: 'Nächstes Foto',
    images: [
      'Kiesstrand am Wolfgangsee mit Blick auf die bewaldeten Berge',
      'Kurzer Weg vom Campingplatz zum Wolfgangsee',
      'Großzügige Campingwiese vor dem Bergpanorama des Salzkammerguts',
      'Sonnenuntergang zwischen Wohnwagen und Bergen',
      'Grüne Wiese mit Blick auf die markanten Gipfel bei Abersee',
      'Aussicht vom Stellplatz auf Wiese und Berge',
      'Blick vom Schafberg auf den türkisblauen Wolfgangsee',
      'Abendstimmung über dem Campingplatz',
      'Campingweg zwischen Wohnwagen unter blauem Himmel',
      'Weite Wiese und Berglandschaft bei Abersee',
    ],
  },
  features: {
    kicker: 'Auf einen Blick',
    title: 'Das erwartet Sie',
    items: [
      {
        icon: 'wave',
        title: 'Direkte Seelage',
        text: 'Stellplätze am Seeufer mit eigenem Zugang zum Kiesstrand und glasklarem Badewasser.',
      },
      {
        icon: 'mountain',
        title: 'Bergpanorama',
        text: 'Freier Blick auf Schafberg, Zwölferhorn und die Berge des Salzkammerguts.',
      },
      {
        icon: 'tent',
        title: 'Zelt, Wohnwagen & Wohnmobil',
        text: 'Plätze für jede Art des Campings – auch ein zusätzliches Zelt oder Fahrzeug ist willkommen.',
      },
      {
        icon: 'plug',
        title: 'Strom & warme Duschen',
        text: 'Stromanschluss nach Verbrauch oder pauschal, dazu Münzduschen mit warmem Wasser.',
      },
      {
        icon: 'dog',
        title: 'Hunde willkommen',
        text: 'Ihr vierbeiniger Begleiter ist bei uns herzlich willkommen.',
      },
      {
        icon: 'sun',
        title: 'Saison Mai bis September',
        text: 'Geöffnet in der Vor-, Haupt- und Nachsaison – ruhig im Frühling und Herbst, lebendig im Sommer.',
      },
    ],
  },
  prices: {
    kicker: 'Preisliste',
    title: 'Preise 2026',
    lead: 'Alle Preise in Euro, pro Nacht bzw. wie angegeben.',
    colItem: 'Leistung',
    colOff: 'Nebensaison',
    colOffSub: 'Mai, Juni und September',
    colPeak: 'Hauptsaison',
    colPeakSub: 'Juli und August',
    rows: [
      {
        label: 'Erwachsene (ab 15 Jahren) / Nacht (ab 2 Nächten)',
        note: 'Preis bei nur einer Nacht: 11,00 € / 13,00 €',
        off: '9,00 €',
        peak: '11,00 €',
      },
      { label: 'Kinder 4 bis 14 Jahre / Nacht', off: '5,50 €', peak: '6,50 €' },
      { label: 'Kinder bis 3 Jahre', off: 'frei', peak: 'frei' },
      { label: 'Stellplatz / Nacht', off: '15,00 €', peak: '17,00 €' },
      { label: 'Zusätzliches Zelt oder Fahrzeug / Nacht', off: '4,00 €', peak: '4,00 €' },
      { label: 'Zuschlag Seeuferplatz / Tag & Nacht', off: '5,50 €', peak: '6,50 €' },
      { label: 'Ortstaxe pro Erwachsenem / Nacht', off: '3,50 €', peak: '3,50 €' },
      { label: 'Hund / Nacht', off: '5,00 €', peak: '6,00 €' },
      { label: 'Strom pro kWh', off: '0,90 €', peak: '0,90 €' },
      {
        label: 'Strompauschale für Zelte und Campingbusse / Nacht',
        off: '5,00 €',
        peak: '5,00 €',
      },
      {
        label: 'Strompauschale für Wohnmobile und Wohnwagen / Nacht',
        off: '10,00 €',
        peak: '10,00 €',
      },
      { label: 'Besuchergebühr Erwachsene / Tag', off: '5,00 €', peak: '5,00 €' },
      { label: 'Besuchergebühr Kinder / Tag', off: '2,50 €', peak: '2,50 €' },
      { label: 'Dusche (6 Minuten)', off: '0,50 €', peak: '0,50 €' },
    ],
    footnote:
      'Nebensaison: Mai, Juni und September · Hauptsaison: Juli und August. Änderungen vorbehalten.',
  },
  explore: {
    kicker: 'Ausflüge & Freizeit',
    title: 'Entdecken Sie die Umgebung',
    lead: 'Der Wolfgangsee liegt mitten im Salzkammergut – viele der schönsten Ausflugsziele Österreichs erreichen Sie vom Campingplatz aus in kurzer Zeit.',
    items: [
      {
        title: 'Schafbergbahn',
        distance: 'ca. 10 km',
        text: 'Mit der nostalgischen Zahnradbahn von St. Wolfgang auf 1.783 m – oben erwartet Sie einer der schönsten Panoramablicke über die Seen des Salzkammerguts.',
      },
      {
        title: 'St. Wolfgang',
        distance: 'ca. 10 km',
        text: 'Der berühmte Wallfahrtsort mit der Pilgerkirche und dem Pacher-Altar, gemütlicher Seepromenade und dem legendären Weißen Rössl.',
      },
      {
        title: 'Zwölferhorn-Seilbahn',
        distance: 'ca. 8 km',
        text: 'Die Seilbahn in St. Gilgen bringt Sie auf 1.522 m – Ausgangspunkt für Wanderungen mit herrlichem Blick auf See und Berge.',
      },
      {
        title: 'Wolfgangsee-Schifffahrt',
        distance: 'ab Strobl',
        text: 'Mit dem Linienschiff über den See: Die Schiffe verbinden Strobl, St. Wolfgang und St. Gilgen – eine entspannte Rundfahrt mit Bergpanorama.',
      },
      {
        title: 'Salzburg',
        distance: 'ca. 35 km',
        text: 'Die Mozartstadt mit ihrer barocken Altstadt (UNESCO-Weltkulturerbe) und der Festung Hohensalzburg ist in rund 40 Minuten erreichbar.',
      },
      {
        title: 'Bad Ischl & Hallstatt',
        distance: 'ca. 20–35 km',
        text: 'Die Kaiserstadt Bad Ischl mit der Kaiservilla und das weltberühmte Hallstatt am Hallstätter See sind ideale Tagesausflüge.',
      },
    ],
    activitiesTitle: 'Aktivitäten am See',
    activities: [
      'Baden im glasklaren Wasser',
      'Stand-up-Paddeln & Kajak',
      'Segeln & Surfen',
      'Wandern & Bergtouren',
      'Radfahren rund um den See',
      'Bootsausflüge',
    ],
  },
  location: {
    kicker: 'Anfahrt',
    title: 'So finden Sie uns',
    lead: 'Der Campingplatz liegt in Schwand bei Abersee, am Südufer des Wolfgangsees – gut erreichbar über die B158 zwischen St. Gilgen und Strobl.',
    addressLabel: 'Adresse',
    directions: 'Route planen',
    mapLink: 'Größere Karte anzeigen',
    mapTitle: 'Karte: Camping Primusbauer am Wolfgangsee',
  },
  faq: {
    kicker: 'Gut zu wissen',
    title: 'Häufige Fragen',
    lead: 'Hier finden Sie die wichtigsten Informationen für Ihren Aufenthalt am Wolfgangsee.',
    items: [
      {
        question: 'Wann ist der Campingplatz geöffnet?',
        answer:
          'Unsere Campingsaison läuft von Mai bis September. Die Preise unterscheiden zwischen Neben- und Hauptsaison.',
      },
      {
        question: 'Kann ich mit Zelt, Wohnwagen oder Wohnmobil anreisen?',
        answer:
          'Ja. Wir bieten Stellplätze für Zelte, Wohnwagen, Campingbusse und Wohnmobile. Auch ein zusätzliches Zelt oder Fahrzeug ist gegen Aufpreis möglich.',
      },
      {
        question: 'Wie kann ich einen Stellplatz reservieren?',
        answer:
          'Für Anfragen und Reservierungen kontaktieren Sie uns bitte telefonisch oder per E-Mail. Wir informieren Sie gerne über die aktuelle Verfügbarkeit.',
      },
      {
        question: 'Hat der Campingplatz direkten Zugang zum Wolfgangsee?',
        answer:
          'Ja. Vom Campingplatz sind es nur wenige Schritte zum eigenen Zugang am Kiesstrand und zum klaren Wasser des Wolfgangsees.',
      },
      {
        question: 'Sind Hunde auf dem Campingplatz erlaubt?',
        answer:
          'Ja, Hunde sind herzlich willkommen. Der Preis pro Nacht richtet sich nach der jeweiligen Saison und ist in der Preisliste angegeben.',
      },
      {
        question: 'Gibt es Stromanschlüsse und warme Duschen?',
        answer:
          'Ja. Strom wird je nach Campingart nach Verbrauch oder pauschal verrechnet. Warme Münzduschen stehen ebenfalls zur Verfügung.',
      },
      {
        question: 'Kann ich einen Stellplatz direkt am See buchen?',
        answer:
          'Seeuferplätze sind gegen einen saisonabhängigen Zuschlag verfügbar. Bitte fragen Sie bei Ihrer Reservierung nach der aktuellen Verfügbarkeit.',
      },
    ],
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Wir freuen uns auf Sie',
    lead: 'Für Anfragen und Reservierungen erreichen Sie uns telefonisch oder per E-Mail.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    addressLabel: 'Adresse',
    host: 'Ihre Gastgeberin: Christine Bruckenberger',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
};
