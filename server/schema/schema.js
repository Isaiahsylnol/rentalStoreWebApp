const { buildSchema } = require("graphql");

const Schemas = buildSchema(`
type Query {
    movies: [Movie]
    searchTitle(title: String): Movie
    searchByYear(year: String): Movie
    users: [User]
    searchName(name: String): User
  } 

  type Movie {
    title: String,
    producer: String,
    runtime: String,
    rating: String,
    year: String,
    pic_sku: String,
  }
  
  input MovieInput {
    title: String,
    producer: String,
    runtime: String,
    rating: String,
    year: String,
    pic_sku: String,
   }

  type User {
    email: String,
    username: String,
    password: String,
    rentals: [Movie],
    first_name: String,
    last_name: String, 
  }

  type Mutation {
    addUser(
      username: String!,
      password: String!,
      email: String!,
      rentals: [MovieInput],
      first_name: String!
      last_name: String!,
  ): User
  }

`);

module.exports = Schemas;
