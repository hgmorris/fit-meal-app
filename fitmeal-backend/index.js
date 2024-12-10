const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db'); // Import connectDB

dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB(); // Call the function to establish a connection

// Test route
app.get('/', (req, res) => {
  res.send('FitMeal Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
