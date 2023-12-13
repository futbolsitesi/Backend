// controllers/TeamController.js
const Team = require('../models/Team');

// Takım oluştur
exports.createTeam = async (req, res) => {
  try {
    const newTeam = await Team.create(req.body);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Takımları getir
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Takımı güncelle
exports.updateTeam = async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.teamId, req.body, { new: true });
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Takımı sil
exports.deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.teamId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
