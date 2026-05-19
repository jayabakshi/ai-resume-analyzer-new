import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function UploadSection({ onAnalyze }) {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  return (
    <section id="upload" className="relative py-28 px-6 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-3xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="glass inline-block rounded-full px-4 py-1.5 text-xs text-white/50 mb-4">
            ANALYZE
          </div>
          <h2 className="text-5xl font-black tracking-tight">
            Upload & <span className="gradient-text">Analyze</span>
          </h2>
          <p className="text-white/40 mt-4">Get your AI-powered resume analysis in seconds</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/10">

          {/* Drop Zone */}
          <label
            className={`relative flex flex-col items-center justify-center p-12 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 ${
              dragging 
                ? "border-violet-500 bg-violet-500/10" 
                : file 
                  ? "border-green-500/50 bg-green-500/5" 
                  : "border-white/10 hover:border-white/30 hover:bg-white/5"
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            {file ? (
              <>
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-2xl mb-4">
                  📄
                </div>
                <p className="font-semibold text-green-400">{file.name}</p>
                <p className="text-white/30 text-sm mt-1">Click to change file</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <FiUploadCloud size={28} className="text-white/40" />
                </div>
                <p className="font-semibold text-white/70">Drop your resume here</p>
                <p className="text-white/30 text-sm mt-1">PDF or DOCX · Max 5MB</p>
              </>
            )}
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
          </label>

          {/* Job Description */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-white/60 mb-3">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-44 bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-violet-500/50 resize-none transition-colors"
            />
          </div>

          {/* Analyze Button */}
          <button
            onClick={() => {
              if (!file) { alert("Please upload a resume first."); return; }
              if (!jobDescription.trim()) { alert("Please paste a job description."); return; }
              onAnalyze(file, jobDescription);
            }}
            className="group relative w-full mt-6 py-4 rounded-2xl font-bold text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500" />
            <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Analyze Resume
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default UploadSection;