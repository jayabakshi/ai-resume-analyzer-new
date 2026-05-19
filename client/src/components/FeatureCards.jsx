function FeatureCards() {
  const features = [
    {
      icon: "🎯",
      title: "AI Match Scoring",
      desc: "Get a precise compatibility score between your resume and any job description using advanced AI analysis.",
      color: "from-violet-600/20 to-violet-600/5",
      border: "border-violet-500/20",
      glow: "group-hover:shadow-violet-500/20",
    },
    {
      icon: "🔍",
      title: "Missing Skills Detection",
      desc: "Instantly identify skill gaps and keywords that ATS systems are looking for but missing from your resume.",
      color: "from-cyan-600/20 to-cyan-600/5",
      border: "border-cyan-500/20",
      glow: "group-hover:shadow-cyan-500/20",
    },
    {
      icon: "⚡",
      title: "ATS Optimization",
      desc: "Optimize your resume to pass Applicant Tracking Systems with targeted keyword recommendations.",
      color: "from-amber-600/20 to-amber-600/5",
      border: "border-amber-500/20",
      glow: "group-hover:shadow-amber-500/20",
    },
    {
      icon: "💡",
      title: "Smart Suggestions",
      desc: "Receive personalized, actionable tips to strengthen your resume and boost your interview chances.",
      color: "from-pink-600/20 to-pink-600/5",
      border: "border-pink-500/20",
      glow: "group-hover:shadow-pink-500/20",
    },
  ];

  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="max-w-6xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="glass inline-block rounded-full px-4 py-1.5 text-xs text-white/50 mb-4">
            FEATURES
          </div>
          <h2 className="text-5xl font-black tracking-tight">
            Everything you need to
            <span className="gradient-text block">get hired faster</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative glass border ${f.border} p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${f.glow}`}
            >
              {/* Card glow bg */}
              <div className={`absolute inset-0 bg-linear-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeatureCards;