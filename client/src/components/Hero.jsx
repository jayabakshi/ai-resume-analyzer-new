function Hero() {
  return (
    <section className="relative min-h-screen py-28 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-amber-500/5 blur-3xl" />

      {/* Floating grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Badge */}
      <div className="relative glass rounded-full px-4 py-2 text-xs text-white/60 mb-8 flex items-center gap-2 animate-fade-in-up">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Powered by Google Gemini AI
      </div>

      {/* Heading */}
      <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-black max-w-5xl leading-[0.9] tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        Land Your
        <span className="block gradient-text">Dream Job</span>
        With AI
      </h1>

      <p className="relative text-white/50 mt-8 max-w-xl text-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        Upload your resume, paste a job description, and get an AI-powered match score with actionable suggestions in seconds.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <button
          onClick={() => document.getElementById('upload')?.scrollIntoView({behavior: 'smooth'})}
          className="group relative px-8 py-4 rounded-2xl font-semibold text-base overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500" />
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Analyze My Resume
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>

        <button
          onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}
          className="glass px-8 py-4 rounded-2xl font-semibold text-base text-white/70 hover:text-white transition-colors"
        >
          See How It Works
        </button>
      </div>

      {/* Stats */}
      <div className="relative flex gap-12 mt-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        {[
          { value: "95%", label: "ATS Accuracy" },
          { value: "10s", label: "Analysis Time" },
          { value: "AI", label: "Gemini Powered" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-black gradient-text">{stat.value}</div>
            <div className="text-xs text-white/40 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;