const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.VITE_DB_PROD || process.env.VITE_DB_DEV;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error: ", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;