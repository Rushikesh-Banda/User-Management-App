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

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(exp.json());

app.use("/user-api", UserApp);

app.use(exp.static(path.join(__dirname, "..", "Frontend", "dist")));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "Frontend", "dist", "index.html")
  );
});

async function connectDB() {
  try {
    await connect(process.env.DB_URL);
    console.log("Connected to DB");

    const port = process.env.PORT || 4000;

    app.listen(port, () =>
      console.log(`Server on port ${port}`)
    );
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

connectDB();

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