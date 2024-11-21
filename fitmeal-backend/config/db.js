
// Import dependencies
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Set up a new Sequelize instance with environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT || 5432,
  logging: false, // Disable logging; set to true for SQL logging
});

// Function to authenticate the connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
