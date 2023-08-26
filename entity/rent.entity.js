var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Rental",
  tableName: "rentals",
  columns: {
    id: {
      type: String,
      primary: true,
    },
    username: {
      type: String,
      required: [true, "Please enter valid user"],
      trim: true,
    },
    rental_date: {
      type: String,
      required: true,
      default: date.toLocaleString(),
    },
    rental_start: {
      type: String,
      required: true,
      default: date.toLocaleString(),
    },
    rental_end: {
      type: String,
      default: date.toLocaleDateString(),
    },
    createdAt: { type: String, default: date },
  },
});
