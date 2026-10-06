import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0088cc] font-mono">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-[#0088cc] mx-auto mt-3.5 rounded-full"></div>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            2+ years of full-stack engineering across enterprise B2B platforms, payment gateways, and AI workflows.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:border-[#0088cc]/40 hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0088cc] flex items-center justify-center shrink-0 border border-sky-100 shadow-xs">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}{' '}
                      <span className="text-[#0088cc] font-semibold">&bull; {exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/80 self-start sm:self-auto shadow-xs">
                  <Calendar className="w-4 h-4 text-[#0088cc]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Projects Breakdown */}
              <div className="mt-8 space-y-8">
                {exp.projectsInRole.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-3.5 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                        {proj.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200/80 shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2.5 pl-2">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#0088cc] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
