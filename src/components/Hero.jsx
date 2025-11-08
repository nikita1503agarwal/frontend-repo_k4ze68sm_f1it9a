import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-[#0b0f17]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top & bottom gradient vignettes to enhance contrast; do not block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0f17] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/90 bg-white/5 border border-white/10 backdrop-blur px-3 py-1 rounded-full mb-5 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            Futuristic • 3D Interactive • High‑Tech
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]"
          >
            Smarhling Sales Agency
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400">
              Manufacturing, supply, and tooling — reimagined in 3D
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-slate-300/90 text-base md:text-lg max-w-2xl"
          >
            We merge immersive visualization with rigorous supply orchestration so your production moves faster, safer, and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#services"
              className="inline-flex items-center rounded-md px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_8px_40px_rgba(168,85,247,0.35)] hover:brightness-110 transition"
            >
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md px-5 py-2.5 bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10 transition"
            >
              Request Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
