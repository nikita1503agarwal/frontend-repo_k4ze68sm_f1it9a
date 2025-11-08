import React from 'react';
import { Award, Factory, BadgeCheck } from 'lucide-react';

const logos = [
  'Atlas Steel',
  'PrimeFab',
  'Nordic Weld',
  'LineWorks',
  'VectorForge',
  'OmniPlant',
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Clients / Partners */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-slate-600 uppercase mb-6">Trusted by production teams</p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex items-center gap-8 animate-[scroll_25s_linear_infinite] will-change-transform">
              {[...logos, ...logos].map((name, idx) => (
                <div key={idx} className="shrink-0 rounded-xl border border-slate-200 px-5 py-3 bg-white text-slate-700 text-sm font-medium">
                  {name}
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes scroll { 0% {transform: translateX(0);} 100% {transform: translateX(-50%);} }`}</style>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-3">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">ISO-aligned processes</h3>
            <p className="text-sm text-slate-600 mt-1">Document control, traceability, and change management mirroring ISO 9001 best practices.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-3">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">AWS/CWI friendly</h3>
            <p className="text-sm text-slate-600 mt-1">Welder quals, WPS/PQR alignment, and material certs captured with each delivery.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-3">
              <Factory className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-slate-900">Supplier network</h3>
            <p className="text-sm text-slate-600 mt-1">A vetted, multi-region partner base for redundancy, speed, and cost control.</p>
          </div>
        </div>

        {/* Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full mb-3">Case Study</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Cutover to robotic MIG with a 27% cycle time reduction</h3>
            <p className="mt-3 text-slate-600">We re-kitted tooling, aligned vendor lead-times, and implemented a kanban for weld wire and tips. The result: fewer shortages, smoother changeovers, and measurable throughput gains in the first quarter.</p>
            <ul className="mt-4 text-slate-700 space-y-2">
              <li>• 27% faster average cycle time</li>
              <li>• 0 rush shipments in 90 days</li>
              <li>• Full traceability on consumables and fixtures</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
              <div className="h-full w-full grid place-items-center">
                <div className="text-center p-6">
                  <div className="mx-auto h-14 w-14 rounded-xl bg-slate-900 text-white grid place-items-center mb-3">
                    <Factory className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-slate-600">Visualization of the assembly cell and material flow used during the program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
