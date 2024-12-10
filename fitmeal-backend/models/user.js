// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  preferences: { type: String },
  savedFitnessTips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FitnessTip' }],
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;