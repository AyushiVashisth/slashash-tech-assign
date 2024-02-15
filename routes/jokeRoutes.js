const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch a dad joke as an image
router.get('/search', async (req, res) => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch dad joke' });
  }
});

module.exports = router;
