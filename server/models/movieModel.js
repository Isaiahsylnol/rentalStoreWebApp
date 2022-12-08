const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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
    year: {
        type: String,
        required: [true, "Please enter valid year"],
        trim: true,
    },
    pic_sku: {
        type: String,
        required: [true, "Please enter valid sku"],
        trim: true,
    },
    createdAt: { type: String, default: new Date().toLocaleString() },
})

module.exports = mongoose.model("Movies", movieSchema);