const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Sample route
router.get("/", (req, res) => {
  res.json({ message: "API working" });
});

// Create a user
router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
