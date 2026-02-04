import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoConnect from "./db/database";
import { securityMiddlewares } from "./middlewares/security/security";

// ===== Load env =====
dotenv.config();

const app = express();

// ===== Connect to MongoDB =====
mongoConnect()
  .then(() => console.log("MongoDB connected"))
  .catch(() => {
    console.error("MongoDB connection failed, exiting...");
    process.exit(1);
  });

// ===== Basic middlewares =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Logging =====
app.use(morgan("dev"));

// ===== Security middlewares =====
app.use(securityMiddlewares);

// ===== Test route =====
app.get("/", (req, res) => {
  res.send("Hello, AppointCare backend is running securely!");
});

// ===== Start server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
