import React from 'react';
import { Rocket, Shield, Zap, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Tooling & Fixtures',
    desc: 'Design, sourcing, and validation for MIG/TIG, robotic cells, and heavy fabrication.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Supply Orchestration',
    desc: 'Multi-vendor coordination, inventory buffers, and predictive lead-time tracking.'
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch Programs',
    desc: 'NPI support from RFQs to PPAP with clear milestones, gates, and KPIs.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Quality & Compliance',
    desc: 'Traceability, certs, and audits aligned to ISO 9001 and AWS/CWI requirements.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black/10 to-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Capabilities</h2>
          <p className="mt-3 text-slate-300">Operational, high-uptime services with a measurable impact on throughput.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                {s.icon}
              </div>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
