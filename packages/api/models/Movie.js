const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  director: { type: mongoose.ObjectId, required: false},
  score: { type: Number, required: true },
  poster: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
