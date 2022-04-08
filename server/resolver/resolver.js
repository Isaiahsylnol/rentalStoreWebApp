const Movies = require("../models/movieModel");
const Users = require("../models/userModel");

const resolvers = {
    movies: () => {
      return Movies.find({});
    },

    users: () => {
      return Users.find({});
    },

    addUser: (args) => {
      let user = new Users({
        email: args.email,
        username: args.username,
        password: args.password,
        rentals: args.rentals,
        first_name: args.first_name,
        last_name: args.last_name,  
      });
      user.save();
      return user;
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
  