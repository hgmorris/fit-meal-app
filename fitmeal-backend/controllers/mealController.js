// controllers/mealController.js
const Meal = require('../models/Meal');

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meals', details: error.message });
  }
};

exports.createMeal = async (req, res) => {
  try {
    const { name, description, price, calories } = req.body;
    const meal = await Meal.create({ name, description, price, calories });
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ error: 'Error creating meal', details: error.message });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, calories } = req.body;

    const meal = await Meal.findByPk(id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });

    await meal.update({ name, description, price, calories });
    res.status(200).json({ message: 'Meal updated successfully', meal });
  } catch (error) {
    res.status(400).json({ error: 'Error updating meal', details: error.message });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;

    const meal = await Meal.findByPk(id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });

    await meal.destroy();
    res.status(200).json({ message: 'Meal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meal', details: error.message });
  }
};
