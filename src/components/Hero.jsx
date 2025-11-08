import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white/70 backdrop-blur px-2.5 py-1 rounded-full mb-4">
            Manufacturing • Supply Chain • Tooling
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Welding tools and supply-chain work fit for modern manufacturing
          </h1>
          <p className="mt-4 text-slate-700 text-base md:text-lg max-w-xl">
            We help factories, fabricators, and industrial teams source, integrate, and optimize the tools that keep production lines moving—powered by 3D, data, and real partnerships.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition">
              Start a Project
            </a>
            <a href="#services" className="inline-flex items-center rounded-md px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
