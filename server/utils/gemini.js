import https from "https";

export async function analyzeWithGemini(resumeText, jobDescription) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  const prompt = `You are an expert ATS and career coach AI.
Analyze this resume against the job description and return ONLY valid JSON with no markdown, no backticks, no explanation.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return this exact JSON structure:
{
  "overallScore": <0-100>,
  "atsScore": <0-100>,
  "keywordMatchScore": <0-100>,
  "skillGapPercentage": <0-100>,
  "matchedSkills": ["skill1", "skill2"],
  "missingSkills": ["skill1", "skill2"],
  "strengths": ["strength1", "strength2"],
  "suggestions": ["suggestion1", "suggestion2"],
  "experienceMatch": "<Poor|Fair|Good|Excellent>",
  "educationMatch": "<Poor|Fair|Good|Excellent>",
  "summary": "2-3 sentence overall assessment"
}`;

  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }]
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            reject(new Error(json.error.message));
            return;
          }
          const text = json.candidates[0].content.parts[0].text;
          const clean = text.replace(/```json|```/g, "").trim();
          resolve(JSON.parse(clean));
        } catch (e) {
          reject(new Error("Failed to parse AI response: " + e.message));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}