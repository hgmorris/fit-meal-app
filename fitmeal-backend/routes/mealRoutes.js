// routes/mealRoutes.js
const express = require('express');
const { getMeals, createMeal, updateMeal, deleteMeal } = require('../controllers/mealController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getMeals);
router.post('/', verifyToken, verifyAdmin, createMeal);
router.put('/:id', verifyToken, verifyAdmin, updateMeal);
router.delete('/:id', verifyToken, verifyAdmin, deleteMeal);

module.exports = router;
