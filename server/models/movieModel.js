const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    _id:{
        type: mongoose.ObjectId,
    },

    title: {
        type: String,
        required: [true, "Please enter valid title"],
        trim: true,
    },
    producer: {
        type: Array,
        required: [true, "Please enter valid name"],
        trim: true,
    },
    runtime: {
        type: String,
        required: [true, "Please enter valid time"],
        trim: true,
    },
    rating: {
        type: String,
        trim: true,
    },
    genre: {
        type: Array,
        required: [true, "Please enter valid genre"],
    },
    year: {
        type: String,
        required: [true, "Please enter valid year"],
        trim: true,
    },
    thumbnail: {
        type: String,
        required: [true, "Please enter valid thumbnail"],
        trim: true,
    },
    createdAt: { type: String, default: new Date().toLocaleString() },
})

module.exports = mongoose.model("Movies", movieSchema);