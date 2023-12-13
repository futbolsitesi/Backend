// controllers/MatchController.js
const Match = require('../models/Match');

// Maç oluştur
exports.createMatch = async (req, res) => {
  try {
    const newMatch = await Match.create(req.body);
    res.status(201).json(newMatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Maçları getir
exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Maçı güncelle
exports.updateMatch = async (req, res) => {
  try {
    const updatedMatch = await Match.findByIdAndUpdate(req.params.matchId, req.body, { new: true });
    res.status(200).json(updatedMatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Maçı sil
exports.deleteMatch = async (req, res) => {
  try {
    await Match.findByIdAndDelete(req.params.matchId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
