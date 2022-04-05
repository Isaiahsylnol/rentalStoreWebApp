const { buildSchema } = require("graphql");

const Schemas = buildSchema(`
type Query {
    movies: [Movie]
    searchTitle(title: String): Movie
    searchByYear(year: String): Movie
  } 

  type Movie {
    title: String,
    producer: String,
    runtime: String,
    rating: String,
    year: String,
    pic_sku: String,
  }
`);

module.exports = Schemas;
