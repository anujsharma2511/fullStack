import express from "express";
const Router = express.Router();

Router.get("/register", async (req, res) => {
  try {
    // Logic to register a user
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

export default Router;
