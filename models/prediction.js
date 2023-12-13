// models/Prediction.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
  kullaniciId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  macId: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  sonuc: { type: String, required: true }
});

const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;
