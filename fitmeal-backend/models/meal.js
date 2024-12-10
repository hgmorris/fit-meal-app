// models/Meal.js
const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
  nutritionInfo: { type: String, required: true },
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
