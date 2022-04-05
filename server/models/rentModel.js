const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema({
  transaction_id: {
    type: String,
    required: [true, "Please enter valid ID"],
    unique: [true, "Duplicate ID not allowed"],
    trim: true,
  },
  rental_date: {
    type: String,
    required: true,
    validate: function (value) {
      var dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateRegex.test(value);
    },
  },
  rental_start: {
    type: String,
    required: true,
    validate: function (value) {
      var dateStartRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateStartRegex.test(value);
    },
  },
  rental_end: {
    type: String,
    required: true,
    validate: function (value) {
      var dateEndRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateEndRegex.test(value);
    },
  }
});

module.exports = new mongoose.model("Renting", rentSchema);
