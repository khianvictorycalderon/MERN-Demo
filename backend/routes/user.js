const express = require("express");
const router = express.Router();
const User = require("../models/user_schema");

router.post("/users/create", async (req, res) => {
    const { name, age, address } = req.body;

    try {
        const newUser = new User({ name, age, address });
        await newUser.save();

        const type = age < 18 ? "warning" : "success";
        const message = age < 18
            ? "User successfully created but is minor (saved in DB)"
            : "User successfully created (saved in DB)";

        res.status(201).json({
            message: message,
            type: type
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create user: " + error.message,
            type: "error"
        })
    }
});

module.exports = router;
