
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const mealRoutes = require('./routes/mealRoutes');
const tipRoutes = require('./routes/tipRoutes');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/tips', tipRoutes);

// Health Check Route
app.get('/', (req, res) => {
  res.send('FitMeal API is running');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
