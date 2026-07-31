// ═══════════════════════════════════════
//  MoroccoPedia — Central Data Constants
// ═══════════════════════════════════════

export const NAV_ITEMS = [
  { id: 'home',      label: 'Home',          href: '/' },
  { id: 'map',       label: 'Cultural Map',  href: '/map' },
  { id: 'city',      label: 'City Guide',    href: '/city/marrakesh' },
  { id: 'dialect',   label: 'Dictionary',    href: '/dialect' },
  { id: 'community', label: 'Community',     href: '/community' },
  { id: 'tourism',   label: 'Tourism',       href: '/tourism' },
  { id: 'ai',        label: 'AI Features',   href: '/ai' },
];

// ── Hero stats ──────────────────────────
export const HERO_STATS = [
  { value: '60+',  label: 'Cities' },
  { value: '12K',  label: 'Dialect words' },
  { value: '340+', label: 'Traditions' },
  { value: '5M+',  label: 'Diaspora' },
];

// ── Feature cards (homepage) ────────────
export const FEATURES = [
  { icon: '🗺',  title: 'Cultural Map',        desc: 'Click any Moroccan city to explore its unique traditions, food, crafts and local history.', href: '/map' },
  { icon: '📖', title: 'Dialect Dictionary',   desc: 'Discover Darija words with phonetics, etymology and regional variations across Morocco.', href: '/dialect' },
  { icon: '🔄', title: 'Dialect Translation',  desc: 'Translate Darija into Arabic, French, English and Spanish with regional dialect mode.', href: '/dialect' },
  { icon: '🏠',  title: 'Home Culture',         desc: 'Explore family rituals, food traditions and social habits across Morocco\'s 12 regions.', href: '/home-culture' },
  { icon: '🤝', title: 'Community Heritage',   desc: 'Share stories, photos, audio recordings and dialect expressions to preserve living heritage.', href: '/community' },
  { icon: '✈',  title: 'Tourism Mode',         desc: 'Get cultural experiences, local food picks, etiquette guides and survival Darija phrases.', href: '/tourism' },
  { icon: '🤖', title: 'AI Intelligence',      desc: 'Dialect detector, cultural recommender, oral storyteller and artifact classifier — all AI-powered.', href: '/ai' },
  { icon: '📜', title: 'Heritage Archive',     desc: 'A national digital archive of manuscripts, oral histories, photos and cultural records.', href: '/archive' },
  { icon: '🎓', title: 'Education Hub',        desc: 'Curriculum-aligned modules for Moroccan schools, universities and international researchers.', href: '/education' },
];

// ── Cities ──────────────────────────────
export const CITIES = [
  { id: 'marrakesh',    name: 'Marrakesh',    region: 'Marrakesh-Safi',            emoji: '🕌', slug: 'marrakesh' },
  { id: 'casablanca',   name: 'Casablanca',   region: 'Casablanca-Settat',         emoji: '🏙', slug: 'casablanca' },
  { id: 'fes',          name: 'Fès',          region: 'Fès-Meknès',                emoji: '🎨', slug: 'fes' },
  { id: 'tangier',      name: 'Tangier',      region: 'Tanger-Tetouan-Al Hoceima', emoji: '🌊', slug: 'tangier' },
  { id: 'essaouira',    name: 'Essaouira',    region: 'Marrakesh-Safi',            emoji: '⚓', slug: 'essaouira' },
  { id: 'agadir',       name: 'Agadir',       region: 'Souss-Massa',               emoji: '🌴', slug: 'agadir' },
  { id: 'meknes',       name: 'Meknès',       region: 'Fès-Meknès',                emoji: '🏰', slug: 'meknes' },
  { id: 'chefchaouen',  name: 'Chefchaouen',  region: 'Tanger-Tetouan-Al Hoceima', emoji: '💙', slug: 'chefchaouen' },
  { id: 'ouarzazate',   name: 'Ouarzazate',   region: 'Draa-Tafilalet',            emoji: '🎬', slug: 'ouarzazate' },
  { id: 'ifrane',       name: 'Ifrane',       region: 'Fès-Meknès',                emoji: '🏔', slug: 'ifrane' },
];

// Map dot positions (left%, top%)
export const MAP_DOTS = [
  { id: 'marrakesh',   label: 'Marrakesh',   left: '38%', top: '43%' },
  { id: 'casablanca',  label: 'Casablanca',  left: '27%', top: '29%' },
  { id: 'fes',         label: 'Fès',         left: '56%', top: '24%' },
  { id: 'tangier',     label: 'Tangier',     left: '46%', top: '10%' },
  { id: 'essaouira',   label: 'Essaouira',   left: '17%', top: '49%' },
  { id: 'agadir',      label: 'Agadir',      left: '23%', top: '69%' },
  { id: 'meknes',      label: 'Meknès',      left: '51%', top: '19%' },
  { id: 'chefchaouen', label: 'Chefchaouen', left: '41%', top: '8%'  },
  { id: 'ouarzazate',  label: 'Ouarzazate',  left: '66%', top: '48%' },
];

// ── City page data (Marrakesh as default) ──
export const CITY_MARRAKESH = {
  name: 'Marrakesh',
  arabicName: 'مراكش',
  nickname: 'The Red City',
  region: 'Marrakesh-Safi Region',
  subtitle: 'Imperial City · Founded 1062 CE',
  tags: ['🕌 Architecture', '🍜 Cuisine', '🎨 Crafts', '🎵 Music', '🌿 Traditions', '🗣 Marrakshi Dialect'],
  facts: [
    { key: 'Founded',    value: '1062 CE' },
    { key: 'Population', value: '1.1 Million' },
    { key: 'Dialect',    value: 'Marrakshi Darija' },
    { key: 'UNESCO',     value: 'Medina (1985)' },
    { key: 'Nickname',   value: 'The Red City' },
    { key: 'Elevation',  value: '466 m' },
  ],
  food: [
    { icon: '🥘', name: 'Tangia',         sub: 'Slow-cooked lamb — unique to Marrakesh' },
    { icon: '🍲', name: 'Pastilla',       sub: 'Sweet-savoury pigeon pie' },
    { icon: '🫖', name: 'Mint Tea',       sub: 'Ceremonial hospitality ritual' },
    { icon: '🥙', name: 'Harira',         sub: 'Traditional soup for Ramadan' },
    { icon: '🍯', name: 'Msemen & Amlou', sub: 'Flatbread with argan honey dip' },
    { icon: '🌶', name: 'Chermoula',      sub: 'Spiced herb marinade' },
  ],
  crafts: [
    { icon: '⬡',  name: 'Zellige',  sub: 'Geometric mosaic tilework' },
    { icon: '👗', name: 'Kaftan',   sub: 'Embroidered ceremonial robe' },
    { icon: '🪔', name: 'Lanterns', sub: 'Hand-pierced brass lighting' },
  ],
  music: [
    { icon: '🥁', name: 'Gnawa',       sub: 'UNESCO spiritual healing music' },
    { icon: '🐍', name: 'Jemaa el-Fna', sub: 'World\'s greatest open-air stage' },
    { icon: '💃', name: 'Ahwach',      sub: 'Berber collective dance form' },
  ],
  dialectSamples: [
    { word: 'Smiytek?',    meaning: 'What is your name? (Marrakshi)' },
    { word: 'Labas alik?', meaning: 'How are you doing?' },
    { word: 'Bghit tangia!', meaning: 'I want tangia (local dish)' },
  ],
  timeline: [
    { year: '1062 CE', event: 'Founded by Almoravids', color: 'terra' },
    { year: '1147',    event: 'Almohad Capital',        color: 'gold' },
    { year: '1269',    event: 'Marinid Period',         color: 'teal' },
    { year: '1524',    event: 'Saadian Golden Age',     color: 'terra' },
    { year: '1956',    event: 'Modern Morocco',         color: 'gold' },
  ],
};

// ── Dictionary entries ───────────────────
export const DICT_ENTRIES = [
  {
    word: 'Zwina',
    arabic: 'زوينة',
    phonetic: '/ zwee-na / — Adjective',
    definition: 'Beautiful, pretty, nice. One of the most versatile words in Moroccan Darija. Can describe a person, object, situation or experience. Used as a compliment or exclamation of admiration across all Moroccan regions.',
    regions: ['Marrakesh', 'Casablanca', 'Fès', 'Tangier', 'Nationwide'],
    variants: [
      { city: 'Marrakesh', word: 'Zwina', meaning: 'Beautiful / nice' },
      { city: 'Casablanca', word: 'Zwina / Baghi', meaning: 'Beautiful / I want it' },
      { city: 'Tangier', word: 'Mli7a', meaning: 'Beautiful (Northern variant)' },
      { city: 'Souss', word: 'Ifilki', meaning: 'Beautiful (Tachelhit / Amazigh)' },
    ],
  },
  {
    word: 'Bezzaf',
    arabic: 'بزاف',
    phonetic: '/ bez-zaf / — Adverb',
    definition: 'A lot, very much, too much. Used as an intensifier in both positive and negative contexts — the Moroccan equivalent of "beaucoup" in French. Universally understood across all Moroccan dialects.',
    regions: ['Nationwide · All regions'],
    variants: [
      { city: 'Positive', word: 'Zwina bezzaf', meaning: 'Very beautiful' },
      { city: 'Negative', word: 'Ghali bezzaf', meaning: 'Way too expensive' },
      { city: 'Northern', word: 'Wajid', meaning: 'A lot (Spanish influence)' },
    ],
  },
  {
    word: 'Labas',
    arabic: 'لاباس',
    phonetic: '/ la-bas / — Greeting',
    definition: 'How are you? Are you okay? The most common daily greeting in Moroccan Darija. Derived from the French "il n\'y a pas", meaning "there is nothing (wrong)". The standard response is also "Labas" meaning "I\'m fine."',
    regions: ['Nationwide'],
    variants: [
      { city: 'Greeting', word: 'Labas alik?', meaning: 'How are you? (to a man)' },
      { city: 'Response', word: 'Labas, shukran', meaning: 'Fine, thank you' },
      { city: 'Northern', word: 'Kif-kif', meaning: 'So-so (from Spanish: igual-igual)' },
    ],
  },
];

export const DICT_TRANSLATIONS = {
  ar: { text: 'كيف حالك؟ هل أنت بخير؟',          lang: 'Arabic translation' },
  fr: { text: 'Comment vas-tu? Tu vas bien?',    lang: 'French translation' },
  en: { text: 'How are you? Are you doing well?', lang: 'English translation' },
  es: { text: '¿Cómo estás? ¿Estás bien?',       lang: 'Spanish translation' },
};

// ── Community feed ──────────────────────
export const COMMUNITY_POSTS = [
  { avatar: '🌿', color: 'terra',  user: 'Fatima Zahra B.', city: 'Marrakesh', text: "My grandmother's recipe for Tangia — the slow-cooked lamb dish unique to Marrakesh. Cooked in a clay urn buried in hammam coals overnight. The spices: preserved lemons, cumin, saffron from Taliouine...", tags: ['Food', 'Tradition', 'Marrakesh'] },
  { avatar: '🎵', color: 'teal',   user: 'Youssef A.',       city: 'Tangier',   text: "Audio of the word 'Gzar' as pronounced in Tangier — it means butcher but the Tanjawi accent is very distinct from Casawi. My grandfather was a butcher in the old Tangier medina for 40 years.", tags: ['Audio', 'Dialect', 'Tangier'] },
  { avatar: '🏛', color: 'gold',   user: 'Khadija E.',       city: 'Fès',       text: "Story of my family's tannery in the Fès medina, passed down 6 generations. The leather dyeing using natural pigments from pomegranate, saffron and indigo. A UNESCO-recognised craft that may disappear.", tags: ['Craft', 'History', 'Fès'] },
  { avatar: '🌄', color: 'teal',   user: 'Mohamed N.',       city: 'Chefchaouen', text: "Photo series of the blue walls during Ramadan — the tradition of repainting the medina blue every year before the holy month, and why we do it.", tags: ['Photo', 'Ramadan', 'Chefchaouen'] },
];

// ── Tourism experiences ─────────────────
export const EXPERIENCES = [
  { emoji: '🕌', city: 'Marrakesh',    name: 'Jemaa el-Fna at Sunset',   desc: "The world's greatest open-air theatre — storytellers, musicians, snake charmers and 100 food stalls all at once.", rating: '4.9', bg: 'rgba(192,57,10,0.09)' },
  { emoji: '🎨', city: 'Fès',          name: 'Chouara Tannery',           desc: "Watch leather dyeing as it's been done for a thousand years in the world's oldest working tannery.", rating: '4.8', bg: 'rgba(10,122,106,0.09)' },
  { emoji: '💙', city: 'Chefchaouen',  name: 'The Blue Medina',           desc: 'Wander cobalt alleyways in this mountain city that has been painted blue for centuries of tradition.', rating: '4.9', bg: 'rgba(30,58,95,0.09)' },
  { emoji: '🌊', city: 'Essaouira',    name: 'Gnawa Music Festival',      desc: 'Experience UNESCO-listed spiritual music of the Gnawa masters inside the old Portuguese ramparts.', rating: '4.7', bg: 'rgba(196,123,10,0.09)' },
  { emoji: '🏔', city: 'Atlas Mtns',   name: 'Berber Village Stay',       desc: 'Sleep in a traditional Amazigh home, eat tagine over wood fire and learn centuries of Berber traditions.', rating: '5.0', bg: 'rgba(192,57,10,0.06)' },
  { emoji: '🌴', city: 'Sahara',       name: 'Camel Trek at Dawn',        desc: 'Ride into the Erg Chebbi dunes at sunrise and spend the night in a Bedouin camp under the stars.', rating: '4.9', bg: 'rgba(196,123,10,0.06)' },
];

export const PHRASES = [
  { moroccan: 'Salam alikum',   phonetic: 'sa-lam a-li-kum',  meaning: 'Peace be upon you — universal greeting', category: 'Greeting' },
  { moroccan: 'Shukran bezzaf', phonetic: 'shuk-ran bez-zaf', meaning: 'Thank you very much',                    category: 'Politeness' },
  { moroccan: 'Bsaha u raha',   phonetic: 'bsa-ha u ra-ha',   meaning: 'Enjoy your meal / Cheers',               category: 'Dining' },
  { moroccan: 'Fin kayn souk?', phonetic: 'fin kay-n suk',    meaning: 'Where is the market?',                   category: 'Navigation' },
  { moroccan: 'Shhal hada?',    phonetic: 'shlal ha-da',      meaning: 'How much is this?',                      category: 'Shopping' },
  { moroccan: 'Baraka llahu fik', phonetic: 'ba-ra-ka la-hu fik', meaning: 'God bless you — deep gratitude',    category: 'Gratitude' },
];

// ── AI models ────────────────────────────
export const AI_MODELS = [
  { icon: '🎙', badge: 'Audio AI',      badgeColor: 'terra',  title: 'Dialect Region Detector',        desc: 'Upload or record audio — the model identifies Casawi, Tanjawi, Marrakshi, Soussiya, Hassaniya or Jebli dialect with confidence score. Fine-tuned on community-crowdsourced speech.', tech: 'Whisper fine-tune · FastAPI · Moroccan speech dataset' },
  { icon: '🔄', badge: 'NLP AI',        badgeColor: 'teal',   title: 'Darija Translation Engine',      desc: 'Neural machine translation purpose-built for Moroccan Arabic. Handles code-switching (Darija + French + Spanish) and translates into Arabic, French, English and Spanish.', tech: 'MarianMT fine-tune · NLLB-200 · 200K sentence pairs' },
  { icon: '📸', badge: 'Vision AI',     badgeColor: 'gold',   title: 'Cultural Artifact Classifier',   desc: 'Auto-tags uploaded photos: artifact type, era estimate, region of origin, cultural significance. Flags UNESCO-level artifacts for expert review. Reduces curation effort by 80%.', tech: 'CLIP fine-tune · Florence-2 · human-in-the-loop' },
  { icon: '📖', badge: 'Generative AI', badgeColor: 'terra',  title: 'AI Oral Storyteller',            desc: 'Ask "Tell me about a wedding in Fès in 1920" — receive a richly detailed, historically grounded first-person narrative. Powered by RAG over the MoroccoPedia knowledge base.', tech: 'Claude API · pgvector · RAG pipeline · multilingual' },
  { icon: '🗺', badge: 'Recommender',   badgeColor: 'teal',   title: 'Cultural Discovery Recommender', desc: 'Learns from your browsing and interests to suggest traditions, cities and artifacts you haven\'t seen yet. Personalised onboarding collects interests to seed the model.', tech: 'LightFM · Sentence-BERT embeddings · Redis' },
  { icon: '🎓', badge: 'EdTech AI',     badgeColor: 'gold',   title: 'Adaptive Darija Tutor',          desc: 'Conversational AI tutor teaching Darija with spaced repetition, culturally contextualised examples and dialect tracks. Adjusts difficulty based on user responses.', tech: 'Claude API · curriculum graph · spaced repetition' },
];

export const BOT_REPLIES = [
  'Morocco has 12 official regions, each with distinct dialects, cuisine and cultural identity. The contrast between the Rif mountains and the Sahara is extraordinary. 🏔🌴',
  'The Moroccan dialect (Darija) mixes Classical Arabic, Amazigh (Berber), French, Spanish and even Portuguese — making it one of the world\'s most linguistically rich spoken languages. 🗣',
  'Moroccan cuisine is considered top 5 globally. Key dishes: tagine, couscous, bastilla, harira, msemen. Each city has a signature dish you can\'t find elsewhere. 🍜',
  'The Amazigh (Berber) people are Morocco\'s indigenous population. Tamazight was made an official language alongside Arabic in the 2011 constitution. ✦',
  'Moroccan architecture: the medina (walled city), the riad (courtyard house), the medersa (Quranic school) and zellige tilework. Each city has its own architectural fingerprint. 🏛',
];

export const STATIC_CITIES = [
  { slug:'marrakesh',   name:'Marrakesh',    country:'Morocco' },
  { slug:'fes',         name:'Fès',          country:'Morocco' },
  { slug:'casablanca',  name:'Casablanca',   country:'Morocco' },
  { slug:'tangier',     name:'Tanger',       country:'Morocco' },
  { slug:'chefchaouen', name:'Chefchaouen',  country:'Morocco' },
  { slug:'essaouira',   name:'Essaouira',    country:'Morocco' },
  { slug:'agadir',      name:'Agadir',       country:'Morocco' },
  { slug:'ouarzazate',  name:'Ouarzazate',   country:'Morocco' },
  { slug:'ifrane',      name:'Ifrane',       country:'Morocco' },
  { slug:'meknes',      name:'Meknès',       country:'Morocco' },
];

export const STATIC_MARRAKESH = {
  slug: 'marrakesh',
  name: 'Marrakesh',
  arabicName: 'مراكش',
  nickname: 'La Ville Rouge',
  founded: '1062 CE',
  population: '928,850',
  region: 'Marrakesh-Safi',
  dialect: 'Marrakshi',
  bestTime: 'Oct–Apr',
  description: 'The beating heart of Morocco. A medieval imperial city pulsing with colour and life. Home to the legendary Djemaa el-Fna — the world\'s greatest open-air spectacle.',
  food: ['Tangia Marrakchia', 'Couscous Royal', 'Harira', 'Bastilla', 'Msemen'],
  crafts: ['Zellige tilework', 'Tadelakt plaster', 'Leather goods', 'Babouches', 'Argan products'],
  music: ['Gnawa', 'Chaabi', 'Amazigh folk'],
  mustSee: ['Djemaa el-Fna', 'Koutoubia Mosque', 'Bahia Palace', 'Majorelle Garden', 'Mellah (Jewish Quarter)'],
  dialect_words: [
    { word: 'Zwina', meaning: 'Beautiful' },
    { word: 'Tangia', meaning: 'Slow-cooked lamb' },
    { word: 'Daba', meaning: 'Now / Right away' },
  ],
};
