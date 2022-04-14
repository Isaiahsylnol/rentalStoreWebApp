const { model, Schema } = require("mongoose");

var dt = new Date();

const userSchema = new Schema({
    id: {
        type: Number,
        required: [true, "Please enter valid id"],
        trim: true,
    },
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
    first_name: {
        type: String,
        required: [true, "Please enter valid first name"],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, "Please enter valid last name"],
        trim: true,
    },
    createdAt: { type: String, default: dt.toLocaleString() }, 
}) 

module.exports = model("Users", userSchema);