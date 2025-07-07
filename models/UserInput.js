const mongoose = require('mongoose');

const userInputSchema = new mongoose.Schema({
  niche: { type: String, required: true },
  platforms: [String],
  competitors: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserInput', userInputSchema);
