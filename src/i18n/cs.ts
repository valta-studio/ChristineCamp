import type { Dictionary } from './index';

export const cs: Dictionary = {
  meta: {
    title: 'Camping Primusbauer u jezera Wolfgangsee – kemp v Abersee, Salzkammergut, Rakousko',
    description:
      'Rodinný kemp přímo na břehu jezera Wolfgangsee v Abersee v rakouském Salzkammergutu. Místa u jezera pro stany, karavany i obytné vozy. Ceník 2026, doprava a kontakt.',
  },
  nav: {
    about: 'Kemp',
    gallery: 'Galerie',
    features: 'Vybavení',
    prices: 'Ceník',
    explore: 'Výlety',
    location: 'Kudy k nám',
    contact: 'Kontakt',
    langLabel: 'Jazyk',
    menuLabel: 'Menu',
  },
  hero: {
    tagline: 'Kempování přímo u jezera Wolfgangsee',
    intro:
      'Probuďte se s výhledem na tyrkysovou vodu a hory Salzkammergutu – v našem rodinném kempu v Abersee v Rakousku.',
    ctaPrices: 'Ceník 2026',
    ctaContact: 'Kontaktujte nás',
  },
  about: {
    kicker: 'Srdečně vítejte',
    title: 'Dovolená u Primusbauera',
    paragraphs: [
      'Náš kemp leží ve Schwandu u Abersee, přímo na jižním břehu jezera Wolfgangsee – mezi St. Gilgen a Stroblem, v srdci jezerní oblasti Salzkammergut. Z vašeho místa je to jen pár kroků na oblázkovou pláž a do křišťálově čisté vody.',
      'Ať přijedete se stanem, karavanem nebo obytným vozem, najdete u nás místo, kde si odpočinete. Místa u břehu nabízejí volný výhled přes jezero až k horám – ideální ke koupání, na výlety lodí i jako výchozí bod pro túry na Schafberg a Zwölferhorn.',
      'Těšíme se na vaši návštěvu – rodina Bruckenbergerova.',
    ],
  },
  gallery: {
    kicker: 'Fotografie',
    title: 'Nahlédněte do kempu',
    lead:
      'Od vašeho místa až ke břehu jezera: prohlédněte si kemp a horskou krajinu kolem Wolfgangsee.',
    openLabel: 'Otevřít fotografii',
    viewerLabel: 'Fotogalerie',
    closeLabel: 'Zavřít galerii',
    previousLabel: 'Předchozí fotografie',
    nextLabel: 'Další fotografie',
    images: [
      'Oblázková pláž u Wolfgangsee s výhledem na zalesněné hory',
      'Krátká cesta z kempu k jezeru Wolfgangsee',
      'Prostorná kempovací louka před horami Salzkammergutu',
      'Západ slunce mezi karavany a horami',
      'Zelená louka s výhledem na výrazné vrcholy u Abersee',
      'Výhled z místa na louku a hory',
      'Pohled ze Schafbergu na tyrkysové jezero Wolfgangsee',
      'Večerní nálada nad kempem',
      'Cesta mezi karavany pod modrou oblohou',
      'Široká louka a horská krajina u Abersee',
    ],
  },
  features: {
    kicker: 'V kostce',
    title: 'Co vás čeká',
    items: [
      {
        icon: 'wave',
        title: 'Přímo u jezera',
        text: 'Místa na břehu s vlastním přístupem na oblázkovou pláž a ke křišťálově čisté vodě.',
      },
      {
        icon: 'mountain',
        title: 'Horské panorama',
        text: 'Volný výhled na Schafberg, Zwölferhorn a hory Salzkammergutu.',
      },
      {
        icon: 'tent',
        title: 'Stany, karavany i obytné vozy',
        text: 'Místa pro každý styl kempování – vítán je i další stan nebo vozidlo.',
      },
      {
        icon: 'plug',
        title: 'Elektřina a teplé sprchy',
        text: 'Přípojka elektřiny podle spotřeby nebo paušálem, k tomu sprchy na mince s teplou vodou.',
      },
      {
        icon: 'dog',
        title: 'Psi vítáni',
        text: 'Váš čtyřnohý společník je u nás srdečně vítán.',
      },
      {
        icon: 'sun',
        title: 'Sezóna květen až září',
        text: 'Otevřeno po celou sezónu – klidné jaro a podzim, živé léto.',
      },
    ],
  },
  prices: {
    kicker: 'Ceník',
    title: 'Ceník 2026',
    lead: 'Všechny ceny v eurech, za noc, resp. dle uvedení.',
    colItem: 'Položka',
    colOff: 'Mimosezóna',
    colOffSub: 'květen, červen a září',
    colPeak: 'Hlavní sezóna',
    colPeakSub: 'červenec a srpen',
    rows: [
      {
        label: 'Dospělí (od 15 let) / noc (od 2 nocí)',
        note: 'Cena při pouze jedné noci: 11,00 € / 13,00 €',
        off: '9,00 €',
        peak: '11,00 €',
      },
      { label: 'Děti 4 až 14 let / noc', off: '5,50 €', peak: '6,50 €' },
      { label: 'Děti do 3 let', off: 'zdarma', peak: 'zdarma' },
      { label: 'Parcela / noc', off: '15,00 €', peak: '17,00 €' },
      { label: 'Další stan nebo vozidlo / noc', off: '4,00 €', peak: '4,00 €' },
      { label: 'Příplatek za místo u jezera / den a noc', off: '5,50 €', peak: '6,50 €' },
      { label: 'Místní poplatek za dospělého / noc', off: '3,50 €', peak: '3,50 €' },
      { label: 'Pes / noc', off: '5,00 €', peak: '6,00 €' },
      { label: 'Elektřina za kWh', off: '0,90 €', peak: '0,90 €' },
      {
        label: 'Paušál za elektřinu pro stany a obytné dodávky / noc',
        off: '5,00 €',
        peak: '5,00 €',
      },
      {
        label: 'Paušál za elektřinu pro obytné vozy a karavany / noc',
        off: '10,00 €',
        peak: '10,00 €',
      },
      { label: 'Poplatek za návštěvníka – dospělí / den', off: '5,00 €', peak: '5,00 €' },
      { label: 'Poplatek za návštěvníka – děti / den', off: '2,50 €', peak: '2,50 €' },
      { label: 'Sprcha (6 minut)', off: '0,50 €', peak: '0,50 €' },
    ],
    footnote:
      'Mimosezóna: květen, červen a září · Hlavní sezóna: červenec a srpen. Změny vyhrazeny.',
  },
  explore: {
    kicker: 'Výlety a volný čas',
    title: 'Objevte okolí',
    lead: 'Jezero Wolfgangsee leží v srdci Salzkammergutu – řadu nejkrásnějších míst Rakouska máte z kempu jen kousek.',
    items: [
      {
        title: 'Zubačka na Schafberg',
        distance: 'cca 10 km',
        text: 'Vyjeďte nostalgickou ozubnicovou dráhou ze St. Wolfgangu do výšky 1 783 m – nahoře vás čeká jeden z nejkrásnějších výhledů na jezera Salzkammergutu.',
      },
      {
        title: 'St. Wolfgang',
        distance: 'cca 10 km',
        text: 'Slavné poutní městečko s kostelem a Pacherovým oltářem, příjemnou promenádou u jezera a legendárním hotelem U Bílého koníčka.',
      },
      {
        title: 'Lanovka na Zwölferhorn',
        distance: 'cca 8 km',
        text: 'Lanovka ze St. Gilgen vás vyveze do výšky 1 522 m – výchozí bod pro túry s nádherným výhledem na jezero a hory.',
      },
      {
        title: 'Lodní doprava po jezeře',
        distance: 'ze Stroblu',
        text: 'Přes jezero lodí: linkové lodě spojují Strobl, St. Wolfgang a St. Gilgen – pohodová okružní plavba s horským panoramatem.',
      },
      {
        title: 'Salcburk',
        distance: 'cca 35 km',
        text: 'Mozartovo město s barokním historickým centrem (UNESCO) a pevností Hohensalzburg je vzdálené asi 40 minut.',
      },
      {
        title: 'Bad Ischl a Hallstatt',
        distance: 'cca 20–35 km',
        text: 'Císařské lázeňské město Bad Ischl s Císařskou vilou a světoznámý Hallstatt u Hallstattského jezera jsou ideální celodenní výlety.',
      },
    ],
    activitiesTitle: 'Aktivity u jezera',
    activities: [
      'Koupání v křišťálově čisté vodě',
      'Paddleboard a kajak',
      'Plachtění a windsurfing',
      'Pěší turistika a horské túry',
      'Cyklistika kolem jezera',
      'Výlety lodí',
    ],
  },
  location: {
    kicker: 'Kudy k nám',
    title: 'Jak nás najdete',
    lead: 'Kemp leží ve Schwandu u Abersee na jižním břehu jezera Wolfgangsee – snadno dostupný po silnici B158 mezi St. Gilgen a Stroblem.',
    addressLabel: 'Adresa',
    directions: 'Naplánovat trasu',
    mapLink: 'Zobrazit větší mapu',
    mapTitle: 'Mapa: Camping Primusbauer u jezera Wolfgangsee',
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Těšíme se na vás',
    lead: 'S dotazy a rezervacemi se na nás obraťte telefonicky nebo e-mailem.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    addressLabel: 'Adresa',
    host: 'Vaše hostitelka: Christine Bruckenberger',
  },
  footer: {
    rights: 'Všechna práva vyhrazena.',
  },
};
