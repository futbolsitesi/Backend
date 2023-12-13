// controllers/StatisticsController.js
const Statistics = require('../models/Statistics');

// İstatistik oluştur
exports.createStatistics = async (req, res) => {
  try {
    const newStatistics = await Statistics.create(req.body);
    res.status(201).json(newStatistics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İstatistikleri getir
exports.getStatistics = async (req, res) => {
  try {
    const statistics = await Statistics.find();
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İstatistikleri güncelle
exports.updateStatistics = async (req, res) => {
  try {
    const updatedStatistics = await Statistics.findByIdAndUpdate(req.params.statisticsId, req.body, { new: true });
    res.status(200).json(updatedStatistics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İstatistikleri sil
exports.deleteStatistics = async (req, res) => {
  try {
    await Statistics.findByIdAndDelete(req.params.statisticsId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
