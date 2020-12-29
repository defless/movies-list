const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nationality: { type: String, required: true },
  birthday: { type: Date, required: true },
});

module.exports = mongoose.model('Director', directorSchema);
