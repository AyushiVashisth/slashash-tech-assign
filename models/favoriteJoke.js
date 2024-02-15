const mongoose = require('mongoose');

const favoriteJokeSchema = new mongoose.Schema({
  jokeId: {
    type: String,
    required: true,
    unique: true
  },
  jokeText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FavoriteJoke', favoriteJokeSchema);
