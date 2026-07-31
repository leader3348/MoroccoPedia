/**
 * MoroccoPedia — Complete Moroccan Darija Database v3.0
 * 355 entries — 7 regional dialects — 120+ themes
 */

const DIALECT_DATA = [
  {
    "word": "labas",
    "arabic": "لاباس",
    "phonetic": "/la-bas/",
    "partOfSpeech": "greeting",
    "definition": "How are you? / Fine. Most used greeting in Moroccan Darija.",
    "examples": [
      "Labas alik?",
      "Labas, shukran",
      "Labas l-7al"
    ],
    "translations": {
      "arabic": "كيف حالك؟",
      "french": "Comment vas-tu?",
      "english": "How are you?",
      "spanish": "¿Cómo estás?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Labas alik?",
        "phonetic": "/la-bas a-lik/",
        "meaning": "Standard form"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Kif-kif?",
        "phonetic": "/kif-kif/",
        "meaning": "So-so — from Spanish igual-igual"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Kidayr?",
        "phonetic": "/ki-dayr/",
        "meaning": "How are you doing?"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Mamk tgit?",
        "phonetic": "/mam-k-tgit/",
        "meaning": "How are you in Tachelhit"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Kif l-7al?",
        "phonetic": "/kif el-hal/",
        "meaning": "How is the situation?"
      }
    ],
    "origin": "French",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "greeting",
      "daily-use",
      "social"
    ],
    "verified": true
  },
  {
    "word": "salam",
    "arabic": "السلام",
    "phonetic": "/sa-lam/",
    "partOfSpeech": "greeting",
    "definition": "Peace / hello. Short for Salam Alikum.",
    "examples": [
      "Salam!",
      "Salam alikum",
      "3alikum salam"
    ],
    "translations": {
      "arabic": "السلام عليكم",
      "french": "Bonjour / Salut",
      "english": "Hello / Peace",
      "spanish": "Hola / Paz"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Salam",
        "phonetic": "/sa-lam/",
        "meaning": "Universal greeting"
      },
      {
        "region": "Rif Mountains",
        "dialect": "Tarifit",
        "word": "Azul",
        "phonetic": "/a-zul/",
        "meaning": "Hello — literally 'blue'"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Azul",
        "phonetic": "/a-zul/",
        "meaning": "Hello in Tachelhit"
      },
      {
        "region": "Middle Atlas",
        "dialect": "Tamazight",
        "word": "Azul fellak",
        "phonetic": "/a-zul fel-lak/",
        "meaning": "Hello to you"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Salam 3alikum",
        "phonetic": "/sa-lam a-li-kum/",
        "meaning": "Full form always used"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "greeting",
      "daily-use",
      "religion"
    ],
    "verified": true
  },
  {
    "word": "mrhba",
    "arabic": "مرحبا",
    "phonetic": "/mer-hba/",
    "partOfSpeech": "greeting",
    "definition": "Welcome! Warm greeting for guests.",
    "examples": [
      "Mrhba bik!",
      "Mrhba wasahla",
      "Mrhba bikoum"
    ],
    "translations": {
      "arabic": "أهلاً وسهلاً",
      "french": "Bienvenue",
      "english": "Welcome",
      "spanish": "Bienvenido"
    },
    "regionalVariants": [
      {
        "region": "Central",
        "dialect": "Standard Darija",
        "word": "Mrhba bik",
        "phonetic": "/mer-hba bik/",
        "meaning": "Welcome to you"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Bienvenido",
        "phonetic": "/bjen-ve-ni-do/",
        "meaning": "Spanish bienvenido also used"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ansuf",
        "phonetic": "/an-suf/",
        "meaning": "Welcome in Tachelhit"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Mrhba wasahla",
        "phonetic": "/mer-hba wa-sah-la/",
        "meaning": "Welcome and ease — classical Fassi"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "greeting",
      "hospitality",
      "social"
    ],
    "verified": true
  },
  {
    "word": "b-slama",
    "arabic": "بالسلامة",
    "phonetic": "/b-sla-ma/",
    "partOfSpeech": "farewell",
    "definition": "Goodbye. Literally 'with safety'.",
    "examples": [
      "B-slama!",
      "Safi, b-slama"
    ],
    "translations": {
      "arabic": "مع السلامة",
      "french": "Au revoir",
      "english": "Goodbye",
      "spanish": "Adiós"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "B-slama",
        "phonetic": "/b-sla-ma/",
        "meaning": "Goodbye — standard"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Adios",
        "phonetic": "/a-djos/",
        "meaning": "Spanish adios very common"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Aqqa yan",
        "phonetic": "/aq-qa yan/",
        "meaning": "Goodbye in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "farewell",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "sbah lkhir",
    "arabic": "صباح الخير",
    "phonetic": "/sba7 l-khir/",
    "partOfSpeech": "greeting",
    "definition": "Good morning! Response: Sbah n-nur.",
    "examples": [
      "Sbah lkhir!",
      "Sbah n-nur (response)"
    ],
    "translations": {
      "arabic": "صباح الخير",
      "french": "Bonjour",
      "english": "Good morning",
      "spanish": "Buenos días"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Sbah lkhir",
        "phonetic": "/sba7 l-khir/",
        "meaning": "Good morning"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Sbah l-fol",
        "phonetic": "/sba7 el-fol/",
        "meaning": "Morning of jasmine — romantic Fassi"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "N-har said",
        "phonetic": "/n-har sa-id/",
        "meaning": "Happy day — Hassaniya form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "greeting",
      "morning"
    ],
    "verified": true
  },
  {
    "word": "msa lkhir",
    "arabic": "مساء الخير",
    "phonetic": "/msa l-khir/",
    "partOfSpeech": "greeting",
    "definition": "Good evening! Response: Msa n-nur.",
    "examples": [
      "Msa lkhir!",
      "Msa n-nur (response)"
    ],
    "translations": {
      "arabic": "مساء الخير",
      "french": "Bonsoir",
      "english": "Good evening",
      "spanish": "Buenas tardes"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Msa lkhir",
        "phonetic": "/msa l-khir/",
        "meaning": "Good evening"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Buenas",
        "phonetic": "/bwe-nas/",
        "meaning": "Spanish buenas also used"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "greeting",
      "evening"
    ],
    "verified": true
  },
  {
    "word": "tsb7 3la khir",
    "arabic": "تصبح على خير",
    "phonetic": "/ts-be7 3la khir/",
    "partOfSpeech": "farewell",
    "definition": "Good night! Literally 'wake up to goodness'.",
    "examples": [
      "Tsb7 3la khir!",
      "Tsb7ou 3la khir (plural)"
    ],
    "translations": {
      "arabic": "تصبح على خير",
      "french": "Bonne nuit",
      "english": "Good night",
      "spanish": "Buenas noches"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Tsb7 3la khir",
        "phonetic": "/ts-be7 3la khir/",
        "meaning": "Good night"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tili gh wawal",
        "phonetic": "/ti-li gh wa-wal/",
        "meaning": "Good night in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "farewell",
      "night"
    ],
    "verified": true
  },
  {
    "word": "shukran",
    "arabic": "شكراً",
    "phonetic": "/shuk-ran/",
    "partOfSpeech": "expression",
    "definition": "Thank you. Most common gratitude expression.",
    "examples": [
      "Shukran!",
      "Shukran bezzaf",
      "Shukran 3la had l-khidma"
    ],
    "translations": {
      "arabic": "شكراً",
      "french": "Merci",
      "english": "Thank you",
      "spanish": "Gracias"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Shukran",
        "phonetic": "/shuk-ran/",
        "meaning": "Thank you"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Mamnoun",
        "phonetic": "/mam-noun/",
        "meaning": "Thank you — completely different word"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Tanmirt",
        "phonetic": "/tan-mirt/",
        "meaning": "Thank you in Tarifit"
      },
      {
        "region": "Middle Atlas",
        "dialect": "Tamazight",
        "word": "Tanmirt",
        "phonetic": "/tan-mirt/",
        "meaning": "Thank you in Tamazight"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Gracias",
        "phonetic": "/gra-sjas/",
        "meaning": "Spanish gracias used casually"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "politeness",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "smhli",
    "arabic": "سامحني",
    "phonetic": "/smeh-li/",
    "partOfSpeech": "expression",
    "definition": "Excuse me / sorry / forgive me.",
    "examples": [
      "Smhli, fin kayna l-mhatta?",
      "Smhli 3la had l-ghalta"
    ],
    "translations": {
      "arabic": "اعذرني",
      "french": "Pardon / Excuse-moi",
      "english": "Excuse me / Sorry",
      "spanish": "Perdón"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Smhli",
        "phonetic": "/smeh-li/",
        "meaning": "Excuse me"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Perdon",
        "phonetic": "/per-don/",
        "meaning": "Spanish perdón used"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Asm7 liya",
        "phonetic": "/as-mah li-ya/",
        "meaning": "Forgive me — formal Fassi"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "politeness",
      "apology"
    ],
    "verified": true
  },
  {
    "word": "3afak",
    "arabic": "عفاك",
    "phonetic": "/3-fa-k/",
    "partOfSpeech": "expression",
    "definition": "Please / if you please. Most important polite word.",
    "examples": [
      "3afak, 3tini l-ma",
      "Wahed l-qahwa 3afak"
    ],
    "translations": {
      "arabic": "من فضلك",
      "french": "S'il vous plaît",
      "english": "Please",
      "spanish": "Por favor"
    },
    "regionalVariants": [
      {
        "region": "Central/South",
        "dialect": "Standard Darija",
        "word": "3afak",
        "phonetic": "/3-fa-k/",
        "meaning": "Please — standard"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Por favor",
        "phonetic": "/por fa-bor/",
        "meaning": "Spanish por favor used"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Min fdlik",
        "phonetic": "/min fed-lik/",
        "meaning": "Classical please — Fassi formal"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Barakalafik",
        "phonetic": "/ba-ra-ka-la-fik/",
        "meaning": "Please / bless you"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "politeness",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "barak allahu fik",
    "arabic": "بارك الله فيك",
    "phonetic": "/ba-rak al-la-hu fik/",
    "partOfSpeech": "expression",
    "definition": "May God bless you. Said as thanks or blessing.",
    "examples": [
      "Barakallahu fik!",
      "Barak Lfik sidi"
    ],
    "translations": {
      "arabic": "بارك الله فيك",
      "french": "Que Dieu vous bénisse",
      "english": "God bless you",
      "spanish": "Que Dios te bendiga"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Barak Lfik",
        "phonetic": "/ba-rak el-fik/",
        "meaning": "Common short form"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Barakallahu fik",
        "phonetic": "/ba-ra-kal-la-hu fik/",
        "meaning": "Full classical — very Fassi"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "politeness",
      "blessing"
    ],
    "verified": true
  },
  {
    "word": "inshallah",
    "arabic": "إن شاء الله",
    "phonetic": "/in-sha-l-lah/",
    "partOfSpeech": "expression",
    "definition": "God willing. Can mean yes, maybe, or politely no.",
    "examples": [
      "Ghadi njik inshallah",
      "Wash ta 3awni? — Inshallah"
    ],
    "translations": {
      "arabic": "إن شاء الله",
      "french": "Si Dieu le veut",
      "english": "God willing / Hopefully",
      "spanish": "Ojalá"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Inshallah",
        "phonetic": "/in-sha-l-lah/",
        "meaning": "God willing — universal"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "daily-use",
      "expression"
    ],
    "verified": true
  },
  {
    "word": "l-hamdullah",
    "arabic": "الحمد لله",
    "phonetic": "/el-ham-du-l-lah/",
    "partOfSpeech": "expression",
    "definition": "Thank God / Praise God.",
    "examples": [
      "Labas? — L-hamdullah",
      "L-hamdullah 3la kull 7al"
    ],
    "translations": {
      "arabic": "الحمد لله",
      "french": "Dieu merci",
      "english": "Thank God / Alhamdulillah",
      "spanish": "Gracias a Dios"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-hamdullah",
        "phonetic": "/el-ham-du-l-lah/",
        "meaning": "Thank God — universal"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "L-hamdullah rabbi",
        "phonetic": "/el-ham-du-l-lah rab-bi/",
        "meaning": "Emphasizes 'rabbi' (my Lord)"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "llah i3tik ssaha",
    "arabic": "الله يعطيك الصحة",
    "phonetic": "/l-lah i3-tik s-sa-ha/",
    "partOfSpeech": "expression",
    "definition": "May God give you health. Said after eating or good work.",
    "examples": [
      "L-hamdullah 3la l-makla — Llah i3tik ssaha"
    ],
    "translations": {
      "arabic": "الله يعطيك الصحة",
      "french": "Que Dieu vous donne la santé",
      "english": "May God give you health",
      "spanish": "Que Dios te dé salud"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Llah i3tik ssaha",
        "phonetic": "/l-lah i3-tik s-sa-ha/",
        "meaning": "God give you health"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Bssaha wa r-ra7a",
        "phonetic": "/b-ssa-ha wa r-ra-ha/",
        "meaning": "To health and comfort — Fassi form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "blessing",
      "politeness",
      "food"
    ],
    "verified": true
  },
  {
    "word": "tagine",
    "arabic": "طاجين",
    "phonetic": "/ta-djin/",
    "partOfSpeech": "noun",
    "definition": "Morocco's iconic slow-cooked dish in conical clay pot.",
    "examples": [
      "3tini tagine d-djaj",
      "Tagine b-l-barqouq w-l-lawz",
      "Tagine 3la n-nar"
    ],
    "translations": {
      "arabic": "طاجين",
      "french": "Tajine",
      "english": "Tagine",
      "spanish": "Tagín"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Tangia",
        "phonetic": "/tan-dja/",
        "meaning": "Marrakesh unique — lamb cooked in hammam coals"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Tagine b-l-7out",
        "phonetic": "/b-l-7out/",
        "meaning": "Fish tagine — Fes coastal specialty"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tagine b-zit argan",
        "phonetic": "/b-zit ar-gan/",
        "meaning": "With argan oil — Souss style"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Tagra",
        "phonetic": "/tag-ra/",
        "meaning": "Lamb cooked on hot sand — Saharan version"
      },
      {
        "region": "Meknes",
        "dialect": "Meknassi",
        "word": "Tagine b-khodar",
        "phonetic": "/b-kho-dar/",
        "meaning": "Vegetable tagine — Meknes style"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "cooking",
      "traditional",
      "signature-dish"
    ],
    "verified": true
  },
  {
    "word": "couscous",
    "arabic": "كسكس",
    "phonetic": "/kus-kus/",
    "partOfSpeech": "noun",
    "definition": "The Friday sacred dish — steamed semolina with vegetables.",
    "examples": [
      "L-jmu3a ma 3adha bla kuskus",
      "Kuskus b-sbe3 khodar"
    ],
    "translations": {
      "arabic": "الكسكس",
      "french": "Couscous",
      "english": "Couscous",
      "spanish": "Cuscús"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Kuskus",
        "phonetic": "/kus-kus/",
        "meaning": "Friday dish — universal"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Seffa",
        "phonetic": "/sef-fa/",
        "meaning": "Sweet dessert couscous with raisins and cinnamon"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Seksu",
        "phonetic": "/sek-su/",
        "meaning": "Tachelhit name — with argan oil"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "3aich",
        "phonetic": "/3aich/",
        "meaning": "Millet-based couscous — very different"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Kuskus b-tfaya",
        "phonetic": "/b-tfa-ya/",
        "meaning": "With caramelized onions — Marrakesh style"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "Friday",
      "family",
      "sacred"
    ],
    "verified": true
  },
  {
    "word": "harira",
    "arabic": "حريرة",
    "phonetic": "/ha-ri-ra/",
    "partOfSpeech": "noun",
    "definition": "Morocco's national soup — tomatoes, lentils, chickpeas. The Ramadan iftar dish.",
    "examples": [
      "Ramadan ma kamlash bla harira",
      "3tini kes harira"
    ],
    "translations": {
      "arabic": "شوربة الحريرة",
      "french": "Harira",
      "english": "Harira soup",
      "spanish": "Sopa harira"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Harira b-l-7rishas",
        "phonetic": "/b-l-7ri-shas/",
        "meaning": "With fried dough balls — Marrakesh Ramadan"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Harira d-Fas",
        "phonetic": "/ha-ri-ra d-fas/",
        "meaning": "Thicker with more tomato"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Harira b-l-humus",
        "phonetic": "/b-l-hu-mus/",
        "meaning": "More chickpeas — northern version"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "Ramadan",
      "soup"
    ],
    "verified": true
  },
  {
    "word": "pastilla",
    "arabic": "بستيلة",
    "phonetic": "/bas-til-la/",
    "partOfSpeech": "noun",
    "definition": "Pigeon with almonds and spices in flaky warka pastry, topped with sugar and cinnamon.",
    "examples": [
      "Pastilla d-l-7mam",
      "Pastilla d-l-7out (fish)"
    ],
    "translations": {
      "arabic": "البسطيلة",
      "french": "Pastilla",
      "english": "Pastilla",
      "spanish": "Pastela"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Bastila d-l-7mam",
        "phonetic": "/bas-ti-la d el-7mam/",
        "meaning": "Original pigeon pastilla — Fes birthplace"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Bastila d-l-7out",
        "phonetic": "/d el-7out/",
        "meaning": "Seafood pastilla — Casablanca innovation"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Pastilla d-djaj",
        "phonetic": "/d dja-dj/",
        "meaning": "Chicken version"
      }
    ],
    "origin": "Andalusian",
    "regions": [
      "Fes",
      "Marrakesh"
    ],
    "themes": [
      "food",
      "celebration",
      "sophisticated"
    ],
    "verified": true
  },
  {
    "word": "tangia",
    "arabic": "الطانجية",
    "phonetic": "/tan-dja/",
    "partOfSpeech": "noun",
    "definition": "Marrakesh's most unique dish — lamb in clay urn cooked overnight in hammam coals.",
    "examples": [
      "Tangia 3la n-nar d-l-ferran",
      "3ayyesh-li tangia"
    ],
    "translations": {
      "arabic": "الطانجية",
      "french": "Tangia",
      "english": "Tangia",
      "spanish": "Tangia"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Tangia",
        "phonetic": "/tan-dja/",
        "meaning": "THE Marrakesh dish — cooked in hammam coals only"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Marrakesh"
    ],
    "themes": [
      "food",
      "Marrakesh",
      "signature-dish"
    ],
    "verified": true
  },
  {
    "word": "rfissa",
    "arabic": "رفيسة",
    "phonetic": "/rfi-sa/",
    "partOfSpeech": "noun",
    "definition": "Chicken with lentils, fenugreek and msemmen bread. Served at celebrations.",
    "examples": [
      "Rfissa d-l-3ars",
      "L-jara waladat — diru rfissa"
    ],
    "translations": {
      "arabic": "الرفيسة",
      "french": "Rfissa",
      "english": "Rfissa",
      "spanish": "Rfissa"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Rfissa d-Fas",
        "phonetic": "/rfi-sa d fas/",
        "meaning": "Most elaborate version"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Rfissa b-l-7lbiya",
        "phonetic": "/b-l-7el-bi-ya/",
        "meaning": "With fenugreek — Marrakesh tradition"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "celebration",
      "post-birth"
    ],
    "verified": true
  },
  {
    "word": "msemen",
    "arabic": "المسمن",
    "phonetic": "/ms-men/",
    "partOfSpeech": "noun",
    "definition": "Layered square Moroccan flatbread fried on a griddle. Eaten for breakfast.",
    "examples": [
      "Msemen b-l-3asal",
      "Jib msemen mn l-ferran"
    ],
    "translations": {
      "arabic": "المسمن",
      "french": "Msemen",
      "english": "Msemen flatbread",
      "spanish": "Msemen"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Msemen",
        "phonetic": "/ms-men/",
        "meaning": "Square layered flatbread"
      },
      {
        "region": "North",
        "dialect": "Tarifit",
        "word": "Meloui",
        "phonetic": "/me-lwi/",
        "meaning": "Round spiral version from northern Morocco"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tafarnout",
        "phonetic": "/ta-far-nout/",
        "meaning": "Round stone-baked bread"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "breakfast",
      "bread"
    ],
    "verified": true
  },
  {
    "word": "amlou",
    "arabic": "أملو",
    "phonetic": "/am-lu/",
    "partOfSpeech": "noun",
    "definition": "Moroccan almond paste — toasted almonds, argan oil and honey. A Souss specialty.",
    "examples": [
      "Msemen b-l-amlou",
      "Amlou d-Souss"
    ],
    "translations": {
      "arabic": "أملو",
      "french": "Amlou",
      "english": "Amlou (argan almond paste)",
      "spanish": "Amlou"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Amlou",
        "phonetic": "/am-lu/",
        "meaning": "Souss specialty — cannot be replicated elsewhere"
      }
    ],
    "origin": "Amazigh/Souss",
    "regions": [
      "Souss",
      "Agadir"
    ],
    "themes": [
      "food",
      "breakfast",
      "Souss",
      "argan"
    ],
    "verified": true
  },
  {
    "word": "b'ssara",
    "arabic": "البصارة",
    "phonetic": "/b-ssa-ra/",
    "partOfSpeech": "noun",
    "definition": "Fava bean soup with olive oil and cumin. The workers' breakfast.",
    "examples": [
      "B'ssara sbah lkhir",
      "Kes b'ssara b-l-khbz"
    ],
    "translations": {
      "arabic": "البصارة",
      "french": "Bessara",
      "english": "Bessara (fava bean soup)",
      "spanish": "Bessara"
    },
    "regionalVariants": [
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Byesar",
        "phonetic": "/bje-sar/",
        "meaning": "Northern name for fava bean soup"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "breakfast",
      "soup",
      "workers"
    ],
    "verified": true
  },
  {
    "word": "zaalouk",
    "arabic": "الزعلوك",
    "phonetic": "/za3-louk/",
    "partOfSpeech": "noun",
    "definition": "Cooked eggplant and tomato salad with cumin and garlic.",
    "examples": [
      "Zaalouk b-l-badinjan",
      "3andna zaalouk w-taktouka"
    ],
    "translations": {
      "arabic": "الزعلوك",
      "french": "Zaalouk",
      "english": "Zaalouk (eggplant salad)",
      "spanish": "Zaalouk"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Zaalouk b-l-7aroura",
        "phonetic": "/b-l-7a-rou-ra/",
        "meaning": "Spicier — extra pepper"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "vegetable",
      "salad"
    ],
    "verified": true
  },
  {
    "word": "taktouka",
    "arabic": "تكتوكة",
    "phonetic": "/tak-too-ka/",
    "partOfSpeech": "noun",
    "definition": "Cooked pepper and tomato salad. Lighter than zaalouk.",
    "examples": [
      "Taktouka b-l-felfel",
      "Taktouka w-zaalouk"
    ],
    "translations": {
      "arabic": "الطكطوكة",
      "french": "Taktouka",
      "english": "Taktouka",
      "spanish": "Taktouka"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Taktouka",
        "phonetic": "/tak-too-ka/",
        "meaning": "Pepper-tomato salad"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "salad",
      "meze"
    ],
    "verified": true
  },
  {
    "word": "chermoula",
    "arabic": "الشرمولة",
    "phonetic": "/sher-mou-la/",
    "partOfSpeech": "noun",
    "definition": "Morocco's signature marinade — herbs, garlic, cumin, paprika, lemon, olive oil.",
    "examples": [
      "7out b-chermoula",
      "Chermoula d-smak"
    ],
    "translations": {
      "arabic": "الشرمولة",
      "french": "Chermoula",
      "english": "Chermoula marinade",
      "spanish": "Chermoula"
    },
    "regionalVariants": [
      {
        "region": "Coast",
        "dialect": "Standard Darija",
        "word": "Chermoula d-l-7out",
        "phonetic": "/d el-7out/",
        "meaning": "Fish chermoula — coastal specialty"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Chermoula 7mra",
        "phonetic": "/7am-ra/",
        "meaning": "Red chermoula with extra paprika"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "sauce",
      "marinade"
    ],
    "verified": true
  },
  {
    "word": "ras el hanout",
    "arabic": "رأس الحانوت",
    "phonetic": "/ras el ha-nout/",
    "partOfSpeech": "noun",
    "definition": "'Top of the shop' — complex spice blend with up to 30 ingredients.",
    "examples": [
      "Tagine b-ras el hanout",
      "Jib ras el hanout mn l-3attar"
    ],
    "translations": {
      "arabic": "رأس الحانوت",
      "french": "Ras el-hanout",
      "english": "Ras el hanout spice blend",
      "spanish": "Ras el hanout"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Ras el hanout d-Fas",
        "phonetic": "/d fas/",
        "meaning": "Fassi blend contains rose petals and lavender"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "3ttar",
        "phonetic": "/3at-tar/",
        "meaning": "The herbalist who makes it"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "spices",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "atay",
    "arabic": "أتاي",
    "phonetic": "/a-tay/",
    "partOfSpeech": "noun",
    "definition": "Moroccan mint tea — the sacred national drink. Green tea, fresh mint, sugar. Not just a drink — a ritual.",
    "examples": [
      "3ayyesh-li atay",
      "Atay b-na3na3",
      "Nkharjou n-shrbu atay"
    ],
    "translations": {
      "arabic": "الشاي بالنعناع",
      "french": "Thé à la menthe",
      "english": "Moroccan mint tea",
      "spanish": "Té de menta marroquí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Atay",
        "phonetic": "/a-tay/",
        "meaning": "Mint tea — national drink"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Gahoua",
        "phonetic": "/ga-hou-a/",
        "meaning": "Saharan tea — much sweeter, 3 ceremonial rounds"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Atay azniq",
        "phonetic": "/a-tay az-niq/",
        "meaning": "Mountain mint — stronger and more aromatic"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "drink",
      "ritual",
      "hospitality"
    ],
    "verified": true
  },
  {
    "word": "qahwa",
    "arabic": "القهوة",
    "phonetic": "/qah-wa/",
    "partOfSpeech": "noun",
    "definition": "Coffee. Café au lait (qahwa n-nus) is the most popular morning drink.",
    "examples": [
      "Wahed qahwa 3afak",
      "Qahwa l7lib",
      "Qahwa kh7la (black)"
    ],
    "translations": {
      "arabic": "القهوة",
      "french": "Café",
      "english": "Coffee",
      "spanish": "Café"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Qahwa n-nus",
        "phonetic": "/qah-wa n-nus/",
        "meaning": "Half coffee half milk — café au lait"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Café con leche",
        "phonetic": "/ka-fe kon le-tje/",
        "meaning": "Spanish name used in Tangier"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "drink",
      "café",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "khbz",
    "arabic": "الخبز",
    "phonetic": "/khbz/",
    "partOfSpeech": "noun",
    "definition": "Bread — the sacred food. Every Moroccan meal centers on bread. Disrespectful to waste.",
    "examples": [
      "Khbz w-zit",
      "Khbz d-l-ferran",
      "Ma kayn akl bla khbz"
    ],
    "translations": {
      "arabic": "الخبز",
      "french": "Le pain",
      "english": "Bread",
      "spanish": "El pan"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Khbz",
        "phonetic": "/khbz/",
        "meaning": "Bread — sacred food"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Aghrum",
        "phonetic": "/ag-hrum/",
        "meaning": "Bread in Tachelhit"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Aghrum",
        "phonetic": "/ag-hrum/",
        "meaning": "Bread in Tarifit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "sacred",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "3sel",
    "arabic": "العسل",
    "phonetic": "/3-sel/",
    "partOfSpeech": "noun",
    "definition": "Honey — highly prized. Atlas mountain honey is world-class.",
    "examples": [
      "3sel d-jbel",
      "Msemen b-3sel"
    ],
    "translations": {
      "arabic": "العسل",
      "french": "Miel",
      "english": "Honey",
      "spanish": "Miel"
    },
    "regionalVariants": [
      {
        "region": "Atlas/Ifrane",
        "dialect": "Standard Darija",
        "word": "3sel d-jbel",
        "phonetic": "/3sel d jbel/",
        "meaning": "Mountain honey — most prized"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tammnt",
        "phonetic": "/tam-mnt/",
        "meaning": "Honey in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "breakfast",
      "sweet"
    ],
    "verified": true
  },
  {
    "word": "zit argan",
    "arabic": "زيت الأرقان",
    "phonetic": "/zit ar-gan/",
    "partOfSpeech": "noun",
    "definition": "UNESCO-listed argan oil from the Souss. Most expensive food oil on earth.",
    "examples": [
      "Zit argan d-Souss",
      "Amlou b-zit argan"
    ],
    "translations": {
      "arabic": "زيت الأركان",
      "french": "Huile d'argan",
      "english": "Argan oil",
      "spanish": "Aceite de argán"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Udi n-argan",
        "phonetic": "/u-di n ar-gan/",
        "meaning": "Argan oil in Tachelhit"
      }
    ],
    "origin": "Amazigh/Souss",
    "regions": [
      "Souss"
    ],
    "themes": [
      "food",
      "UNESCO",
      "argan",
      "Souss"
    ],
    "verified": true
  },
  {
    "word": "na3na3",
    "arabic": "النعناع",
    "phonetic": "/na3-na3/",
    "partOfSpeech": "noun",
    "definition": "Fresh spearmint — the soul of Moroccan tea and cooking.",
    "examples": [
      "Atay b-na3na3",
      "3tini khmiya na3na3"
    ],
    "translations": {
      "arabic": "النعناع",
      "french": "Menthe fraîche",
      "english": "Fresh spearmint",
      "spanish": "Menta fresca"
    },
    "regionalVariants": [
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Timija",
        "phonetic": "/ti-mi-dja/",
        "meaning": "Mint in Tarifit Amazigh"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "herb",
      "tea"
    ],
    "verified": true
  },
  {
    "word": "kamun",
    "arabic": "الكمون",
    "phonetic": "/ka-mun/",
    "partOfSpeech": "noun",
    "definition": "Cumin — the most used spice in Moroccan cooking.",
    "examples": [
      "Diru sh-wi kamun",
      "B'ssara b-kamun"
    ],
    "translations": {
      "arabic": "الكمون",
      "french": "Cumin",
      "english": "Cumin",
      "spanish": "Comino"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Kamun",
        "phonetic": "/ka-mun/",
        "meaning": "Cumin"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tazart n ukamun",
        "phonetic": "/ta-zart n u-ka-mun/",
        "meaning": "Cumin seed in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "spice",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "kharqum",
    "arabic": "الخرقوم",
    "phonetic": "/khar-qum/",
    "partOfSpeech": "noun",
    "definition": "Turmeric — gives yellow color. 'The golden spice'.",
    "examples": [
      "Diri kharqum w-qzibra",
      "Kharqum 7mer-li l-marka"
    ],
    "translations": {
      "arabic": "الكركم",
      "french": "Curcuma",
      "english": "Turmeric",
      "spanish": "Cúrcuma"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Safra",
        "phonetic": "/saf-ra/",
        "meaning": "Called 'yellow' in Fes"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "spice",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "qzibra",
    "arabic": "الكزبرة",
    "phonetic": "/qzi-bra/",
    "partOfSpeech": "noun",
    "definition": "Fresh cilantro — one of the most important herbs.",
    "examples": [
      "Diri qzibra w-ma3dnus",
      "Chermoula b-qzibra"
    ],
    "translations": {
      "arabic": "الكزبرة",
      "french": "Coriandre",
      "english": "Cilantro",
      "spanish": "Cilantro"
    },
    "regionalVariants": [
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Kulantro",
        "phonetic": "/ku-lan-tro/",
        "meaning": "From Spanish culantro"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "herb",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "ma3dnus",
    "arabic": "المعدنوس",
    "phonetic": "/ma3d-nus/",
    "partOfSpeech": "noun",
    "definition": "Fresh parsley — always paired with cilantro.",
    "examples": [
      "Qzibra w-ma3dnus",
      "Chermoula b-ma3dnus"
    ],
    "translations": {
      "arabic": "البقدونس",
      "french": "Persil",
      "english": "Parsley",
      "spanish": "Perejil"
    },
    "regionalVariants": [
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Perejil",
        "phonetic": "/pe-re-khil/",
        "meaning": "Spanish perejil used in Tangier"
      }
    ],
    "origin": "Spanish/Portuguese",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "herb",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "smn",
    "arabic": "السمن",
    "phonetic": "/smen/",
    "partOfSpeech": "noun",
    "definition": "Preserved aged butter — strong flavor. Used in couscous.",
    "examples": [
      "Kuskus b-smen",
      "Smen 3tiq (aged)"
    ],
    "translations": {
      "arabic": "السمن",
      "french": "Beurre rance / Smen",
      "english": "Smen (preserved butter)",
      "spanish": "Smen"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Smen d-Fas",
        "phonetic": "/smen d fas/",
        "meaning": "Aged years — very strong"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "dairy",
      "traditional"
    ],
    "verified": true
  },
  {
    "word": "jban",
    "arabic": "الجبن",
    "phonetic": "/jban/",
    "partOfSpeech": "noun",
    "definition": "Fresh white cheese — made daily from goat or cow milk.",
    "examples": [
      "Jban friski",
      "Khbz b-jban w-3sel"
    ],
    "translations": {
      "arabic": "الجبن",
      "french": "Fromage",
      "english": "Cheese",
      "spanish": "Queso"
    },
    "regionalVariants": [
      {
        "region": "Chefchaouen",
        "dialect": "Jebli",
        "word": "Jban d-l-ma3za",
        "phonetic": "/d el-ma3-za/",
        "meaning": "Goat cheese — Rif specialty"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "dairy",
      "breakfast"
    ],
    "verified": true
  },
  {
    "word": "7archa",
    "arabic": "الحرشة",
    "phonetic": "/7ar-cha/",
    "partOfSpeech": "noun",
    "definition": "Semolina flatbread cooked on a griddle.",
    "examples": [
      "7archa b-z-zbda",
      "Sh-wi 7archa"
    ],
    "translations": {
      "arabic": "الحرشة",
      "french": "Harcha",
      "english": "Harcha (semolina flatbread)",
      "spanish": "Harcha"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7archa",
        "phonetic": "/7ar-cha/",
        "meaning": "Semolina flatbread"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "breakfast",
      "bread"
    ],
    "verified": true
  },
  {
    "word": "beghrir",
    "arabic": "البغرير",
    "phonetic": "/beg-hrir/",
    "partOfSpeech": "noun",
    "definition": "Moroccan spongy crêpe with hundreds of holes — the 'thousand hole pancake'. Poured with honey and butter.",
    "examples": [
      "Beghrir b-3sel w-zbda",
      "Beghrir d-Ramadan"
    ],
    "translations": {
      "arabic": "البغرير",
      "french": "Crêpe mille trous",
      "english": "Beghrir (spongy pancake)",
      "spanish": "Beghrir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Beghrir",
        "phonetic": "/beg-hrir/",
        "meaning": "Thousand-hole pancake — Ramadan classic"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "breakfast",
      "Ramadan",
      "pancake"
    ],
    "verified": true
  },
  {
    "word": "chebakia",
    "arabic": "الشباكية",
    "phonetic": "/she-ba-ki-ya/",
    "partOfSpeech": "noun",
    "definition": "Deep-fried honey-soaked pastry with sesame. THE Ramadan sweet.",
    "examples": [
      "Chebakia d-Ramadan",
      "Shwiya chebakia 3afak"
    ],
    "translations": {
      "arabic": "الشباكية",
      "french": "Chebakia",
      "english": "Chebakia (honey pastry)",
      "spanish": "Chebakia"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Chebakia d-Fas",
        "phonetic": "/she-ba-ki-ya d fas/",
        "meaning": "Fes makes the most elaborate chebakia"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Chebakia b-jljlan",
        "phonetic": "/b-jel-jlan/",
        "meaning": "With sesame — Marrakesh style"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "sweet",
      "Ramadan",
      "pastry"
    ],
    "verified": true
  },
  {
    "word": "sellou",
    "arabic": "السلو",
    "phonetic": "/sel-lou/",
    "partOfSpeech": "noun",
    "definition": "Roasted flour, sesame, almonds, anise and honey — energy-dense Ramadan food.",
    "examples": [
      "Sellou d-Ramadan",
      "Sellou b-l-lawz"
    ],
    "translations": {
      "arabic": "السلو",
      "french": "Sellou",
      "english": "Sellou (Ramadan energy food)",
      "spanish": "Sellou"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Sellou",
        "phonetic": "/sel-lou/",
        "meaning": "Ramadan energy food"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "Ramadan",
      "sweet",
      "traditional"
    ],
    "verified": true
  },
  {
    "word": "ka3b lgzal",
    "arabic": "كعب الغزال",
    "phonetic": "/ka3b l-gzal/",
    "partOfSpeech": "noun",
    "definition": "Gazelle horn pastries — crescent-shaped with almond paste. Served with mint tea.",
    "examples": [
      "Ka3b lgzal w-atay",
      "Ka3b lgzal d-Fas"
    ],
    "translations": {
      "arabic": "كعب الغزال",
      "french": "Cornes de gazelle",
      "english": "Gazelle horns pastry",
      "spanish": "Cuernos de gacela"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Ka3b lgzal d-Fas",
        "phonetic": "/ka3b d fas/",
        "meaning": "Fassi version — the most delicate"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Fes",
      "Nationwide"
    ],
    "themes": [
      "food",
      "pastry",
      "sweet",
      "tea"
    ],
    "verified": true
  },
  {
    "word": "7lib",
    "arabic": "الحليب",
    "phonetic": "/7-lib/",
    "partOfSpeech": "noun",
    "definition": "Milk. Used in coffee, tea and drunk warm.",
    "examples": [
      "Qahwa b-7lib",
      "Kes 7lib"
    ],
    "translations": {
      "arabic": "الحليب",
      "french": "Lait",
      "english": "Milk",
      "spanish": "Leche"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7lib",
        "phonetic": "/7-lib/",
        "meaning": "Milk"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Akh",
        "phonetic": "/akh/",
        "meaning": "Milk in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "drink",
      "food",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "z-zit",
    "arabic": "الزيت",
    "phonetic": "/z-zit/",
    "partOfSpeech": "noun",
    "definition": "Olive oil — essential to Moroccan cooking.",
    "examples": [
      "Diri zh-zhwi d-z-zit",
      "Z-zit d-z-ztoun"
    ],
    "translations": {
      "arabic": "زيت الزيتون",
      "french": "Huile d'olive",
      "english": "Olive oil",
      "spanish": "Aceite de oliva"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Z-zit",
        "phonetic": "/z-zit/",
        "meaning": "Olive oil"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Udi n-uzemmur",
        "phonetic": "/u-di n u-zem-mur/",
        "meaning": "Olive oil in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "cooking",
      "olive"
    ],
    "verified": true
  },
  {
    "word": "batbout",
    "arabic": "البطبوط",
    "phonetic": "/bat-bout/",
    "partOfSpeech": "noun",
    "definition": "Moroccan pita-style bread — split to make street food sandwiches.",
    "examples": [
      "Batbout b-l-kefta",
      "Batbout b-l-bid (egg)"
    ],
    "translations": {
      "arabic": "البطبوط",
      "french": "Batbout",
      "english": "Batbout (Moroccan pita)",
      "spanish": "Batbout"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Batbout b-l-kefta",
        "phonetic": "/b-l-kef-ta/",
        "meaning": "Street food staple"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Batbout d-l-mqla",
        "phonetic": "/d el-mqla/",
        "meaning": "Fried filling version"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "street-food",
      "bread"
    ],
    "verified": true
  },
  {
    "word": "wahed",
    "arabic": "واحد",
    "phonetic": "/wa-7ed/",
    "partOfSpeech": "number",
    "definition": "One.",
    "examples": [
      "wahed 1",
      "wahed w-noss (1.5)"
    ],
    "translations": {
      "arabic": "واحد — One",
      "french": "Un",
      "english": "One",
      "spanish": "Uno"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Yan",
        "phonetic": "/yan/",
        "meaning": "One"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Yat",
        "phonetic": "/yat/",
        "meaning": "One"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "jouj",
    "arabic": "جوج",
    "phonetic": "/jouj/",
    "partOfSpeech": "number",
    "definition": "Two — from Amazigh (not Arabic ithnayn).",
    "examples": [
      "jouj 2",
      "jouj w-noss (2.5)"
    ],
    "translations": {
      "arabic": "جوج — Two — from Amazigh (not Arabic ithnayn)",
      "french": "Deux",
      "english": "Two — from Amazigh (not Arabic ithnayn)",
      "spanish": "Dos"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Sin",
        "phonetic": "/sin/",
        "meaning": "Two"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Seen",
        "phonetic": "/seen/",
        "meaning": "Two"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "tlata",
    "arabic": "ثلاثة",
    "phonetic": "/tla-ta/",
    "partOfSpeech": "number",
    "definition": "Three — sacred: mint tea served in 3 glasses.",
    "examples": [
      "tlata 3",
      "tlata w-noss (3.5)"
    ],
    "translations": {
      "arabic": "ثلاثة — Three — sacred: mint tea served in 3 glasses",
      "french": "Trois",
      "english": "Three — sacred: mint tea served in 3 glasses",
      "spanish": "Tres"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Krad",
        "phonetic": "/krad/",
        "meaning": "Three"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "rb3a",
    "arabic": "أربعة",
    "phonetic": "/rb-3a/",
    "partOfSpeech": "number",
    "definition": "Four.",
    "examples": [
      "rb3a 4",
      "rb3a w-noss (4.5)"
    ],
    "translations": {
      "arabic": "أربعة — Four",
      "french": "Quatre",
      "english": "Four",
      "spanish": "Cuatro"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Kkuz",
        "phonetic": "/kkuz/",
        "meaning": "Four"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "khmsa",
    "arabic": "خمسة",
    "phonetic": "/khm-sa/",
    "partOfSpeech": "number",
    "definition": "Five — also name of Hand of Fatima amulet.",
    "examples": [
      "khmsa 5",
      "khmsa w-noss (5.5)"
    ],
    "translations": {
      "arabic": "خمسة — Five — also name of Hand of Fatima amulet",
      "french": "Cinq",
      "english": "Five — also name of Hand of Fatima amulet",
      "spanish": "Cinco"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Semmus",
        "phonetic": "/sem-mus/",
        "meaning": "Five"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "stta",
    "arabic": "ستة",
    "phonetic": "/stta/",
    "partOfSpeech": "number",
    "definition": "Six.",
    "examples": [
      "stta 6",
      "stta w-noss (6.5)"
    ],
    "translations": {
      "arabic": "ستة — Six",
      "french": "Six",
      "english": "Six",
      "spanish": "Seis"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ssedis",
        "phonetic": "/sse-dis/",
        "meaning": "Six"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "sb3a",
    "arabic": "سبعة",
    "phonetic": "/sb-3a/",
    "partOfSpeech": "number",
    "definition": "Seven — sacred number.",
    "examples": [
      "sb3a 7",
      "sb3a w-noss (7.5)"
    ],
    "translations": {
      "arabic": "سبعة — Seven — sacred number",
      "french": "Sept",
      "english": "Seven — sacred number",
      "spanish": "Siete"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ssa",
        "phonetic": "/ssa/",
        "meaning": "Seven"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "tmnya",
    "arabic": "ثمانية",
    "phonetic": "/tm-nya/",
    "partOfSpeech": "number",
    "definition": "Eight.",
    "examples": [
      "tmnya 8",
      "tmnya w-noss (8.5)"
    ],
    "translations": {
      "arabic": "ثمانية — Eight",
      "french": "Huit",
      "english": "Eight",
      "spanish": "Ocho"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tam",
        "phonetic": "/tam/",
        "meaning": "Eight"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "ts3oud",
    "arabic": "تسعة",
    "phonetic": "/ts-3oud/",
    "partOfSpeech": "number",
    "definition": "Nine.",
    "examples": [
      "ts3oud 9",
      "ts3oud w-noss (9.5)"
    ],
    "translations": {
      "arabic": "تسعة — Nine",
      "french": "Neuf",
      "english": "Nine",
      "spanish": "Nueve"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ttza",
        "phonetic": "/ttza/",
        "meaning": "Nine"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "3achra",
    "arabic": "عشرة",
    "phonetic": "/3ash-ra/",
    "partOfSpeech": "number",
    "definition": "Ten.",
    "examples": [
      "3achra 10",
      "3achra w-noss (10.5)"
    ],
    "translations": {
      "arabic": "عشرة — Ten",
      "french": "Dix",
      "english": "Ten",
      "spanish": "Diez"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Mraw",
        "phonetic": "/mraw/",
        "meaning": "Ten"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "3chrin",
    "arabic": "عشرين",
    "phonetic": "/3sh-rin/",
    "partOfSpeech": "number",
    "definition": "Twenty.",
    "examples": [
      "3chrin 20",
      "3chrin w-noss (20.5)"
    ],
    "translations": {
      "arabic": "عشرين — Twenty",
      "french": "Vingt",
      "english": "Twenty",
      "spanish": "Veinte"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "tlatin",
    "arabic": "ثلاثون",
    "phonetic": "/tla-tin/",
    "partOfSpeech": "number",
    "definition": "Thirty.",
    "examples": [
      "tlatin 30",
      "tlatin w-noss (30.5)"
    ],
    "translations": {
      "arabic": "ثلاثون — Thirty",
      "french": "Trente",
      "english": "Thirty",
      "spanish": "Treinta"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "rb3in",
    "arabic": "أربعون",
    "phonetic": "/rb-3in/",
    "partOfSpeech": "number",
    "definition": "Forty — sacred number.",
    "examples": [
      "rb3in 40",
      "rb3in w-noss (40.5)"
    ],
    "translations": {
      "arabic": "أربعون — Forty — sacred number",
      "french": "Quarante",
      "english": "Forty — sacred number",
      "spanish": "Cuarenta"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "khmsin",
    "arabic": "خمسون",
    "phonetic": "/khm-sin/",
    "partOfSpeech": "number",
    "definition": "Fifty.",
    "examples": [
      "khmsin 50",
      "khmsin w-noss (50.5)"
    ],
    "translations": {
      "arabic": "خمسون — Fifty",
      "french": "Cinquante",
      "english": "Fifty",
      "spanish": "Cincuenta"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "mya",
    "arabic": "مية",
    "phonetic": "/mi-ya/",
    "partOfSpeech": "number",
    "definition": "One hundred.",
    "examples": [
      "mya 100",
      "mya drhm"
    ],
    "translations": {
      "arabic": "مية — One hundred",
      "french": "Cent",
      "english": "One hundred",
      "spanish": "Cien"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "myatayn",
    "arabic": "ميتاين",
    "phonetic": "/mi-ya-tayn/",
    "partOfSpeech": "number",
    "definition": "Two hundred.",
    "examples": [
      "myatayn 200",
      "myatayn drhm"
    ],
    "translations": {
      "arabic": "ميتاين — Two hundred",
      "french": "Deux cents",
      "english": "Two hundred",
      "spanish": "Doscientos"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "alf",
    "arabic": "ألف",
    "phonetic": "/alf/",
    "partOfSpeech": "number",
    "definition": "One thousand.",
    "examples": [
      "alf 1000",
      "alf drhm"
    ],
    "translations": {
      "arabic": "ألف — One thousand",
      "french": "Mille",
      "english": "One thousand",
      "spanish": "Mil"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "number",
      "counting"
    ],
    "verified": true
  },
  {
    "word": "daba",
    "arabic": "دابا",
    "phonetic": "/da-ba/",
    "partOfSpeech": "adverb",
    "definition": "Now / right now. Can mean 'soon' depending on context.",
    "examples": [
      "Ji daba!",
      "Daba daba (right now)",
      "Ghadi njik daba (= soon)"
    ],
    "translations": {
      "arabic": "الآن",
      "french": "Maintenant",
      "english": "Now",
      "spanish": "Ahora"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Daba",
        "phonetic": "/da-ba/",
        "meaning": "Now"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Douk chhal",
        "phonetic": "/douk shhal/",
        "meaning": "This very moment — emphatic Fassi"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "bukra",
    "arabic": "بكرة",
    "phonetic": "/buk-ra/",
    "partOfSpeech": "noun",
    "definition": "Tomorrow. Famous elastic meaning — can mean any future time.",
    "examples": [
      "Ghadi njik bukra",
      "Bukra inshallah (= maybe never)"
    ],
    "translations": {
      "arabic": "غداً",
      "french": "Demain",
      "english": "Tomorrow",
      "spanish": "Mañana"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Bukra",
        "phonetic": "/buk-ra/",
        "meaning": "Tomorrow (elastic concept)"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Idhilli",
        "phonetic": "/id-hil-li/",
        "meaning": "Tomorrow in Tachelhit"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Ghudwa",
        "phonetic": "/ghud-wa/",
        "meaning": "Classical Arabic form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "l-bareh",
    "arabic": "البارح",
    "phonetic": "/l-ba-reh/",
    "partOfSpeech": "noun",
    "definition": "Yesterday.",
    "examples": [
      "L-bareh jit",
      "L-bareh kan mzyan"
    ],
    "translations": {
      "arabic": "أمس",
      "french": "Hier",
      "english": "Yesterday",
      "spanish": "Ayer"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Idhass",
        "phonetic": "/id-hass/",
        "meaning": "Yesterday in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "l-yum",
    "arabic": "اليوم",
    "phonetic": "/l-yum/",
    "partOfSpeech": "noun",
    "definition": "Today.",
    "examples": [
      "L-yum mzyan",
      "L-yum sh-men?"
    ],
    "translations": {
      "arabic": "اليوم",
      "french": "Aujourd'hui",
      "english": "Today",
      "spanish": "Hoy"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Asa",
        "phonetic": "/a-sa/",
        "meaning": "Today in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "l-jmu3a",
    "arabic": "الجمعة",
    "phonetic": "/l-jmu-3a/",
    "partOfSpeech": "noun",
    "definition": "Friday / the week. Friday couscous is a sacred Moroccan institution.",
    "examples": [
      "Kuskus d-l-jmu3a",
      "S-sla d-l-jmu3a"
    ],
    "translations": {
      "arabic": "الجمعة / الأسبوع",
      "french": "Le vendredi / La semaine",
      "english": "Friday / Week",
      "spanish": "Viernes / Semana"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-jmu3a",
        "phonetic": "/l-jmu-3a/",
        "meaning": "Friday/week — double meaning"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "calendar",
      "religion",
      "Friday"
    ],
    "verified": true
  },
  {
    "word": "ssba7",
    "arabic": "الصباح",
    "phonetic": "/s-ba7/",
    "partOfSpeech": "noun",
    "definition": "Morning.",
    "examples": [
      "F-s-sba7",
      "Sbah lkhir"
    ],
    "translations": {
      "arabic": "الصباح",
      "french": "Le matin",
      "english": "Morning",
      "spanish": "La mañana"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ssba7",
        "phonetic": "/s-ba7/",
        "meaning": "Morning"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "l-msiya",
    "arabic": "المسية",
    "phonetic": "/l-msi-ya/",
    "partOfSpeech": "noun",
    "definition": "Evening / afternoon.",
    "examples": [
      "F-l-msiya",
      "Msa lkhir f-l-msiya"
    ],
    "translations": {
      "arabic": "المساء",
      "french": "Le soir",
      "english": "Evening / afternoon",
      "spanish": "La tarde"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-msiya",
        "phonetic": "/l-msi-ya/",
        "meaning": "Evening/afternoon"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "l-lil",
    "arabic": "الليل",
    "phonetic": "/l-lil/",
    "partOfSpeech": "noun",
    "definition": "The night.",
    "examples": [
      "F-l-lil",
      "L-lil tl mnzah",
      "Ma nji-sh f-l-lil"
    ],
    "translations": {
      "arabic": "الليل",
      "french": "La nuit",
      "english": "The night",
      "spanish": "La noche"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-lil",
        "phonetic": "/l-lil/",
        "meaning": "Night"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "had l-3am",
    "arabic": "هاد العام",
    "phonetic": "/had l-3am/",
    "partOfSpeech": "time-expression",
    "definition": "This year.",
    "examples": [
      "Had l-3am mzyan",
      "L-3am lli fat (last year)"
    ],
    "translations": {
      "arabic": "هذه السنة",
      "french": "Cette année",
      "english": "This year",
      "spanish": "Este año"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Had l-3am",
        "phonetic": "/had l-3am/",
        "meaning": "This year"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "calendar"
    ],
    "verified": true
  },
  {
    "word": "mmi",
    "arabic": "أمي",
    "phonetic": "/m-mi/",
    "partOfSpeech": "noun",
    "definition": "My mother. The most intimate and sacred word.",
    "examples": [
      "Mmi 3aziza",
      "Mmi w-bba"
    ],
    "translations": {
      "arabic": "أمي",
      "french": "Ma mère / Maman",
      "english": "My mother / Mom",
      "spanish": "Mi madre"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mmi / Yemmi",
        "phonetic": "/yem-mi/",
        "meaning": "Yemmi is more affectionate"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Imma",
        "phonetic": "/im-ma/",
        "meaning": "Mother in Tachelhit"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Ima",
        "phonetic": "/i-ma/",
        "meaning": "Mother in Tarifit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "intimate"
    ],
    "verified": true
  },
  {
    "word": "bba",
    "arabic": "بابا",
    "phonetic": "/b-ba/",
    "partOfSpeech": "noun",
    "definition": "My father / Papa.",
    "examples": [
      "Bba jab l-mra",
      "Aji bba"
    ],
    "translations": {
      "arabic": "أبي / بابا",
      "french": "Mon père / Papa",
      "english": "My father / Dad",
      "spanish": "Mi padre"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Bba",
        "phonetic": "/b-ba/",
        "meaning": "Father"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Bab a",
        "phonetic": "/ba-ba/",
        "meaning": "Father in Tachelhit"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Aba",
        "phonetic": "/a-ba/",
        "meaning": "Father in Tarifit"
      }
    ],
    "origin": "Universal",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family"
    ],
    "verified": true
  },
  {
    "word": "khti",
    "arabic": "أختي",
    "phonetic": "/khti/",
    "partOfSpeech": "noun",
    "definition": "My sister. Also used to address any familiar woman.",
    "examples": [
      "Khti jat",
      "Labas khti?"
    ],
    "translations": {
      "arabic": "أختي",
      "french": "Ma sœur",
      "english": "My sister / Sis",
      "spanish": "Mi hermana"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Khti",
        "phonetic": "/khti/",
        "meaning": "Sister / sis"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ultma",
        "phonetic": "/ult-ma/",
        "meaning": "Sister in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "address"
    ],
    "verified": true
  },
  {
    "word": "khouya",
    "arabic": "خويا",
    "phonetic": "/khwi-ya/",
    "partOfSpeech": "noun",
    "definition": "My brother. Also the most common address for any man.",
    "examples": [
      "Khouya jab l-ftour",
      "Labas khouya?"
    ],
    "translations": {
      "arabic": "أخي",
      "french": "Mon frère / Frérot",
      "english": "My brother / Bro",
      "spanish": "Mi hermano"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Khouya",
        "phonetic": "/khwi-ya/",
        "meaning": "Brother / bro"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Sah7i",
        "phonetic": "/sa7-7i/",
        "meaning": "My friend/bro — very Casawi"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Gma",
        "phonetic": "/gma/",
        "meaning": "Brother in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "address"
    ],
    "verified": true
  },
  {
    "word": "jddi",
    "arabic": "جدي",
    "phonetic": "/jd-di/",
    "partOfSpeech": "noun",
    "definition": "My grandfather. Deeply respected figure.",
    "examples": [
      "Jddi 3andou tmanin sna",
      "Jddi galha liya"
    ],
    "translations": {
      "arabic": "جدي",
      "french": "Mon grand-père",
      "english": "My grandfather",
      "spanish": "Mi abuelo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Jddi",
        "phonetic": "/jd-di/",
        "meaning": "Grandfather"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "elder"
    ],
    "verified": true
  },
  {
    "word": "jdda",
    "arabic": "جدتي",
    "phonetic": "/jd-da/",
    "partOfSpeech": "noun",
    "definition": "My grandmother. Keeper of traditions and oral history.",
    "examples": [
      "Jdda 3allimat-ni t-tiyaba",
      "Jdda 3andha baraka"
    ],
    "translations": {
      "arabic": "جدتي",
      "french": "Ma grand-mère",
      "english": "My grandmother",
      "spanish": "Mi abuela"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Jdda",
        "phonetic": "/jd-da/",
        "meaning": "Grandmother"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "tradition"
    ],
    "verified": true
  },
  {
    "word": "drari",
    "arabic": "الدراري",
    "phonetic": "/dra-ri/",
    "partOfSpeech": "noun",
    "definition": "Children / kids.",
    "examples": [
      "Drari d-l-7uma",
      "Drari w-kbar"
    ],
    "translations": {
      "arabic": "الأولاد / الأطفال",
      "french": "Les enfants",
      "english": "The children",
      "spanish": "Los niños"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Drari",
        "phonetic": "/dra-ri/",
        "meaning": "Kids/children"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "S-sghar",
        "phonetic": "/s-sghar/",
        "meaning": "The little ones"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "children"
    ],
    "verified": true
  },
  {
    "word": "3amm",
    "arabic": "عم",
    "phonetic": "/3amm/",
    "partOfSpeech": "noun",
    "definition": "Uncle (paternal) / also used to address any older man.",
    "examples": [
      "3amm Mohamed",
      "Labas 3amm?"
    ],
    "translations": {
      "arabic": "عم",
      "french": "Oncle / Monsieur (respect)",
      "english": "Uncle / Sir (respectful)",
      "spanish": "Tío / Señor"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Si",
        "phonetic": "/si/",
        "meaning": "Si = Mister — Fassi formal address"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "respect",
      "address"
    ],
    "verified": true
  },
  {
    "word": "3amma",
    "arabic": "عمة",
    "phonetic": "/3am-ma/",
    "partOfSpeech": "noun",
    "definition": "Aunt (paternal) / used to address older women.",
    "examples": [
      "3amma Fatima",
      "Labas 3amma?"
    ],
    "translations": {
      "arabic": "عمة",
      "french": "Tante / Madame",
      "english": "Aunt / Ma'am",
      "spanish": "Tía / Señora"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3amma",
        "phonetic": "/3am-ma/",
        "meaning": "Aunt / respectful female address"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "respect",
      "address"
    ],
    "verified": true
  },
  {
    "word": "wld",
    "arabic": "الولد",
    "phonetic": "/wld/",
    "partOfSpeech": "noun",
    "definition": "Boy / son / child (masculine).",
    "examples": [
      "Wldi (my son)",
      "Had l-wld mzyan",
      "Wlad (plural — boys)"
    ],
    "translations": {
      "arabic": "الولد / الابن",
      "french": "Le garçon / le fils",
      "english": "Boy / son",
      "spanish": "El niño / el hijo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Wld / Wldi",
        "phonetic": "/wld/",
        "meaning": "Boy / my son"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "children"
    ],
    "verified": true
  },
  {
    "word": "lbnt",
    "arabic": "البنت",
    "phonetic": "/lbnt/",
    "partOfSpeech": "noun",
    "definition": "Girl / daughter.",
    "examples": [
      "Lbnti (my daughter)",
      "Had lbnt zwina",
      "Bnat (plural — girls)"
    ],
    "translations": {
      "arabic": "البنت / البنية",
      "french": "La fille",
      "english": "Girl / daughter",
      "spanish": "La niña / la hija"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Lbnt / Lbnti",
        "phonetic": "/lbnt/",
        "meaning": "Girl / my daughter"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "children"
    ],
    "verified": true
  },
  {
    "word": "rajl",
    "arabic": "الراجل",
    "phonetic": "/ra-jl/",
    "partOfSpeech": "noun",
    "definition": "Man / husband.",
    "examples": [
      "Rajl d-dar (man of the house)",
      "Had r-rajl mzyan",
      "Rajlha (her husband)"
    ],
    "translations": {
      "arabic": "الرجل / الزوج",
      "french": "L'homme / le mari",
      "english": "Man / husband",
      "spanish": "El hombre / el marido"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Rajl",
        "phonetic": "/ra-jl/",
        "meaning": "Man / husband"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "social"
    ],
    "verified": true
  },
  {
    "word": "mra",
    "arabic": "المرأة",
    "phonetic": "/mra/",
    "partOfSpeech": "noun",
    "definition": "Woman / wife.",
    "examples": [
      "Mratu (his wife)",
      "Had l-mra khdamma",
      "L-mra d-dar"
    ],
    "translations": {
      "arabic": "المرأة / الزوجة",
      "french": "La femme / l'épouse",
      "english": "Woman / wife",
      "spanish": "La mujer / la esposa"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mra",
        "phonetic": "/mra/",
        "meaning": "Woman / wife"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "family",
      "social"
    ],
    "verified": true
  },
  {
    "word": "s-souq",
    "arabic": "السوق",
    "phonetic": "/s-souq/",
    "partOfSpeech": "noun",
    "definition": "The market / souk. Central to Moroccan life — social gathering, spectacle, community.",
    "examples": [
      "Mshit l-s-souq",
      "S-souq d-l-khmis",
      "S-souq l-kbir"
    ],
    "translations": {
      "arabic": "السوق",
      "french": "Le souk / Le marché",
      "english": "The market / souk",
      "spanish": "El zoco"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "S-souq d-Marraksh",
        "phonetic": "/d mar-raks/",
        "meaning": "Most famous souks in the Arab world"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "S-souq f-l-mdina",
        "phonetic": "/f el-mdi-na/",
        "meaning": "Each alley a different craft in Fes medina"
      },
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "S-souq",
        "phonetic": "/s-souq/",
        "meaning": "The market"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "market",
      "shopping",
      "social",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "bshal",
    "arabic": "بشحال",
    "phonetic": "/b-shal/",
    "partOfSpeech": "question",
    "definition": "How much? The essential shopping question.",
    "examples": [
      "Bshal had l-haja?",
      "Bshal l-kilo?"
    ],
    "translations": {
      "arabic": "بكم؟",
      "french": "Combien?",
      "english": "How much?",
      "spanish": "¿Cuánto cuesta?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Bshal",
        "phonetic": "/b-shal/",
        "meaning": "How much?"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Quanto",
        "phonetic": "/kwan-to/",
        "meaning": "Spanish cuanto used in Tangier"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "shopping",
      "market",
      "question"
    ],
    "verified": true
  },
  {
    "word": "ghali",
    "arabic": "غالي",
    "phonetic": "/gha-li/",
    "partOfSpeech": "adjective",
    "definition": "Expensive. Essential in souk negotiations.",
    "examples": [
      "Had shi ghali bzzaf",
      "Ghali 3lik?"
    ],
    "translations": {
      "arabic": "غالي",
      "french": "Cher / Trop cher",
      "english": "Expensive",
      "spanish": "Caro"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Ghali bzzaf a sidi",
        "phonetic": "/gha-li bzaf a si-di/",
        "meaning": "Too expensive, sir — polite form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "shopping",
      "price",
      "negotiation"
    ],
    "verified": true
  },
  {
    "word": "rkhis",
    "arabic": "رخيص",
    "phonetic": "/r-khis/",
    "partOfSpeech": "adjective",
    "definition": "Cheap / affordable.",
    "examples": [
      "Had shi rkhis",
      "Sir 3tini rkhis"
    ],
    "translations": {
      "arabic": "رخيص",
      "french": "Pas cher",
      "english": "Cheap / Affordable",
      "spanish": "Barato"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Rkhis",
        "phonetic": "/r-khis/",
        "meaning": "Cheap"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "shopping",
      "price"
    ],
    "verified": true
  },
  {
    "word": "khsar shwiya",
    "arabic": "خسر شوية",
    "phonetic": "/kh-sar shwi-ya/",
    "partOfSpeech": "expression",
    "definition": "Lower the price a bit — essential souk phrase.",
    "examples": [
      "Khsar shwiya",
      "Khsar f-t-taman"
    ],
    "translations": {
      "arabic": "نزّل السعر",
      "french": "Baisser le prix",
      "english": "Lower the price a bit",
      "spanish": "Baja un poco el precio"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Khsar shwiya",
        "phonetic": "/kh-sar shwi-ya/",
        "meaning": "Souk negotiation phrase"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "shopping",
      "negotiation",
      "market"
    ],
    "verified": true
  },
  {
    "word": "drhem",
    "arabic": "الدرهم",
    "phonetic": "/dr-hem/",
    "partOfSpeech": "noun",
    "definition": "Moroccan dirham — the national currency.",
    "examples": [
      "3tini mya drhem",
      "Sh7al d-drhm?"
    ],
    "translations": {
      "arabic": "الدرهم المغربي",
      "french": "Dirham",
      "english": "Moroccan Dirham (MAD)",
      "spanish": "Dírham marroquí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Drhem / Ryal",
        "phonetic": "/ryal/",
        "meaning": "Ryal = 20 centimes in folk speech"
      }
    ],
    "origin": "Arabic/Persian",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "money",
      "currency",
      "shopping"
    ],
    "verified": true
  },
  {
    "word": "flus",
    "arabic": "الفلوس",
    "phonetic": "/flus/",
    "partOfSpeech": "noun",
    "definition": "Money / cash. Informal and universal.",
    "examples": [
      "Ma 3andi flus",
      "Jib l-flus"
    ],
    "translations": {
      "arabic": "المال",
      "french": "L'argent / le fric",
      "english": "Money / cash",
      "spanish": "El dinero"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Cash",
        "phonetic": "/kash/",
        "meaning": "English 'cash' also used"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "money",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "3attar",
    "arabic": "العطار",
    "phonetic": "/3at-tar/",
    "partOfSpeech": "noun",
    "definition": "The herbalist / spice seller — one of the most important souk figures.",
    "examples": [
      "Sir l-l-3attar",
      "3attar d-l-mdina",
      "3attar ras el hanout"
    ],
    "translations": {
      "arabic": "العطار / بائع التوابل",
      "french": "L'herboriste",
      "english": "The herbalist / spice merchant",
      "spanish": "El herbolario"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3attar",
        "phonetic": "/3at-tar/",
        "meaning": "Herbalist — keeper of spice secrets"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "market",
      "craft",
      "spice"
    ],
    "verified": true
  },
  {
    "word": "l-7anout",
    "arabic": "الحانوت",
    "phonetic": "/l-7a-nout/",
    "partOfSpeech": "noun",
    "definition": "The shop / small neighborhood store.",
    "examples": [
      "Sir l-l-7anout",
      "7anout d-l-7uma",
      "L-7anout msdoud (closed)"
    ],
    "translations": {
      "arabic": "الحانوت / الدكان",
      "french": "La boutique / l'épicerie",
      "english": "The shop / neighborhood store",
      "spanish": "La tienda"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7anout",
        "phonetic": "/l-7a-nout/",
        "meaning": "Shop / neighborhood store"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "market",
      "shopping",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "fin",
    "arabic": "فين",
    "phonetic": "/fin/",
    "partOfSpeech": "question",
    "definition": "Where? The most basic direction question.",
    "examples": [
      "Fin kayna l-7it?",
      "Fin ghadi?",
      "Fin anta?"
    ],
    "translations": {
      "arabic": "أين؟",
      "french": "Où?",
      "english": "Where?",
      "spanish": "¿Dónde?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Fin",
        "phonetic": "/fin/",
        "meaning": "Where?"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Fash",
        "phonetic": "/fash/",
        "meaning": "Where? — older Fassi form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "question",
      "direction",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "l-ymin",
    "arabic": "اليمين",
    "phonetic": "/l-ymin/",
    "partOfSpeech": "noun",
    "definition": "Right (direction).",
    "examples": [
      "Dir l-ymin",
      "Min l-ymin"
    ],
    "translations": {
      "arabic": "اليمين",
      "french": "À droite",
      "english": "Right",
      "spanish": "A la derecha"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-ymin",
        "phonetic": "/l-ymin/",
        "meaning": "Right direction"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "navigation"
    ],
    "verified": true
  },
  {
    "word": "l-lizar",
    "arabic": "اليسار",
    "phonetic": "/l-li-zar/",
    "partOfSpeech": "noun",
    "definition": "Left (direction).",
    "examples": [
      "Dir l-lizar",
      "Min l-lizar"
    ],
    "translations": {
      "arabic": "اليسار",
      "french": "À gauche",
      "english": "Left",
      "spanish": "A la izquierda"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-lizar",
        "phonetic": "/l-li-zar/",
        "meaning": "Left direction"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "navigation"
    ],
    "verified": true
  },
  {
    "word": "niyshan",
    "arabic": "نيشان",
    "phonetic": "/ni-shan/",
    "partOfSpeech": "adverb",
    "definition": "Straight ahead. From French 'en ligne'.",
    "examples": [
      "Sir niyshan",
      "Niyshan w-dir l-ymin"
    ],
    "translations": {
      "arabic": "مباشرة / على طول",
      "french": "Tout droit",
      "english": "Straight ahead",
      "spanish": "Todo recto"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Niyshan",
        "phonetic": "/ni-shan/",
        "meaning": "Straight ahead"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Directo",
        "phonetic": "/di-rek-to/",
        "meaning": "Spanish directo in Tangier"
      }
    ],
    "origin": "French/Persian",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "navigation"
    ],
    "verified": true
  },
  {
    "word": "qrib",
    "arabic": "قريب",
    "phonetic": "/qrib/",
    "partOfSpeech": "adjective",
    "definition": "Near / close.",
    "examples": [
      "Qrib mn hna",
      "Had l-place qrib"
    ],
    "translations": {
      "arabic": "قريب",
      "french": "Proche / Près",
      "english": "Near / Close",
      "spanish": "Cerca"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Qrib",
        "phonetic": "/qrib/",
        "meaning": "Near/close"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "distance"
    ],
    "verified": true
  },
  {
    "word": "b3id",
    "arabic": "بعيد",
    "phonetic": "/b3id/",
    "partOfSpeech": "adjective",
    "definition": "Far / distant.",
    "examples": [
      "B3id bzzaf",
      "B3id 3la s-souq"
    ],
    "translations": {
      "arabic": "بعيد",
      "french": "Loin",
      "english": "Far / Distant",
      "spanish": "Lejos"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "B3id",
        "phonetic": "/b3id/",
        "meaning": "Far/distant"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "distance"
    ],
    "verified": true
  },
  {
    "word": "hna",
    "arabic": "هنا",
    "phonetic": "/hna/",
    "partOfSpeech": "adverb",
    "definition": "Here.",
    "examples": [
      "Ana hna",
      "Jlis hna"
    ],
    "translations": {
      "arabic": "هنا",
      "french": "Ici",
      "english": "Here",
      "spanish": "Aquí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Hna",
        "phonetic": "/hna/",
        "meaning": "Here"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "place"
    ],
    "verified": true
  },
  {
    "word": "temma",
    "arabic": "تما",
    "phonetic": "/tem-ma/",
    "partOfSpeech": "adverb",
    "definition": "There / over there.",
    "examples": [
      "Temma hiya",
      "Sir temma"
    ],
    "translations": {
      "arabic": "هناك",
      "french": "Là-bas",
      "english": "There / Over there",
      "spanish": "Allí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Temma",
        "phonetic": "/tem-ma/",
        "meaning": "There"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "direction",
      "place"
    ],
    "verified": true
  },
  {
    "word": "l-mdina",
    "arabic": "المدينة",
    "phonetic": "/l-mdi-na/",
    "partOfSpeech": "noun",
    "definition": "The medina — the ancient walled city center. UNESCO concept.",
    "examples": [
      "Mshit l-l-mdina",
      "S-souq f-l-mdina"
    ],
    "translations": {
      "arabic": "المدينة القديمة",
      "french": "La médina",
      "english": "The medina / old city",
      "spanish": "La medina"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "L-mdina l-bali",
        "phonetic": "/l-mdi-na l ba-li/",
        "meaning": "World's largest living medina"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "L-mdina",
        "phonetic": "/l-mdi-na/",
        "meaning": "UNESCO-listed 1985"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "place",
      "heritage",
      "city",
      "UNESCO"
    ],
    "verified": true
  },
  {
    "word": "derb",
    "arabic": "درب",
    "phonetic": "/derb/",
    "partOfSpeech": "noun",
    "definition": "Narrow alley / dead-end street in the medina.",
    "examples": [
      "Derb d-s-souq",
      "F-had d-derb"
    ],
    "translations": {
      "arabic": "الزقاق / الدرب",
      "french": "La ruelle",
      "english": "Narrow alley / dead-end street",
      "spanish": "El callejón"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Derb",
        "phonetic": "/derb/",
        "meaning": "Dead-end alley — Fes has 9,000+"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "place",
      "architecture",
      "medina"
    ],
    "verified": true
  },
  {
    "word": "riyad",
    "arabic": "الرياض",
    "phonetic": "/ri-yad/",
    "partOfSpeech": "noun",
    "definition": "Traditional Moroccan house with interior courtyard. Morocco's most beautiful architecture.",
    "examples": [
      "Riyad d-Marraksh",
      "Nqim f-wahed r-riyad"
    ],
    "translations": {
      "arabic": "الرياض",
      "french": "Riad",
      "english": "Riad (traditional Moroccan house)",
      "spanish": "Riad"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Riyad d-Marraksh",
        "phonetic": "/ri-yad d mar-raks/",
        "meaning": "Marrakesh is world capital of riads"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Dar / Riyad",
        "phonetic": "/dar/",
        "meaning": "Dar = house, riyad = house with garden"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "place",
      "architecture",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "jama3",
    "arabic": "الجامع",
    "phonetic": "/jama3/",
    "partOfSpeech": "noun",
    "definition": "Mosque. Also means congregation / community.",
    "examples": [
      "Jama3 l-kbir",
      "S-sla f-l-jama3",
      "Jama3 l-ftna (Jemaa el-Fna)"
    ],
    "translations": {
      "arabic": "الجامع",
      "french": "La mosquée",
      "english": "Mosque / congregation",
      "spanish": "La mezquita"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Jama3",
        "phonetic": "/jama3/",
        "meaning": "Mosque / community"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "place",
      "architecture"
    ],
    "verified": true
  },
  {
    "word": "j-jnan",
    "arabic": "الجنان",
    "phonetic": "/j-jnan/",
    "partOfSpeech": "noun",
    "definition": "Garden / paradise / pleasure garden.",
    "examples": [
      "J-jnan zwine",
      "Jnan d-Majorelle",
      "J-jnan d-l-baha"
    ],
    "translations": {
      "arabic": "الجنان / الحديقة",
      "french": "Le jardin",
      "english": "Garden / pleasure garden",
      "spanish": "El jardín"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Jnan Majorelle",
        "phonetic": "/jnan ma-djo-rel/",
        "meaning": "Majorelle Garden — world famous"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Agdal",
        "phonetic": "/ag-dal/",
        "meaning": "Garden in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "place",
      "garden",
      "nature"
    ],
    "verified": true
  },
  {
    "word": "zwina",
    "arabic": "زوينة",
    "phonetic": "/zwi-na/",
    "partOfSpeech": "adjective",
    "definition": "Beautiful / pretty / nice (feminine).",
    "examples": [
      "Zwina bzzaf!",
      "Blad zwina",
      "Had l-haja zwina"
    ],
    "translations": {
      "arabic": "جميلة",
      "french": "Belle / Jolie",
      "english": "Beautiful",
      "spanish": "Bonita / Bella"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Zwina",
        "phonetic": "/zwi-na/",
        "meaning": "Beautiful — central/south standard"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Mli7a",
        "phonetic": "/mli-7a/",
        "meaning": "Beautiful — northern Morocco prefers mli7a"
      },
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Jamila",
        "phonetic": "/dja-mi-la/",
        "meaning": "Classical Arabic also used in Fes"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ifilki",
        "phonetic": "/i-fil-ki/",
        "meaning": "Beautiful in Tachelhit"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Tifawt",
        "phonetic": "/ti-fawt/",
        "meaning": "Beautiful / light in Tarifit"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Mzyana",
        "phonetic": "/mza-ya-na/",
        "meaning": "Beautiful in Hassaniya"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "beauty",
      "compliment"
    ],
    "verified": true
  },
  {
    "word": "mzyan",
    "arabic": "مزيان",
    "phonetic": "/mzyan/",
    "partOfSpeech": "adjective",
    "definition": "Good / nice / fine. Most versatile positive adjective.",
    "examples": [
      "Mzyan!",
      "Had shi mzyan",
      "Khdmt mzyana (good job)"
    ],
    "translations": {
      "arabic": "جيد / حسن",
      "french": "Bien / Bon",
      "english": "Good / Nice",
      "spanish": "Bien / Bueno"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mzyan",
        "phonetic": "/mzyan/",
        "meaning": "Good/nice — universal positive"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Nickel",
        "phonetic": "/ni-kel/",
        "meaning": "French nickel used in Casablanca slang"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Bien",
        "phonetic": "/bjen/",
        "meaning": "French bien used in north"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "quality",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "bzzaf",
    "arabic": "بزاف",
    "phonetic": "/bzaf/",
    "partOfSpeech": "adverb",
    "definition": "A lot / very / too much. From Amazigh.",
    "examples": [
      "Shukran bzzaf",
      "Ghali bzzaf",
      "Knayt bzzaf"
    ],
    "translations": {
      "arabic": "كثيراً / جداً",
      "french": "Beaucoup / Très",
      "english": "A lot / Very",
      "spanish": "Mucho / Muy"
    },
    "regionalVariants": [
      {
        "region": "Central/South",
        "dialect": "Standard Darija",
        "word": "Bzzaf",
        "phonetic": "/bzaf/",
        "meaning": "A lot/very — from Amazigh"
      },
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Wajid",
        "phonetic": "/wa-djid/",
        "meaning": "A lot in northern Morocco — Spanish influence"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Aṭṭas",
        "phonetic": "/at-tas/",
        "meaning": "A lot in Tarifit"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Aṭṭas",
        "phonetic": "/at-tas/",
        "meaning": "A lot in Tachelhit"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Ktir",
        "phonetic": "/k-tir/",
        "meaning": "A lot in Hassaniya — classical Arabic kathir"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "quantity",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "3jibni",
    "arabic": "عجبني",
    "phonetic": "/3dji-bni/",
    "partOfSpeech": "verb",
    "definition": "I liked it / it pleased me.",
    "examples": [
      "Had sh-shi 3jibni bzzaf",
      "3jibni l-makla"
    ],
    "translations": {
      "arabic": "أعجبني",
      "french": "J'ai aimé",
      "english": "I liked it / I loved it",
      "spanish": "Me gustó"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3jibni",
        "phonetic": "/3dji-bni/",
        "meaning": "I liked it"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "ferhan",
    "arabic": "فرحان",
    "phonetic": "/fer-7an/",
    "partOfSpeech": "adjective",
    "definition": "Happy (masculine). Ferhana = feminine.",
    "examples": [
      "Ana ferhan",
      "Drari ferhanin"
    ],
    "translations": {
      "arabic": "فرحان / سعيد",
      "french": "Heureux / Content",
      "english": "Happy",
      "spanish": "Feliz"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ferhan / Ferhana",
        "phonetic": "/fer-7an/",
        "meaning": "Happy (m/f)"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ittwari",
        "phonetic": "/it-twa-ri/",
        "meaning": "Happy in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "feeling"
    ],
    "verified": true
  },
  {
    "word": "mherres",
    "arabic": "مهرس",
    "phonetic": "/m-her-res/",
    "partOfSpeech": "adjective",
    "definition": "Exhausted / wrecked.",
    "examples": [
      "Ana mherres",
      "Mherres mn l-khidma"
    ],
    "translations": {
      "arabic": "منهك",
      "french": "Épuisé / Lessivé",
      "english": "Exhausted / Wrecked",
      "spanish": "Agotado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mherres",
        "phonetic": "/m-her-res/",
        "meaning": "Totally exhausted"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "state",
      "tiredness"
    ],
    "verified": true
  },
  {
    "word": "3eyyan",
    "arabic": "عيان",
    "phonetic": "/3ey-yan/",
    "partOfSpeech": "adjective",
    "definition": "Sick / ill / not feeling well.",
    "examples": [
      "Ana 3eyyan",
      "3eyyan mn l-makla"
    ],
    "translations": {
      "arabic": "مريض",
      "french": "Malade",
      "english": "Sick / Ill",
      "spanish": "Enfermo"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Mrid",
        "phonetic": "/mrid/",
        "meaning": "Sick — more classical Arabic form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "health",
      "emotion",
      "state"
    ],
    "verified": true
  },
  {
    "word": "knayt",
    "arabic": "كنعيط",
    "phonetic": "/kna-yt/",
    "partOfSpeech": "adjective",
    "definition": "I'm tired (1st person).",
    "examples": [
      "Knayt bzzaf",
      "Kna (he is tired)"
    ],
    "translations": {
      "arabic": "أنا متعب",
      "french": "Je suis fatigué",
      "english": "I'm tired",
      "spanish": "Estoy cansado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Knayt",
        "phonetic": "/kna-yt/",
        "meaning": "I am tired"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "state",
      "tiredness"
    ],
    "verified": true
  },
  {
    "word": "9lib",
    "arabic": "قلب",
    "phonetic": "/9lib/",
    "partOfSpeech": "noun",
    "definition": "Heart. 'Qalbi' = my heart — term of endearment.",
    "examples": [
      "Qalbi ma 3andou sbr",
      "Qalbi 3lik (my heart is with you)"
    ],
    "translations": {
      "arabic": "القلب",
      "french": "Le cœur",
      "english": "Heart",
      "spanish": "El corazón"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-qalb / Qalbi",
        "phonetic": "/l-qalb/",
        "meaning": "Heart — also endearment term"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body",
      "emotion"
    ],
    "verified": true
  },
  {
    "word": "shta",
    "arabic": "الشتاء",
    "phonetic": "/shta/",
    "partOfSpeech": "noun",
    "definition": "Rain / winter / rainfall.",
    "examples": [
      "Shtat l-yum",
      "S-shta jat",
      "Bghina sh-shta"
    ],
    "translations": {
      "arabic": "المطر / الشتاء",
      "french": "La pluie / l'hiver",
      "english": "Rain / winter",
      "spanish": "La lluvia / el invierno"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Agadir n-waman",
        "phonetic": "/a-ga-dir n wa-man/",
        "meaning": "Water tower — Souss for rain"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "weather",
      "season"
    ],
    "verified": true
  },
  {
    "word": "7ar",
    "arabic": "حار",
    "phonetic": "/7ar/",
    "partOfSpeech": "adjective",
    "definition": "Hot.",
    "examples": [
      "7ar bzzaf",
      "7ar d-s-sahara",
      "Makla 7ara (spicy food)"
    ],
    "translations": {
      "arabic": "حار",
      "french": "Chaud",
      "english": "Hot",
      "spanish": "Caliente"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Afsous",
        "phonetic": "/af-sous/",
        "meaning": "Hot in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "weather",
      "climate",
      "food"
    ],
    "verified": true
  },
  {
    "word": "bard",
    "arabic": "بارد",
    "phonetic": "/bard/",
    "partOfSpeech": "adjective",
    "definition": "Cold.",
    "examples": [
      "Bard bzzaf l-yum",
      "Bard f-l-lil"
    ],
    "translations": {
      "arabic": "البرد / بارد",
      "french": "Froid",
      "english": "Cold",
      "spanish": "Frío"
    },
    "regionalVariants": [
      {
        "region": "Atlas/Ifrane",
        "dialect": "Standard Darija",
        "word": "Bard bzzaf",
        "phonetic": "/bard bzaf/",
        "meaning": "Very cold — Atlas mountain expression"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tagant",
        "phonetic": "/ta-gant/",
        "meaning": "Cold in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "weather",
      "climate"
    ],
    "verified": true
  },
  {
    "word": "wakha",
    "arabic": "واخا",
    "phonetic": "/wa-kha/",
    "partOfSpeech": "expression",
    "definition": "Okay / fine / agreed. From Amazigh.",
    "examples": [
      "Wakha!",
      "Wakha njiw bukra",
      "Wakha safi"
    ],
    "translations": {
      "arabic": "موافق / حسناً",
      "french": "Ok / D'accord",
      "english": "Okay / Agreed",
      "spanish": "De acuerdo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Wakha",
        "phonetic": "/wa-kha/",
        "meaning": "Okay — from Amazigh"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Ok",
        "phonetic": "/o-kay/",
        "meaning": "English 'ok' also very common"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "agreement",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "mashi mushkil",
    "arabic": "ماشي مشكل",
    "phonetic": "/ma-shi mush-kil/",
    "partOfSpeech": "expression",
    "definition": "No problem / it's fine.",
    "examples": [
      "Mashi mushkil!",
      "Walu mashi mushkil"
    ],
    "translations": {
      "arabic": "لا مشكلة",
      "french": "Pas de problème",
      "english": "No problem",
      "spanish": "No hay problema"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mashi mushkil",
        "phonetic": "/ma-shi mush-kil/",
        "meaning": "No problem"
      },
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Pas de problème",
        "phonetic": "/pa d pro-blem/",
        "meaning": "French used too"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "casual",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "walu",
    "arabic": "والو",
    "phonetic": "/wa-lu/",
    "partOfSpeech": "pronoun",
    "definition": "Nothing / zero / none. From Amazigh.",
    "examples": [
      "Ma 3andi walu",
      "Walu kayn",
      "Ma sme3t walu"
    ],
    "translations": {
      "arabic": "لا شيء",
      "french": "Rien / Zéro",
      "english": "Nothing / Zero",
      "spanish": "Nada"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Walu",
        "phonetic": "/wa-lu/",
        "meaning": "Nothing — from Amazigh"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "mashi",
    "arabic": "ماشي",
    "phonetic": "/ma-shi/",
    "partOfSpeech": "negation",
    "definition": "Not / no (modifier). Mashi mzyan = not good.",
    "examples": [
      "Mashi mzyan",
      "Mashi hna",
      "Mshi (we went)"
    ],
    "translations": {
      "arabic": "ليس / لا",
      "french": "Pas / Non",
      "english": "Not / No (modifier)",
      "spanish": "No (modificador)"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mashi",
        "phonetic": "/ma-shi/",
        "meaning": "Not — negation modifier"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "grammar",
      "negation",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "wach",
    "arabic": "واش",
    "phonetic": "/wach/",
    "partOfSpeech": "question particle",
    "definition": "Is it? / Are you? The main yes/no question marker in Darija.",
    "examples": [
      "Wach labas?",
      "Wach jiti?",
      "Wach 3andek flus?"
    ],
    "translations": {
      "arabic": "هل؟",
      "french": "Est-ce que?",
      "english": "Is it? / Are you? (question)",
      "spanish": "¿Es que?"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Wash",
        "phonetic": "/wash/",
        "meaning": "Fassi pronunciation slightly different"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "grammar",
      "question",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "3lash",
    "arabic": "علاش",
    "phonetic": "/3-lash/",
    "partOfSpeech": "question",
    "definition": "Why?",
    "examples": [
      "3lash ma jiti-sh?",
      "3lash ghali?"
    ],
    "translations": {
      "arabic": "لماذا؟",
      "french": "Pourquoi?",
      "english": "Why?",
      "spanish": "¿Por qué?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3lash",
        "phonetic": "/3-lash/",
        "meaning": "Why?"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "question",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "kima",
    "arabic": "كيما",
    "phonetic": "/ki-ma/",
    "partOfSpeech": "conjunction",
    "definition": "Like / as. Comparison word.",
    "examples": [
      "Kima galt",
      "Huwa mzyan kima ana"
    ],
    "translations": {
      "arabic": "مثل / كما",
      "french": "Comme",
      "english": "Like / As",
      "spanish": "Como"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Kima",
        "phonetic": "/ki-ma/",
        "meaning": "Like/as"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "grammar",
      "comparison"
    ],
    "verified": true
  },
  {
    "word": "ghi",
    "arabic": "غي",
    "phonetic": "/ghi/",
    "partOfSpeech": "adverb",
    "definition": "Just / only.",
    "examples": [
      "Ghi wahed",
      "Ghi 3tini l-ma"
    ],
    "translations": {
      "arabic": "فقط",
      "french": "Juste / Seulement",
      "english": "Just / Only",
      "spanish": "Solo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ghi",
        "phonetic": "/ghi/",
        "meaning": "Just/only"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "grammar",
      "expression"
    ],
    "verified": true
  },
  {
    "word": "safi",
    "arabic": "صافي",
    "phonetic": "/sa-fi/",
    "partOfSpeech": "expression",
    "definition": "Done / finished / okay / that's it. One of Morocco's most versatile words.",
    "examples": [
      "Safi, b-slama",
      "Safi had shi",
      "Safi bghit f-l-ma"
    ],
    "translations": {
      "arabic": "تمام / خلاص",
      "french": "C'est bon / Terminé",
      "english": "Done / okay / that's it",
      "spanish": "Listo / ya está"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Safi",
        "phonetic": "/sa-fi/",
        "meaning": "Done/okay/that's it — very versatile"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Safi safi",
        "phonetic": "/sa-fi sa-fi/",
        "meaning": "Very done — emphatic Marrakesh form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use",
      "agreement"
    ],
    "verified": true
  },
  {
    "word": "had sh-shi",
    "arabic": "هاد الشي",
    "phonetic": "/had sh-shi/",
    "partOfSpeech": "expression",
    "definition": "This thing / this matter. Versatile filler.",
    "examples": [
      "Had sh-shi 3jibni",
      "Had sh-shi mashi mzyan"
    ],
    "translations": {
      "arabic": "هذا الأمر",
      "french": "Ce truc",
      "english": "This thing / this matter",
      "spanish": "Esta cosa"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Had sh-shi",
        "phonetic": "/had sh-shi/",
        "meaning": "This thing/matter"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "fin ghadi",
    "arabic": "فين غادي",
    "phonetic": "/fin gha-di/",
    "partOfSpeech": "expression",
    "definition": "Where are you going? Very common greeting/inquiry.",
    "examples": [
      "Fin ghadi?",
      "Ghadi l-s-souq",
      "Fin ghadi l-yum?"
    ],
    "translations": {
      "arabic": "أين تذهب؟",
      "french": "Où tu vas?",
      "english": "Where are you going?",
      "spanish": "¿A dónde vas?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Fin ghadi?",
        "phonetic": "/fin gha-di/",
        "meaning": "Where you going? — casual"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "question",
      "daily-use",
      "greeting"
    ],
    "verified": true
  },
  {
    "word": "sh7al",
    "arabic": "شحال",
    "phonetic": "/sh7-al/",
    "partOfSpeech": "question",
    "definition": "How many? / How much? (time/quantity)",
    "examples": [
      "Sh7al d-iyam?",
      "Sh7al sna 3andak?",
      "Sh7al f-l-mya?"
    ],
    "translations": {
      "arabic": "كم؟",
      "french": "Combien?",
      "english": "How many? / How much?",
      "spanish": "¿Cuántos?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Sh7al",
        "phonetic": "/sh7-al/",
        "meaning": "How many/much"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "question",
      "quantity",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "3lash ma",
    "arabic": "علاش ما",
    "phonetic": "/3-lash ma/",
    "partOfSpeech": "expression",
    "definition": "Why not? / Why didn't you?",
    "examples": [
      "3lash ma jiti-sh?",
      "3lash ma drti had shi?"
    ],
    "translations": {
      "arabic": "لماذا لم...؟",
      "french": "Pourquoi pas?",
      "english": "Why not? / Why didn't?",
      "spanish": "¿Por qué no?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3lash ma",
        "phonetic": "/3-lash ma/",
        "meaning": "Why not/didn't"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "question",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "l-khidma",
    "arabic": "الخدمة",
    "phonetic": "/l-khid-ma/",
    "partOfSpeech": "noun",
    "definition": "Work / job / service.",
    "examples": [
      "Mshit l-l-khidma",
      "L-khidma kayna",
      "3andu khidma mzyana"
    ],
    "translations": {
      "arabic": "العمل / الخدمة",
      "french": "Le travail / le service",
      "english": "Work / job / service",
      "spanish": "El trabajo"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Travay",
        "phonetic": "/tra-vaj/",
        "meaning": "French travail used in Casablanca"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "work",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "hammam",
    "arabic": "الحمام",
    "phonetic": "/7am-mam/",
    "partOfSpeech": "noun",
    "definition": "Traditional public bath — centuries-old social institution.",
    "examples": [
      "Mshit l-l-hammam",
      "Hammam d-l-7uma"
    ],
    "translations": {
      "arabic": "الحمام",
      "french": "Le hammam",
      "english": "Hammam / Turkish bath",
      "spanish": "Hammam"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Hammam d-s-sahha",
        "phonetic": "/d s-sah-ha/",
        "meaning": "Health hammam — wellness"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "wellness",
      "community",
      "tradition",
      "ritual"
    ],
    "verified": true
  },
  {
    "word": "l-ferran",
    "arabic": "الفران",
    "phonetic": "/l-fer-ran/",
    "partOfSpeech": "noun",
    "definition": "The baker / bakery / oven. Central to neighborhood life.",
    "examples": [
      "Sir l-l-ferran",
      "L-ferran d-l-7uma"
    ],
    "translations": {
      "arabic": "الفرن / الخباز",
      "french": "Le four / le boulanger",
      "english": "The bakery / baker",
      "spanish": "El horno / panadero"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "L-ferran d-l-7uma",
        "phonetic": "/d el-7u-ma/",
        "meaning": "Neighborhood oven — tangia cooked here"
      }
    ],
    "origin": "French/Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "community",
      "craft"
    ],
    "verified": true
  },
  {
    "word": "kssa",
    "arabic": "الكيسة",
    "phonetic": "/kss-a/",
    "partOfSpeech": "noun",
    "definition": "The hammam scrubbing glove — removes dead skin.",
    "examples": [
      "Jib-li l-kssa",
      "Kssa w-sabun beldi"
    ],
    "translations": {
      "arabic": "كيسة الحمام",
      "french": "Le gant de crin",
      "english": "Hammam scrubbing glove",
      "spanish": "La kessa"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Kssa",
        "phonetic": "/kssa/",
        "meaning": "Hammam scrub glove"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "hammam",
      "wellness",
      "tradition"
    ],
    "verified": true
  },
  {
    "word": "sabun beldi",
    "arabic": "الصابون البلدي",
    "phonetic": "/sa-bun bel-di/",
    "partOfSpeech": "noun",
    "definition": "Black Moroccan olive soap — essential hammam soap.",
    "examples": [
      "Sabun beldi w-kssa",
      "Jib-li sabun beldi"
    ],
    "translations": {
      "arabic": "الصابون الأسود البلدي",
      "french": "Le savon beldi noir",
      "english": "Moroccan black olive soap",
      "spanish": "Jabón negro marroquí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Sabun beldi",
        "phonetic": "/sa-bun bel-di/",
        "meaning": "Traditional black olive soap"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "hammam",
      "wellness",
      "beauty"
    ],
    "verified": true
  },
  {
    "word": "t-tbib",
    "arabic": "الطبيب",
    "phonetic": "/t-tbib/",
    "partOfSpeech": "noun",
    "definition": "The doctor.",
    "examples": [
      "Mshit l-t-tbib",
      "T-tbib d-s-snan (dentist)"
    ],
    "translations": {
      "arabic": "الطبيب",
      "french": "Le médecin / docteur",
      "english": "The doctor",
      "spanish": "El médico"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "T-tbib",
        "phonetic": "/t-tbib/",
        "meaning": "Doctor"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "health",
      "professional"
    ],
    "verified": true
  },
  {
    "word": "l-mdersa",
    "arabic": "المدرسة",
    "phonetic": "/l-mder-sa/",
    "partOfSpeech": "noun",
    "definition": "School. Morocco's historical medersas were universities.",
    "examples": [
      "Mshit l-l-mdersa",
      "L-mdersa l-3aliya"
    ],
    "translations": {
      "arabic": "المدرسة",
      "french": "L'école",
      "english": "School",
      "spanish": "La escuela"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "L-medersa",
        "phonetic": "/l-me-der-sa/",
        "meaning": "Fes: medersa = historical Koranic school"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "education",
      "institution"
    ],
    "verified": true
  },
  {
    "word": "taxi",
    "arabic": "التاكسي",
    "phonetic": "/tak-si/",
    "partOfSpeech": "noun",
    "definition": "Taxi. Two types: petit taxi (city, 3 passengers) and grand taxi (intercity, 6).",
    "examples": [
      "3ayyesh-li taxi",
      "Grand taxi l-Fes"
    ],
    "translations": {
      "arabic": "سيارة الأجرة",
      "french": "Le taxi",
      "english": "Taxi / cab",
      "spanish": "El taxi"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Kurssi d-taxi",
        "phonetic": "/kur-ssi/",
        "meaning": "Taxi seat — shared taxis common"
      }
    ],
    "origin": "French",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "transport",
      "travel"
    ],
    "verified": true
  },
  {
    "word": "tomobil",
    "arabic": "الطوموبيل",
    "phonetic": "/to-mo-bil/",
    "partOfSpeech": "noun",
    "definition": "Car / automobile. From French automobile.",
    "examples": [
      "3andi tomobil",
      "Tomobil d-taxi"
    ],
    "translations": {
      "arabic": "السيارة",
      "french": "La voiture",
      "english": "Car / automobile",
      "spanish": "El coche"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "L-9ti3a",
        "phonetic": "/l-qti-3a/",
        "meaning": "Casawi slang for old car"
      }
    ],
    "origin": "French",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "transport",
      "modern"
    ],
    "verified": true
  },
  {
    "word": "l-mhatta",
    "arabic": "المحطة",
    "phonetic": "/l-m7at-ta/",
    "partOfSpeech": "noun",
    "definition": "Train / bus station.",
    "examples": [
      "Fin l-mhatta?",
      "L-mhatta d-Qatar (train)"
    ],
    "translations": {
      "arabic": "المحطة",
      "french": "La gare / station",
      "english": "Station (train/bus)",
      "spanish": "La estación"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-mhatta",
        "phonetic": "/l-m7at-ta/",
        "meaning": "Station"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "transport",
      "travel"
    ],
    "verified": true
  },
  {
    "word": "zellige",
    "arabic": "الزليج",
    "phonetic": "/ze-llidj/",
    "partOfSpeech": "noun",
    "definition": "Moroccan geometric mosaic tilework — UNESCO recognized art form.",
    "examples": [
      "Zellige d-Fes",
      "3andek zellige zwine"
    ],
    "translations": {
      "arabic": "الزليج",
      "french": "Zellige / Zellij",
      "english": "Zellige (Moroccan mosaic tilework)",
      "spanish": "Zellige"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Zellige d-Fas",
        "phonetic": "/ze-llidj d fas/",
        "meaning": "Fes is capital of zellige craftsmanship"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Zellige",
        "phonetic": "/ze-llidj/",
        "meaning": "Used in Marrakesh palace interiors"
      }
    ],
    "origin": "Amazigh/Arabic",
    "regions": [
      "Fes",
      "Marrakesh",
      "Nationwide"
    ],
    "themes": [
      "craft",
      "art",
      "architecture",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "jllaba",
    "arabic": "الجلابة",
    "phonetic": "/jlla-ba/",
    "partOfSpeech": "noun",
    "definition": "The iconic Moroccan hooded robe — the national dress.",
    "examples": [
      "3afak jllaba",
      "Jllaba bida (white)",
      "Jllaba d-l-3id"
    ],
    "translations": {
      "arabic": "الجلابة",
      "french": "Djellaba",
      "english": "Djellaba / Jellaba",
      "spanish": "Chilaba"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Jllaba d-Fas",
        "phonetic": "/jlla-ba d fas/",
        "meaning": "Finer embroidery — more formal"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tabendirt",
        "phonetic": "/ta-ben-dirt/",
        "meaning": "Amazigh robe — different from djellaba"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "clothing",
      "culture",
      "identity",
      "craft"
    ],
    "verified": true
  },
  {
    "word": "kaftan",
    "arabic": "القفطان",
    "phonetic": "/kaf-tan/",
    "partOfSpeech": "noun",
    "definition": "The ceremonial robe — the most elaborate dress in Moroccan culture. Masterpiece of embroidery.",
    "examples": [
      "Kaftan d-l-3ars",
      "Kaftan zwine bzzaf"
    ],
    "translations": {
      "arabic": "القفطان",
      "french": "Caftan",
      "english": "Kaftan / Caftan",
      "spanish": "Caftán"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Kaftan d-Fas",
        "phonetic": "/kaf-tan d fas/",
        "meaning": "Most prestigious kaftan — Fassi craftsmanship"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Kaftan d-Marraksh",
        "phonetic": "/d mar-raks/",
        "meaning": "More colorful, Saharan influence"
      }
    ],
    "origin": "Andalusian/Persian",
    "regions": [
      "Fes",
      "Marrakesh",
      "Nationwide"
    ],
    "themes": [
      "clothing",
      "craft",
      "wedding",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "7enna",
    "arabic": "الحناء",
    "phonetic": "/7en-na/",
    "partOfSpeech": "noun",
    "definition": "Henna — natural dye for body decoration at weddings.",
    "examples": [
      "Lilt l-7enna",
      "7enna d-l-3arusa"
    ],
    "translations": {
      "arabic": "الحناء",
      "french": "Le henné",
      "english": "Henna",
      "spanish": "La henna"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "7enna d-Jemaa el-Fna",
        "phonetic": "/d jma3 el-fna/",
        "meaning": "Jemaa el-Fna henna artists"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "beauty",
      "wedding",
      "culture",
      "tradition"
    ],
    "verified": true
  },
  {
    "word": "babouche",
    "arabic": "البابوش",
    "phonetic": "/ba-buch/",
    "partOfSpeech": "noun",
    "definition": "Traditional Moroccan leather slippers — the iconic yellow slippers.",
    "examples": [
      "Babouche d-Fas",
      "Babouche sfra (yellow)"
    ],
    "translations": {
      "arabic": "البابوش",
      "french": "Babouche",
      "english": "Babouche (Moroccan slippers)",
      "spanish": "Babuchas"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Belgha",
        "phonetic": "/bel-gha/",
        "meaning": "Fassi term — belgha = flat leather slipper"
      }
    ],
    "origin": "French/Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "clothing",
      "craft",
      "fashion"
    ],
    "verified": true
  },
  {
    "word": "gnawa",
    "arabic": "كناوة",
    "phonetic": "/gna-wa/",
    "partOfSpeech": "noun",
    "definition": "UNESCO-listed Moroccan spiritual music with West African roots.",
    "examples": [
      "L-gnawa d-Essaouira",
      "Lila d-l-gnawa",
      "Malem d-l-gnawa"
    ],
    "translations": {
      "arabic": "موسيقى الكناوة",
      "french": "Gnawa",
      "english": "Gnawa music",
      "spanish": "Música gnawa"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Lila d-l-gnawa",
        "phonetic": "/li-la d el-gna-wa/",
        "meaning": "Gnawa night ceremony — trance ritual"
      },
      {
        "region": "Essaouira",
        "dialect": "Standard Darija",
        "word": "Gnawa festival",
        "phonetic": "/fes-ti-val/",
        "meaning": "World's largest Gnawa festival"
      }
    ],
    "origin": "West African/Moroccan",
    "regions": [
      "Marrakesh",
      "Essaouira",
      "Nationwide"
    ],
    "themes": [
      "music",
      "UNESCO",
      "ritual",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "malhoun",
    "arabic": "الملحون",
    "phonetic": "/mal-7oun/",
    "partOfSpeech": "noun",
    "definition": "Classical Moroccan sung poetry — the 'opera of Morocco'. Born in Fes.",
    "examples": [
      "Malhoun d-Fas",
      "Qsidat l-malhoun"
    ],
    "translations": {
      "arabic": "الملحون",
      "french": "Malhoun",
      "english": "Malhoun (classical Moroccan poetry-song)",
      "spanish": "Malhoun"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Malhoun d-Fas",
        "phonetic": "/mal-7oun d fas/",
        "meaning": "Most classical form — Fes origin"
      },
      {
        "region": "Meknes",
        "dialect": "Meknassi",
        "word": "Malhoun d-Meknes",
        "phonetic": "/d mek-nes/",
        "meaning": "Meknes has distinct tradition"
      }
    ],
    "origin": "Moroccan/Andalusian",
    "regions": [
      "Fes",
      "Meknes"
    ],
    "themes": [
      "music",
      "culture",
      "poetry",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "chaabi",
    "arabic": "الشعبي",
    "phonetic": "/sha3-bi/",
    "partOfSpeech": "noun",
    "definition": "Popular Moroccan music — born in Casablanca in the 1950s.",
    "examples": [
      "Chaabi d-Casablanca",
      "Radio chaabi"
    ],
    "translations": {
      "arabic": "الموسيقى الشعبية",
      "french": "Chaabi (musique populaire)",
      "english": "Chaabi (Moroccan popular music)",
      "spanish": "Chaabi"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Chaabi d-Casa",
        "phonetic": "/sha3-bi d ka-sa/",
        "meaning": "Urban Casablanca version"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Chaabi d-Marraksh",
        "phonetic": "/sha3-bi d mar-raks/",
        "meaning": "Blends with Gnawa"
      }
    ],
    "origin": "Moroccan urban",
    "regions": [
      "Casablanca",
      "Nationwide"
    ],
    "themes": [
      "music",
      "urban",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "darbouka",
    "arabic": "الدربوكة",
    "phonetic": "/dar-bou-ka/",
    "partOfSpeech": "noun",
    "definition": "Goblet-shaped Moroccan hand drum — heartbeat of Moroccan music.",
    "examples": [
      "3andu darbouka",
      "Dreb l-darbouka"
    ],
    "translations": {
      "arabic": "الدربوكة",
      "french": "Darbouka",
      "english": "Darbouka drum",
      "spanish": "Darbouka"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Darbouka",
        "phonetic": "/dar-bou-ka/",
        "meaning": "Goblet drum — essential instrument"
      }
    ],
    "origin": "Amazigh/Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "music",
      "instrument",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "tbourida",
    "arabic": "التبوريدة",
    "phonetic": "/tbou-ri-da/",
    "partOfSpeech": "noun",
    "definition": "Moroccan equestrian performance — UNESCO listed.",
    "examples": [
      "Tbourida f-l-moussem",
      "Farsan d-t-tbourida"
    ],
    "translations": {
      "arabic": "التبوريدة",
      "french": "Tbourida / Fantasia",
      "english": "Tbourida / Fantasia",
      "spanish": "Tbourida"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Tbourida / Fantasia",
        "phonetic": "/fan-ta-zia/",
        "meaning": "Both names used"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "culture",
      "horses",
      "heritage",
      "UNESCO"
    ],
    "verified": true
  },
  {
    "word": "moussem",
    "arabic": "الموسم",
    "phonetic": "/mou-ssem/",
    "partOfSpeech": "noun",
    "definition": "Traditional Moroccan pilgrimage/festival around a saint's shrine.",
    "examples": [
      "Moussem d-Moulay Idriss",
      "L-moussem l-kbir"
    ],
    "translations": {
      "arabic": "الموسم",
      "french": "Le moussem",
      "english": "Moussem (religious festival)",
      "spanish": "Moussem"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Moussem d-Moulay Idriss",
        "phonetic": "/mous-sem d mou-lay id-ris/",
        "meaning": "Most important annual moussem"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Timghar",
        "phonetic": "/tim-ghar/",
        "meaning": "Amazigh term for festival gathering"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "culture",
      "festival",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "7mer",
    "arabic": "أحمر",
    "phonetic": "/7mer/",
    "partOfSpeech": "adjective",
    "definition": "Red — color of Marrakesh walls and Moroccan flag.",
    "examples": [
      "Had l-haja 7mer",
      "Jllaba 7mera (f)"
    ],
    "translations": {
      "arabic": "أحمر",
      "french": "Rouge",
      "english": "Red — color of Marrakesh walls and Moroccan flag",
      "spanish": "Rojo"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Azegzaw (adj.)",
        "phonetic": "/a-zeg-zaw/",
        "meaning": "Color terms differ in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "zrq",
    "arabic": "أزرق",
    "phonetic": "/zrq/",
    "partOfSpeech": "adjective",
    "definition": "Blue — color of Chefchaouen and traditional Fassi ceramics.",
    "examples": [
      "Had l-haja zrq",
      "Jllaba zrqa (f)"
    ],
    "translations": {
      "arabic": "أزرق",
      "french": "Bleu",
      "english": "Blue — color of Chefchaouen and traditional Fassi ceramics",
      "spanish": "Azul"
    },
    "regionalVariants": [
      {
        "region": "Chefchaouen",
        "dialect": "Jebli",
        "word": "Zrq d-Chaouen",
        "phonetic": "/zrq d sha-wen/",
        "meaning": "The legendary Chefchaouen blue"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "khdr",
    "arabic": "أخضر",
    "phonetic": "/khdr/",
    "partOfSpeech": "adjective",
    "definition": "Green — color of Moroccan flag crescent and mint tea.",
    "examples": [
      "Had l-haja khdr",
      "Jllaba khdra (f)"
    ],
    "translations": {
      "arabic": "أخضر",
      "french": "Vert",
      "english": "Green — color of Moroccan flag crescent and mint tea",
      "spanish": "Verde"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "sfr",
    "arabic": "أصفر",
    "phonetic": "/sfr/",
    "partOfSpeech": "adjective",
    "definition": "Yellow — color of saffron and Fes walls at sunset.",
    "examples": [
      "Had l-haja sfr",
      "Jllaba sfra (f)"
    ],
    "translations": {
      "arabic": "أصفر",
      "french": "Jaune",
      "english": "Yellow — color of saffron and Fes walls at sunset",
      "spanish": "Amarillo"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "byad",
    "arabic": "أبيض",
    "phonetic": "/byad/",
    "partOfSpeech": "adjective",
    "definition": "White — color of Casablanca (the White City) and Friday djellabas.",
    "examples": [
      "Had l-haja byad",
      "Jllaba byada (f)"
    ],
    "translations": {
      "arabic": "أبيض",
      "french": "Blanc",
      "english": "White — color of Casablanca (the White City) and Friday djellabas",
      "spanish": "Blanco"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "khal",
    "arabic": "أسود",
    "phonetic": "/khal/",
    "partOfSpeech": "adjective",
    "definition": "Black — color of argan oil and traditional Moroccan soap.",
    "examples": [
      "Had l-haja khal",
      "Jllaba khala (f)"
    ],
    "translations": {
      "arabic": "أسود",
      "french": "Noir",
      "english": "Black — color of argan oil and traditional Moroccan soap",
      "spanish": "Negro"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "7mr",
    "arabic": "بني",
    "phonetic": "/7mer l-ghamq/",
    "partOfSpeech": "adjective",
    "definition": "Brown / dark red — color of Moroccan leather.",
    "examples": [
      "Had l-haja 7mr",
      "Jllaba 7mra (f)"
    ],
    "translations": {
      "arabic": "بني",
      "french": "Marron",
      "english": "Brown / dark red — color of Moroccan leather",
      "spanish": "Marrón"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "mws",
    "arabic": "موف",
    "phonetic": "/mouv/",
    "partOfSpeech": "adjective",
    "definition": "Purple — from French mauve.",
    "examples": [
      "Had l-haja mws",
      "Jllaba mwsa (f)"
    ],
    "translations": {
      "arabic": "موف",
      "french": "Violet / Mauve",
      "english": "Purple — from French mauve",
      "spanish": "Morado"
    },
    "regionalVariants": [],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "l-b7ar",
    "arabic": "البحر",
    "phonetic": "/l-b7ar/",
    "partOfSpeech": "noun",
    "definition": "The sea / ocean. Morocco has Atlantic and Mediterranean coasts.",
    "examples": [
      "Mshit l-l-b7ar",
      "B7ar l-qlima (Atlantic)"
    ],
    "translations": {
      "arabic": "البحر",
      "french": "La mer / l'océan",
      "english": "The sea / ocean",
      "spanish": "El mar"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-b7ar",
        "phonetic": "/l-b7ar/",
        "meaning": "The sea"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ilel",
        "phonetic": "/i-lel/",
        "meaning": "Sea in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "geography",
      "sea"
    ],
    "verified": true
  },
  {
    "word": "j-jbel",
    "arabic": "الجبل",
    "phonetic": "/j-jbel/",
    "partOfSpeech": "noun",
    "definition": "The mountain. Morocco's Atlas mountains are central to culture.",
    "examples": [
      "J-jbel d-Toubkal",
      "Nas d-j-jbel"
    ],
    "translations": {
      "arabic": "الجبل",
      "french": "La montagne",
      "english": "The mountain",
      "spanish": "La montaña"
    },
    "regionalVariants": [
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Adrar",
        "phonetic": "/ad-rar/",
        "meaning": "Mountain in Tarifit"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Adrar",
        "phonetic": "/ad-rar/",
        "meaning": "Mountain in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "geography",
      "mountain"
    ],
    "verified": true
  },
  {
    "word": "l-wad",
    "arabic": "الوادي",
    "phonetic": "/l-wad/",
    "partOfSpeech": "noun",
    "definition": "The river / valley. Many Moroccan cities built along wadis.",
    "examples": [
      "L-wad d-Draa",
      "L-wad d-Fes"
    ],
    "translations": {
      "arabic": "الوادي",
      "french": "L'oued / la rivière",
      "english": "The river / wadi",
      "spanish": "El río / oued"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-wad",
        "phonetic": "/l-wad/",
        "meaning": "River/wadi"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "geography"
    ],
    "verified": true
  },
  {
    "word": "s-sahara",
    "arabic": "الصحراء",
    "phonetic": "/s-sa-7ra/",
    "partOfSpeech": "noun",
    "definition": "The Sahara desert. Not just a place — an identity.",
    "examples": [
      "S-sahara d-l-maghrib",
      "Nas d-s-sahara"
    ],
    "translations": {
      "arabic": "الصحراء",
      "french": "Le Sahara",
      "english": "The Sahara / desert",
      "spanish": "El Sahara"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "S-sahara",
        "phonetic": "/s-sa-7ra/",
        "meaning": "Home — Saharan identity"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Sahara",
      "Nationwide"
    ],
    "themes": [
      "nature",
      "geography",
      "Sahara",
      "identity"
    ],
    "verified": true
  },
  {
    "word": "l-ghaba",
    "arabic": "الغابة",
    "phonetic": "/l-gha-ba/",
    "partOfSpeech": "noun",
    "definition": "Forest / woods.",
    "examples": [
      "L-ghaba d-l-arz (cedar forest)",
      "L-ghaba d-Ifrane"
    ],
    "translations": {
      "arabic": "الغابة",
      "french": "La forêt",
      "english": "The forest",
      "spanish": "El bosque"
    },
    "regionalVariants": [
      {
        "region": "Atlas",
        "dialect": "Standard Darija",
        "word": "Ghaba d-l-arz",
        "phonetic": "/d el-arz/",
        "meaning": "Cedar forest — Atlas mountains"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "geography"
    ],
    "verified": true
  },
  {
    "word": "l-3in",
    "arabic": "العين",
    "phonetic": "/l-3in/",
    "partOfSpeech": "noun",
    "definition": "Spring / water source / eye.",
    "examples": [
      "L-3in d-l-ma",
      "3in d-Ras el-Maa"
    ],
    "translations": {
      "arabic": "العين / النبع",
      "french": "La source / l'œil",
      "english": "Spring / eye",
      "spanish": "El manantial / ojo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3in",
        "phonetic": "/l-3in/",
        "meaning": "Spring / eye — double meaning"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "water"
    ],
    "verified": true
  },
  {
    "word": "j-jmel",
    "arabic": "الجمل",
    "phonetic": "/j-jmel/",
    "partOfSpeech": "noun",
    "definition": "The camel / dromedary — symbol of the Sahara.",
    "examples": [
      "J-jmel f-s-sahara",
      "Rkbt 3la j-jmel"
    ],
    "translations": {
      "arabic": "الجمل",
      "french": "Le chameau / dromadaire",
      "english": "The camel / dromedary",
      "spanish": "El camello"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Lbel",
        "phonetic": "/l-bel/",
        "meaning": "Camel in Hassaniya — different word"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Sahara",
      "Nationwide"
    ],
    "themes": [
      "animal",
      "Sahara",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "l-7mar",
    "arabic": "الحمار",
    "phonetic": "/l-7mar/",
    "partOfSpeech": "noun",
    "definition": "The donkey — traditional transport in Moroccan medinas.",
    "examples": [
      "L-7mar d-l-mdina",
      "L-7mar f-d-derb"
    ],
    "translations": {
      "arabic": "الحمار",
      "french": "L'âne",
      "english": "The donkey",
      "spanish": "El burro"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "L-7mar d-l-mdina",
        "phonetic": "/d el-mdi-na/",
        "meaning": "Medina donkey — traditional transport"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "animal",
      "transport",
      "medina"
    ],
    "verified": true
  },
  {
    "word": "ramadan",
    "arabic": "رمضان",
    "phonetic": "/ra-ma-dan/",
    "partOfSpeech": "noun",
    "definition": "The holy fasting month — the most important time in the Moroccan calendar.",
    "examples": [
      "Ramadan mubarak",
      "F-wqt Ramadan",
      "Ftour d-Ramadan"
    ],
    "translations": {
      "arabic": "رمضان",
      "french": "Ramadan",
      "english": "Ramadan",
      "spanish": "Ramadán"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ramadan",
        "phonetic": "/ra-ma-dan/",
        "meaning": "Holy fasting month"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "culture",
      "calendar",
      "sacred"
    ],
    "verified": true
  },
  {
    "word": "ftour",
    "arabic": "الفطور",
    "phonetic": "/f-tour/",
    "partOfSpeech": "noun",
    "definition": "The breaking of the fast at sunset in Ramadan / breakfast.",
    "examples": [
      "Wqt l-ftour",
      "Ftour d-Ramadan",
      "Ftour d-s-sba7 (breakfast)"
    ],
    "translations": {
      "arabic": "الإفطار / الفطور",
      "french": "La rupture du jeûne / petit-déjeuner",
      "english": "Iftar / breakfast",
      "spanish": "Iftar / desayuno"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ftour",
        "phonetic": "/f-tour/",
        "meaning": "Iftar / breakfast"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "food",
      "Ramadan"
    ],
    "verified": true
  },
  {
    "word": "s7our",
    "arabic": "السحور",
    "phonetic": "/s7our/",
    "partOfSpeech": "noun",
    "definition": "Pre-dawn meal before fasting in Ramadan.",
    "examples": [
      "Qum l-s7our",
      "S7our d-Ramadan"
    ],
    "translations": {
      "arabic": "السحور",
      "french": "Le s'hour",
      "english": "Suhoor (pre-dawn Ramadan meal)",
      "spanish": "Suhoor"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "S7our",
        "phonetic": "/s7our/",
        "meaning": "Pre-dawn Ramadan meal"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "food",
      "Ramadan"
    ],
    "verified": true
  },
  {
    "word": "3id",
    "arabic": "العيد",
    "phonetic": "/3id/",
    "partOfSpeech": "noun",
    "definition": "Eid / religious festival. 3id s-sghir (after Ramadan) and 3id l-kbir (sacrifice).",
    "examples": [
      "3id mubarak!",
      "L-3id l-kbir",
      "3id s-sghir"
    ],
    "translations": {
      "arabic": "العيد",
      "french": "L'Aïd",
      "english": "Eid / Islamic holiday",
      "spanish": "Eid"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3id mubarak",
        "phonetic": "/3id mu-ba-rak/",
        "meaning": "Blessed Eid — universal greeting"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "festival",
      "celebration"
    ],
    "verified": true
  },
  {
    "word": "jma3a",
    "arabic": "الجماعة",
    "phonetic": "/jma-3a/",
    "partOfSpeech": "noun",
    "definition": "The community / congregation / everyone.",
    "examples": [
      "L-jma3a kulla (everyone)",
      "Wach l-jma3a 3arfa?",
      "Jma3a d-l-7uma"
    ],
    "translations": {
      "arabic": "الجماعة / المجتمع",
      "french": "La communauté / tout le monde",
      "english": "The community / everyone",
      "spanish": "La comunidad"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-jma3a",
        "phonetic": "/jma-3a/",
        "meaning": "Community / everyone"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "social",
      "community"
    ],
    "verified": true
  },
  {
    "word": "baraka",
    "arabic": "البركة",
    "phonetic": "/ba-ra-ka/",
    "partOfSpeech": "noun",
    "definition": "Divine blessing / grace. People and places can have baraka.",
    "examples": [
      "3andou baraka",
      "Had l-jdda 3andha baraka",
      "Mkan d-l-baraka"
    ],
    "translations": {
      "arabic": "البركة",
      "french": "La baraka",
      "english": "Divine blessing / baraka",
      "spanish": "La baraka"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Baraka",
        "phonetic": "/ba-ra-ka/",
        "meaning": "Divine blessing — key Moroccan concept"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "culture",
      "blessing"
    ],
    "verified": true
  },
  {
    "word": "azul",
    "arabic": "أزول",
    "phonetic": "/a-zul/",
    "partOfSpeech": "greeting",
    "definition": "Hello in Amazigh — literally 'blue'. Used instead of salam.",
    "examples": [
      "Azul!",
      "Azul fellak",
      "Azul aytma"
    ],
    "translations": {
      "arabic": "مرحبا (بالأمازيغية)",
      "french": "Bonjour (en tamazight)",
      "english": "Hello (in Amazigh)",
      "spanish": "Hola (en amazigh)"
    },
    "regionalVariants": [
      {
        "region": "Rif Mountains",
        "dialect": "Tarifit",
        "word": "Azul",
        "phonetic": "/a-zul/",
        "meaning": "Hello — Tarifit"
      },
      {
        "region": "Middle Atlas",
        "dialect": "Tamazight",
        "word": "Azul fellak",
        "phonetic": "/a-zul fel-lak/",
        "meaning": "Hello to you"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Azul",
        "phonetic": "/a-zul/",
        "meaning": "Both used in Souss"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Rif",
      "Atlas",
      "Souss"
    ],
    "themes": [
      "greeting",
      "Amazigh",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "tanmirt",
    "arabic": "تانميرت",
    "phonetic": "/tan-mirt/",
    "partOfSpeech": "expression",
    "definition": "Thank you in Tarifit Amazigh.",
    "examples": [
      "Tanmirt!",
      "Tanmirt nk"
    ],
    "translations": {
      "arabic": "شكراً (بالأمازيغية)",
      "french": "Merci (en tarifit)",
      "english": "Thank you (in Tarifit)",
      "spanish": "Gracias (en tarifit)"
    },
    "regionalVariants": [
      {
        "region": "Rif Mountains",
        "dialect": "Tarifit",
        "word": "Tanmirt",
        "phonetic": "/tan-mirt/",
        "meaning": "Thank you — Tarifit Rif"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Mamnoun",
        "phonetic": "/mam-noun/",
        "meaning": "Thank you — Tachelhit Souss"
      },
      {
        "region": "Middle Atlas",
        "dialect": "Tamazight",
        "word": "Tanmmirt",
        "phonetic": "/tan-mmirt/",
        "meaning": "Thank you — Tamazight Atlas"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Rif"
    ],
    "themes": [
      "politeness",
      "Amazigh",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "ifilki",
    "arabic": "إيفيلكي",
    "phonetic": "/i-fil-ki/",
    "partOfSpeech": "adjective",
    "definition": "Beautiful in Tachelhit Amazigh — the Souss 'zwina'.",
    "examples": [
      "Ifilki bezzaf!",
      "Had lhaja ifilki"
    ],
    "translations": {
      "arabic": "جميل (بالتاشلحيت)",
      "french": "Beau (en tachelhit)",
      "english": "Beautiful (in Tachelhit)",
      "spanish": "Hermoso (en tachelhit)"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Ifilki (m) / Tifilkit (f)",
        "phonetic": "/i-fil-ki/",
        "meaning": "Beautiful in Tachelhit"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Tifawt",
        "phonetic": "/ti-fawt/",
        "meaning": "Beautiful/light in Tarifit"
      }
    ],
    "origin": "Amazigh/Tachelhit",
    "regions": [
      "Souss",
      "Agadir"
    ],
    "themes": [
      "beauty",
      "Amazigh",
      "Souss"
    ],
    "verified": true
  },
  {
    "word": "agadir",
    "arabic": "أكادير",
    "phonetic": "/a-ga-dir/",
    "partOfSpeech": "noun",
    "definition": "Fortified granary in Amazigh — communal food storage.",
    "examples": [
      "Agadir d-Souss",
      "L-agadir d-l-qbila"
    ],
    "translations": {
      "arabic": "أكادير (مخزن جماعي)",
      "french": "Agadir (grenier collectif)",
      "english": "Agadir (fortified granary)",
      "spanish": "Agadir"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Agadir",
        "phonetic": "/a-ga-dir/",
        "meaning": "Fortified communal storage — Souss institution"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Souss"
    ],
    "themes": [
      "Amazigh",
      "architecture",
      "community"
    ],
    "verified": true
  },
  {
    "word": "d-darija",
    "arabic": "الدارجة",
    "phonetic": "/d-da-ri-dja/",
    "partOfSpeech": "noun",
    "definition": "Moroccan Darija — the spoken Moroccan Arabic dialect.",
    "examples": [
      "Hdutha b-darija",
      "Darija mashi 3rbiya",
      "Darija l-maghribiya"
    ],
    "translations": {
      "arabic": "الدارجة / العامية المغربية",
      "french": "Le darija / l'arabe marocain",
      "english": "Moroccan Darija",
      "spanish": "El darija"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "D-darija",
        "phonetic": "/d-da-ri-dja/",
        "meaning": "Moroccan spoken Arabic"
      }
    ],
    "origin": "Arabic/Amazigh mix",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "language",
      "identity",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "t-tmazight",
    "arabic": "تمازيغت",
    "phonetic": "/ta-ma-zight/",
    "partOfSpeech": "noun",
    "definition": "The Amazigh/Berber language — official since 2011.",
    "examples": [
      "Bghit n-t3allam t-tmazight",
      "Azul = salam f-tmazight"
    ],
    "translations": {
      "arabic": "الأمازيغية",
      "french": "Le Tamazight / berbère",
      "english": "Tamazight / Amazigh language",
      "spanish": "El tamazight"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tachel7it",
        "phonetic": "/ta-shel-7it/",
        "meaning": "Souss variant — most widely spoken"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Tarifit",
        "phonetic": "/ta-ri-fit/",
        "meaning": "Rif mountains variant"
      },
      {
        "region": "Middle Atlas",
        "dialect": "Tamazight",
        "word": "Tamazight",
        "phonetic": "/ta-ma-zight/",
        "meaning": "Middle Atlas variant"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "language",
      "Amazigh",
      "heritage",
      "official"
    ],
    "verified": true
  },
  {
    "word": "sbr w salli 3la n-nbi",
    "arabic": "اصبر وصلي على النبي",
    "phonetic": "/sbr w sal-li 3la n-nbi/",
    "partOfSpeech": "proverb",
    "definition": "Be patient and pray for the Prophet. The Moroccan response to any difficulty.",
    "examples": [
      "Sbr w salli 3la n-nbi",
      "Sbr mftah l-frj"
    ],
    "translations": {
      "arabic": "اصبر وصلي على النبي",
      "french": "Sois patient et prie le prophète",
      "english": "Be patient and pray for the Prophet",
      "spanish": "Ten paciencia"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Sbr w salli",
        "phonetic": "/sbr w sal-li/",
        "meaning": "Patience and faith — universal counsel"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "proverb",
      "religion",
      "patience",
      "wisdom"
    ],
    "verified": true
  },
  {
    "word": "l-3in ma t3lash 3la l-7ajb",
    "arabic": "العين ما تعلاش على الحاجب",
    "phonetic": "/l-3in ma t3-lash 3la l-7ajb/",
    "partOfSpeech": "proverb",
    "definition": "The eye cannot rise above the eyebrow. Know your place.",
    "examples": [
      "L-3in ma t3lash 3la l-7ajb"
    ],
    "translations": {
      "arabic": "اعرف حدودك",
      "french": "L'œil ne peut pas s'élever au-dessus du sourcil",
      "english": "The eye cannot rise above the eyebrow",
      "spanish": "El ojo no puede elevarse sobre la ceja"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3in ma t3lash",
        "phonetic": "/l-3in ma t3-lash/",
        "meaning": "Know your place — universal proverb"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "proverb",
      "wisdom",
      "social"
    ],
    "verified": true
  },
  {
    "word": "l-yedd l-wahda ma tsffaqsh",
    "arabic": "اليد الواحدة ما تصفقش",
    "phonetic": "/l-yedd l-wa7-da ma ts-ffaq-sh/",
    "partOfSpeech": "proverb",
    "definition": "One hand cannot clap. You need others — the importance of community.",
    "examples": [
      "L-yedd l-wahda ma tsffaqsh",
      "Khasna n-3awnou b-juj"
    ],
    "translations": {
      "arabic": "اليد الواحدة لا تصفق",
      "french": "Une seule main ne peut pas applaudir",
      "english": "One hand cannot clap",
      "spanish": "Una mano sola no puede aplaudir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-yedd l-wahda ma tsffaqsh",
        "phonetic": "/-/",
        "meaning": "Community proverb"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "proverb",
      "community",
      "wisdom"
    ],
    "verified": true
  },
  {
    "word": "mn tamma l-7al 3la l-7al",
    "arabic": "من تما الحال على الحال",
    "phonetic": "/mn tem-ma l-7al 3la l-7al/",
    "partOfSpeech": "proverb",
    "definition": "From there, situation upon situation. Life is continuous — good and bad alternate.",
    "examples": [
      "Mn tamma l-7al 3la l-7al",
      "Haka dyalna l-7al"
    ],
    "translations": {
      "arabic": "الحياة متواصلة",
      "french": "De situation en situation",
      "english": "From situation to situation",
      "spanish": "De situación en situación"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7al 3la l-7al",
        "phonetic": "/-/",
        "meaning": "Life is continuous proverb"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "proverb",
      "philosophy",
      "wisdom"
    ],
    "verified": true
  },
  {
    "word": "sah7i",
    "arabic": "صاحبي",
    "phonetic": "/sa7-7i/",
    "partOfSpeech": "noun/address",
    "definition": "My friend / buddy. The most common address among Moroccan men.",
    "examples": [
      "Sah7i fin ghadi?",
      "Labas sah7i?"
    ],
    "translations": {
      "arabic": "صديقي",
      "french": "Mon pote / Mon ami",
      "english": "My buddy / my mate",
      "spanish": "Mi amigo"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Sah7i",
        "phonetic": "/sa7-7i/",
        "meaning": "Buddy — very Casawi"
      },
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Sidi",
        "phonetic": "/si-di/",
        "meaning": "Sidi more used in Marrakesh"
      },
      {
        "region": "North",
        "dialect": "Tanjawi",
        "word": "Colega",
        "phonetic": "/ko-le-ga/",
        "meaning": "Spanish colega in Tangier"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Casablanca",
      "Nationwide"
    ],
    "themes": [
      "slang",
      "address",
      "friendship",
      "urban"
    ],
    "verified": true
  },
  {
    "word": "portabi",
    "arabic": "البورتابي",
    "phonetic": "/por-ta-bi/",
    "partOfSpeech": "noun",
    "definition": "Mobile phone / smartphone. From French 'portable'.",
    "examples": [
      "Wqo3 portabi",
      "Sharge portabi"
    ],
    "translations": {
      "arabic": "الهاتف المحمول",
      "french": "Le portable / smartphone",
      "english": "Mobile phone",
      "spanish": "El móvil"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Smartphone",
        "phonetic": "/smart-fon/",
        "meaning": "Both names used in youth slang"
      }
    ],
    "origin": "French",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "technology",
      "modern",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "l-wifi",
    "arabic": "الويفي",
    "phonetic": "/l-wi-fi/",
    "partOfSpeech": "noun",
    "definition": "WiFi — the modern essential.",
    "examples": [
      "Wach 3andek wifi?",
      "Password d-l-wifi ash huwa?"
    ],
    "translations": {
      "arabic": "الواي فاي",
      "french": "Le WiFi",
      "english": "WiFi",
      "spanish": "WiFi"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-wifi",
        "phonetic": "/l-wi-fi/",
        "meaning": "WiFi — universal modern need"
      }
    ],
    "origin": "English",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "modern",
      "technology",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "internet",
    "arabic": "الانترنيت",
    "phonetic": "/in-ter-nit/",
    "partOfSpeech": "noun",
    "definition": "Internet — essential for modern Moroccan life.",
    "examples": [
      "Wach 3andek internet?",
      "Internet kayna?",
      "Kneksiyun d-internet"
    ],
    "translations": {
      "arabic": "الإنترنت",
      "french": "L'internet",
      "english": "Internet",
      "spanish": "Internet"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Internet",
        "phonetic": "/in-ter-nit/",
        "meaning": "Internet"
      }
    ],
    "origin": "English",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "technology",
      "modern"
    ],
    "verified": true
  },
  {
    "word": "mqaddem l-barra",
    "arabic": "مقدم البرة",
    "phonetic": "/mqa-dem l-bar-ra/",
    "partOfSpeech": "expression",
    "definition": "Moroccan living abroad. The 5M+ diaspora.",
    "examples": [
      "Huwa mqaddem l-barra",
      "Jat mn l-barra"
    ],
    "translations": {
      "arabic": "مغترب",
      "french": "Le Marocain de l'étranger / MRE",
      "english": "Moroccan abroad",
      "spanish": "Marroquí del exterior"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "MRE",
        "phonetic": "/em-ra-e/",
        "meaning": "MRE = Marocain Résident à l'Étranger"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "diaspora",
      "modern",
      "identity"
    ],
    "verified": true
  },
  {
    "word": "n-nes d-l-barra",
    "arabic": "ناس البرة",
    "phonetic": "/n-nes d l-bar-ra/",
    "partOfSpeech": "expression",
    "definition": "People from abroad / foreigners / tourists.",
    "examples": [
      "N-nes d-l-barra jat l-Marraksh",
      "3andu s-lika d-l-barra"
    ],
    "translations": {
      "arabic": "الناس من الخارج",
      "french": "Les gens de l'étranger",
      "english": "People from abroad / foreigners",
      "spanish": "Gente del exterior"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "N-nes d-l-barra",
        "phonetic": "/n-nes d l-bar-ra/",
        "meaning": "People from outside"
      }
    ],
    "origin": "Moroccan",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "social",
      "tourism",
      "modern"
    ],
    "verified": true
  },
  {
    "word": "r-ras",
    "arabic": "الراس",
    "phonetic": "/r-ras/",
    "partOfSpeech": "noun",
    "definition": "Head. 'Dir balik' = pay attention (give head).",
    "examples": [
      "Wja3 r-ras (headache)",
      "Dir balik!",
      "R-ras dar3-li"
    ],
    "translations": {
      "arabic": "الرأس",
      "french": "La tête",
      "english": "Head",
      "spanish": "La cabeza"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "R-ras",
        "phonetic": "/r-ras/",
        "meaning": "Head"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body",
      "health"
    ],
    "verified": true
  },
  {
    "word": "l-3in",
    "arabic": "العين",
    "phonetic": "/l-3in/",
    "partOfSpeech": "noun",
    "definition": "Eye. Also: evil eye (3in l-7asoud).",
    "examples": [
      "L-3in d-l-7asoud (evil eye)",
      "3iniya (my eyes)",
      "L-3in ma t3lash"
    ],
    "translations": {
      "arabic": "العين",
      "french": "L'œil",
      "english": "Eye / evil eye",
      "spanish": "El ojo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3in",
        "phonetic": "/l-3in/",
        "meaning": "Eye — also evil eye concept"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body",
      "spiritual"
    ],
    "verified": true
  },
  {
    "word": "l-id",
    "arabic": "اليد",
    "phonetic": "/l-id/",
    "partOfSpeech": "noun",
    "definition": "Hand. Also: l-id l-wahda ma tsffaqsh (one hand can't clap).",
    "examples": [
      "L-id d-l-ymin",
      "Sir 3tini idik",
      "L-id l-wahda ma tsffaqsh"
    ],
    "translations": {
      "arabic": "اليد",
      "french": "La main",
      "english": "Hand",
      "spanish": "La mano"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Afus",
        "phonetic": "/a-fus/",
        "meaning": "Hand in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body"
    ],
    "verified": true
  },
  {
    "word": "l-rejl",
    "arabic": "الرجل",
    "phonetic": "/l-rejl/",
    "partOfSpeech": "noun",
    "definition": "Foot / leg.",
    "examples": [
      "Wja3 r-rejl",
      "Rejliya (my feet)",
      "L-rejl d-l-ymin"
    ],
    "translations": {
      "arabic": "الرجل / القدم",
      "french": "Le pied / la jambe",
      "english": "Foot / leg",
      "spanish": "El pie / la pierna"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Adar",
        "phonetic": "/a-dar/",
        "meaning": "Foot in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body"
    ],
    "verified": true
  },
  {
    "word": "l-krs",
    "arabic": "الكرش",
    "phonetic": "/l-krs/",
    "partOfSpeech": "noun",
    "definition": "Belly / stomach. Informal term.",
    "examples": [
      "Wja3 l-krs",
      "L-krs 3liya (I'm hungry)",
      "Had shi f-l-krs"
    ],
    "translations": {
      "arabic": "البطن",
      "french": "Le ventre / bidon",
      "english": "Belly / stomach",
      "spanish": "La barriga"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-krs",
        "phonetic": "/l-krs/",
        "meaning": "Belly — informal"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "body",
      "informal"
    ],
    "verified": true
  },
  {
    "word": "wja3",
    "arabic": "وجع",
    "phonetic": "/wja3/",
    "partOfSpeech": "noun",
    "definition": "Pain / hurt / ache.",
    "examples": [
      "3andi wja3 f-r-ras",
      "Had shi wja3ni",
      "Wja3 f-l-krs"
    ],
    "translations": {
      "arabic": "ألم",
      "french": "Douleur / ça fait mal",
      "english": "Pain / hurt / ache",
      "spanish": "Dolor"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Wja3",
        "phonetic": "/wja3/",
        "meaning": "Pain/hurt"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "health",
      "pain"
    ],
    "verified": true
  },
  {
    "word": "ssaha",
    "arabic": "الصحة",
    "phonetic": "/s-sa-ha/",
    "partOfSpeech": "noun",
    "definition": "Health. 'Bssaha' = to your health (after eating/bathing).",
    "examples": [
      "Llah i3tik ssaha",
      "Bssaha (to your health)",
      "Ssaha w-rra7a"
    ],
    "translations": {
      "arabic": "الصحة",
      "french": "La santé",
      "english": "Health",
      "spanish": "La salud"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ssaha",
        "phonetic": "/s-sa-ha/",
        "meaning": "Health"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "health",
      "blessing"
    ],
    "verified": true
  },
  {
    "word": "l-3lm",
    "arabic": "العلم",
    "phonetic": "/l-3lm/",
    "partOfSpeech": "noun",
    "definition": "Knowledge / science. 'Tlab l-3lm' = seek knowledge.",
    "examples": [
      "Tlab l-3lm mn l-mhd l-llhd",
      "L-3lm nur"
    ],
    "translations": {
      "arabic": "العلم",
      "french": "La science / le savoir",
      "english": "Knowledge / science",
      "spanish": "El conocimiento"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3lm",
        "phonetic": "/l-3lm/",
        "meaning": "Knowledge"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "education",
      "wisdom"
    ],
    "verified": true
  },
  {
    "word": "l-ktab",
    "arabic": "الكتاب",
    "phonetic": "/l-ktab/",
    "partOfSpeech": "noun",
    "definition": "Book. 'L-ktab d-l-qran' = the Quran.",
    "examples": [
      "Qra had l-ktab",
      "L-ktab mzyan",
      "Jib-li wahed l-ktab"
    ],
    "translations": {
      "arabic": "الكتاب",
      "french": "Le livre",
      "english": "Book",
      "spanish": "El libro"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Adlis",
        "phonetic": "/ad-lis/",
        "meaning": "Book in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "education",
      "literature"
    ],
    "verified": true
  },
  {
    "word": "l-qra ya",
    "arabic": "القراية",
    "phonetic": "/l-qra-ya/",
    "partOfSpeech": "noun",
    "definition": "Reading / studying / education.",
    "examples": [
      "Kayn l-qraya",
      "Sir l-l-qraya",
      "Bghit n-qra"
    ],
    "translations": {
      "arabic": "التعلم / الدراسة",
      "french": "Les études / l'éducation",
      "english": "Education / studies",
      "spanish": "Los estudios"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-qraya",
        "phonetic": "/l-qra-ya/",
        "meaning": "Education/studying"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "education"
    ],
    "verified": true
  },
  {
    "word": "l-ustadh",
    "arabic": "الأستاذ",
    "phonetic": "/l-us-tadh/",
    "partOfSpeech": "noun",
    "definition": "Teacher / professor. Also respectful address for educated people.",
    "examples": [
      "L-ustadh Mohamed",
      "Labas l-ustadh?"
    ],
    "translations": {
      "arabic": "الأستاذ",
      "french": "Le professeur / Monsieur",
      "english": "Teacher / Professor",
      "spanish": "El profesor"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-ustadh",
        "phonetic": "/l-us-tadh/",
        "meaning": "Teacher — respectful address"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "education",
      "respect",
      "address"
    ],
    "verified": true
  },
  {
    "word": "l-luGha",
    "arabic": "اللغة",
    "phonetic": "/l-lu-gha/",
    "partOfSpeech": "noun",
    "definition": "Language.",
    "examples": [
      "L-lugha l-3rbiya",
      "L-lugha l-faransiya",
      "3llm-ni l-lugha"
    ],
    "translations": {
      "arabic": "اللغة",
      "french": "La langue",
      "english": "Language",
      "spanish": "El idioma"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-lugha",
        "phonetic": "/l-lu-gha/",
        "meaning": "Language"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "language",
      "education"
    ],
    "verified": true
  },
  {
    "word": "tarjama",
    "arabic": "ترجمة",
    "phonetic": "/tar-dja-ma/",
    "partOfSpeech": "noun",
    "definition": "Translation / interpretation.",
    "examples": [
      "3tini tarjama",
      "Tarjama d-had l-klam",
      "Turjum-li had shi"
    ],
    "translations": {
      "arabic": "الترجمة",
      "french": "La traduction",
      "english": "Translation",
      "spanish": "La traducción"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Tarjama",
        "phonetic": "/tar-dja-ma/",
        "meaning": "Translation"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "language",
      "education"
    ],
    "verified": true
  },
  {
    "word": "r-rbi3",
    "arabic": "الربيع",
    "phonetic": "/r-rbi3/",
    "partOfSpeech": "noun",
    "definition": "Spring — Morocco's most beautiful season.",
    "examples": [
      "F-r-rbi3",
      "R-rbi3 zwine",
      "Shta w-rbi3"
    ],
    "translations": {
      "arabic": "الربيع",
      "french": "Le printemps",
      "english": "Spring",
      "spanish": "La primavera"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "R-rbi3",
        "phonetic": "/r-rbi3/",
        "meaning": "Spring"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "season",
      "weather"
    ],
    "verified": true
  },
  {
    "word": "l-khryf",
    "arabic": "الخريف",
    "phonetic": "/l-khryf/",
    "partOfSpeech": "noun",
    "definition": "Autumn / fall.",
    "examples": [
      "F-l-khryf",
      "L-khryf jab l-b9rt",
      "L-khryf mzyan f-l-atlas"
    ],
    "translations": {
      "arabic": "الخريف",
      "french": "L'automne",
      "english": "Autumn / fall",
      "spanish": "El otoño"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-khryf",
        "phonetic": "/l-khryf/",
        "meaning": "Autumn"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "season",
      "weather"
    ],
    "verified": true
  },
  {
    "word": "sh-shta",
    "arabic": "الشتاء",
    "phonetic": "/sh-shta/",
    "partOfSpeech": "noun",
    "definition": "Winter. Also means rain.",
    "examples": [
      "F-sh-shta",
      "Sh-shta barda",
      "Shtat (it rained)"
    ],
    "translations": {
      "arabic": "الشتاء / المطر",
      "french": "L'hiver / la pluie",
      "english": "Winter / rain",
      "spanish": "El invierno / la lluvia"
    },
    "regionalVariants": [
      {
        "region": "Atlas",
        "dialect": "Standard Darija",
        "word": "Thalj",
        "phonetic": "/thalj/",
        "meaning": "Snow — important in Atlas winter"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "season",
      "weather"
    ],
    "verified": true
  },
  {
    "word": "s-saif",
    "arabic": "الصيف",
    "phonetic": "/s-saif/",
    "partOfSpeech": "noun",
    "definition": "Summer.",
    "examples": [
      "F-s-saif",
      "S-saif 7ar bzzaf",
      "Mshina l-b7ar f-s-saif"
    ],
    "translations": {
      "arabic": "الصيف",
      "french": "L'été",
      "english": "Summer",
      "spanish": "El verano"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "S-saif",
        "phonetic": "/s-saif/",
        "meaning": "Summer"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "season",
      "weather"
    ],
    "verified": true
  },
  {
    "word": "sh-shms",
    "arabic": "الشمس",
    "phonetic": "/sh-shms/",
    "partOfSpeech": "noun",
    "definition": "The sun. Morocco has 300+ sunny days per year.",
    "examples": [
      "Sh-shms 7arra",
      "Khrj f-sh-shms",
      "Sh-shms d-l-mghrb"
    ],
    "translations": {
      "arabic": "الشمس",
      "french": "Le soleil",
      "english": "The sun",
      "spanish": "El sol"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tafokt",
        "phonetic": "/ta-fokt/",
        "meaning": "Sun in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "weather"
    ],
    "verified": true
  },
  {
    "word": "r-ri7",
    "arabic": "الريح",
    "phonetic": "/r-ri7/",
    "partOfSpeech": "noun",
    "definition": "Wind. Essaouira is famous for its constant wind.",
    "examples": [
      "R-ri7 d-Essaouira",
      "R-ri7 barda",
      "Kayna ri7 lyum"
    ],
    "translations": {
      "arabic": "الريح",
      "french": "Le vent",
      "english": "Wind",
      "spanish": "El viento"
    },
    "regionalVariants": [
      {
        "region": "Essaouira",
        "dialect": "Standard Darija",
        "word": "R-ri7 d-Essaouira",
        "phonetic": "/d es-swi-ra/",
        "meaning": "Essaouira's legendary wind"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "weather",
      "nature"
    ],
    "verified": true
  },
  {
    "word": "l-ghym",
    "arabic": "الغيم",
    "phonetic": "/l-ghym/",
    "partOfSpeech": "noun",
    "definition": "Clouds / cloudy sky.",
    "examples": [
      "L-ghym kayn",
      "Jat gh-ghyum",
      "Ghym w-shta"
    ],
    "translations": {
      "arabic": "الغيم",
      "french": "Le nuage / nuageux",
      "english": "Cloud / cloudy",
      "spanish": "Las nubes / nublado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-ghym",
        "phonetic": "/l-ghym/",
        "meaning": "Clouds"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "weather"
    ],
    "verified": true
  },
  {
    "word": "l-mghrb",
    "arabic": "المغرب",
    "phonetic": "/l-mg-hrb/",
    "partOfSpeech": "noun",
    "definition": "Morocco. Also means 'sunset' and 'Maghreb region'.",
    "examples": [
      "Blad l-mghrb",
      "L-mghrb s-3id",
      "L-mghrb hiya hiya"
    ],
    "translations": {
      "arabic": "المغرب",
      "french": "Le Maroc / le Maghreb",
      "english": "Morocco",
      "spanish": "Marruecos"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-mghrb",
        "phonetic": "/l-mg-hrb/",
        "meaning": "Morocco — also sunset"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "place",
      "geography",
      "identity"
    ],
    "verified": true
  },
  {
    "word": "Marraksh",
    "arabic": "مراكش",
    "phonetic": "/mar-raksh/",
    "partOfSpeech": "noun",
    "definition": "Marrakesh — the Red City. Founded 1062. Named the city that gives Morocco its name.",
    "examples": [
      "Blad Marraksh",
      "L-mdina d-Marraksh",
      "Marrakshi (person from Marrakesh)"
    ],
    "translations": {
      "arabic": "مراكش",
      "french": "Marrakech",
      "english": "Marrakesh",
      "spanish": "Marrakech"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Marraksh",
        "phonetic": "/mar-raksh/",
        "meaning": "The Red City — imperial capital"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Marrakesh"
    ],
    "themes": [
      "place",
      "city",
      "imperial",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "Fas",
    "arabic": "فاس",
    "phonetic": "/fas/",
    "partOfSpeech": "noun",
    "definition": "Fes — the spiritual and cultural capital. Founded 789 CE.",
    "examples": [
      "L-mdina d-Fas",
      "Fassi (person from Fes)",
      "Fas l-bali"
    ],
    "translations": {
      "arabic": "فاس",
      "french": "Fès",
      "english": "Fes",
      "spanish": "Fez"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Fas",
        "phonetic": "/fas/",
        "meaning": "The Cultural Capital — oldest university"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Fes"
    ],
    "themes": [
      "place",
      "city",
      "imperial",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "d-dar l-byda",
    "arabic": "الدار البيضاء",
    "phonetic": "/d-dar l-byda/",
    "partOfSpeech": "noun",
    "definition": "Casablanca — 'The White House'. Morocco's largest city.",
    "examples": [
      "D-dar l-byda = Casa",
      "L-Casa d-l-khidma",
      "Casawi (person from Casa)"
    ],
    "translations": {
      "arabic": "الدار البيضاء",
      "french": "Casablanca",
      "english": "Casablanca",
      "spanish": "Casablanca"
    },
    "regionalVariants": [
      {
        "region": "Casablanca",
        "dialect": "Casawi",
        "word": "Casa",
        "phonetic": "/ka-sa/",
        "meaning": "Casablanca — shortened to Casa"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Casablanca"
    ],
    "themes": [
      "place",
      "city",
      "modern"
    ],
    "verified": true
  },
  {
    "word": "Tanja",
    "arabic": "طنجة",
    "phonetic": "/tan-dja/",
    "partOfSpeech": "noun",
    "definition": "Tangier — where Africa meets Europe. 14km from Spain.",
    "examples": [
      "Tanja w-l-bahr",
      "Tanjawi (person from Tangier)",
      "Bab l-Maghrb (Gate of Morocco)"
    ],
    "translations": {
      "arabic": "طنجة",
      "french": "Tanger",
      "english": "Tangier",
      "spanish": "Tánger"
    },
    "regionalVariants": [
      {
        "region": "Tangier",
        "dialect": "Tanjawi",
        "word": "Tanja",
        "phonetic": "/tan-dja/",
        "meaning": "Gateway between Africa and Europe"
      }
    ],
    "origin": "Amazigh/Phoenician",
    "regions": [
      "Tangier"
    ],
    "themes": [
      "place",
      "city",
      "port",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "Shaouen",
    "arabic": "شاون",
    "phonetic": "/sha-wen/",
    "partOfSpeech": "noun",
    "definition": "Chefchaouen — the Blue City. Rif Mountains.",
    "examples": [
      "Shaouen l-zrqa",
      "Chefchaouen b-l-zrq",
      "Msheit l-Shaouen"
    ],
    "translations": {
      "arabic": "شفشاون",
      "french": "Chefchaouen",
      "english": "Chefchaouen",
      "spanish": "Chaouen"
    },
    "regionalVariants": [
      {
        "region": "Chefchaouen",
        "dialect": "Jebli",
        "word": "Shaouen",
        "phonetic": "/sha-wen/",
        "meaning": "The Blue City — locals say Shaouen"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Chefchaouen"
    ],
    "themes": [
      "place",
      "city",
      "mountain",
      "photography"
    ],
    "verified": true
  },
  {
    "word": "l-3yuon",
    "arabic": "العيون",
    "phonetic": "/l-3-youn/",
    "partOfSpeech": "noun",
    "definition": "Laayoune — capital of the Moroccan Sahara. Hassaniya-speaking region.",
    "examples": [
      "L-3yuon d-s-sahara",
      "Nas d-l-3yuon",
      "L-3yuon w-Dakhla"
    ],
    "translations": {
      "arabic": "العيون",
      "french": "Laâyoune",
      "english": "Laayoune",
      "spanish": "El Aaiún"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "L-3yuon",
        "phonetic": "/l-3-youn/",
        "meaning": "Eyes — Hassaniya name for Laayoune"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Sahara"
    ],
    "themes": [
      "place",
      "city",
      "Sahara",
      "Hassaniya"
    ],
    "verified": true
  },
  {
    "word": "Wa7da",
    "arabic": "واحدة",
    "phonetic": "/wa7-da/",
    "partOfSpeech": "noun",
    "definition": "Oujda — 'the unique one'. Gateway to Algeria. Eastern Morocco.",
    "examples": [
      "Sharqi (eastern dialect)",
      "Nas d-Wa7da",
      "Oujda w-l-sharq"
    ],
    "translations": {
      "arabic": "وجدة",
      "french": "Oujda",
      "english": "Oujda",
      "spanish": "Oujda"
    },
    "regionalVariants": [
      {
        "region": "East/Oujda",
        "dialect": "Sharqi",
        "word": "Wa7da",
        "phonetic": "/wa7-da/",
        "meaning": "Oujda — unique eastern city"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "East"
    ],
    "themes": [
      "place",
      "city",
      "east"
    ],
    "verified": true
  },
  {
    "word": "Meknes",
    "arabic": "مكناس",
    "phonetic": "/mek-nas/",
    "partOfSpeech": "noun",
    "definition": "Meknes — imperial city of Sultan Moulay Ismail. Bab Mansour gate.",
    "examples": [
      "Meknes l-3tiq (old Meknes)",
      "Meknas (Amazigh name)",
      "Meknassi (person from Meknes)"
    ],
    "translations": {
      "arabic": "مكناس",
      "french": "Meknès",
      "english": "Meknes",
      "spanish": "Mequínez"
    },
    "regionalVariants": [
      {
        "region": "Meknes",
        "dialect": "Meknassi",
        "word": "Meknes",
        "phonetic": "/mek-nas/",
        "meaning": "Imperial city — Bab Mansour gate"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Meknes"
    ],
    "themes": [
      "place",
      "city",
      "imperial",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "msha",
    "arabic": "مشى",
    "phonetic": "/msha/",
    "partOfSpeech": "verb",
    "definition": "To go / went. Essential movement verb.",
    "examples": [
      "Mshit (I went)",
      "Fin ghadi tmshi?",
      "Msha (he went)"
    ],
    "translations": {
      "arabic": "ذهب",
      "french": "Aller / partir",
      "english": "To go",
      "spanish": "Ir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "msha",
        "phonetic": "/msha/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "ja",
    "arabic": "جا",
    "phonetic": "/dja/",
    "partOfSpeech": "verb",
    "definition": "To come. One of the most used verbs.",
    "examples": [
      "Ji (come!)",
      "Jit (I came)",
      "Wach ja?"
    ],
    "translations": {
      "arabic": "جاء",
      "french": "Venir",
      "english": "To come",
      "spanish": "Venir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "ja",
        "phonetic": "/dja/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "kan",
    "arabic": "كان",
    "phonetic": "/kan/",
    "partOfSpeech": "verb",
    "definition": "To be (past). Essential for past tense.",
    "examples": [
      "Kan mzyan (it was good)",
      "Knt (I was)",
      "Kanat (she was)"
    ],
    "translations": {
      "arabic": "كان",
      "french": "Être (passé)",
      "english": "Was / were",
      "spanish": "Era / fue"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "kan",
        "phonetic": "/kan/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "3ndu",
    "arabic": "عنده",
    "phonetic": "/3n-du/",
    "partOfSpeech": "verb",
    "definition": "To have (he has). 3ndi = I have, 3ndek = you have.",
    "examples": [
      "3ndi flus (I have money)",
      "Wach 3ndek l-waqt?",
      "3ndu bezzaf"
    ],
    "translations": {
      "arabic": "عنده / عندي",
      "french": "Avoir",
      "english": "To have",
      "spanish": "Tener"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3ndu",
        "phonetic": "/3n-du/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "bghit",
    "arabic": "بغيت",
    "phonetic": "/bghit/",
    "partOfSpeech": "verb",
    "definition": "I want. Essential desire verb.",
    "examples": [
      "Bghit atay",
      "Wach bghiti?",
      "Ma bghit-sh"
    ],
    "translations": {
      "arabic": "أريد / أرغب",
      "french": "Je veux",
      "english": "I want",
      "spanish": "Quiero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "bghit",
        "phonetic": "/bghit/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "3areft",
    "arabic": "عرفت",
    "phonetic": "/3a-reft/",
    "partOfSpeech": "verb",
    "definition": "I know / I knew. 3aref = he knows.",
    "examples": [
      "Ma 3arft-sh (I don't know)",
      "3aref had l-blasa?",
      "3arft (I understood)"
    ],
    "translations": {
      "arabic": "عرفت / أعرف",
      "french": "Je sais / je connais",
      "english": "I know / I knew",
      "spanish": "Sé / conocí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3areft",
        "phonetic": "/3a-reft/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "qal",
    "arabic": "قال",
    "phonetic": "/qal/",
    "partOfSpeech": "verb",
    "definition": "Said / to say. Essential reporting verb.",
    "examples": [
      "Qal-li (he told me)",
      "Shnu qal?",
      "Qolt-lak (I told you)"
    ],
    "translations": {
      "arabic": "قال",
      "french": "Dit / dire",
      "english": "Said / to say",
      "spanish": "Dijo / decir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "qal",
        "phonetic": "/qal/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "shaf",
    "arabic": "شاف",
    "phonetic": "/shaf/",
    "partOfSpeech": "verb",
    "definition": "Saw / to see.",
    "examples": [
      "Shfti had shi?",
      "Shuf (look!)",
      "Ma shft-sh"
    ],
    "translations": {
      "arabic": "رأى",
      "french": "Vu / voir",
      "english": "Saw / to see",
      "spanish": "Vio / ver"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "shaf",
        "phonetic": "/shaf/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "kla",
    "arabic": "كلا",
    "phonetic": "/kla/",
    "partOfSpeech": "verb",
    "definition": "Ate / to eat.",
    "examples": [
      "Kliti? (did you eat?)",
      "Ma klitsh (I didn't eat)",
      "Klu (they ate)"
    ],
    "translations": {
      "arabic": "أكل",
      "french": "Manger",
      "english": "To eat",
      "spanish": "Comer"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "kla",
        "phonetic": "/kla/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "shrb",
    "arabic": "شرب",
    "phonetic": "/shrb/",
    "partOfSpeech": "verb",
    "definition": "Drank / to drink.",
    "examples": [
      "Shrb atay",
      "Wach bghit tshrb?",
      "Shrbt kass d-ma"
    ],
    "translations": {
      "arabic": "شرب",
      "french": "Boire",
      "english": "To drink",
      "spanish": "Beber"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "shrb",
        "phonetic": "/shrb/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "3ml",
    "arabic": "عمل",
    "phonetic": "/3ml/",
    "partOfSpeech": "verb",
    "definition": "Did / made / to do.",
    "examples": [
      "Shu 3mlt?",
      "3ml had l-haja",
      "Ma 3mlt-sh walu"
    ],
    "translations": {
      "arabic": "عمل / فعل",
      "french": "Faire",
      "english": "To do / make",
      "spanish": "Hacer"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3ml",
        "phonetic": "/3ml/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "jab",
    "arabic": "جاب",
    "phonetic": "/djab/",
    "partOfSpeech": "verb",
    "definition": "Brought. Jab = he brought, jbt = I brought.",
    "examples": [
      "Jab l-mra (he brought the news)",
      "Jb-li l-ma",
      "Jbt had shi"
    ],
    "translations": {
      "arabic": "أحضر / جلب",
      "french": "Apporter / ramener",
      "english": "Brought",
      "spanish": "Trajo / traer"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "jab",
        "phonetic": "/djab/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "gls",
    "arabic": "جلس",
    "phonetic": "/djls/",
    "partOfSpeech": "verb",
    "definition": "Sat / to sit.",
    "examples": [
      "Jls (sit down!)",
      "Glst wayed",
      "Kanjls (I am sitting)"
    ],
    "translations": {
      "arabic": "جلس",
      "french": "S'asseoir / rester",
      "english": "To sit / stay",
      "spanish": "Sentarse"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "gls",
        "phonetic": "/djls/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "nm",
    "arabic": "نام",
    "phonetic": "/nam/",
    "partOfSpeech": "verb",
    "definition": "Slept / to sleep.",
    "examples": [
      "Nmt (I slept)",
      "Wach nmti?",
      "Ghadi nnm"
    ],
    "translations": {
      "arabic": "نام",
      "french": "Dormir",
      "english": "To sleep",
      "spanish": "Dormir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "nm",
        "phonetic": "/nam/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "qra",
    "arabic": "قرا",
    "phonetic": "/qra/",
    "partOfSpeech": "verb",
    "definition": "Read / studied. Also: went to school.",
    "examples": [
      "Qra (he studied)",
      "Kaqra (he is reading)",
      "Qrit bezzaf"
    ],
    "translations": {
      "arabic": "قرأ / درس",
      "french": "Lire / étudier",
      "english": "To read / study",
      "spanish": "Leer / estudiar"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "qra",
        "phonetic": "/qra/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "ktb",
    "arabic": "كتب",
    "phonetic": "/ktb/",
    "partOfSpeech": "verb",
    "definition": "Wrote / to write.",
    "examples": [
      "Ktbt had l-haja",
      "Ktb l-3rbiya",
      "Wach ktbti?"
    ],
    "translations": {
      "arabic": "كتب",
      "french": "Écrire",
      "english": "To write",
      "spanish": "Escribir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "ktb",
        "phonetic": "/ktb/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "t3allm",
    "arabic": "تعلم",
    "phonetic": "/t3al-lm/",
    "partOfSpeech": "verb",
    "definition": "Learned. T3allmt = I learned.",
    "examples": [
      "T3allmt l-3rbiya",
      "T3allm men had l-haja",
      "Bghit nt3allm"
    ],
    "translations": {
      "arabic": "تعلم",
      "french": "Apprendre",
      "english": "To learn",
      "spanish": "Aprender"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "t3allm",
        "phonetic": "/t3al-lm/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "khdm",
    "arabic": "خدم",
    "phonetic": "/khdm/",
    "partOfSpeech": "verb",
    "definition": "Worked. Khdam = he worked, khddama = she worked.",
    "examples": [
      "Khdmt n-har kamlu",
      "Khdam bezzaf",
      "Fin khadm?"
    ],
    "translations": {
      "arabic": "عمل",
      "french": "Travailler",
      "english": "To work",
      "spanish": "Trabajar"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "khdm",
        "phonetic": "/khdm/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "sme3",
    "arabic": "سمع",
    "phonetic": "/sme3/",
    "partOfSpeech": "verb",
    "definition": "Heard / listened. Sme3ti? = Did you hear?",
    "examples": [
      "Sme3ti had l-khabar?",
      "Sme3 l-ghiniya",
      "Ma sme3t-sh"
    ],
    "translations": {
      "arabic": "سمع",
      "french": "Entendre / écouter",
      "english": "To hear / listen",
      "spanish": "Escuchar / oír"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "sme3",
        "phonetic": "/sme3/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "tkllm",
    "arabic": "تكلم",
    "phonetic": "/tkl-lm/",
    "partOfSpeech": "verb",
    "definition": "Spoke / talked.",
    "examples": [
      "Tkllm 3rbiya",
      "Wach tkllmti m3ah?",
      "Tkllmna bezzaf"
    ],
    "translations": {
      "arabic": "تكلم",
      "french": "Parler",
      "english": "To talk / speak",
      "spanish": "Hablar"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "tkllm",
        "phonetic": "/tkl-lm/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "msha l-nwm",
    "arabic": "مشى للنوم",
    "phonetic": "/-/",
    "partOfSpeech": "verb",
    "definition": "Gone to sleep. Common farewell at night.",
    "examples": [
      "Ghadi nmshi l-nwm",
      "Msha l-nwm (he went to sleep)"
    ],
    "translations": {
      "arabic": "ذهب للنوم",
      "french": "Aller dormir",
      "english": "Gone to sleep",
      "spanish": "Ir a dormir"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "msha l-nwm",
        "phonetic": "/-/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "qft",
    "arabic": "قفط",
    "phonetic": "/qft/",
    "partOfSpeech": "verb",
    "definition": "Locked / closed. Qft l-bab = locked the door.",
    "examples": [
      "Qft l-bab",
      "Wach qftiti?",
      "L-bab mqftul (locked)"
    ],
    "translations": {
      "arabic": "أغلق / قفل",
      "french": "Fermer à clé / verrouiller",
      "english": "To lock",
      "spanish": "Cerrar con llave"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "qft",
        "phonetic": "/qft/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "7ll",
    "arabic": "حل",
    "phonetic": "/7ll/",
    "partOfSpeech": "verb",
    "definition": "Opened / solved. 7ll l-bab = opened the door.",
    "examples": [
      "7ll l-bab",
      "7ll had l-mushkila",
      "Ma 7ll-sh"
    ],
    "translations": {
      "arabic": "فتح / حل",
      "french": "Ouvrir / résoudre",
      "english": "To open / solve",
      "spanish": "Abrir / resolver"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7ll",
        "phonetic": "/7ll/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "verb",
      "daily-use",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "kbir",
    "arabic": "كبير",
    "phonetic": "/kbir/",
    "partOfSpeech": "adjective",
    "definition": "Big / large / old (for people).",
    "examples": [
      "Kbir bezzaf",
      "Wld kbir",
      "L-mdina l-kbira"
    ],
    "translations": {
      "arabic": "كبير",
      "french": "Grand / vieux",
      "english": "Big / old",
      "spanish": "Grande"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "kbir",
        "phonetic": "/kbir/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "sghir",
    "arabic": "صغير",
    "phonetic": "/sghir/",
    "partOfSpeech": "adjective",
    "definition": "Small / young / little.",
    "examples": [
      "Sghir bezzaf",
      "Wld sghir",
      "Sh-wiya"
    ],
    "translations": {
      "arabic": "صغير",
      "french": "Petit / jeune",
      "english": "Small / young",
      "spanish": "Pequeño"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "sghir",
        "phonetic": "/sghir/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "tl",
    "arabic": "طويل",
    "phonetic": "/twil/",
    "partOfSpeech": "adjective",
    "definition": "Tall / long.",
    "examples": [
      "Tul bezzaf",
      "Rajl twil",
      "Had l-triq twila"
    ],
    "translations": {
      "arabic": "طويل",
      "french": "Grand / long",
      "english": "Tall / long",
      "spanish": "Alto / largo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "tl",
        "phonetic": "/twil/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "qsir",
    "arabic": "قصير",
    "phonetic": "/qsir/",
    "partOfSpeech": "adjective",
    "definition": "Short / brief.",
    "examples": [
      "Qsir bezzaf",
      "L-klam qsir",
      "Rajl qsir"
    ],
    "translations": {
      "arabic": "قصير",
      "french": "Court / petit",
      "english": "Short / brief",
      "spanish": "Bajo / corto"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "qsir",
        "phonetic": "/qsir/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "jdid",
    "arabic": "جديد",
    "phonetic": "/jdid/",
    "partOfSpeech": "adjective",
    "definition": "New.",
    "examples": [
      "Tomobil jdida",
      "Jdid bezzaf",
      "Had shi jdid"
    ],
    "translations": {
      "arabic": "جديد",
      "french": "Nouveau",
      "english": "New",
      "spanish": "Nuevo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "jdid",
        "phonetic": "/jdid/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "3tiq",
    "arabic": "عتيق",
    "phonetic": "/3-tiq/",
    "partOfSpeech": "adjective",
    "definition": "Old / ancient / vintage.",
    "examples": [
      "L-mdina l-3tiqa",
      "3tiq bezzaf",
      "Had shi 3tiq"
    ],
    "translations": {
      "arabic": "قديم / عتيق",
      "french": "Vieux / ancien",
      "english": "Old / ancient",
      "spanish": "Viejo / antiguo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3tiq",
        "phonetic": "/3-tiq/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "bslama",
    "arabic": "بسيط",
    "phonetic": "/bsit/",
    "partOfSpeech": "adjective",
    "definition": "Simple / easy.",
    "examples": [
      "Bsit bezzaf",
      "Had shi bsit",
      "Bsit w-mzyan"
    ],
    "translations": {
      "arabic": "بسيط",
      "french": "Simple / facile",
      "english": "Simple / easy",
      "spanish": "Simple / fácil"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "bslama",
        "phonetic": "/bsit/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "s3ib",
    "arabic": "صعيب",
    "phonetic": "/s3ib/",
    "partOfSpeech": "adjective",
    "definition": "Difficult / hard.",
    "examples": [
      "S3ib bezzaf",
      "Had l-7al s3ib",
      "Ma s3ib-sh"
    ],
    "translations": {
      "arabic": "صعب",
      "french": "Difficile",
      "english": "Difficult / hard",
      "spanish": "Difícil"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "s3ib",
        "phonetic": "/s3ib/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "sri3",
    "arabic": "سريع",
    "phonetic": "/sri3/",
    "partOfSpeech": "adjective",
    "definition": "Fast / quick.",
    "examples": [
      "Sri3 bezzaf",
      "Msha sriya3",
      "Sira3 l-tomobil"
    ],
    "translations": {
      "arabic": "سريع",
      "french": "Rapide / vite",
      "english": "Fast / quick",
      "spanish": "Rápido"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "sri3",
        "phonetic": "/sri3/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "bti2",
    "arabic": "بطيء",
    "phonetic": "/bti2/",
    "partOfSpeech": "adjective",
    "definition": "Slow.",
    "examples": [
      "Bti2 bezzaf",
      "Sir bti2",
      "Had shi bti2"
    ],
    "translations": {
      "arabic": "بطيء",
      "french": "Lent",
      "english": "Slow",
      "spanish": "Lento"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "bti2",
        "phonetic": "/bti2/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "nqi",
    "arabic": "نقي",
    "phonetic": "/nqi/",
    "partOfSpeech": "adjective",
    "definition": "Clean / pure.",
    "examples": [
      "Nqi bezzaf",
      "L-ma nqi",
      "Had l-blasa nqiya"
    ],
    "translations": {
      "arabic": "نظيف",
      "french": "Propre / pur",
      "english": "Clean / pure",
      "spanish": "Limpio"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "nqi",
        "phonetic": "/nqi/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "mskhkh",
    "arabic": "مسخوخ",
    "phonetic": "/ms-khkh/",
    "partOfSpeech": "adjective",
    "definition": "Dirty.",
    "examples": [
      "Mskhkh bezzaf",
      "Had l-mlabas mskhkha",
      "L-blasa mskhkha"
    ],
    "translations": {
      "arabic": "وسخ",
      "french": "Sale",
      "english": "Dirty",
      "spanish": "Sucio"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "mskhkh",
        "phonetic": "/ms-khkh/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "ghlut",
    "arabic": "غلوط",
    "phonetic": "/gh-lut/",
    "partOfSpeech": "adjective",
    "definition": "Wrong / mistaken.",
    "examples": [
      "Had shi ghlut",
      "Ana ghlut",
      "L-jawab ghlut"
    ],
    "translations": {
      "arabic": "خاطئ",
      "french": "Faux / erroné",
      "english": "Wrong / mistaken",
      "spanish": "Equivocado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "ghlut",
        "phonetic": "/gh-lut/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "s7i7",
    "arabic": "صحيح",
    "phonetic": "/s-7i7/",
    "partOfSpeech": "adjective",
    "definition": "Correct / right / true.",
    "examples": [
      "Had shi s7i7",
      "L-jawab s7i7",
      "S7i7 bezzaf"
    ],
    "translations": {
      "arabic": "صحيح",
      "french": "Correct / juste",
      "english": "Correct / true",
      "spanish": "Correcto"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "s7i7",
        "phonetic": "/s-7i7/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "mhemm",
    "arabic": "مهم",
    "phonetic": "/m-hemm/",
    "partOfSpeech": "adjective",
    "definition": "Important.",
    "examples": [
      "Had shi mhemm",
      "Mhemm bezzaf",
      "Wach mhemm?"
    ],
    "translations": {
      "arabic": "مهم",
      "french": "Important",
      "english": "Important",
      "spanish": "Importante"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "mhemm",
        "phonetic": "/m-hemm/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "zwin",
    "arabic": "زوين",
    "phonetic": "/zwin/",
    "partOfSpeech": "adjective",
    "definition": "Beautiful (masculine). Zwina = feminine.",
    "examples": [
      "Zwin bezzaf",
      "Rajl zwin",
      "Had l-blad zwina"
    ],
    "translations": {
      "arabic": "جميل",
      "french": "Beau / belle",
      "english": "Beautiful",
      "spanish": "Bonito"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "zwin",
        "phonetic": "/zwin/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "bhal",
    "arabic": "بحال",
    "phonetic": "/b7al/",
    "partOfSpeech": "adjective",
    "definition": "Like / similar to. Used for comparison.",
    "examples": [
      "Bhal hada",
      "Bhal sidi",
      "Ma bhal-sh"
    ],
    "translations": {
      "arabic": "مثل",
      "french": "Comme / pareil",
      "english": "Like / similar to",
      "spanish": "Como / parecido"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "bhal",
        "phonetic": "/b7al/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "wafer",
    "arabic": "وافر",
    "phonetic": "/wa-fer/",
    "partOfSpeech": "adjective",
    "definition": "Available / present / plenty.",
    "examples": [
      "Wafer kayn",
      "L-ma wafer",
      "Had shi wafer"
    ],
    "translations": {
      "arabic": "متوفر",
      "french": "Disponible",
      "english": "Available / plenty",
      "spanish": "Disponible"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "wafer",
        "phonetic": "/wa-fer/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "ma kayn-sh",
    "arabic": "ما كاينش",
    "phonetic": "/-/",
    "partOfSpeech": "adjective",
    "definition": "There isn't / doesn't exist. The negative existence expression.",
    "examples": [
      "Ma kayn-sh l-ma",
      "Ma kayn-sh flus",
      "Walu kayn, ma kayn-sh"
    ],
    "translations": {
      "arabic": "لا يوجد",
      "french": "Il n'y a pas",
      "english": "There isn't / doesn't exist",
      "spanish": "No hay"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "ma kayn-sh",
        "phonetic": "/-/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "kayn",
    "arabic": "كاين",
    "phonetic": "/ka-yin/",
    "partOfSpeech": "adjective",
    "definition": "There is / exists. The positive existence expression.",
    "examples": [
      "Kayn atay?",
      "Kayn bezzaf",
      "Kayna (f: she is here)"
    ],
    "translations": {
      "arabic": "يوجد",
      "french": "Il y a",
      "english": "There is / exists",
      "spanish": "Hay"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "kayn",
        "phonetic": "/ka-yin/",
        "meaning": "Standard form"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "description",
      "grammar"
    ],
    "verified": true
  },
  {
    "word": "z-ztoun",
    "arabic": "الزيتون",
    "phonetic": "/z-ztoun/",
    "partOfSpeech": "noun",
    "definition": "Olive / olive tree. Morocco is a major olive producer.",
    "examples": [
      "Zit d-z-ztoun",
      "Shjar z-ztoun",
      "Z-ztoun d-Meknes"
    ],
    "translations": {
      "arabic": "الزيتون",
      "french": "L'olive / l'olivier",
      "english": "Olive / olive tree",
      "spanish": "La aceituna / el olivo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Z-ztoun",
        "phonetic": "/z-ztoun/",
        "meaning": "Olive"
      },
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Azemmur",
        "phonetic": "/a-zem-mur/",
        "meaning": "Olive in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "nature",
      "food",
      "plant"
    ],
    "verified": true
  },
  {
    "word": "argan",
    "arabic": "أرقان",
    "phonetic": "/ar-gan/",
    "partOfSpeech": "noun",
    "definition": "Argan tree — the 'tree of life'. Only grows in southwest Morocco.",
    "examples": [
      "Shjar d-l-argan",
      "Argan d-Souss",
      "Zit argan (argan oil)"
    ],
    "translations": {
      "arabic": "شجر الأركان",
      "french": "L'arganier",
      "english": "Argan tree",
      "spanish": "El árbol de argán"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Argan",
        "phonetic": "/ar-gan/",
        "meaning": "The UNESCO-listed argan tree — Souss only"
      }
    ],
    "origin": "Amazigh/Souss",
    "regions": [
      "Souss"
    ],
    "themes": [
      "nature",
      "Souss",
      "UNESCO",
      "argan"
    ],
    "verified": true
  },
  {
    "word": "nakhla",
    "arabic": "النخلة",
    "phonetic": "/nakh-la/",
    "partOfSpeech": "noun",
    "definition": "Palm tree / date palm. Symbol of the Saharan oases.",
    "examples": [
      "Nakhla d-s-sahara",
      "Nkhal d-Draa",
      "Nakhla w-tmr"
    ],
    "translations": {
      "arabic": "النخلة",
      "french": "Le palmier",
      "english": "Palm tree",
      "spanish": "La palmera"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Nakhla",
        "phonetic": "/nakh-la/",
        "meaning": "Palm — heart of Saharan life"
      },
      {
        "region": "Draa Valley",
        "dialect": "Standard Darija",
        "word": "Nkhal d-Draa",
        "phonetic": "/nkhal d draa/",
        "meaning": "Draa palm oases"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Sahara",
      "Draa"
    ],
    "themes": [
      "nature",
      "plant",
      "Sahara"
    ],
    "verified": true
  },
  {
    "word": "arz",
    "arabic": "الأرز",
    "phonetic": "/arz/",
    "partOfSpeech": "noun",
    "definition": "Atlas cedar tree. The iconic tree of the Moroccan mountains.",
    "examples": [
      "Ghaba d-l-arz",
      "L-arz d-Ifrane",
      "Sarj d-l-arz"
    ],
    "translations": {
      "arabic": "الأرز",
      "french": "Le cèdre de l'Atlas",
      "english": "Atlas cedar tree",
      "spanish": "El cedro del Atlas"
    },
    "regionalVariants": [
      {
        "region": "Atlas/Ifrane",
        "dialect": "Standard Darija",
        "word": "L-arz d-Ifrane",
        "phonetic": "/d i-fran/",
        "meaning": "Ifrane cedar forest — world famous"
      }
    ],
    "origin": "Amazigh/Arabic",
    "regions": [
      "Atlas",
      "Ifrane"
    ],
    "themes": [
      "nature",
      "plant",
      "mountain"
    ],
    "verified": true
  },
  {
    "word": "tmr",
    "arabic": "التمر",
    "phonetic": "/tmr/",
    "partOfSpeech": "noun",
    "definition": "Dates — the most important fruit of the Moroccan Sahara.",
    "examples": [
      "Tmr d-Draa",
      "Tmr w-7lib",
      "Tmr zwine bezzaf"
    ],
    "translations": {
      "arabic": "التمر",
      "french": "Le datte",
      "english": "Dates",
      "spanish": "Los dátiles"
    },
    "regionalVariants": [
      {
        "region": "Draa/Sahara",
        "dialect": "Standard Darija",
        "word": "Tmr d-Draa",
        "phonetic": "/tmr d draa/",
        "meaning": "World-finest Medjool dates — Draa Valley"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Sahara",
      "Draa"
    ],
    "themes": [
      "food",
      "nature",
      "Sahara"
    ],
    "verified": true
  },
  {
    "word": "l-lawz",
    "arabic": "اللوز",
    "phonetic": "/l-lawz/",
    "partOfSpeech": "noun",
    "definition": "Almonds — essential in Moroccan pastries and amlou.",
    "examples": [
      "Lawz w-3sel",
      "Pastilla b-l-lawz",
      "L-lawz d-Souss"
    ],
    "translations": {
      "arabic": "اللوز",
      "french": "L'amande",
      "english": "Almonds",
      "spanish": "Las almendras"
    },
    "regionalVariants": [
      {
        "region": "Souss",
        "dialect": "Tachelhit",
        "word": "Tazart",
        "phonetic": "/ta-zart/",
        "meaning": "Almond in Tachelhit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "nature",
      "nut"
    ],
    "verified": true
  },
  {
    "word": "l-quba",
    "arabic": "القبة",
    "phonetic": "/l-qub-ba/",
    "partOfSpeech": "noun",
    "definition": "Dome / cupola. Tops mosques, shrines and mausoleums.",
    "examples": [
      "L-quba d-l-jama3",
      "Quba d-sidi",
      "L-quba l-khadra (green dome)"
    ],
    "translations": {
      "arabic": "القبة",
      "french": "La coupole / le dôme",
      "english": "Dome / cupola",
      "spanish": "La cúpula"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-quba",
        "phonetic": "/l-qub-ba/",
        "meaning": "Dome — architectural symbol"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "architecture",
      "religion",
      "craft"
    ],
    "verified": true
  },
  {
    "word": "l-mnar",
    "arabic": "المنار",
    "phonetic": "/l-mnar/",
    "partOfSpeech": "noun",
    "definition": "Minaret — the tower of the mosque from which the call to prayer is made.",
    "examples": [
      "L-mnar d-l-jama3",
      "Mnar d-Koutoubia",
      "Mnar 3ali"
    ],
    "translations": {
      "arabic": "المنار / المئذنة",
      "french": "Le minaret",
      "english": "Minaret",
      "spanish": "El minarete"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-mnar",
        "phonetic": "/l-mnar/",
        "meaning": "Minaret"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "architecture",
      "religion"
    ],
    "verified": true
  },
  {
    "word": "l-funduq",
    "arabic": "الفندق",
    "phonetic": "/l-fun-duq/",
    "partOfSpeech": "noun",
    "definition": "Hotel. Also the historic caravanserai.",
    "examples": [
      "Fin l-funduq?",
      "Funduq mzyan",
      "3ndi 7jz f-l-funduq"
    ],
    "translations": {
      "arabic": "الفندق",
      "french": "L'hôtel",
      "english": "Hotel",
      "spanish": "El hotel"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-funduq",
        "phonetic": "/l-fun-duq/",
        "meaning": "Hotel"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "accommodation",
      "travel"
    ],
    "verified": true
  },
  {
    "word": "l-7mam",
    "arabic": "الحمام",
    "phonetic": "/l-7mam/",
    "partOfSpeech": "noun",
    "definition": "Pigeon / dove. Also: hammam. The pigeon of Jemaa el-Fna is iconic.",
    "examples": [
      "7mam d-Jemaa el-Fna",
      "Pastilla d-l-7mam (pigeon pie)",
      "7mam byad"
    ],
    "translations": {
      "arabic": "الحمام / الطائر",
      "french": "Le pigeon / la colombe",
      "english": "Pigeon / dove",
      "spanish": "La paloma"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7mam",
        "phonetic": "/l-7mam/",
        "meaning": "Pigeon"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "animal",
      "food",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "qsba",
    "arabic": "القصبة",
    "phonetic": "/qsba/",
    "partOfSpeech": "noun",
    "definition": "Kasbah — fortified palace or citadel.",
    "examples": [
      "Qsba d-Ait Benhaddou",
      "Qsba d-Marraksh",
      "L-qsba l-3tiqa"
    ],
    "translations": {
      "arabic": "القصبة",
      "french": "La kasbah",
      "english": "Kasbah / citadel",
      "spanish": "La kasbah"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Qsba",
        "phonetic": "/qsba/",
        "meaning": "Kasbah — fortified palace"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Qsar",
        "phonetic": "/qsar/",
        "meaning": "Ksar — fortified village in Sahara"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "architecture",
      "heritage",
      "place"
    ],
    "verified": true
  },
  {
    "word": "ksar",
    "arabic": "القصر",
    "phonetic": "/qsar/",
    "partOfSpeech": "noun",
    "definition": "Ksar — fortified mud-brick village. UNESCO heritage in southern Morocco.",
    "examples": [
      "Ksar d-Ait Benhaddou",
      "Ksur d-Draa",
      "L-ksar l-kbir"
    ],
    "translations": {
      "arabic": "القصر / القصبة",
      "french": "Le ksar",
      "english": "Ksar (fortified village)",
      "spanish": "El ksar"
    },
    "regionalVariants": [
      {
        "region": "South/Sahara",
        "dialect": "Standard Darija",
        "word": "Ksar",
        "phonetic": "/qsar/",
        "meaning": "Fortified mud-brick village"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "South",
      "Sahara"
    ],
    "themes": [
      "architecture",
      "UNESCO",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "zrbiya",
    "arabic": "الزربية",
    "phonetic": "/zr-bi-ya/",
    "partOfSpeech": "noun",
    "definition": "Moroccan carpet / rug. Each region has distinctive patterns.",
    "examples": [
      "Zrbiya d-Rabat",
      "Zrbiya d-l-atlas",
      "Zrbiya zwina bezzaf"
    ],
    "translations": {
      "arabic": "الزربية",
      "french": "Le tapis",
      "english": "Moroccan carpet / rug",
      "spanish": "La alfombra"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Zrbiya",
        "phonetic": "/zr-bi-ya/",
        "meaning": "Carpet — each city has own style"
      },
      {
        "region": "High Atlas",
        "dialect": "Tamazight",
        "word": "Zrbiya d-l-atlas",
        "phonetic": "/d el-at-las/",
        "meaning": "Atlas geometric carpet patterns"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "craft",
      "art",
      "decoration"
    ],
    "verified": true
  },
  {
    "word": "nsj",
    "arabic": "النسج",
    "phonetic": "/nsj/",
    "partOfSpeech": "noun",
    "definition": "Weaving / textile. Traditional craft of Moroccan women.",
    "examples": [
      "Nsj d-l-7rir (silk weaving)",
      "Nsj d-Fes",
      "Msuja (woven piece)"
    ],
    "translations": {
      "arabic": "النسج / النسيج",
      "french": "Le tissage",
      "english": "Weaving / textile",
      "spanish": "El tejido"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Nsj d-Fas",
        "phonetic": "/nsj d fas/",
        "meaning": "Fes is center of fine silk weaving"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "craft",
      "tradition",
      "textile"
    ],
    "verified": true
  },
  {
    "word": "dir balik",
    "arabic": "دير بالك",
    "phonetic": "/dir ba-lik/",
    "partOfSpeech": "expression",
    "definition": "Be careful / pay attention. Literally 'put your mind'.",
    "examples": [
      "Dir balik!",
      "Dir balik mn had l-7aja",
      "Dir balik 3la rask"
    ],
    "translations": {
      "arabic": "انتبه",
      "french": "Fais attention",
      "english": "Be careful / pay attention",
      "spanish": "Ten cuidado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Dir balik",
        "phonetic": "/dir ba-lik/",
        "meaning": "Pay attention — universal warning"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "warning",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "ma 3ndi shi",
    "arabic": "ما عندي شي",
    "phonetic": "/ma 3n-di shi/",
    "partOfSpeech": "expression",
    "definition": "I have nothing / I don't have it.",
    "examples": [
      "Ma 3ndi shi",
      "Ma 3ndi shi d-flus",
      "Ma 3ndi shi mn had"
    ],
    "translations": {
      "arabic": "ليس عندي شيء",
      "french": "Je n'ai rien / j'ai pas",
      "english": "I have nothing",
      "spanish": "No tengo nada"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ma 3ndi shi",
        "phonetic": "/ma 3n-di shi/",
        "meaning": "I have nothing"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "3la 7sab",
    "arabic": "على حساب",
    "phonetic": "/3la 7-sab/",
    "partOfSpeech": "expression",
    "definition": "According to / depending on. 3la 7sab-i = according to me.",
    "examples": [
      "3la 7sabi",
      "3la 7sab l-mzyan",
      "3la 7sab had l-7al"
    ],
    "translations": {
      "arabic": "على حسب",
      "french": "Selon / en fonction de",
      "english": "According to / depending on",
      "spanish": "Según / dependiendo de"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3la 7sab",
        "phonetic": "/3la 7-sab/",
        "meaning": "According to"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "opinion"
    ],
    "verified": true
  },
  {
    "word": "f-wahed l-marra",
    "arabic": "في واحد المرة",
    "phonetic": "/f-wa-7ed l-mar-ra/",
    "partOfSpeech": "expression",
    "definition": "Once upon a time / once. Begins Moroccan fairy tales.",
    "examples": [
      "F-wahed l-marra kan...",
      "F-wahed l-marra wa-marra"
    ],
    "translations": {
      "arabic": "في مرة من المرات",
      "french": "Il était une fois",
      "english": "Once upon a time",
      "spanish": "Érase una vez"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "F-wahed l-marra",
        "phonetic": "/f-wa-7ed l-mar-ra/",
        "meaning": "Once upon a time"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "storytelling",
      "fairy-tale"
    ],
    "verified": true
  },
  {
    "word": "3liya w-3lik",
    "arabic": "عليا وعليك",
    "phonetic": "/3li-ya w-3-lik/",
    "partOfSpeech": "expression",
    "definition": "My responsibility and yours. Shared duty.",
    "examples": [
      "Had l-mas'uliya 3liya w-3lik",
      "3liya w-3lik n-sawbu"
    ],
    "translations": {
      "arabic": "علي وعليك",
      "french": "C'est ma responsabilité et la tienne",
      "english": "My duty and yours",
      "spanish": "Es mi deber y el tuyo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3liya w-3lik",
        "phonetic": "/-/",
        "meaning": "Shared duty — community expression"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "community",
      "social"
    ],
    "verified": true
  },
  {
    "word": "3fak Allah",
    "arabic": "عفاك الله",
    "phonetic": "/3-fak al-lah/",
    "partOfSpeech": "expression",
    "definition": "God forgive you. Can be polite request or gentle reproach.",
    "examples": [
      "3fak Allah!",
      "3fak Allah, smhli",
      "3fak Allah 3la had l-haja"
    ],
    "translations": {
      "arabic": "الله يعفو عليك",
      "french": "Que Dieu te pardonne / s'il te plaît",
      "english": "God forgive / please",
      "spanish": "Que Dios te perdone"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3fak Allah",
        "phonetic": "/3-fak al-lah/",
        "meaning": "God forgive — polite or reproach"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "religion",
      "politeness"
    ],
    "verified": true
  },
  {
    "word": "f-sbil Allah",
    "arabic": "في سبيل الله",
    "phonetic": "/f-sbil al-lah/",
    "partOfSpeech": "expression",
    "definition": "In God's path. Said when giving charity.",
    "examples": [
      "F-sbil Allah (take this free)",
      "3tah f-sbil Allah",
      "Dur f-sbil Allah"
    ],
    "translations": {
      "arabic": "في سبيل الله",
      "french": "Pour l'amour de Dieu",
      "english": "For God's sake / in God's path",
      "spanish": "Por el camino de Dios"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "F-sbil Allah",
        "phonetic": "/f-sbil al-lah/",
        "meaning": "In God's path — charity expression"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "religion",
      "charity"
    ],
    "verified": true
  },
  {
    "word": "had shi mn bab l-bra",
    "arabic": "هاد الشي من باب البراء",
    "phonetic": "/had shi mn bab l-bra/",
    "partOfSpeech": "expression",
    "definition": "This is out of friendship — not obligation.",
    "examples": [
      "Had shi mn bab l-bra",
      "Ana dar had shi mn bab l-bra"
    ],
    "translations": {
      "arabic": "من باب البراء",
      "french": "C'est par amitié",
      "english": "This is out of friendship",
      "spanish": "Por amistad"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Mn bab l-bra",
        "phonetic": "/mn bab l-bra/",
        "meaning": "Classical Fassi generosity expression"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Fes",
      "Nationwide"
    ],
    "themes": [
      "expression",
      "friendship",
      "generosity"
    ],
    "verified": true
  },
  {
    "word": "b-l-3afiya",
    "arabic": "بالعافية",
    "phonetic": "/b-l-3-fi-ya/",
    "partOfSpeech": "expression",
    "definition": "Said when someone finishes eating, bathing or working. Response to 'llah i3tik ssaha'.",
    "examples": [
      "B-l-3afiya!",
      "Klit? — B-l-3afiya",
      "Khrajti mn l-hammam? — B-l-3afiya"
    ],
    "translations": {
      "arabic": "بالعافية",
      "french": "Bon appétit / Bonne santé",
      "english": "To your health / enjoy",
      "spanish": "Buen provecho"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "B-l-3afiya",
        "phonetic": "/b-l-3-fi-ya/",
        "meaning": "Response to 'llah i3tik ssaha'"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "politeness",
      "food",
      "hammam"
    ],
    "verified": true
  },
  {
    "word": "triq salamat",
    "arabic": "طريق السلامة",
    "phonetic": "/triq sa-la-mat/",
    "partOfSpeech": "expression",
    "definition": "Have a safe journey! Said when someone departs.",
    "examples": [
      "Triq salamat!",
      "Allah i3tik triq salamat",
      "Mshi — triq salamat"
    ],
    "translations": {
      "arabic": "طريق السلامة",
      "french": "Bon voyage / bonne route",
      "english": "Have a safe journey",
      "spanish": "Buen viaje"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Triq salamat",
        "phonetic": "/triq sa-la-mat/",
        "meaning": "Safe journey farewell"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "farewell",
      "travel",
      "blessing"
    ],
    "verified": true
  },
  {
    "word": "7rira",
    "arabic": "الحريرة",
    "phonetic": "/7ri-ra/",
    "partOfSpeech": "noun",
    "definition": "Short form of harira — Morocco's national soup.",
    "examples": [
      "Kes 7rira",
      "7rira w-chebakia",
      "7rira d-Ramadan"
    ],
    "translations": {
      "arabic": "الحريرة",
      "french": "Harira",
      "english": "Harira soup",
      "spanish": "Harira"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7rira",
        "phonetic": "/7ri-ra/",
        "meaning": "Short form of harira"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "Ramadan",
      "soup"
    ],
    "verified": true
  },
  {
    "word": "bysar",
    "arabic": "البيسار",
    "phonetic": "/bj-sar/",
    "partOfSpeech": "noun",
    "definition": "Fava bean dip — northern Morocco specialty. Olive oil, cumin, paprika.",
    "examples": [
      "Bysar b-z-zit",
      "Bysar d-Tanja",
      "Bysar w-khbz"
    ],
    "translations": {
      "arabic": "البيسار",
      "french": "Bissara / purée de fèves",
      "english": "Byesar (fava bean dip)",
      "spanish": "Puré de habas"
    },
    "regionalVariants": [
      {
        "region": "North/Tangier",
        "dialect": "Tanjawi",
        "word": "Bysar",
        "phonetic": "/bj-sar/",
        "meaning": "Northern Morocco fava bean dip — different from b'ssara"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "North",
      "Tangier"
    ],
    "themes": [
      "food",
      "dip",
      "north"
    ],
    "verified": true
  },
  {
    "word": "l-7rif",
    "arabic": "اللحريف",
    "phonetic": "/l-7rif/",
    "partOfSpeech": "noun",
    "definition": "Hot chili paste — Morocco's answer to harissa.",
    "examples": [
      "Had l-makla biha l-7rif",
      "L-7rif d-l-7arira",
      "L-7rif zwak"
    ],
    "translations": {
      "arabic": "الحريف",
      "french": "Le piment / harissa",
      "english": "Hot chili paste",
      "spanish": "La harissa marroquí"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7rif",
        "phonetic": "/l-7rif/",
        "meaning": "Hot chili paste"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "spice",
      "condiment"
    ],
    "verified": true
  },
  {
    "word": "sardine",
    "arabic": "السردين",
    "phonetic": "/sar-din/",
    "partOfSpeech": "noun",
    "definition": "Sardines — Morocco is world's largest sardine exporter.",
    "examples": [
      "Sardine mshwiya (grilled)",
      "Sardine d-Agadir",
      "Sardine zwina bezzaf"
    ],
    "translations": {
      "arabic": "السردين",
      "french": "La sardine",
      "english": "Sardines",
      "spanish": "Las sardinas"
    },
    "regionalVariants": [
      {
        "region": "Agadir/Essaouira",
        "dialect": "Standard Darija",
        "word": "Sardine d-Agadir",
        "phonetic": "/d a-ga-dir/",
        "meaning": "Agadir fresh sardines — best in world"
      }
    ],
    "origin": "French",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "fish",
      "coastal"
    ],
    "verified": true
  },
  {
    "word": "l-7out",
    "arabic": "الحوت",
    "phonetic": "/l-7out/",
    "partOfSpeech": "noun",
    "definition": "Fish. Morocco has both Atlantic and Mediterranean fresh fish.",
    "examples": [
      "Tagine d-l-7out",
      "7out mshwi (grilled)",
      "7out d-l-b7ar"
    ],
    "translations": {
      "arabic": "السمك",
      "french": "Le poisson",
      "english": "Fish",
      "spanish": "El pescado"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7out",
        "phonetic": "/l-7out/",
        "meaning": "Fish"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "fish"
    ],
    "verified": true
  },
  {
    "word": "djaj",
    "arabic": "الدجاج",
    "phonetic": "/dja-dj/",
    "partOfSpeech": "noun",
    "definition": "Chicken. Morocco's most commonly consumed meat.",
    "examples": [
      "Tagine d-djaj",
      "Djaj mshwi",
      "Djaj b-zaytoun"
    ],
    "translations": {
      "arabic": "الدجاج",
      "french": "Le poulet",
      "english": "Chicken",
      "spanish": "El pollo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Djaj",
        "phonetic": "/dja-dj/",
        "meaning": "Chicken"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "meat"
    ],
    "verified": true
  },
  {
    "word": "l-7m",
    "arabic": "اللحم",
    "phonetic": "/l-7m/",
    "partOfSpeech": "noun",
    "definition": "Meat. Red meat — usually lamb or beef.",
    "examples": [
      "Tagine d-l-7m",
      "7m mshwi (mechoui)",
      "L-7m d-l-ghnm (lamb)"
    ],
    "translations": {
      "arabic": "اللحم",
      "french": "La viande",
      "english": "Meat",
      "spanish": "La carne"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7m",
        "phonetic": "/l-7m/",
        "meaning": "Meat — usually lamb/beef"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "meat"
    ],
    "verified": true
  },
  {
    "word": "kefta",
    "arabic": "الكفتة",
    "phonetic": "/kef-ta/",
    "partOfSpeech": "noun",
    "definition": "Spiced ground meat — used in sandwiches, tagines and brochettes.",
    "examples": [
      "Batbout b-l-kefta",
      "Kefta m7mra",
      "Kefta b-l-bid"
    ],
    "translations": {
      "arabic": "الكفتة",
      "french": "Kefta",
      "english": "Kefta (spiced ground meat)",
      "spanish": "La kefta"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Kefta",
        "phonetic": "/kef-ta/",
        "meaning": "Spiced ground meat"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "meat",
      "street-food"
    ],
    "verified": true
  },
  {
    "word": "mrouziya",
    "arabic": "المروزية",
    "phonetic": "/mrou-zi-ya/",
    "partOfSpeech": "noun",
    "definition": "Sweet lamb tagine with raisins, honey, almonds and spices. Celebration dish.",
    "examples": [
      "Mrouziya d-l-3id",
      "Mrouziya b-l-barqouq",
      "Mrouziya zwina"
    ],
    "translations": {
      "arabic": "المروزية",
      "french": "Mrouzia",
      "english": "Mrouziya (sweet lamb tagine)",
      "spanish": "Mrouzia"
    },
    "regionalVariants": [
      {
        "region": "Marrakesh",
        "dialect": "Marrakshi",
        "word": "Mrouziya d-Marraksh",
        "phonetic": "/d mar-raks/",
        "meaning": "Marrakesh sweet tagine — Eid specialty"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Marrakesh",
      "Nationwide"
    ],
    "themes": [
      "food",
      "celebration",
      "sweet",
      "meat"
    ],
    "verified": true
  },
  {
    "word": "3dss",
    "arabic": "العدس",
    "phonetic": "/3-dss/",
    "partOfSpeech": "noun",
    "definition": "Lentils. Used in harira and rfissa.",
    "examples": [
      "3das w-djaj",
      "Hrira b-l-3dss",
      "3das d-l-jmu3a"
    ],
    "translations": {
      "arabic": "العدس",
      "french": "Les lentilles",
      "english": "Lentils",
      "spanish": "Las lentejas"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3das",
        "phonetic": "/3-das/",
        "meaning": "Lentils"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "vegetable",
      "legume"
    ],
    "verified": true
  },
  {
    "word": "7mms",
    "arabic": "الحمص",
    "phonetic": "/7-mms/",
    "partOfSpeech": "noun",
    "definition": "Chickpeas. Essential in harira and couscous.",
    "examples": [
      "Hrira b-l-7mms",
      "7mms w-3das",
      "Couscous b-l-7mms"
    ],
    "translations": {
      "arabic": "الحمص",
      "french": "Les pois chiches",
      "english": "Chickpeas",
      "spanish": "Los garbanzos"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7mms",
        "phonetic": "/7-mms/",
        "meaning": "Chickpeas"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "vegetable",
      "legume"
    ],
    "verified": true
  },
  {
    "word": "barqouq",
    "arabic": "البرقوق",
    "phonetic": "/bar-qouq/",
    "partOfSpeech": "noun",
    "definition": "Plums / prunes. Used in sweet-savory Moroccan tagines.",
    "examples": [
      "Tagine b-l-barqouq",
      "Barqouq w-lawz",
      "Mrouziya b-l-barqouq"
    ],
    "translations": {
      "arabic": "البرقوق / الخوخ",
      "french": "Le pruneau / la prune",
      "english": "Plums / prunes",
      "spanish": "Las ciruelas"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Barqouq",
        "phonetic": "/bar-qouq/",
        "meaning": "Plums/prunes in tagines"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "fruit",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "zafran",
    "arabic": "الزعفران",
    "phonetic": "/za-fra-na/",
    "partOfSpeech": "noun",
    "definition": "Saffron — grown in the Taliouine region of Morocco. Precious spice.",
    "examples": [
      "Zafran d-Taliouine",
      "Had l-tagine biha z-zafran",
      "Zafran ghali"
    ],
    "translations": {
      "arabic": "الزعفران",
      "french": "Le safran",
      "english": "Saffron",
      "spanish": "El azafrán"
    },
    "regionalVariants": [
      {
        "region": "Taliouine",
        "dialect": "Tachelhit",
        "word": "Zafran d-Taliouine",
        "phonetic": "/d ta-liou-in/",
        "meaning": "World-class Moroccan saffron from Taliouine"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "spice",
      "cooking",
      "Taliouine"
    ],
    "verified": true
  },
  {
    "word": "fel-fel",
    "arabic": "الفلفل",
    "phonetic": "/fel-fel/",
    "partOfSpeech": "noun",
    "definition": "Bell pepper. Used in taktouka and many Moroccan salads.",
    "examples": [
      "Taktouka b-l-felfel",
      "Felfel 7mr (red pepper)",
      "Felfel akhdar"
    ],
    "translations": {
      "arabic": "الفلفل",
      "french": "Le poivron",
      "english": "Bell pepper",
      "spanish": "El pimiento"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Felfel",
        "phonetic": "/fel-fel/",
        "meaning": "Bell pepper"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "vegetable",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "badinjan",
    "arabic": "الباذنجان",
    "phonetic": "/ba-din-djan/",
    "partOfSpeech": "noun",
    "definition": "Eggplant / aubergine. Used in zaalouk.",
    "examples": [
      "Zaalouk d-l-badinjan",
      "Badinjan m7mr",
      "Tagine b-l-badinjan"
    ],
    "translations": {
      "arabic": "الباذنجان",
      "french": "L'aubergine",
      "english": "Eggplant / aubergine",
      "spanish": "La berenjena"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Badinjan",
        "phonetic": "/ba-din-djan/",
        "meaning": "Eggplant"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "vegetable",
      "cooking"
    ],
    "verified": true
  },
  {
    "word": "shi7al d-l-wqt",
    "arabic": "شحال د الوقت",
    "phonetic": "/shi7-al d-l-wqt/",
    "partOfSpeech": "question",
    "definition": "What time is it?",
    "examples": [
      "Shi7al d-l-wqt?",
      "Shi7al srt?",
      "L-wqt s3 kam?"
    ],
    "translations": {
      "arabic": "كم الساعة؟",
      "french": "Quelle heure est-il?",
      "english": "What time is it?",
      "spanish": "¿Qué hora es?"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Shi7al d-l-wqt?",
        "phonetic": "/shi7-al d-l-wqt/",
        "meaning": "What time?"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "question",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "wqt l-3sha",
    "arabic": "وقت العشاء",
    "phonetic": "/wqt l-3sha/",
    "partOfSpeech": "noun",
    "definition": "Dinner time / evening meal time.",
    "examples": [
      "Wqt l-3sha ja",
      "L-3sha kla",
      "3sha mzyan (good dinner)"
    ],
    "translations": {
      "arabic": "وقت العشاء",
      "french": "L'heure du dîner",
      "english": "Dinner time",
      "spanish": "Hora de cenar"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3sha",
        "phonetic": "/l-3sha/",
        "meaning": "Dinner — evening meal"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "food",
      "time"
    ],
    "verified": true
  },
  {
    "word": "la3b",
    "arabic": "اللعب",
    "phonetic": "/la3b/",
    "partOfSpeech": "noun",
    "definition": "Game / playing / football.",
    "examples": [
      "La3b d-l-kora",
      "Drari ka-il3bu",
      "La3b mzyan"
    ],
    "translations": {
      "arabic": "اللعب / الكرة",
      "french": "Le jeu / le football",
      "english": "Game / play / football",
      "spanish": "El juego / el fútbol"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "La3b",
        "phonetic": "/la3b/",
        "meaning": "Game/play — football is la3b l-kora"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "sport",
      "leisure",
      "children"
    ],
    "verified": true
  },
  {
    "word": "l-kora",
    "arabic": "الكرة",
    "phonetic": "/l-ko-ra/",
    "partOfSpeech": "noun",
    "definition": "Football / the ball. Morocco's most popular sport.",
    "examples": [
      "La3b d-l-kora",
      "L-maghrib w-l-kora",
      "L-kora d-l-3alam"
    ],
    "translations": {
      "arabic": "الكرة / كرة القدم",
      "french": "Le ballon / le football",
      "english": "Football / soccer / ball",
      "spanish": "El fútbol / la pelota"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-kora",
        "phonetic": "/l-ko-ra/",
        "meaning": "Football — national passion"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "sport",
      "leisure"
    ],
    "verified": true
  },
  {
    "word": "hammasa",
    "arabic": "حماسة",
    "phonetic": "/ham-ma-sa/",
    "partOfSpeech": "noun",
    "definition": "Enthusiasm / passion / energy.",
    "examples": [
      "3andu hammasa",
      "Hammasa d-l-kora",
      "B-hammasa"
    ],
    "translations": {
      "arabic": "الحماسة",
      "french": "L'enthousiasme / la passion",
      "english": "Enthusiasm / passion",
      "spanish": "El entusiasmo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Hammasa",
        "phonetic": "/ham-ma-sa/",
        "meaning": "Enthusiasm/passion"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "emotion",
      "expression"
    ],
    "verified": true
  },
  {
    "word": "ma3qul",
    "arabic": "معقول",
    "phonetic": "/ma3-qoul/",
    "partOfSpeech": "adjective",
    "definition": "Reasonable / sensible / makes sense.",
    "examples": [
      "Had shi ma3qul",
      "Ma3qul bezzaf",
      "Ma ma3qul-sh"
    ],
    "translations": {
      "arabic": "معقول",
      "french": "Raisonnable / logique",
      "english": "Reasonable / makes sense",
      "spanish": "Razonable"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ma3qul",
        "phonetic": "/ma3-qoul/",
        "meaning": "Reasonable/sensible"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "adjective",
      "logic"
    ],
    "verified": true
  },
  {
    "word": "mshkil",
    "arabic": "مشكل",
    "phonetic": "/msh-kil/",
    "partOfSpeech": "noun",
    "definition": "Problem / trouble. Mashi mushkil = no problem.",
    "examples": [
      "3ndi mshkil",
      "Sh-men l-mshkil?",
      "Mshkil kbir"
    ],
    "translations": {
      "arabic": "مشكلة",
      "french": "Problème",
      "english": "Problem / trouble",
      "spanish": "Problema"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mshkil",
        "phonetic": "/msh-kil/",
        "meaning": "Problem"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "l-7al",
    "arabic": "الحال",
    "phonetic": "/l-7al/",
    "partOfSpeech": "noun",
    "definition": "The situation / state / condition.",
    "examples": [
      "Kif l-7al?",
      "L-7al mzyan",
      "L-7al 3sir"
    ],
    "translations": {
      "arabic": "الحال",
      "french": "La situation / l'état",
      "english": "The situation / state",
      "spanish": "La situación"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-7al",
        "phonetic": "/l-7al/",
        "meaning": "Situation/state"
      },
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Kif l-7al?",
        "phonetic": "/kif l-7al/",
        "meaning": "Saharan form — 'how is the condition?'"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "masr",
    "arabic": "مصر",
    "phonetic": "/ma-sr/",
    "partOfSpeech": "noun",
    "definition": "Fate / destiny / Egypt. Used in expressions about fate.",
    "examples": [
      "Had masr-i",
      "L-masr f-id Allah",
      "Masr d-l-bilad"
    ],
    "translations": {
      "arabic": "المصير / مصر",
      "french": "Le destin / l'Égypte",
      "english": "Fate / destiny / Egypt",
      "spanish": "El destino / Egipto"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Masr-i",
        "phonetic": "/ma-sr-i/",
        "meaning": "My destiny/fate"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "philosophy",
      "expression"
    ],
    "verified": true
  },
  {
    "word": "maktub",
    "arabic": "مكتوب",
    "phonetic": "/mak-toub/",
    "partOfSpeech": "noun",
    "definition": "Destiny / what is written. 'It was fated'.",
    "examples": [
      "Hada maktub",
      "Maktub bghit la bghit",
      "Had shi maktub"
    ],
    "translations": {
      "arabic": "المكتوب",
      "french": "C'est le destin / c'est écrit",
      "english": "Written destiny / it's fate",
      "spanish": "Está escrito / el destino"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Maktub",
        "phonetic": "/mak-toub/",
        "meaning": "It's fate — resigned acceptance"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "philosophy",
      "fate"
    ],
    "verified": true
  },
  {
    "word": "l-3mr",
    "arabic": "العمر",
    "phonetic": "/l-3mr/",
    "partOfSpeech": "noun",
    "definition": "Age / life / lifetime.",
    "examples": [
      "Sh7al 3mrk?",
      "L-3mr kullu",
      "Had l-3mr bghit"
    ],
    "translations": {
      "arabic": "العمر",
      "french": "L'âge / la vie",
      "english": "Age / life / lifetime",
      "spanish": "La edad / la vida"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3mr",
        "phonetic": "/l-3mr/",
        "meaning": "Age/life"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time",
      "life"
    ],
    "verified": true
  },
  {
    "word": "n-nhar",
    "arabic": "النهار",
    "phonetic": "/n-nhar/",
    "partOfSpeech": "noun",
    "definition": "The day / daytime.",
    "examples": [
      "F-n-nhar",
      "N-nhar kamlu",
      "N-nhar mzyan"
    ],
    "translations": {
      "arabic": "النهار",
      "french": "Le jour / la journée",
      "english": "The day / daytime",
      "spanish": "El día"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "N-nhar",
        "phonetic": "/n-nhar/",
        "meaning": "The day"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "s-s3a",
    "arabic": "الساعة",
    "phonetic": "/s-s3a/",
    "partOfSpeech": "noun",
    "definition": "The hour / the watch / the clock.",
    "examples": [
      "S-s3a stta",
      "S3a d-l-ymin (on your right)",
      "Shi7al s-s3a?"
    ],
    "translations": {
      "arabic": "الساعة",
      "french": "L'heure / la montre",
      "english": "Hour / watch / clock",
      "spanish": "La hora / el reloj"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "S-s3a",
        "phonetic": "/s-s3a/",
        "meaning": "Hour/clock/watch"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "time"
    ],
    "verified": true
  },
  {
    "word": "mabrook",
    "arabic": "مبروك",
    "phonetic": "/ma-brook/",
    "partOfSpeech": "expression",
    "definition": "Congratulations! From baraka (blessing).",
    "examples": [
      "Mabrook!",
      "Mabrook l-3rs",
      "Mabrook had l-khbr"
    ],
    "translations": {
      "arabic": "مبروك",
      "french": "Félicitations",
      "english": "Congratulations!",
      "spanish": "Felicitaciones"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mabrook",
        "phonetic": "/ma-brook/",
        "meaning": "Congratulations"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "celebration",
      "expression",
      "greeting"
    ],
    "verified": true
  },
  {
    "word": "3id mubarak",
    "arabic": "عيد مبروك",
    "phonetic": "/3id mu-ba-rak/",
    "partOfSpeech": "expression",
    "definition": "Blessed Eid! The Eid greeting.",
    "examples": [
      "3id mubarak!",
      "3id sa3id",
      "3id mubarak w-mbark 3lik"
    ],
    "translations": {
      "arabic": "عيد مبروك",
      "french": "Aïd moubarak",
      "english": "Blessed Eid",
      "spanish": "Feliz Eid"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3id mubarak",
        "phonetic": "/3id mu-ba-rak/",
        "meaning": "Blessed Eid — universal"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "celebration",
      "Eid"
    ],
    "verified": true
  },
  {
    "word": "ramadan mubarak",
    "arabic": "رمضان مبروك",
    "phonetic": "/ra-ma-dan mu-ba-rak/",
    "partOfSpeech": "expression",
    "definition": "Blessed Ramadan. Ramadan Kareem.",
    "examples": [
      "Ramadan mubarak!",
      "Ramadan karim",
      "Ramadan mbark"
    ],
    "translations": {
      "arabic": "رمضان مبروك",
      "french": "Ramadan moubarak",
      "english": "Blessed Ramadan",
      "spanish": "Ramadán bendito"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Ramadan mubarak",
        "phonetic": "/ra-ma-dan mu-ba-rak/",
        "meaning": "Blessed Ramadan"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "religion",
      "Ramadan",
      "greeting"
    ],
    "verified": true
  },
  {
    "word": "l-3rs mubarak",
    "arabic": "العرس مبروك",
    "phonetic": "/l-3rs mu-ba-rak/",
    "partOfSpeech": "expression",
    "definition": "Blessed wedding! Said to newlyweds.",
    "examples": [
      "L-3rs mubarak!",
      "3rsa mzyana",
      "Mabrook l-3rs"
    ],
    "translations": {
      "arabic": "عرس مبروك",
      "french": "Félicitations pour le mariage",
      "english": "Blessed wedding",
      "spanish": "Feliz boda"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3rs mubarak",
        "phonetic": "/l-3rs mu-ba-rak/",
        "meaning": "Blessed wedding"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "wedding",
      "celebration",
      "greeting"
    ],
    "verified": true
  },
  {
    "word": "mbarakat l-wilada",
    "arabic": "مباركة الولادة",
    "phonetic": "/mba-ra-kat l-wi-la-da/",
    "partOfSpeech": "expression",
    "definition": "Blessed birth! Said when a baby is born.",
    "examples": [
      "Mbarakat l-wilada!",
      "Mabrook had l-wld",
      "Allah i7fdu"
    ],
    "translations": {
      "arabic": "مباركة الولادة",
      "french": "Félicitations pour la naissance",
      "english": "Blessed birth",
      "spanish": "Feliz nacimiento"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Mbarakat l-wilada",
        "phonetic": "/-/",
        "meaning": "Birth blessing"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "celebration",
      "birth",
      "greeting"
    ],
    "verified": true
  },
  {
    "word": "tabliye",
    "arabic": "طبلية",
    "phonetic": "/tab-li-ya/",
    "partOfSpeech": "noun",
    "definition": "The nurse — traditional Moroccan profession.",
    "examples": [
      "L-tabliye d-l-mdina",
      "Huwa tabliye"
    ],
    "translations": {
      "arabic": "طبلية",
      "french": "Infirmière",
      "english": "Nurse",
      "spanish": "Enfermera/o"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "tabliye",
        "phonetic": "/tab-li-ya/",
        "meaning": "Nurse"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "mhandss",
    "arabic": "مهندس",
    "phonetic": "/m-han-dss/",
    "partOfSpeech": "noun",
    "definition": "The engineer — traditional Moroccan profession.",
    "examples": [
      "L-mhandss d-l-mdina",
      "Huwa mhandss"
    ],
    "translations": {
      "arabic": "مهندس",
      "french": "Ingénieur",
      "english": "Engineer",
      "spanish": "Ingeniero/a"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "mhandss",
        "phonetic": "/m-han-dss/",
        "meaning": "Engineer"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "m3allm",
    "arabic": "معلم",
    "phonetic": "/m3al-lm/",
    "partOfSpeech": "noun",
    "definition": "The master craftsman — traditional Moroccan profession.",
    "examples": [
      "L-m3allm d-l-mdina",
      "Huwa m3allm"
    ],
    "translations": {
      "arabic": "معلم",
      "french": "Maître artisan",
      "english": "Master craftsman",
      "spanish": "Maestro artesano"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "m3allm",
        "phonetic": "/m3al-lm/",
        "meaning": "Master craftsman"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "b-zzaz",
    "arabic": "البزاز",
    "phonetic": "/b-zzaz/",
    "partOfSpeech": "noun",
    "definition": "The fabric merchant — traditional Moroccan profession.",
    "examples": [
      "L-b-zzaz d-l-mdina",
      "Huwa b-zzaz"
    ],
    "translations": {
      "arabic": "البزاز",
      "french": "Marchand de tissus",
      "english": "Fabric merchant",
      "spanish": "Comerciante de telas"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "b-zzaz",
        "phonetic": "/b-zzaz/",
        "meaning": "Fabric merchant"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "7dayyed",
    "arabic": "الحداد",
    "phonetic": "/7-day-yed/",
    "partOfSpeech": "noun",
    "definition": "The blacksmith — traditional Moroccan profession.",
    "examples": [
      "L-7dayyed d-l-mdina",
      "Huwa 7dayyed"
    ],
    "translations": {
      "arabic": "الحداد",
      "french": "Forgeron",
      "english": "Blacksmith",
      "spanish": "Herrero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7dayyed",
        "phonetic": "/7-day-yed/",
        "meaning": "Blacksmith"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "njjar",
    "arabic": "النجار",
    "phonetic": "/ndj-djar/",
    "partOfSpeech": "noun",
    "definition": "The carpenter — traditional Moroccan profession.",
    "examples": [
      "L-njjar d-l-mdina",
      "Huwa njjar"
    ],
    "translations": {
      "arabic": "النجار",
      "french": "Charpentier",
      "english": "Carpenter",
      "spanish": "Carpintero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "njjar",
        "phonetic": "/ndj-djar/",
        "meaning": "Carpenter"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "7dad",
    "arabic": "الحداد",
    "phonetic": "/7-dad/",
    "partOfSpeech": "noun",
    "definition": "The metalworker — traditional Moroccan profession.",
    "examples": [
      "L-7dad d-l-mdina",
      "Huwa 7dad"
    ],
    "translations": {
      "arabic": "الحداد",
      "french": "Métallurgiste",
      "english": "Metalworker",
      "spanish": "Metalúrgico"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7dad",
        "phonetic": "/7-dad/",
        "meaning": "Metalworker"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "kh-yyat",
    "arabic": "الخياط",
    "phonetic": "/khiy-yat/",
    "partOfSpeech": "noun",
    "definition": "The tailor — traditional Moroccan profession.",
    "examples": [
      "L-kh-yyat d-l-mdina",
      "Huwa kh-yyat"
    ],
    "translations": {
      "arabic": "الخياط",
      "french": "Tailleur",
      "english": "Tailor",
      "spanish": "Sastre"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "kh-yyat",
        "phonetic": "/khiy-yat/",
        "meaning": "Tailor"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "jzzar",
    "arabic": "الجزار",
    "phonetic": "/djz-zar/",
    "partOfSpeech": "noun",
    "definition": "The butcher — traditional Moroccan profession.",
    "examples": [
      "L-jzzar d-l-mdina",
      "Huwa jzzar"
    ],
    "translations": {
      "arabic": "الجزار",
      "french": "Boucher",
      "english": "Butcher",
      "spanish": "Carnicero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "jzzar",
        "phonetic": "/djz-zar/",
        "meaning": "Butcher"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "7laywi",
    "arabic": "الحلواني",
    "phonetic": "/7la-wi/",
    "partOfSpeech": "noun",
    "definition": "The pastry chef — traditional Moroccan profession.",
    "examples": [
      "L-7laywi d-l-mdina",
      "Huwa 7laywi"
    ],
    "translations": {
      "arabic": "الحلواني",
      "french": "Pâtissier",
      "english": "Pastry chef",
      "spanish": "Pastelero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "7laywi",
        "phonetic": "/7la-wi/",
        "meaning": "Pastry chef"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "fran",
    "arabic": "الفران",
    "phonetic": "/fer-ran/",
    "partOfSpeech": "noun",
    "definition": "The baker — traditional Moroccan profession.",
    "examples": [
      "L-fran d-l-mdina",
      "Huwa fran"
    ],
    "translations": {
      "arabic": "الفران",
      "french": "Boulanger",
      "english": "Baker",
      "spanish": "Panadero"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "fran",
        "phonetic": "/fer-ran/",
        "meaning": "Baker"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "wzzane",
    "arabic": "الوزان",
    "phonetic": "/wz-zan/",
    "partOfSpeech": "noun",
    "definition": "The official weigher — traditional Moroccan profession.",
    "examples": [
      "L-wzzane d-l-mdina",
      "Huwa wzzane"
    ],
    "translations": {
      "arabic": "الوزان",
      "french": "Peseur officiel",
      "english": "Official weigher",
      "spanish": "Pesador oficial"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "wzzane",
        "phonetic": "/wz-zan/",
        "meaning": "Official weigher"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "delal",
    "arabic": "الدلال",
    "phonetic": "/de-lal/",
    "partOfSpeech": "noun",
    "definition": "The auctioneer / broker — traditional Moroccan profession.",
    "examples": [
      "L-delal d-l-mdina",
      "Huwa delal"
    ],
    "translations": {
      "arabic": "الدلال",
      "french": "Crieur / courtier",
      "english": "Auctioneer / broker",
      "spanish": "Subastador / corredor"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "delal",
        "phonetic": "/de-lal/",
        "meaning": "Auctioneer / broker"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "profession",
      "work",
      "souk"
    ],
    "verified": true
  },
  {
    "word": "hshuma",
    "arabic": "الحشومة",
    "phonetic": "/hshoo-ma/",
    "partOfSpeech": "noun",
    "definition": "Shame / embarrassment. Very important Moroccan social concept.",
    "examples": [
      "Hshuma 3lik!",
      "Had shi hshuma",
      "Dir balik, hshuma"
    ],
    "translations": {
      "arabic": "العار / الحشمة",
      "french": "La honte",
      "english": "Shame / embarrassment",
      "spanish": "La vergüenza"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Hshuma",
        "phonetic": "/hshoo-ma/",
        "meaning": "Shame — key social concept"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "social",
      "honor",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "3qqel",
    "arabic": "عقل",
    "phonetic": "/3q-qel/",
    "partOfSpeech": "verb/noun",
    "definition": "Think / use your brain. 3qqel = use reason.",
    "examples": [
      "3qqel!",
      "Ma 3qql-sh",
      "3ndu 3ql (he's sensible)"
    ],
    "translations": {
      "arabic": "العقل / فكّر",
      "french": "Réfléchis",
      "english": "Think / use your brain",
      "spanish": "Piensa"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "3qqel",
        "phonetic": "/3q-qel/",
        "meaning": "Think! — common expression"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "expression",
      "wisdom",
      "intelligence"
    ],
    "verified": true
  },
  {
    "word": "a sidi",
    "arabic": "آ سيدي",
    "phonetic": "/a si-di/",
    "partOfSpeech": "address",
    "definition": "Oh sir! The formal Fassi way to address a man.",
    "examples": [
      "A sidi, 3afak...",
      "A sidi, labas?",
      "Sidi Mohamed"
    ],
    "translations": {
      "arabic": "يا سيدي",
      "french": "Ô monsieur!",
      "english": "Oh sir! (formal address)",
      "spanish": "¡Oh señor!"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "A sidi",
        "phonetic": "/a si-di/",
        "meaning": "The ultimate Fassi formal male address"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Fes"
    ],
    "themes": [
      "address",
      "respect",
      "Fassi",
      "formal"
    ],
    "verified": true
  },
  {
    "word": "bahia",
    "arabic": "الباهية",
    "phonetic": "/ba-hia/",
    "partOfSpeech": "adjective",
    "definition": "Magnificent / splendid. Classical Fassi adjective.",
    "examples": [
      "Bahia!",
      "Had l-haja bahia",
      "Bahia d-Fas"
    ],
    "translations": {
      "arabic": "باهية / رائعة",
      "french": "Splendide / magnifique",
      "english": "Magnificent / splendid",
      "spanish": "Magnífico"
    },
    "regionalVariants": [
      {
        "region": "Fes",
        "dialect": "Fassi",
        "word": "Bahia",
        "phonetic": "/ba-hia/",
        "meaning": "Splendid — very Fassi classical"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Fes"
    ],
    "themes": [
      "adjective",
      "Fassi",
      "quality"
    ],
    "verified": true
  },
  {
    "word": "wajid",
    "arabic": "واجد",
    "phonetic": "/wa-djid/",
    "partOfSpeech": "adverb",
    "definition": "A lot / very. Northern equivalent of bzzaf.",
    "examples": [
      "Wajid bezzaf",
      "Shukran wajid",
      "Wajid zwine"
    ],
    "translations": {
      "arabic": "كثير جداً",
      "french": "Beaucoup / très",
      "english": "A lot / very (northern Moroccan)",
      "spanish": "Mucho / muy"
    },
    "regionalVariants": [
      {
        "region": "Tangier/North",
        "dialect": "Tanjawi",
        "word": "Wajid",
        "phonetic": "/wa-djid/",
        "meaning": "A lot/very — from Spanish mucho"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Aṭṭas",
        "phonetic": "/at-tas/",
        "meaning": "A lot in Tarifit"
      }
    ],
    "origin": "Spanish-influenced",
    "regions": [
      "Tangier",
      "North"
    ],
    "themes": [
      "quantity",
      "Tanjawi",
      "dialect"
    ],
    "verified": true
  },
  {
    "word": "kif-kif",
    "arabic": "كيف كيف",
    "phonetic": "/kif-kif/",
    "partOfSpeech": "expression",
    "definition": "So-so / same-same. From Spanish igual-igual.",
    "examples": [
      "Wach mzyan? — Kif-kif",
      "Kif-kif wala ghir shi",
      "Kif-kif b-kif-kif"
    ],
    "translations": {
      "arabic": "كيف كيف / سواء",
      "french": "Comme-ci comme-ça / pareil",
      "english": "So-so / same-same",
      "spanish": "Más o menos"
    },
    "regionalVariants": [
      {
        "region": "Tangier/North",
        "dialect": "Tanjawi",
        "word": "Kif-kif",
        "phonetic": "/kif-kif/",
        "meaning": "So-so — classic Tangier expression from Spanish"
      }
    ],
    "origin": "Spanish-influenced",
    "regions": [
      "Tangier",
      "North"
    ],
    "themes": [
      "expression",
      "Tanjawi",
      "daily-use"
    ],
    "verified": true
  },
  {
    "word": "agal",
    "arabic": "العقال",
    "phonetic": "/a-gal/",
    "partOfSpeech": "noun",
    "definition": "Head rope — worn to hold the headscarf in place. Saharan traditional dress.",
    "examples": [
      "Agal d-r-rijal",
      "Agal abyad",
      "Libs l-agal"
    ],
    "translations": {
      "arabic": "العقال",
      "french": "L'agal (corde de tête)",
      "english": "Agal (head rope for headscarf)",
      "spanish": "El agal"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Agal",
        "phonetic": "/a-gal/",
        "meaning": "Traditional Saharan head rope"
      }
    ],
    "origin": "Arabic/Saharan",
    "regions": [
      "Sahara"
    ],
    "themes": [
      "clothing",
      "Hassaniya",
      "traditional"
    ],
    "verified": true
  },
  {
    "word": "draa",
    "arabic": "الدرع",
    "phonetic": "/draa/",
    "partOfSpeech": "noun",
    "definition": "Traditional Saharan male robe — long, flowing white or blue robe.",
    "examples": [
      "Draa abyad",
      "Draa l-7mr",
      "Libs d-draa"
    ],
    "translations": {
      "arabic": "الدرع",
      "french": "Le boubou / gandoura saharienne",
      "english": "Traditional Saharan male robe",
      "spanish": "La chilaba sahariana"
    },
    "regionalVariants": [
      {
        "region": "Sahara",
        "dialect": "Hassaniya",
        "word": "Draa",
        "phonetic": "/draa/",
        "meaning": "Saharan traditional robe — different from djellaba"
      }
    ],
    "origin": "Arabic/Saharan",
    "regions": [
      "Sahara"
    ],
    "themes": [
      "clothing",
      "Hassaniya",
      "traditional"
    ],
    "verified": true
  },
  {
    "word": "tifinagh",
    "arabic": "تيفيناغ",
    "phonetic": "/ti-fi-nagh/",
    "partOfSpeech": "noun",
    "definition": "The ancient Amazigh alphabet. Official script since 2003.",
    "examples": [
      "Ktbt b-tifinagh",
      "Tifinagh w-3rbiya",
      "Lhuruf d-tifinagh"
    ],
    "translations": {
      "arabic": "تيفيناغ",
      "french": "Tifinagh (alphabet amazigh)",
      "english": "Tifinagh (Amazigh alphabet)",
      "spanish": "Tifinagh"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Tifinagh",
        "phonetic": "/ti-fi-nagh/",
        "meaning": "Ancient Amazigh writing script — now official"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "language",
      "Amazigh",
      "writing",
      "heritage"
    ],
    "verified": true
  },
  {
    "word": "imgharen",
    "arabic": "إمغارن",
    "phonetic": "/im-gha-ren/",
    "partOfSpeech": "noun",
    "definition": "Elders / tribal leaders. Amazigh governance concept.",
    "examples": [
      "Imgharen d-l-qbila",
      "Imgharen w-drari",
      "Khlam l-imgharen"
    ],
    "translations": {
      "arabic": "الشيوخ / القادة",
      "french": "Les anciens / chefs",
      "english": "Elders / tribal leaders",
      "spanish": "Los ancianos / líderes"
    },
    "regionalVariants": [
      {
        "region": "Amazigh regions",
        "dialect": "Tachelhit/Tamazight",
        "word": "Imgharen",
        "phonetic": "/im-gha-ren/",
        "meaning": "Elders — Amazigh governance"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "Souss",
      "Atlas"
    ],
    "themes": [
      "social",
      "Amazigh",
      "governance"
    ],
    "verified": true
  },
  {
    "word": "ayt",
    "arabic": "أيت",
    "phonetic": "/ayt/",
    "partOfSpeech": "noun",
    "definition": "Family / clan / people of. Used in place names: Ait Benhaddou.",
    "examples": [
      "Ayt Benhaddou",
      "Ayt Melloul",
      "Ayt had l-blad"
    ],
    "translations": {
      "arabic": "أيت / آل",
      "french": "Les gens de / la famille de",
      "english": "People of / clan of",
      "spanish": "Gente de / familia de"
    },
    "regionalVariants": [
      {
        "region": "Amazigh regions",
        "dialect": "Tachelhit",
        "word": "Ayt",
        "phonetic": "/ayt/",
        "meaning": "Clan/family — appears in many place names"
      }
    ],
    "origin": "Amazigh",
    "regions": [
      "South",
      "Souss"
    ],
    "themes": [
      "family",
      "Amazigh",
      "clan"
    ],
    "verified": true
  },
  {
    "word": "l-3rs",
    "arabic": "العرس",
    "phonetic": "/l-3rs/",
    "partOfSpeech": "noun",
    "definition": "Wedding / wedding ceremony.",
    "examples": [
      "L-3rs mubarak",
      "L-3rs d-l-lila",
      "Kla f-l-3rs"
    ],
    "translations": {
      "arabic": "العرس / الزواج",
      "french": "Le mariage / la noce",
      "english": "Wedding",
      "spanish": "La boda"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3rs",
        "phonetic": "/l-3rs/",
        "meaning": "Wedding"
      },
      {
        "region": "Rif",
        "dialect": "Tarifit",
        "word": "Tameghracht",
        "phonetic": "/ta-meg-hracht/",
        "meaning": "Wedding in Tarifit"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "celebration",
      "wedding",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "l-3rusa",
    "arabic": "العروسة",
    "phonetic": "/l-3-rou-sa/",
    "partOfSpeech": "noun",
    "definition": "Bride. The center of the Moroccan wedding celebration.",
    "examples": [
      "L-3rusa zwina",
      "3rusa d-l-lila",
      "Libs l-kaftan, ya 3rusa"
    ],
    "translations": {
      "arabic": "العروسة",
      "french": "La mariée",
      "english": "Bride",
      "spanish": "La novia"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3rusa",
        "phonetic": "/l-3-rou-sa/",
        "meaning": "Bride"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "wedding",
      "celebration"
    ],
    "verified": true
  },
  {
    "word": "l-3ris",
    "arabic": "العريس",
    "phonetic": "/l-3-ris/",
    "partOfSpeech": "noun",
    "definition": "Groom.",
    "examples": [
      "L-3ris mubarak",
      "L-3ris w-l-3rusa",
      "L-3ris d-l-lila"
    ],
    "translations": {
      "arabic": "العريس",
      "french": "Le marié",
      "english": "Groom",
      "spanish": "El novio"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "L-3ris",
        "phonetic": "/l-3-ris/",
        "meaning": "Groom"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "wedding",
      "celebration"
    ],
    "verified": true
  },
  {
    "word": "lilt l-7enna",
    "arabic": "ليلة الحناء",
    "phonetic": "/lilt l-7en-na/",
    "partOfSpeech": "noun",
    "definition": "Henna night — the pre-wedding celebration for the bride.",
    "examples": [
      "Lilt l-7enna",
      "L-7enna d-l-3rusa",
      "Lilt l-7enna mzyana"
    ],
    "translations": {
      "arabic": "ليلة الحناء",
      "french": "La nuit du henné",
      "english": "Henna night",
      "spanish": "La noche de henna"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Lilt l-7enna",
        "phonetic": "/lilt l-7en-na/",
        "meaning": "Henna night — pre-wedding"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "wedding",
      "tradition",
      "henna"
    ],
    "verified": true
  },
  {
    "word": "nerja",
    "arabic": "النرجة",
    "phonetic": "/ner-dja/",
    "partOfSpeech": "noun",
    "definition": "The Moroccan water pipe / hookah. Social ritual.",
    "examples": [
      "Nerja w-atay",
      "Khrjna n-d-dkhan b-nerja",
      "Nerja d-t-touffah"
    ],
    "translations": {
      "arabic": "النرجيلة / الشيشة",
      "french": "Le narguilé",
      "english": "Hookah / water pipe",
      "spanish": "La pipa de agua"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Nerja",
        "phonetic": "/ner-dja/",
        "meaning": "Moroccan hookah"
      }
    ],
    "origin": "Arabic/Turkish",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "social",
      "leisure",
      "culture"
    ],
    "verified": true
  },
  {
    "word": "t-tbla",
    "arabic": "الطبلة",
    "phonetic": "/t-tbla/",
    "partOfSpeech": "noun",
    "definition": "The drum used in Moroccan wedding music.",
    "examples": [
      "Drb t-tbla",
      "T-tbla w-gita",
      "T-tbla d-l-3rs"
    ],
    "translations": {
      "arabic": "الطبلة",
      "french": "Le tambour",
      "english": "Drum (wedding music)",
      "spanish": "El tambor"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "T-tbla",
        "phonetic": "/t-tbla/",
        "meaning": "Wedding drum"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "music",
      "wedding",
      "instrument"
    ],
    "verified": true
  },
  {
    "word": "zahri",
    "arabic": "الزهري",
    "phonetic": "/zah-ri/",
    "partOfSpeech": "adjective",
    "definition": "Pink / rose colored.",
    "examples": [
      "Had l-jllaba zahria",
      "L-ward zahri",
      "Zwin l-lawn"
    ],
    "translations": {
      "arabic": "وردي / زهري",
      "french": "Rose",
      "english": "Pink",
      "spanish": "Rosa"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Zahri",
        "phonetic": "/zah-ri/",
        "meaning": "Pink — from 'zahra' (flower)"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "smawi",
    "arabic": "السماوي",
    "phonetic": "/sma-wi/",
    "partOfSpeech": "adjective",
    "definition": "Sky blue / light blue.",
    "examples": [
      "Had l-haja smawiya",
      "L-bahr smawi",
      "Lawn smawi"
    ],
    "translations": {
      "arabic": "سماوي / أزرق فاتح",
      "french": "Bleu ciel / bleu clair",
      "english": "Sky blue / light blue",
      "spanish": "Azul cielo"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Smawi",
        "phonetic": "/sma-wi/",
        "meaning": "Sky blue — from 'sma' (sky)"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "bni",
    "arabic": "بني",
    "phonetic": "/bni/",
    "partOfSpeech": "adjective",
    "definition": "Brown.",
    "examples": [
      "Had l-jllaba bniya",
      "L-khbz bni",
      "Lawn bni"
    ],
    "translations": {
      "arabic": "بني",
      "french": "Marron / brun",
      "english": "Brown",
      "spanish": "Marrón"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Bni",
        "phonetic": "/bni/",
        "meaning": "Brown"
      }
    ],
    "origin": "Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  },
  {
    "word": "limuni",
    "arabic": "الليموني",
    "phonetic": "/li-mou-ni/",
    "partOfSpeech": "adjective",
    "definition": "Lemon yellow / pale yellow.",
    "examples": [
      "Lawn limuni",
      "Had l-haja limoniya",
      "Sfar limuni"
    ],
    "translations": {
      "arabic": "أصفر ليموني",
      "french": "Jaune citron",
      "english": "Lemon yellow",
      "spanish": "Amarillo limón"
    },
    "regionalVariants": [
      {
        "region": "Nationwide",
        "dialect": "Standard Darija",
        "word": "Limuni",
        "phonetic": "/li-mou-ni/",
        "meaning": "Lemon yellow"
      }
    ],
    "origin": "French/Arabic",
    "regions": [
      "Nationwide"
    ],
    "themes": [
      "color",
      "description"
    ],
    "verified": true
  }
];

export default DIALECT_DATA;
export { DIALECT_DATA };
