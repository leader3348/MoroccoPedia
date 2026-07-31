const Fuse = require('fuse.js');
const DIALECT_DATA = require('../data/dialectData');
let Word;
try { Word = require('../models/Word'); } catch(e) {}

// ── Fuse.js fuzzy search config ──────────────────────────────────
const fuseOptions = {
  keys: [
    { name: 'word',       weight: 0.4 },
    { name: 'arabic',     weight: 0.2 },
    { name: 'definition', weight: 0.15 },
    { name: 'translations.english', weight: 0.1 },
    { name: 'translations.french',  weight: 0.1 },
    { name: 'themes',     weight: 0.05 },
  ],
  threshold: 0.45,
  includeScore: true,
  minMatchCharLength: 2,
};

const fuse = new Fuse(DIALECT_DATA, fuseOptions);

// ── ALL MOROCCAN REGIONS ─────────────────────────────────────────
const REGIONS = [
  'Marrakesh', 'Casablanca', 'Fès', 'Rabat',
  'North (Tangier)', 'Souss (Agadir)', 'Oujda (East)',
  'Atlas Mountains', 'Sahara', 'Rif Mountains',
];

/**
 * searchWords — fuzzy search the dialect database
 */
const searchWords = async (query, options = {}) => {
  const { limit = 20, region, theme } = options;

  let results;

  // Try MongoDB first
  if (Word) {
    try {
      const mongoQuery = { $text: { $search: query } };
      if (region) mongoQuery.regions = region;
      if (theme)  mongoQuery.themes  = theme;
      const mongoResults = await Word.find(mongoQuery).limit(limit);
      if (mongoResults.length > 0) return mongoResults;
    } catch (e) { /* fallback to static data */ }
  }

  // Fallback: fuzzy search static data
  results = fuse.search(query).map(r => r.item);
  if (region) results = results.filter(w => w.regions?.includes(region) || w.regionalVariants?.some(v => v.region.includes(region)));
  if (theme)  results = results.filter(w => w.themes?.includes(theme));

  return results.slice(0, limit);
};

/**
 * getWordBySlug — get exact word
 */
const getWordBySlug = async (word) => {
  const clean = word.toLowerCase().trim();

  if (Word) {
    try {
      const found = await Word.findOne({ word: new RegExp(`^${clean}$`, 'i') });
      if (found) return found;
    } catch (e) {}
  }

  return DIALECT_DATA.find(w => w.word.toLowerCase() === clean) || null;
};

/**
 * translateAcrossRegions — THE CORE FEATURE
 *
 * Given a word and source region, return how the SAME CONCEPT
 * is expressed in ALL other Moroccan regions.
 *
 * Example: translateAcrossRegions('l3zawi', 'Marrakesh')
 * → returns { north: 'L-Jnubi', casablanca: 'Lmrrakchi', fes: 'L-Blidi', ... }
 */
const translateAcrossRegions = async (word, fromRegion = null) => {
  const entry = await getWordBySlug(word);

  if (!entry) {
    return {
      found: false,
      word,
      message: `Word "${word}" not found in dictionary`,
      suggestion: await suggestSimilar(word),
    };
  }

  const variants = entry.regionalVariants || [];

  // Build region map
  const regionMap = {};
  variants.forEach(v => {
    regionMap[v.region] = {
      region:   v.region,
      dialect:  v.dialect,
      word:     v.word,
      phonetic: v.phonetic,
      meaning:  v.meaning,
      notes:    v.notes || null,
    };
  });

  // Identify source variant
  let sourceVariant = null;
  if (fromRegion) {
    sourceVariant = variants.find(v =>
      v.region.toLowerCase().includes(fromRegion.toLowerCase()) ||
      v.dialect?.toLowerCase().includes(fromRegion.toLowerCase())
    );
  }

  return {
    found: true,
    word: entry.word,
    arabic: entry.arabic,
    phonetic: entry.phonetic,
    definition: entry.definition,
    partOfSpeech: entry.partOfSpeech,
    translations: entry.translations,

    // Source region info
    fromRegion: sourceVariant || (variants[0] || null),

    // All regional variants
    allRegions: regionMap,

    // Flat list for easy rendering
    variants: variants,

    // Summary: just the words per region
    quickMap: variants.reduce((acc, v) => {
      acc[v.region] = v.word;
      return acc;
    }, {}),

    meta: {
      totalVariants: variants.length,
      regionsWithDifferentWord: variants.filter(v => v.word.toLowerCase() !== entry.word.toLowerCase()).length,
    },
  };
};

/**
 * getWordsByRegion — get all words known for a specific region
 */
const getWordsByRegion = async (region, limit = 30) => {
  const results = DIALECT_DATA.filter(w =>
    w.regions?.some(r => r.toLowerCase().includes(region.toLowerCase())) ||
    w.regionalVariants?.some(v => v.region.toLowerCase().includes(region.toLowerCase()))
  );
  return results.slice(0, limit);
};

/**
 * compareRegions — compare dialect between two specific regions
 *
 * Example: compareRegions('Marrakesh', 'North')
 * → returns all words that differ between these two regions
 */
const compareRegions = async (region1, region2, limit = 20) => {
  const differences = [];

  for (const word of DIALECT_DATA) {
    const v1 = word.regionalVariants?.find(v => v.region.toLowerCase().includes(region1.toLowerCase()));
    const v2 = word.regionalVariants?.find(v => v.region.toLowerCase().includes(region2.toLowerCase()));

    if (v1 && v2 && v1.word.toLowerCase() !== v2.word.toLowerCase()) {
      differences.push({
        concept: word.word,
        definition: word.definition,
        [region1]: { word: v1.word, phonetic: v1.phonetic, meaning: v1.meaning },
        [region2]: { word: v2.word, phonetic: v2.phonetic, meaning: v2.meaning },
      });
    }
  }

  return {
    region1,
    region2,
    totalDifferences: differences.length,
    differences: differences.slice(0, limit),
    summary: `Found ${differences.length} words that differ between ${region1} and ${region2}`,
  };
};

/**
 * suggestSimilar — suggest words when exact match not found
 */
const suggestSimilar = async (query) => {
  const results = fuse.search(query, { limit: 3 });
  return results.map(r => r.item.word);
};

/**
 * getRandomWord — random word of the day
 */
const getRandomWord = () => {
  const idx = Math.floor(Math.random() * DIALECT_DATA.length);
  return DIALECT_DATA[idx];
};

/**
 * getAllThemes — list available themes
 */
const getAllThemes = () => {
  const themes = new Set();
  DIALECT_DATA.forEach(w => w.themes?.forEach(t => themes.add(t)));
  return Array.from(themes).sort();
};

module.exports = {
  searchWords,
  getWordBySlug,
  translateAcrossRegions,
  getWordsByRegion,
  compareRegions,
  suggestSimilar,
  getRandomWord,
  getAllThemes,
  REGIONS,
};
