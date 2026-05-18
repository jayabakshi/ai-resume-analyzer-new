function FeatureCards() {
  const features = [
    "AI Match Scoring",
    "Missing Skills Detection",
    "ATS Optimization",
    "Resume Suggestions",
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature}
            className="border border-zinc-800 p-8 rounded-2xl bg-zinc-900"
          >
            <h3 className="text-2xl font-semibold">
              {feature}
            </h3>

            <p className="text-gray-400 mt-4">
              Powerful AI analysis to improve your resume
              and increase your job match score.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;