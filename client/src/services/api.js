const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function analyzeResume(resumeFile, jobDescription) {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jobDescription", jobDescription);

  const response = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Analysis failed");
  return data.analysis;
}