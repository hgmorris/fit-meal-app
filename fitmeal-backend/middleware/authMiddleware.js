
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(decoded.id);
    if (!req.user) return res.sendStatus(403);
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(403);
  }
};

// Example admin check (you can enhance this based on your User model)
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) { // Assume `isAdmin` field exists
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { authenticateToken, isAdmin };
