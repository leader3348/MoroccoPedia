const express = require('express');
const router  = express.Router();
const AnalyticsEvent = require('../models/Analytics');
const { optionalAuth, protect, requireRole } = require('../middleware/auth');

// ── POST /api/analytics/track — track an event ───────────────
router.post('/track', optionalAuth, async (req, res) => {
  try {
    const { event, page, data, sessionId, device } = req.body;
    if (!event) return res.status(400).json({ error: 'event is required' });

    await AnalyticsEvent.create({
      event,
      page,
      data: data || {},
      sessionId,
      device: device || 'unknown',
      userId:   req.user?._id || null,
      language: req.user?.language || req.headers['accept-language']?.slice(0, 2) || null,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/analytics/dashboard — admin dashboard stats ─────
router.get('/dashboard', protect, requireRole('admin', 'moderator'), async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const since = new Date(Date.now() - parseInt(days) * 24 * 60 * 60 * 1000);

    const [
      totalEvents,
      eventBreakdown,
      topPages,
      topSearches,
      topWords,
      deviceBreakdown,
      languageBreakdown,
      dailyActivity,
    ] = await Promise.all([

      // Total events
      AnalyticsEvent.countDocuments({ createdAt: { $gte: since } }),

      // Event type breakdown
      AnalyticsEvent.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$event', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]),

      // Top pages
      AnalyticsEvent.aggregate([
        { $match: { event: 'page_view', createdAt: { $gte: since } } },
        { $group: { _id: '$page', views: { $sum: 1 } } },
        { $sort: { views: -1 } },
        { $limit: 10 },
      ]),

      // Top searches
      AnalyticsEvent.aggregate([
        { $match: { event: 'search', createdAt: { $gte: since } } },
        { $group: { _id: '$data.query', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]),

      // Top dialect words looked up
      AnalyticsEvent.aggregate([
        { $match: { event: 'word_lookup', createdAt: { $gte: since } } },
        { $group: { _id: '$data.word', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]),

      // Device breakdown
      AnalyticsEvent.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$device', count: { $sum: 1 } } },
      ]),

      // Language breakdown
      AnalyticsEvent.aggregate([
        { $match: { createdAt: { $gte: since }, language: { $ne: null } } },
        { $group: { _id: '$language', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),

      // Daily activity (last 30 days)
      AnalyticsEvent.aggregate([
        { $match: { createdAt: { $gte: since } } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]),
    ]);

    res.json({
      period: `${days} days`,
      totalEvents,
      eventBreakdown,
      topPages,
      topSearches,
      topWords,
      deviceBreakdown,
      languageBreakdown,
      dailyActivity,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/analytics/public — public platform stats ────────
router.get('/public', async (req, res) => {
  try {
    const since30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const [searches30d, wordLookups30d, totalSearches] = await Promise.all([
      AnalyticsEvent.countDocuments({ event: 'search',      createdAt: { $gte: since30 } }),
      AnalyticsEvent.countDocuments({ event: 'word_lookup', createdAt: { $gte: since30 } }),
      AnalyticsEvent.countDocuments({ event: 'search' }),
    ]);

    res.json({ searches30d, wordLookups30d, totalSearches });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
