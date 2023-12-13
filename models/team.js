// models/Team.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  isim: { type: String, required: true },
  logo: { type: String },
  oyuncu: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  maclar: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
