const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  album_id: {
    type: String,
    required: [true, "Please enter valid ID"],
    unique: [true, "Duplicate ID not allowed"],
    trim: true,
  },
   
});

module.exports = new mongoose.model("Albums", albumSchema);
