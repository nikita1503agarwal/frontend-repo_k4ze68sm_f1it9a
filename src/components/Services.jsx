import React from 'react';
import { PackageCheck, Wrench, Boxes, Shield } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Welding Tools & Fixtures',
    desc: 'Sourcing, kitting, and custom fixtures for MIG/TIG, robotic cells, and heavy fabrication.'
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: 'Supply Chain Orchestration',
    desc: 'Vendor management, inventory planning, and on-time deliveries with clear SLAs.'
  },
  {
    icon: <PackageCheck className="h-5 w-5" />,
    title: 'Procurement-as-a-Service',
    desc: 'From RFQs to inspection—full lifecycle purchasing with transparent reporting.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Quality & Compliance',
    desc: 'Traceability, certifications, and audits aligned to ISO and industry best practices.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Practical, industrial-grade services to keep your line running and your team focused.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
