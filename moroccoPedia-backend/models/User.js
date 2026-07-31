const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  // Core identity
  name:       { type: String, required: true, trim: true, maxlength: 60 },
  email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:   { type: String, required: true, minlength: 6, select: false },
  avatar:     { type: String, default: null },

  // Profile
  username:   { type: String, unique: true, sparse: true, trim: true, maxlength: 30 },
  city:       { type: String, default: null },
  region:     { type: String, default: null },
  bio:        { type: String, maxlength: 200, default: '' },
  language:   { type: String, enum: ['ar', 'fr', 'en', 'es'], default: 'fr' },
  dialect:    { type: String, default: null }, // home dialect

  // Role & permissions
  role: {
    type: String,
    enum: ['user', 'contributor', 'moderator', 'admin'],
    default: 'user',
  },
  isVerified:   { type: Boolean, default: false },
  isBanned:     { type: Boolean, default: false },

  // Activity stats
  stats: {
    contributions:   { type: Number, default: 0 },
    wordsAdded:      { type: Number, default: 0 },
    citiesExplored:  { type: Number, default: 0 },
    dialectSearches: { type: Number, default: 0 },
    loginCount:      { type: Number, default: 0 },
    points:          { type: Number, default: 0 }, // gamification
  },

  // Saved items
  savedWords:     [{ type: String }],
  savedCities:    [{ type: String }],
  recentSearches: [{ type: String }],

  // Notifications preferences
  notifications: {
    email:       { type: Boolean, default: true },
    push:        { type: Boolean, default: true },
    community:   { type: Boolean, default: true },
    newsletter:  { type: Boolean, default: false },
  },

  // Auth tokens
  resetPasswordToken:   { type: String },
  resetPasswordExpires: { type: Date },
  lastLogin:            { type: Date },
  lastSeen:             { type: Date },

}, { timestamps: true });

// Hash password before save
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
UserSchema.methods.comparePassword = async function(candidate) {
  return bcrypt.compare(candidate, this.password);
};

// Public profile (no sensitive data)
UserSchema.methods.toPublic = function() {
  return {
    id:         this._id,
    name:       this.name,
    username:   this.username,
    city:       this.city,
    region:     this.region,
    bio:        this.bio,
    language:   this.language,
    dialect:    this.dialect,
    role:       this.role,
    stats:      this.stats,
    createdAt:  this.createdAt,
  };
};

module.exports = mongoose.model('User', UserSchema);
