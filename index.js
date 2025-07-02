import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js"; // Import the database connection utility
import userRoutes from "./Routes/user.routes.js"; // Import user routes

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(
  cors({
    origin: process.env.BASE_URL, // Allow requests from the client URL or localhost
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

db();
app.use("/api/v1/users", userRoutes); // Use user routes under /api/v1/users

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
