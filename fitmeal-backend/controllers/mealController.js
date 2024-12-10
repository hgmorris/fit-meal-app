// controllers/mealController.js
const Meal = require('../models/Meal');

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meals', details: error.message });
  }
};

exports.createMeal = async (req, res) => {
  try {
    const { name, description, ingredients, price, nutritionInfo } = req.body;
    const meal = await Meal.create({ name, description, ingredients, price, nutritionInfo });
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ error: 'Error creating meal', details: error.message });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, ingredients, price, nutritionInfo } = req.body;

    const meal = await Meal.findById(id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });

    await meal.updateOne({ name, description, ingredients, price, nutritionInfo });
    res.status(200).json({ message: 'Meal updated successfully', meal });
  } catch (error) {
    res.status(400).json({ error: 'Error updating meal', details: error.message });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;

    const meal = await Meal.findById(id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });

    await meal.deleteOne();
    res.status(200).json({ message: 'Meal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meal', details: error.message });
  }
};
