function ResultsSection({ analysis }) {
  if (!analysis) return null;

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">Analysis Results</h2>

        {/* Summary */}
        <div className="mb-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-3">Overall Assessment</h3>
          <p className="text-zinc-300 text-lg">{analysis.summary}</p>
        </div>

        {/* Top Score Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">Resume Match</h3>
            <p className="text-6xl font-bold mt-4 text-green-400">
              {analysis.overallScore}%
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">ATS Score</h3>
            <p className="text-6xl font-bold mt-4 text-yellow-400">
              {analysis.atsScore}%
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">Missing Skills</h3>
            <p className="text-5xl font-bold mt-4 text-red-400">
              {analysis.missingSkills.length}
            </p>
          </div>
        </div>

        {/* Matched Skills */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">✅ Matched Skills</h3>
          <div className="flex flex-wrap gap-4">
            {analysis.matchedSkills.map((skill) => (
              <span
                key={skill}
                className="bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">❌ Missing Skills</h3>
          <div className="flex flex-wrap gap-4">
            {analysis.missingSkills.map((skill) => (
              <span
                key={skill}
                className="bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">💪 Strengths</h3>
          <ul className="space-y-3 text-zinc-300">
            {analysis.strengths.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>

        {/* AI Suggestions */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">💡 AI Suggestions</h3>
          <ul className="space-y-4 text-zinc-300">
            {analysis.suggestions.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>

        {/* Experience & Education Match */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">Experience Match</h3>
            <p className="text-4xl font-bold mt-4 text-blue-400">
              {analysis.experienceMatch}
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">Education Match</h3>
            <p className="text-4xl font-bold mt-4 text-purple-400">
              {analysis.educationMatch}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ResultsSection;