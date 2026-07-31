const express = require('express');
const router  = express.Router();
const Notification = require('../models/Notification');
const { protect } = require('../middleware/auth');

// ── GET /api/notifications — get user notifications ──────────
router.get('/', protect, async (req, res) => {
  try {
    const { limit = 20, page = 1, unreadOnly } = req.query;
    const query = { user: req.user._id };
    if (unreadOnly === 'true') query.read = false;

    const [notifications, total, unreadCount] = await Promise.all([
      Notification.find(query)
        .sort({ createdAt: -1 })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit)),
      Notification.countDocuments(query),
      Notification.countDocuments({ user: req.user._id, read: false }),
    ]);

    res.json({ notifications, total, unreadCount, page: parseInt(page) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/notifications/unread-count ──────────────────────
router.get('/unread-count', protect, async (req, res) => {
  try {
    const count = await Notification.countDocuments({ user: req.user._id, read: false });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── PUT /api/notifications/:id/read ──────────────────────────
router.put('/:id/read', protect, async (req, res) => {
  try {
    await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { read: true }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── PUT /api/notifications/mark-all-read ─────────────────────
router.put('/mark-all-read', protect, async (req, res) => {
  try {
    await Notification.updateMany({ user: req.user._id, read: false }, { read: true });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── DELETE /api/notifications/:id ────────────────────────────
router.delete('/:id', protect, async (req, res) => {
  try {
    await Notification.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Helper: create notification + emit socket ────────────────
const createNotification = async (io, userId, data) => {
  try {
    const notif = await Notification.create({ user: userId, ...data });
    if (io) io.to(`user:${userId}`).emit('notification', notif);
    return notif;
  } catch (err) {
    console.error('Notification error:', err.message);
  }
};

module.exports = router;
module.exports.createNotification = createNotification;
