import { useEffect, useState } from "react";

/* =========================
   Animated Score Component
========================= */
function AnimatedScore({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 2;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setCount(start);
    }, 15);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}%</span>;
}

/* =========================
   Circular Score Ring
========================= */
function ScoreRing({ score, color, size = 120 }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (score / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="-rotate-90"
    >
      {/* Background ring */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="8"
      />

      {/* Progress ring */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 1.2s ease",
        }}
      />
    </svg>
  );
}

/* =========================
   Results Section
========================= */
function ResultsSection({ analysis }) {
  if (!analysis) return null;

  const handleDownload = () => {
    const content = `
AI RESUME ANALYSIS REPORT
==========================

OVERALL SCORE: ${analysis.overallScore}%
ATS SCORE: ${analysis.atsScore}%
KEYWORD MATCH: ${analysis.keywordMatchScore}%
SKILL GAP: ${analysis.skillGapPercentage}%

SUMMARY
-------
${analysis.summary}

MATCHED SKILLS
--------------
${analysis.matchedSkills.join(", ")}

MISSING SKILLS
--------------
${analysis.missingSkills.join(", ")}

STRENGTHS
---------
${analysis.strengths
  .map((s, i) => `${i + 1}. ${s}`)
  .join("\n")}

AI SUGGESTIONS
--------------
${analysis.suggestions
  .map((s, i) => `${i + 1}. ${s}`)
  .join("\n")}

EXPERIENCE MATCH: ${analysis.experienceMatch}
EDUCATION MATCH: ${analysis.educationMatch}
    `.trim();

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume-analysis.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section id="results" className="relative py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          
          <div>
            <div className="glass inline-block rounded-full px-4 py-1.5 text-xs text-white/50 mb-3">
              RESULTS
            </div>

            <h2 className="text-5xl font-black tracking-tight">
              Analysis{" "}
              <span className="gradient-text">
                Dashboard
              </span>
            </h2>
          </div>

          <button
            onClick={handleDownload}
            className="glass border border-white/10 px-5 py-3 rounded-2xl text-sm font-medium text-white/60 hover:text-white hover:border-white/20 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            ↓ Download Report
          </button>
        </div>

        {/* Score Cards */}
        <div className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300 mb-6">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {[
              {
                label: "Overall Match",
                score: analysis.overallScore,
                color: "#7c3aed",
              },
              {
                label: "ATS Score",
                score: analysis.atsScore,
                color: "#06b6d4",
              },
              {
                label: "Keyword Match",
                score: analysis.keywordMatchScore,
                color: "#f59e0b",
              },
              {
                label: "Skill Gap",
                score: analysis.skillGapPercentage,
                color: "#f43f5e",
              },
            ].map((item) => (
              
              <div
                key={item.label}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  
                  <ScoreRing
                    score={item.score}
                    color={item.color}
                    size={110}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    <span
                      className="text-2xl font-black"
                      style={{ color: item.color }}
                    >
                      <AnimatedScore
                        value={item.score}
                      />
                    </span>

                  </div>
                </div>

                <p className="text-white/50 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300 mb-6">
          
          <h3 className="text-lg font-bold mb-3 text-white/80">
            Overall Assessment
          </h3>

          <p className="text-white/50 leading-relaxed">
            {analysis.summary}
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Matched Skills */}
          <div className="glass border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all">
            
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Matched Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {analysis.matchedSkills.map((skill) => (
                
                <span
                  key={skill}
                  className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1.5 rounded-xl text-xs font-medium"
                >
                  {skill}
                </span>

              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="glass border border-red-500/20 rounded-3xl p-8 hover:border-red-500/40 transition-all">
            
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
              Missing Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {analysis.missingSkills.map((skill) => (
                
                <span
                  key={skill}
                  className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-xl text-xs font-medium"
                >
                  {skill}
                </span>

              ))}
            </div>
          </div>

        </div>

        {/* Strengths & Suggestions */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Strengths */}
         <div className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300">
            
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              💪 Strengths
            </h3>

            <ul className="space-y-3">
              {analysis.strengths.map((s, i) => (
                
                <li
                  key={i}
                  className="flex gap-3 text-sm text-white/60"
                >
                  <span className="text-amber-400">
                    ✦
                  </span>

                  {s}
                </li>

              ))}
            </ul>
          </div>

          {/* Suggestions */}
          <div className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300 mb-6">
            
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              💡 AI Suggestions
            </h3>

            <ul className="space-y-3">
              {analysis.suggestions.map((s, i) => (
                
                <li
                  key={i}
                  className="flex gap-3 text-sm text-white/60"
                >
                  <span className="text-cyan-400">
                    →
                  </span>

                  {s}
                </li>

              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-6">

          {[
            {
              label: "Experience Match",
              value: analysis.experienceMatch,
              color: "text-violet-400",
              border: "border-violet-500/20",
            },
            {
              label: "Education Match",
              value: analysis.educationMatch,
              color: "text-cyan-400",
              border: "border-cyan-500/20",
            },
          ].map((item) => (
            
            <div
              key={item.label}
              className={`glass border ${item.border} rounded-3xl p-8 text-center hover:scale-[1.01] transition-all`}
            >
              <p className="text-white/40 text-sm mb-3">
                {item.label}
              </p>

              <p className={`text-4xl font-black ${item.color}`}>
                {item.value}
              </p>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
}

export default ResultsSection;