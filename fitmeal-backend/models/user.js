// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    defaultValue: 'user', // 'user' or 'admin'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;