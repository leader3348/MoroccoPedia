const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  author:     { type: String, required: true },
  city:       { type: String, required: true },
  category:   {
    type: String,
    enum: ['food', 'dialect', 'craft', 'music', 'history', 'photo', 'audio', 'story', 'ritual', 'proverb'],
    required: true,
  },
  title:      { type: String },
  content:    { type: String, required: true },
  mediaUrl:   { type: String },
  mediaType:  { type: String, enum: ['photo', 'audio', 'video', null] },
  tags:       [{ type: String }],
  likes:      { type: Number, default: 0 },
  verified:   { type: Boolean, default: false },
  status:     { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Contribution', ContributionSchema);
