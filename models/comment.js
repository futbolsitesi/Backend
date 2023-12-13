// models/Comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  kullaniciId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  macId: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  icerik: { type: String, required: true },
  tarih: { type: Date, default: Date.now },
  zaman: { type: String }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
