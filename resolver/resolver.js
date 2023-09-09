const {
  findMovies,
  findMovieById,
  findMovieByName,
  searchMovies,
} = require("../controllers/movieController");

const resolvers = {
  movies: async () => {
    try {
      const movies = await findMovies();
      return movies;
    } catch (error) {
      throw new Error("An error occurred while fetching movies.");
    }
  },

  findMovieByName: async (args) => {
    try {
      const movie = await findMovieByName(args.title);
      return movie;
    } catch (error) {
      throw new Error("An error occurred while fetching movies.");
    }
  },

  searchMovies: async (args) => {
    try {
      const movie = await searchMovies(args.search);
      return movie;
    } catch (error) {
      throw new Error("An error occurred while fetching movies.");
    }
  },

  searchMovieById: async (args) => {
    try {
      const movie = await findMovieById(args.id);
      return movie;
    } catch (error) {
      throw new Error("An error occurred while fetching movies.");
    }
  },
};

module.exports = resolvers;
