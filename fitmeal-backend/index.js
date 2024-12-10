// index.js (Backend)
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import connectDB
const User = require('./models/User'); // Import User model

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to the database
connectDB(); // Call the function to establish a connection

// Test route
app.get('/', (req, res) => {
  res.send('FitMeal Backend is running...');
});

// Example route to fetch users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server Error');
  }
});

// Example route to create a user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3001; // Change the port here
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));