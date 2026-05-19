import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRouter from "./routes/upload.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", uploadRouter);

app.get("/", (req, res) => {
  res.json({ status: "AI Resume Analyzer API is running 🚀" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});