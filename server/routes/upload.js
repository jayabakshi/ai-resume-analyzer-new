import express from "express";
import multer from "multer";
import path from "path";
import { extractText } from "../utils/extractText.js";
import { analyzeWithGemini } from "../utils/gemini.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [".pdf", ".docx", ".doc"];
    const ext = path.extname(file.originalname).toLowerCase();
    allowed.includes(ext) ? cb(null, true) : cb(new Error("Only PDF and DOCX allowed"));
  },
});

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    console.log("📥 Request received");
    console.log("File:", req.file?.originalname);
    console.log("JD length:", req.body?.jobDescription?.length);

    if (!req.file) return res.status(400).json({ error: "No resume file uploaded" });

    const { jobDescription } = req.body;
    if (!jobDescription || jobDescription.trim().length < 20)
      return res.status(400).json({ error: "Please provide a valid job description" });

    console.log("📄 Extracting text...");
    const resumeText = await extractText(req.file);
    console.log("✅ Text extracted, length:", resumeText.length);

    if (!resumeText || resumeText.trim().length < 50)
      return res.status(400).json({ error: "Could not extract text from resume" });

    console.log("🤖 Calling Gemini...");
    const analysis = await analyzeWithGemini(resumeText, jobDescription);
    console.log("✅ Gemini response received");

    res.json({ success: true, analysis });
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    console.error(err.stack);
    res.status(500).json({ error: err.message || "Analysis failed" });
  }
});

export default router;