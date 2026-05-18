function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-6xl font-bold max-w-4xl leading-tight">
        Match Your Resume With Any Job Using AI
      </h1>

      <p className="text-gray-400 mt-6 max-w-2xl text-lg">
        Upload your resume, paste a job description,
        and get AI-powered match scores, missing
        skills analysis, and resume improvement suggestions.
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Analyze Resume
      </button>
    </section>
  );
}

export default Hero;