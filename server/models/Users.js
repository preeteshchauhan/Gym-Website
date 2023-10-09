const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number, // Add 'age' field
    gender: String, // Add 'gender' field
    height: Number,
    weight: Number,
    goals: [{ type: String }], // Change 'goals' to an array of strings
    role: {
        type: String,
        default: "visitor"
    }
});

const UserModel = mongoose.model("User", UserSchema); // Change the model name to "User"
module.exports = UserModel;
