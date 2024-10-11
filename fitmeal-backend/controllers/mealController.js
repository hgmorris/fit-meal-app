const { Meal } = require('../models');

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll();
    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
};

const addMeal = async (req, res) => {
  const { name, description, ingredients, price, nutritionInfo } = req.body;
  try {
    const meal = await Meal.create({ name, description, ingredients, price, nutritionInfo });
    res.status(201).json(meal);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to add meal' });
  }
};

// Add more CRUD operations as needed


module.exports = { getMeals, addMeal };
