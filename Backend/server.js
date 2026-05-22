import exp from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connect } from "mongoose";
import { config } from "dotenv";
import { UserApp } from "./APIs/UserApi.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

const app = exp();

// CORS FIX
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://user-management-app-two-zeta.vercel.app",
      "https://user-management-app-t269.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(exp.json());

// API ROUTES
app.use("/user-api", UserApp);

// STATIC FRONTEND
app.use(exp.static(path.join(__dirname, "..", "Frontend", "dist")));

// EXPRESS 5 ROUTING FIX
app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "Frontend", "dist", "index.html")
  );
});

// DATABASE CONNECTION
async function connectDB() {
  try {
    await connect(process.env.DB_URL);

    console.log("Connected to DB");

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

connectDB();

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
  });
});