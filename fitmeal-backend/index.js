const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db'); // Database connection file
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const mealRoutes = require('./routes/mealRoutes'); // Meal management routes
const fitnessTipRoutes = require('./routes/fitnessTipRoutes'); // Fitness tip routes

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON payloads

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoutes); // User authentication routes
app.use('/api/meals', mealRoutes); // Meal-related routes
app.use('/api/tips', fitnessTipRoutes); // Fitness tips-related routes

// Default route for health check
app.get('/', (req, res) => {
  res.send('FitMeal Backend is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
