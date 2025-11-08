import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks — we'll get back to you within one business day.");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build what's next</h2>
            <p className="mt-3 text-slate-300 max-w-prose">Share a bit about your project, and our team will prepare tailored options across tools, vendors, and delivery timelines.</p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li>• Typical response time: under 24 hours</li>
              <li>• Serving North America and global partners</li>
              <li>• NDA-ready for sensitive programs</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl border border-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-200">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400" placeholder="Acme Fabrication" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-200">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-200">Project details</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400" placeholder="What are you building? Timelines? Constraints?" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_8px_40px_rgba(168,85,247,0.35)] hover:brightness-110 transition">Request Quote</button>
            {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
