// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  kullaniciAdi: { type: String, required: true },
  sifre: { type: String, required: true },
  email: { type: String, required: true },
  bakiye: { type: Number, default: 0 },
  yorumlar: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  tahminler: [{ type: Schema.Types.ObjectId, ref: 'Prediction' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
