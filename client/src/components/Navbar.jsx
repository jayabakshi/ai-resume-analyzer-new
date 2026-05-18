function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-black text-white">
      <h1 className="text-2xl font-bold">
        AI Resume Analyzer
      </h1>

      <div className="flex gap-6 text-sm">
        <button>Features</button>
        <button>Dashboard</button>

        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;