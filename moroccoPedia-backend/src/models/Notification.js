const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String,
    enum: ['contribution_approved', 'contribution_rejected', 'new_follower',
           'word_liked', 'comment', 'system', 'achievement', 'welcome'],
    required: true,
  },
  title:   { type: String, required: true },
  message: { type: String, required: true },
  link:    { type: String, default: null },
  read:    { type: Boolean, default: false },
  data:    { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

NotificationSchema.index({ user: 1, read: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', NotificationSchema);
