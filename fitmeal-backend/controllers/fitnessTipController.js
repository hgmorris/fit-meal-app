// controllers/fitnessTipController.js
const FitnessTip = require('../models/FitnessTip');

exports.getFitnessTips = async (req, res) => {
  try {
    const tips = await FitnessTip.find();
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching fitness tips', details: error.message });
  }
};

exports.createFitnessTip = async (req, res) => {
  try {
    const { title, content, category, videoLink } = req.body;
    const tip = await FitnessTip.create({ title, content, category, videoLink });
    res.status(201).json(tip);
  } catch (error) {
    res.status(400).json({ error: 'Error creating fitness tip', details: error.message });
  }
};

exports.updateFitnessTip = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, videoLink } = req.body;

    const tip = await FitnessTip.findById(id);
    if (!tip) return res.status(404).json({ error: 'Fitness tip not found' });

    await tip.updateOne({ title, content, category, videoLink });
    res.status(200).json({ message: 'Fitness tip updated successfully', tip });
  } catch (error) {
    res.status(400).json({ error: 'Error updating fitness tip', details: error.message });
  }
};

exports.deleteFitnessTip = async (req, res) => {
  try {
    const { id } = req.params;

    const tip = await FitnessTip.findById(id);
    if (!tip) return res.status(404).json({ error: 'Fitness tip not found' });

    await tip.deleteOne();
    res.status(200).json({ message: 'Fitness tip deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting fitness tip', details: error.message });
  }
};