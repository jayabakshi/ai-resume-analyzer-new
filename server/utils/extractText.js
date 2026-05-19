import pdfParse from "pdf-parse/lib/pdf-parse.js";
import mammoth from "mammoth";
import path from "path";

export async function extractText(file) {
  const ext = path.extname(file.originalname).toLowerCase();

  if (ext === ".pdf") {
    const data = await pdfParse(file.buffer);
    return data.text;
  }

  if (ext === ".docx" || ext === ".doc") {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return result.value;
  }

  throw new Error(`Unsupported file type: ${ext}`);
}