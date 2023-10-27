const users = require("./user.js");
const movies = require("./movie.js");
const rentals = require("./rental.js");

const mountRoutes = (app) => {
  app.use("/users", users);
  app.use("/movies", movies);
  app.use("/rentals", rentals);
};

module.exports = mountRoutes;
