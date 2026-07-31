const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  slug:       { type: String, required: true, unique: true },
  name:       { type: String, required: true },
  arabicName: { type: String },
  region:     { type: String, required: true },
  dialect:    { type: String },          // dialect spoken there
  nickname:   { type: String },
  founded:    { type: String },
  population: { type: String },
  coordinates:{ lat: Number, lng: Number },
  description:{ type: String },
  tags:       [{ type: String }],
  food:       [{ icon: String, name: String, description: String }],
  crafts:     [{ icon: String, name: String, description: String }],
  music:      [{ icon: String, name: String, description: String }],
  facts:      [{ key: String, value: String }],
  timeline:   [{ year: String, event: String, color: String }],
}, { timestamps: true });

module.exports = mongoose.model('City', CitySchema);
