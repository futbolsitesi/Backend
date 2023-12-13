// models/Statistics.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statisticsSchema = new Schema({
  oyuncuId: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
  takimId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  ligId: { type: Schema.Types.ObjectId, ref: 'League', required: true },
  istatistik_tipi: { type: String },
  deger: { type: Number }
});

const Statistics = mongoose.model('Statistics', statisticsSchema);

module.exports = Statistics;
