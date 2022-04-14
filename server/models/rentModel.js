const mongoose = require("mongoose");
 
const date = new Date();
 
const rentSchema = new mongoose.Schema({
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
});


module.exports = new mongoose.model("Rentals", rentSchema);
