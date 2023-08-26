const express = require("express");
const {
  findMovies,
  findMoviesByName,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", findMovies);
router.post("/movies", findMoviesByName);

module.exports = router;
