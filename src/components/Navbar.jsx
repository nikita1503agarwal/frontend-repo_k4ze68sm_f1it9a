import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="font-semibold text-slate-800 tracking-tight">Smarhling Sales Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#industries" className="hover:text-slate-900 transition">Capabilities</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
