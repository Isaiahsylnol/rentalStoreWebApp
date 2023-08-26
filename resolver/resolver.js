var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findMovies } = require("../controllers/movieController");

const resolvers = {
  movies: () => {
    return findMovies();
  },

  //   users: () => {
  //     return Users.find({});
  //   },

  registerUser: async (args) => {
    const hashedPassword = await bcrypt.hash(args.password, 12);
    try {
      const existingUser = await Users.findOne({ email: args.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      let user = new Users({
        email: args.email,
        username: args.username,
        password: hashedPassword,
        firstName: args.firstName,
        lastName: args.lastName,
      });
      const result = await user.save();
      return result;
    } catch (err) {
      throw err;
    }
  },

  //   createMovie: async (args) => {
  //     try {
  //       const existingMovie = await Movies.findOne({ title: args.title });
  //       if (existingMovie) {
  //         throw new Error("Movie exists already.");
  //       }
  //       let movie = new Movies({
  //         title: args.title,
  //         directors: args.directors,
  //         producers: args.producers,
  //         runtime: args.runtime,
  //         genre: args.genre,
  //         rating: args.rating,
  //         year: args.year,
  //         thumbnail: args.thumbnail,
  //       });
  //       const result = await movie.save();
  //       return result;
  //     } catch (err) {
  //       throw err;
  //     }
  //   },

  //   addRental: (args) => {
  //     let rental = new Rental({
  //       start_date: args.start_date,
  //       end_date: args.end_date,
  //       username: args.username,
  //       product: args.product,
  //     });
  //     rental.save();
  //     return rental;
  //   },

  //   searchMovie: (args) => {
  //     return Movies.findOne({ title: args.title });
  //   },

  //   searchUser: ({ email }) => {
  //     return Users.findOne({ email: email });
  //   },

  //   login: async ({ email, password }) => {
  //     const user = await Users.findOne({ email: email });

  //     if (!user) {
  //       throw new Error("User does not exist");
  //     }
  //     const isEqual = await bcrypt.compare(password, user.password);
  //     if (!isEqual) {
  //       throw new Error("Password is incorrect");
  //     }
  //     const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
  //       expiresIn: "1h",
  //     });
  //     return {
  //       id: user.id,
  //       token: token,
  //       username: user.username,
  //     };
  //   },

  //   searchByYear: (args) => {
  //     return Movies.findOne({ year: args.year });
  //   },

  //   searchMovieById: (args) => {
  //     return Movies.findOne({ _id: args._id });
  //   },
};

module.exports = resolvers;
