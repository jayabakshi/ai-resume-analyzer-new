function UploadSection() {
  return (
    <section className="bg-zinc-950 text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-3xl bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">
          Upload Resume
        </h2>

        <input
          type="file"
          className="w-full border border-zinc-700 p-4 rounded-lg bg-black"
        />

        <textarea
          placeholder="Paste Job Description..."
          className="w-full mt-6 h-40 p-4 rounded-lg bg-black border border-zinc-700"
        />

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Analyze Resume
        </button>
      </div>
    </section>
  );
}

export default UploadSection;