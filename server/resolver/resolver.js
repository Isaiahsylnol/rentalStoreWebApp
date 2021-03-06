const Movies = require("../models/movieModel");
const Users = require("../models/userModel");
const Rental = require("../models/rentModel");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
const resolvers = {
  
    movies: () => {
      return Movies.find({});
    },

    users: () => {
      return Users.find({});
    },

    signup: async (args) => {
      const hashedPassword = await bcrypt.hash(args.password, 12)
      try {
        const existingUser = await Users.findOne({ email: args.email });
        if (existingUser) {
          throw new Error('User exists already.');
        }
      let user = new Users({
        id: args.id,
        email: args.email,
        username: args.username,
        password: hashedPassword,
        rentals: args.rentals,
        first_name: args.first_name,
        last_name: args.last_name,  
      });
      const result = await user.save();
      return result;
    } catch (err) {
      throw err;
    }
    },

    addRental: (args) => {
      let rental = new Rental({
        start_date: args.start_date,
     end_date: args.end_date,
      username: args.username,
       product: args.product 
      });
      rental.save();
      return rental;
    },
  
    searchMovie: (args) => {
      return Movies.findOne({ title: args.title });
    },

    searchUser: ({email}) => {
      return  Users.findOne({ email : email})
    },

    login: async ({email, password}) => {
   
      const user = await Users.findOne({ email : email});
      
      if(!user) {
        throw new Error('User does not exist');
      } 
      const isEqual = await bcrypt.compare(password, user.password)
      if(!isEqual){
        throw new Error('Password is incorrect');
      }
      const token = jwt.sign({email: user.email}, 'somesuperscretkey', {
        expiresIn: '1h'
      })
      return {id: user.id, token: token, tokenExpiration: 1}
    },
  
    searchByYear: (args) => {
      return Movies.findOne({ year: args.year });
    },
  
    listMovies: () => {
      return Movies.find({});
    },
  }; 
  
  module.exports = resolvers;
  