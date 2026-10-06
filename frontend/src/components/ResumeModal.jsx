import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, achievements, experiences } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
            <span className="text-xs font-mono font-bold text-slate-800">
              Shubham_Harad_CV.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0088cc] hover:bg-[#0070a8] text-xs font-bold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 font-sans space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl font-extrabold text-slate-900">{personal.name}</h1>
            <p className="text-sm font-semibold text-[#0088cc] mt-0.5">{personal.role} ({personal.subRole})</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#0088cc]" /> {personal.location}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#0088cc]" /> {personal.phone}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#0088cc]" /> {personal.email}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-[#0088cc] uppercase tracking-wider mb-1.5">Professional Summary</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-[#0088cc] uppercase tracking-wider mb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">Frontend:</strong>
                <span className="text-slate-600">React.js (React 19), Vite, Redux Toolkit, Tailwind CSS, MUI, Radix UI, Fabric.js (Canvas), HTML5/CSS3</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">Backend &amp; Queues:</strong>
                <span className="text-slate-600">Node.js, Express.js, Microservices, Core PHP, Laravel, JWT, RBAC, BullMQ, Redis (Caching, Rate Limiting, Pub/Sub), Socket.io</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">Databases &amp; Cloud:</strong>
                <span className="text-slate-600">MongoDB (Mongoose, Aggregations), MySQL, AWS (S3, CloudFront, EC2), Puppeteer, Playwright, FFmpeg, PDF-Lib, Docker, Git</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">AI &amp; Integrations:</strong>
                <span className="text-slate-600">OpenAI, Google Gemini, Anthropic Claude, Groq, PixVerse AI, Azure AI Form Recognizer (OCR), PayU, Razorpay, WhatsApp API</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-[#0088cc] uppercase tracking-wider mb-3">Professional Experience</h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 border-b border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{exp.role} &bull; <span className="text-[#0088cc]">{exp.company}</span></h3>
                      <p className="text-xs text-slate-500">{exp.location}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{exp.period}</span>
                  </div>

                  {exp.projectsInRole.map((proj, pIdx) => (
                    <div key={pIdx} className="pl-3 border-l-2 border-sky-200 space-y-1">
                      <h4 className="text-xs font-bold text-slate-800">{proj.name}</h4>
                      <ul className="space-y-0.5">
                        {proj.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                            <span className="text-[#0088cc] mt-0.5">&bull;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <h2 className="text-xs font-bold text-[#0088cc] uppercase tracking-wider mb-1.5">Education</h2>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="font-bold text-slate-900">{education.degree}</div>
                <div className="text-slate-600">{education.institution}</div>
                <div className="text-slate-500 mt-0.5">{education.period} &bull; <strong>CGPA: {education.cgpa}</strong></div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold text-[#0088cc] uppercase tracking-wider mb-1.5">Awards</h2>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="font-bold text-[#c26d38] flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Conqueror of the Month Award</span>
                </div>
                <div className="text-slate-600 mt-0.5">Awarded by Mytek Innovations for outstanding project delivery &amp; architecture.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
