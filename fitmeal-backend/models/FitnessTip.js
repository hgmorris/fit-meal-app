// models/FitnessTip.js
const mongoose = require('mongoose');

const fitnessTipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  videoLink: { type: String },
});

const FitnessTip = mongoose.model('FitnessTip', fitnessTipSchema);

module.exports = FitnessTip;