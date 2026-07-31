const express = require('express');
const router = express.Router();
const { searchWords } = require('../services/dialectService');

/**
 * GET /api/search?q=tagine
 * Global search across all content types
 */
router.get('/', async (req, res) => {
  try {
    const { q, type, limit = 10 } = req.query;
    if (!q || q.trim().length < 2) {
      return res.status(400).json({ error: 'Query "q" must be at least 2 characters' });
    }

    const [words] = await Promise.all([
      searchWords(q, { limit: parseInt(limit) }),
    ]);

    res.json({
      query: q,
      results: {
        words: { count: words.length, items: words },
      },
      totalResults: words.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
