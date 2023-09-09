const { buildSchema } = require("graphql");

const Schemas = buildSchema(`
type Query {
    movies: [Movie]
    findMovieByName(title: String): Movie
    searchByYear(year: String): Movie
    searchMovieById(id: Int): Movie
    searchMovies(search: String): [Movie]
    users: [User]
    searchUser(email: String): User
  } 

  type Movie {
    id: Int,
    title: String!,
    directors: [String]!,
    producers: [String]!,
    runtime: String!,
    rating: String,
    genre: [String]!,
    year: Int!,
    thumbnail: String,
  }
   
type Rental {
	start_date: String!
	end_date: String,
	username: String!,
  product: String!,
}

  type User {
    _id: String,
    email: String!,
    username: String!,
    password: String!,
    rentals: [Movie],
    firstName: String!,
    lastName: String!, 
  }

  type AuthPayload {
    token: String!,
    username: String!,
    id: String!,
    tokenExpiration: Int!
  }

  type Mutation {
    createMovie(
      title: String,
      directors: [String],
      producers: [String],
      runtime: Float,
      rating: Int,
      genre: [String],
      year: Int,
      thumbnail: String,
    ): Movie

    registerUser(
      username: String,
      password: String,
      email: String,
      firstName: String,
      lastName: String,
  ): User

    addRental(
     start_date: String,
     end_date: String,
     username: String!,
     product: String!): Rental

   login(email: String!, password: String!): AuthPayload
  }

`);

module.exports = Schemas;
