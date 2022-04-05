const Movies = require("../models/movieModel");

const resolvers = {
    movies: () => {
      return Movies.find({});
    },
  
    searchMovie: (args) => {
      return Movies.findOne({ title: args.title });
    },
  
    searchByYear: (args) => {
      return Movies.findOne({ year: args.year });
    },
 
  
    listMovies: () => {
      return Movies.find({});
    },
  };
  
  module.exports = resolvers;
  