// models/Match.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  ligId: { type: Schema.Types.ObjectId, ref: 'League', required: true },
  ev_sahibi_takimId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  deplasman_takimId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  stadyumAd: { type: String },
  tarih: { type: Date },
  zaman: { type: String },
  skor: { type: String },
  durum: { type: String },
  yorumlar: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  tahminler: [{ type: Schema.Types.ObjectId, ref: 'Prediction' }]
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
