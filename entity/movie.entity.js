var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Movie",
  tableName: "movies",
  columns: {
    id: {
      type: Number,
      primary: true,
    },
    title: {
      type: String,
    },
    directors: {
      type: String,
    },
    producers: {
      type: String,
    },
    runtime: {
      type: String,
    },
    rating: {
      type: String,
    },
    genre: {
      type: String,
    },
    year: {
      type: Number,
    },
    thumbnail: {
      type: String,
    },
  },
});