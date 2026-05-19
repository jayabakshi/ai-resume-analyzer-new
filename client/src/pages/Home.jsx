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

      // Scroll to results
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
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <UploadSection onAnalyze={handleAnalyze} />

      {/* Loading State */}
      {loading && (
        <div className="bg-black text-white py-20 flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-zinc-400 text-lg">Analyzing your resume with AI...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-black px-6 py-10 flex justify-center">
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-2xl max-w-xl w-full text-center">
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* Results */}
      <div id="results">
        <ResultsSection analysis={analysis} />
      </div>
    </>
  );
}

export default Home;