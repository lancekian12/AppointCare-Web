import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoConnect from "./db/database";
import { setupSwagger } from "./docs/swagger";
import { securityMiddlewares } from "./middlewares/security/security";
import { errorMiddleware } from "./middlewares/error/errorMiddleware";
import { notFoundMiddleware } from "./middlewares/error/notFoundMiddleware";
import authRoutes from "./routes/authRoute";
import "./controllers/authController";

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
app.use(...securityMiddlewares);

setupSwagger(app);

// ===== Routes =====
app.use("/api/auth", authRoutes);

// ===== Test route =====
app.get("/", (req, res) => {
  res.send("Hello, AppointCare backend is running securely!");
});

// ===== 404 Not Found =====
app.use(notFoundMiddleware);

// ===== Error middleware =====
app.use(errorMiddleware);

// ✅ Export the app (do NOT call app.listen here)
export default app;
