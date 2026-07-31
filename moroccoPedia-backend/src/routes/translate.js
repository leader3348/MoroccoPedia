const express = require('express');
const router = express.Router();
const { getWordBySlug, searchWords } = require('../services/dialectService');

// Static translation pairs for common phrases (works without AI API)
const PHRASE_TRANSLATIONS = {
  "labas alik": {
    ar: "كيف حالك؟ هل أنت بخير؟",
    fr: "Comment vas-tu? Tu vas bien?",
    en: "How are you? Are you doing well?",
    es: "¿Cómo estás? ¿Estás bien?",
  },
  "labas": {
    ar: "بخير / لا بأس",
    fr: "Ça va / pas de problème",
    en: "Fine / No problem",
    es: "Bien / sin problemas",
  },
  "shukran": {
    ar: "شكراً",
    fr: "Merci",
    en: "Thank you",
    es: "Gracias",
  },
  "shukran bezzaf": {
    ar: "شكراً جزيلاً",
    fr: "Merci beaucoup",
    en: "Thank you very much",
    es: "Muchas gracias",
  },
  "bezzaf": {
    ar: "كثيراً / جداً",
    fr: "Beaucoup / très",
    en: "A lot / very",
    es: "Mucho / muy",
  },
  "zwina": {
    ar: "جميلة",
    fr: "Belle / jolie",
    en: "Beautiful / nice",
    es: "Hermosa / bonita",
  },
  "mzyan": {
    ar: "جيد / حسن",
    fr: "Bien / bon",
    en: "Good / fine",
    es: "Bien / bueno",
  },
  "salam alikum": {
    ar: "السلام عليكم",
    fr: "La paix soit sur vous",
    en: "Peace be upon you",
    es: "La paz sea contigo",
  },
  "fin kayn souk": {
    ar: "أين يوجد السوق؟",
    fr: "Où se trouve le marché?",
    en: "Where is the market?",
    es: "¿Dónde está el mercado?",
  },
  "shhal hada": {
    ar: "بكم هذا؟",
    fr: "Combien ça coûte?",
    en: "How much is this?",
    es: "¿Cuánto cuesta esto?",
  },
  "bghit": {
    ar: "أريد / أبغي",
    fr: "Je veux",
    en: "I want",
    es: "Quiero",
  },
  "wach kayn": {
    ar: "هل يوجد؟",
    fr: "Est-ce qu'il y a?",
    en: "Is there?",
    es: "¿Hay?",
  },
  "la": {
    ar: "لا",
    fr: "Non",
    en: "No",
    es: "No",
  },
  "iyeh": {
    ar: "نعم",
    fr: "Oui",
    en: "Yes",
    es: "Sí",
  },
  "baraka llahu fik": {
    ar: "بارك الله فيك",
    fr: "Que Dieu te bénisse",
    en: "God bless you",
    es: "Que Dios te bendiga",
  },
  "bsaha": {
    ar: "بالصحة / صحة",
    fr: "À ta santé / Bon appétit",
    en: "To your health / Enjoy",
    es: "A tu salud / Buen provecho",
  },
  "mrhba": {
    ar: "مرحبا / أهلاً وسهلاً",
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
  },
  "ma3lich": {
    ar: "لا بأس / لا يهم",
    fr: "Ce n'est pas grave / Ça ne fait rien",
    en: "Never mind / No worries / It's okay",
    es: "No importa / No pasa nada",
  },
  "inshallah": {
    ar: "إن شاء الله",
    fr: "Si Dieu le veut",
    en: "God willing / hopefully",
    es: "Si Dios quiere",
  },
  "wach nta mzyan": {
    ar: "هل أنت بخير؟",
    fr: "Tu vas bien?",
    en: "Are you okay?",
    es: "¿Estás bien?",
  },
  "ana mzyan": {
    ar: "أنا بخير",
    fr: "Je vais bien",
    en: "I'm fine",
    es: "Estoy bien",
  },
};

/**
 * POST /api/translate
 * Translate a Darija text to another language
 *
 * Body: { text: "labas alik?", to: "en" }
 * Response: { original, translated, language, method }
 */
router.post('/', async (req, res) => {
  try {
    const { text, to = 'en' } = req.body;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'text is required' });
    }

    const validLangs = ['ar', 'fr', 'en', 'es', 'tamazight'];
    if (!validLangs.includes(to)) {
      return res.status(400).json({
        error: `Invalid language "${to}". Valid options: ${validLangs.join(', ')}`,
      });
    }

    const clean = text.trim().toLowerCase().replace(/[?!،.]/g, '');

    // 1. Check phrase dictionary
    if (PHRASE_TRANSLATIONS[clean]) {
      return res.json({
        original: text,
        translated: PHRASE_TRANSLATIONS[clean][to] || 'Translation not available',
        language: to,
        method: 'phrase-dictionary',
        confidence: 'high',
      });
    }

    // 2. Check single word in dialect data
    const wordEntry = await getWordBySlug(clean);
    if (wordEntry && wordEntry.translations?.[to]) {
      return res.json({
        original: text,
        translated: wordEntry.translations[to],
        language: to,
        method: 'word-dictionary',
        confidence: 'high',
        wordDetails: {
          word: wordEntry.word,
          arabic: wordEntry.arabic,
          definition: wordEntry.definition,
        },
      });
    }

    // 3. Word-by-word fallback
    const words = clean.split(' ');
    const wordTranslations = await Promise.all(
      words.map(async (w) => {
        const entry = await getWordBySlug(w);
        if (entry?.translations?.[to]) return entry.translations[to];
        if (PHRASE_TRANSLATIONS[w]?.[to]) return PHRASE_TRANSLATIONS[w][to];
        return `[${w}]`; // untranslated word
      })
    );

    const hasTranslations = wordTranslations.some(w => !w.startsWith('['));

    return res.json({
      original: text,
      translated: hasTranslations ? wordTranslations.join(' ') : null,
      language: to,
      method: 'word-by-word',
      confidence: hasTranslations ? 'medium' : 'low',
      note: !hasTranslations
        ? 'This phrase is not yet in our dictionary. AI translation coming soon.'
        : null,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/translate/languages
 * List supported languages
 */
router.get('/languages', (req, res) => {
  res.json({
    supported: [
      { code: 'ar', name: 'Arabic (Modern Standard)',  native: 'العربية' },
      { code: 'fr', name: 'French',                    native: 'Français' },
      { code: 'en', name: 'English',                   native: 'English' },
      { code: 'es', name: 'Spanish',                   native: 'Español' },
    ],
    source: 'Moroccan Darija (all regional dialects)',
  });
});

/**
 * GET /api/translate/phrases
 * Get all available preset phrases
 */
router.get('/phrases', (req, res) => {
  const phrases = Object.entries(PHRASE_TRANSLATIONS).map(([darija, translations]) => ({
    darija,
    translations,
  }));
  res.json({ count: phrases.length, phrases });
});

module.exports = router;
