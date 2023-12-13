// controllers/LeagueController.js
const League = require('../models/League');

// Lig oluştur
exports.createLeague = async (req, res) => {
  try {
    const newLeague = await League.create(req.body);
    res.status(201).json(newLeague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ligleri getir
exports.getLeagues = async (req, res) => {
  try {
    const leagues = await League.find();
    res.status(200).json(leagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ligi güncelle
exports.updateLeague = async (req, res) => {
  try {
    const updatedLeague = await League.findByIdAndUpdate(req.params.leagueId, req.body, { new: true });
    res.status(200).json(updatedLeague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ligi sil
exports.deleteLeague = async (req, res) => {
  try {
    await League.findByIdAndDelete(req.params.leagueId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
