


const { FitnessTip } = require('../models');

const getTips = async (req, res) => {
  try {
    const tips = await FitnessTip.findAll();
    res.json(tips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch fitness tips' });
  }
};

const addTip = async (req, res) => {
  const { title, content, category, videoLink } = req.body;
  try {
    const tip = await FitnessTip.create({ title, content, category, videoLink });
    res.status(201).json(tip);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to add fitness tip' });
  }
};

// Add more CRUD operations as needed

module.exports = { getTips, addTip };
