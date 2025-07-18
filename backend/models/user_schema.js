const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, "Name should contain only letters"]
    },
    age: {
        type: Number,
        required: true,
        min: [1, "Age must be greater than 0"]
    },
    address: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

modoule.exports = mongoose.model("User", userSchema);