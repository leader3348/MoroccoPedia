const mongoose = require('mongoose');

const AnalyticsEventSchema = new mongoose.Schema({
  event:     { type: String, required: true }, // 'page_view', 'search', 'word_lookup', etc.
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  sessionId: { type: String },
  page:      { type: String },
  data:      { type: mongoose.Schema.Types.Mixed, default: {} },
  country:   { type: String, default: null },
  language:  { type: String, default: null },
  device:    { type: String, enum: ['mobile', 'tablet', 'desktop', 'unknown'], default: 'unknown' },
}, { timestamps: true });

AnalyticsEventSchema.index({ event: 1, createdAt: -1 });
AnalyticsEventSchema.index({ createdAt: -1 });

module.exports = mongoose.model('AnalyticsEvent', AnalyticsEventSchema);
