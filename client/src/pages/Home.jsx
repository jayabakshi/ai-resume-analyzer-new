import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import UploadSection from "../components/UploadSection";
import ResultsSection from "../components/ResultsSection";
import { analyzeResume } from "../services/api";

function Home() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (file, jobDescription) => {
    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const result = await analyzeResume(file, jobDescription);
      setAnalysis(result);
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <FeatureCards />
      <UploadSection onAnalyze={handleAnalyze} />

      {/* Loading */}
      {loading && (
        <div className="py-32 flex flex-col items-center justify-center gap-6">
          {/* animated ring */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border border-white/10"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-violet-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-t-2 border-cyan-400 animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center text-xl">
            🤖
            </div>
         </div>
         <div className="text-center">
            <p className="text-white/80 font-medium">
              Analyzing your resume
            </p>
            <p className="text-white/40 text-sm mt-1">
              Finding matches, skills, and improvements...
            </p>
         </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="px-6 py-10 flex justify-center">
          <div className="glass border border-red-500/30 text-red-400 px-6 py-4 rounded-2xl max-w-xl w-full text-center text-sm">
            ⚠️ {error}
          </div>
        </div>
      )}

      {!analysis && !loading && (
        <div className="text-center py-24 text-white/40">
          <p className="text-lg">
            Upload a resume to see your AI analysis
          </p>
          <p className="text-sm mt-2">
            Your dashboard will appear here
         </p>
        </div>
     )}
<ResultsSection analysis={analysis} />

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-white/20 text-sm">
        Built with ❤️ using React + Gemini AI
      </footer>
    </div>
  );
}

export default Home;