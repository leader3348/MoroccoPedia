const express = require('express');
const router = express.Router();
const {
  searchWords,
  getWordBySlug,
  translateAcrossRegions,
  getWordsByRegion,
  compareRegions,
  getRandomWord,
  getAllThemes,
  REGIONS,
} = require('../services/dialectService');

/**
 * GET /api/dialect/search?q=zwina&region=Marrakesh&theme=food
 * Full-text fuzzy search
 */
router.get('/search', async (req, res) => {
  try {
    const { q, region, theme, limit = 20 } = req.query;
    if (!q || q.trim().length < 1) {
      return res.status(400).json({ error: 'Search query "q" is required' });
    }
    const results = await searchWords(q.trim(), { region, theme, limit: parseInt(limit) });
    res.json({
      query: q,
      count: results.length,
      results,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/word/:word
 * Get a single word with all its details
 *
 * Example: GET /api/dialect/word/zwina
 */
router.get('/word/:word', async (req, res) => {
  try {
    const entry = await getWordBySlug(req.params.word);
    if (!entry) {
      return res.status(404).json({
        error: `Word "${req.params.word}" not found`,
        suggestion: 'Try searching with /api/dialect/search?q=...',
      });
    }
    // Increment views (if using MongoDB)
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/translate/:word?from=Marrakesh
 * ★ THE MAIN REGIONAL TRANSLATION ENDPOINT ★
 *
 * Returns how a word/concept is expressed in ALL Moroccan regions.
 *
 * Example: GET /api/dialect/translate/l3zawi?from=Marrakesh
 * Returns: { word: 'l3zawi', fromRegion: {...}, allRegions: { North: 'L-Jnubi', Fès: 'L-Blidi', ... } }
 *
 * Example: GET /api/dialect/translate/zwina
 * Returns: { word: 'zwina', allRegions: { North: 'Mli7a', Souss: 'Ifilki', ... } }
 */
router.get('/translate/:word', async (req, res) => {
  try {
    const { word } = req.params;
    const { from } = req.query;

    const result = await translateAcrossRegions(word, from || null);

    if (!result.found) {
      return res.status(404).json(result);
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/region/:region
 * Get all known words for a specific region
 *
 * Example: GET /api/dialect/region/Marrakesh
 */
router.get('/region/:region', async (req, res) => {
  try {
    const { limit = 30 } = req.query;
    const words = await getWordsByRegion(req.params.region, parseInt(limit));
    res.json({
      region: req.params.region,
      count: words.length,
      words,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/compare?r1=Marrakesh&r2=North
 * Compare dialect between two regions
 *
 * Example: GET /api/dialect/compare?r1=Marrakesh&r2=North
 * Returns all words that are DIFFERENT between these two regions
 */
router.get('/compare', async (req, res) => {
  try {
    const { r1, r2, limit = 20 } = req.query;
    if (!r1 || !r2) {
      return res.status(400).json({ error: 'Both r1 and r2 region parameters are required' });
    }
    const result = await compareRegions(r1, r2, parseInt(limit));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/random
 * Get a random word (word of the day)
 */
router.get('/random', (req, res) => {
  try {
    const word = getRandomWord();
    res.json(word);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/dialect/regions
 * List all available regions
 */
router.get('/regions', (req, res) => {
  res.json({ regions: REGIONS });
});

/**
 * GET /api/dialect/themes
 * List all available themes/categories
 */
router.get('/themes', (req, res) => {
  res.json({ themes: getAllThemes() });
});

module.exports = router;
