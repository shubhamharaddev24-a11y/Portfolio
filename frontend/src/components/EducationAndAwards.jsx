import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Trophy, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const EducationAndAwards = () => {
  const { education, achievements } = portfolioData;

  return (
    <section className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education &amp; Credentials
            </h3>

            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">{education.degree}</h4>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">{education.institution}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold shrink-0">
                  CGPA: {education.cgpa}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {education.period}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {education.location}
                </span>
              </div>

              <ul className="space-y-2">
                {education.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Awards & Recognition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>RECOGNITION &amp; AWARDS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Honors &amp; Milestones
            </h3>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-amber-500/20">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">{item.issuer}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
