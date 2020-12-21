const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  country: { type: String, required: true },
  director: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    birthday: { type: Date, required: true },
  },
  score: { type: Number, required: true },
  poster: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
