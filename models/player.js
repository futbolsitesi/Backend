// models/Player.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  isim: { type: String, required: true },
  fotograf: { type: String },
  istatistik: [{ type: Schema.Types.ObjectId, ref: 'Statistics' }]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
