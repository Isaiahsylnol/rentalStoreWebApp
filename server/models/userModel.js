const { model, Schema } = require("mongoose");

const userSchema = new Schema({
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
    // movies: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'movies'
    // }, 
})

module.exports = model("Users", userSchema);