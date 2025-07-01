import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    Credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page!");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "This is some sample data", status: "success" });
});
