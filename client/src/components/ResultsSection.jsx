function ResultsSection() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Analysis Results
        </h2>

        {/* Top Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">
              Resume Match
            </h3>

            <p className="text-6xl font-bold mt-4 text-green-400">
              82%
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">
              ATS Score
            </h3>

            <p className="text-6xl font-bold mt-4 text-yellow-400">
              75%
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-zinc-400 text-lg">
              Missing Skills
            </h3>

            <p className="text-5xl font-bold mt-4 text-red-400">
              5
            </p>
          </div>

        </div>

        {/* Missing Skills */}

        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-6">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "Docker",
              "AWS",
              "Kubernetes",
              "CI/CD",
              "TypeScript",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

        {/* Suggestions */}

        <div className="mt-10 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold mb-6">
            AI Suggestions
          </h3>

          <ul className="space-y-4 text-zinc-300">

            <li>
              • Add more quantified achievements to your experience section.
            </li>

            <li>
              • Mention deployment tools and cloud technologies.
            </li>

            <li>
              • Include more backend-focused projects relevant to the role.
            </li>

            <li>
              • Optimize keywords for ATS screening systems.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}

export default ResultsSection;