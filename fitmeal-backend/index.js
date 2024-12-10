// index.js (Backend)
const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db'); // Import connectDB
const User = require('./models/user'); // Import User model

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

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
    res.status(500).send('Server Error');
  }
});

// Example route to update a user
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    user.role = role || user.role;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3001; // Change the port here
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

