const { Pool } = require('pg');
require('dotenv').config();

const connectDB = async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'development' ? { rejectUnauthorized: false } : undefined,
  });

  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error', error);
    process.exit(1);
  }
};

module.exports = { connectDB };
