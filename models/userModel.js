const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter valid email"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please enter valid username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter valid password"],
    trim: true,
  },
  rentals: {
    type: Array,
  },
  firstName: {
    type: String,
    required: [true, "Please enter valid first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter valid last name"],
    trim: true,
  },
  createdAt: { type: String, default: new Date().toLocaleString() },
});

module.exports = mongoose.model("Users", userSchema);
