import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass border-b border-white/10 py-3" : "py-5 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold">
            AI
          </div>
          <span className="font-bold text-lg tracking-tight" style={{fontFamily: 'Syne, sans-serif'}}>
            Resume<span className="gradient-text">AI</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}
            className="hover:text-white transition-colors duration-200"
          >
            Features
          </button>
          <button 
            onClick={() => document.getElementById('results')?.scrollIntoView({behavior: 'smooth'})}
            className="hover:text-white transition-colors duration-200"
          >
            Dashboard
          </button>
        </div>

        {/* CTA */}
        <button
          onClick={() => document.getElementById('upload')?.scrollIntoView({behavior: 'smooth'})}
          className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 rounded-xl" />
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          <span className="relative">Get Started →</span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;