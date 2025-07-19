const express = require("express");
const router = express.Router();
const User = require("../models/user_schema");

// Create
router.post("/users", async (req, res) => {
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

// Read
router.get("/users", async (_, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500);
    }
});

// Delete
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

// PUT
router.put("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
