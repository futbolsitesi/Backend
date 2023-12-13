// controllers/PlayerController.js
const Player = require('../models/Player');

// Oyuncu oluştur
exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Oyuncuları getir
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Oyuncuyu güncelle
exports.updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.playerId, req.body, { new: true });
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Oyuncuyu sil
exports.deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.playerId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
