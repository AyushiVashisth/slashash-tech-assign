const express = require('express');
const FavoriteJoke = require('../models/favoriteJoke');
const router = express.Router();

// Save a favorite joke
router.post('/', async (req, res) => {
  try {
    const { jokeId, jokeText } = req.body;
    const favoriteJoke = new FavoriteJoke({ jokeId, jokeText });
    await favoriteJoke.save();
    res.json(favoriteJoke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save favorite joke' });
  }
});

// Get all favorite jokes
router.get('/', async (req, res) => {
  try {
    const favoriteJokes = await FavoriteJoke.find();
    res.json(favoriteJokes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch favorite jokes' });
  }
});

module.exports = router;
