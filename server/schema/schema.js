const { buildSchema } = require("graphql");

const Schemas = buildSchema(`
type Query {
    movies: [Movie]
    searchMovie(title: String): Movie
    searchByYear(year: String): Movie
    users: [User]
    searchUser(first_name: String, last_name: String, email: String): User
  } 

  type Movie {
    _id: String,
    title: String,
    producer: [String],
    runtime: String,
    rating: String,
    genre: [String],
    year: String,
    thumbnail: String,
  }
  
  input MovieInput {
    title: String,
    producer: [String],
    runtime: String,
    rating: String,
    genre: [String],
    year: String,
    thumbnail: String,
   }
   
type Rental {
	start_date: String!
	end_date: String,
	username: String!,
  product: String!,
}

  type User {
    id: Int!,
    email: String!,
    username: String!,
    password: String!,
    rentals: [Movie],
    first_name: String!,
    last_name: String!, 
  }

  type AuthPayload {
    token: String!,
    id: Int!,
    tokenExpiration: Int!
  }

  type Mutation {
    createMovie(
      title: String,
    producer: [String],
    runtime: Float,
    rating: Int,
    genre: [String],
    year: Int,
    thumbnail: String,
    ): Movie

    signup(
      id: Int!,
      username: String!,
      password: String!,
      email: String!,
      rentals: [MovieInput],
      first_name: String!
      last_name: String!,
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
