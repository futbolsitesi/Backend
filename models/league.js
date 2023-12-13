// models/League.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: { type: String, required: true },
  ulke: { type: String, required: true },
  logo: { type: String },
  maclar: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;
