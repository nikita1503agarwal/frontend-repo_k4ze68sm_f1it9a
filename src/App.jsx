import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 bg-black/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Smarhling Sales Agency. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built for teams that demand precision and speed.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
