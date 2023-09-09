const express = require("express");
const {
  findMovies,
  findMovieByName,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", findMovies);
router.post("/movies", findMovieByName);

module.exports = router;
