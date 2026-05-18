import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function UploadSection() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="bg-zinc-950 text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-2xl">

        <h2 className="text-4xl font-bold mb-3">
          Resume Analysis
        </h2>

        <p className="text-zinc-400 mb-10">
          Upload your resume and paste a job description
          to get an AI-powered compatibility score.
        </p>

        {/* Upload Box */}

        <label className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-white transition bg-black">

          <FiUploadCloud size={60} className="mb-4 text-zinc-400" />

          <p className="text-lg font-medium">
            Drag & Drop Resume
          </p>

          <p className="text-sm text-zinc-500 mt-2">
            PDF or DOCX
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* File Name */}

        {fileName && (
          <div className="mt-4 bg-zinc-800 px-4 py-3 rounded-xl text-sm text-green-400">
            Uploaded: {fileName}
          </div>
        )}

        {/* Job Description */}

        <div className="mt-10">
          <label className="block mb-3 text-lg font-medium">
            Job Description
          </label>

          <textarea
            placeholder="Paste the job description here..."
            className="w-full h-52 bg-black border border-zinc-700 rounded-2xl p-5 focus:outline-none focus:border-white resize-none"
          />
        </div>

        {/* Button */}

        <button className="w-full mt-8 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition">
          Analyze Resume
        </button>
      </div>
    </section>
  );
}

export default UploadSection;