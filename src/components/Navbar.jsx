import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-violet-500 shadow-[0_0_24px_rgba(99,102,241,0.6)]" />
          <span className="font-semibold tracking-tight text-white">Smarhling Sales Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md px-3 py-2 bg-white/10 border border-white/10 text-white hover:bg-white/20 transition"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
