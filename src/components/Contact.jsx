import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — we\'ll get back to you within one business day.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let\'s build what\'s next</h2>
            <p className="mt-3 text-slate-600 max-w-prose">Share a bit about your project, and our team will prepare tailored options across tools, vendors, and delivery timelines.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Typical response time: under 24 hours</li>
              <li>• Serving North America and global partners</li>
              <li>• NDA-ready for sensitive programs</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Project details</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition">Request Quote</button>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
