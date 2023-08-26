var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: String,
      primary: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    rentals: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    year: {
      type: String,
    },
    createdAt: { type: String, default: new Date().toLocaleString() },
  },
});
