const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
require("dotenv").config(); 

const jokeRoutes = require('./routes/jokeRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to slashash-tech-assign backend api");
});

// Routes
app.use('/api/jokes', jokeRoutes);
app.use('/api/favorites', favoriteRoutes);


app.listen(process.env.PORT, async () => {
  try {
    console.log("listening on port " + process.env.PORT);
    await connection;
    console.log("succefully connnected to mongoDb atlas");
  } catch (error) {
    console.log(error);
  }
});
