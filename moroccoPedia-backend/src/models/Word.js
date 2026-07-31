const mongoose = require('mongoose');

/**
 * RegionalVariant — how a word/concept is expressed in a specific region
 */
const RegionalVariantSchema = new mongoose.Schema({
  region:     { type: String, required: true },   // e.g. "Marrakesh", "North", "Souss"
  dialect:    { type: String, required: true },   // dialect name e.g. "Marrakshi"
  word:       { type: String, required: true },   // the word/expression in that dialect
  phonetic:   { type: String },                   // pronunciation guide
  meaning:    { type: String },                   // what it means in that region
  notes:      { type: String },                   // any cultural notes
  audioUrl:   { type: String },                   // link to audio recording
}, { _id: false });

/**
 * Word — main dictionary entry
 */
const WordSchema = new mongoose.Schema({
  // Core word info
  word:         { type: String, required: true, trim: true },
  arabic:       { type: String },                // Arabic script e.g. "العزاوي"
  phonetic:     { type: String },                // IPA / phonetic guide
  partOfSpeech: {
    type: String,
    enum: ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'greeting', 'expression', 'other'],
    default: 'other',
  },

  // Definitions
  definition:   { type: String, required: true },
  examples:     [{ type: String }],             // usage examples

  // Translations into other languages
  translations: {
    arabic:   { type: String },
    french:   { type: String },
    english:  { type: String },
    spanish:  { type: String },
    tamazight:{ type: String },
  },

  // Regional variation data — THE CORE FEATURE
  // Each entry shows how the word/concept varies across Morocco
  regionalVariants: [RegionalVariantSchema],

  // Origin & classification
  origin:       {
    type: String,
    enum: ['Arabic', 'Amazigh', 'French', 'Spanish', 'Portuguese', 'Hebrew', 'Mixed', 'Unknown'],
    default: 'Arabic',
  },
  regions:      [{ type: String }],  // regions where the word is used
  themes:       [{ type: String }],  // e.g. ['food', 'family', 'market']

  // Media
  audioUrl:     { type: String },
  imageUrl:     { type: String },

  // Meta
  verified:     { type: Boolean, default: false },
  contributedBy:{ type: String, default: 'system' },
  views:        { type: Number, default: 0 },

}, { timestamps: true });

// Full-text search index
WordSchema.index({ word: 'text', definition: 'text', arabic: 'text' });
WordSchema.index({ word: 1 });
WordSchema.index({ regions: 1 });
WordSchema.index({ themes: 1 });

module.exports = mongoose.model('Word', WordSchema);
