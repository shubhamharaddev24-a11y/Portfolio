import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, GraduationCap, Award, Zap, Code, ShieldCheck } from 'lucide-react';

export const AboutSection = () => {
  const { personal, education, achievements } = portfolioData;

  return (
    <section id="about" className="py-24 bg-slate-50/80 border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0088cc] font-mono">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
            Professional Background &amp; Core Strengths
          </h2>
          <div className="w-20 h-1 bg-[#0088cc] mx-auto mt-3.5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Box */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              Full-Stack Software Engineer architecting mission-critical platforms in Mumbai, India
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {personal.summary}
            </p>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100/80 hover:bg-sky-50 transition-colors">
                <span className="text-slate-500 block text-xs font-medium">Experience</span>
                <span className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5 block">2+ Years</span>
              </div>
              <div className="p-4 bg-orange-50/70 rounded-2xl border border-orange-100/80 hover:bg-orange-50 transition-colors">
                <span className="text-slate-500 block text-xs font-medium">Current Role</span>
                <span className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5 block">Full-Stack @ Mytek</span>
              </div>
              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100/80 hover:bg-emerald-50 transition-colors">
                <span className="text-slate-500 block text-xs font-medium">Education</span>
                <span className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5 block">B.Sc. IT (7.5 CGPA)</span>
              </div>
            </div>
          </div>

          {/* Awards & Education Highlights */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Award Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#c26d38]/50 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#c26d38] flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#c26d38] uppercase tracking-wider font-mono">Recognition</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">Conqueror of the Month Award</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Awarded by Mytek Innovations for outstanding project delivery, system architecture, and technical execution.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:border-[#0088cc]/50 hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#0088cc] flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0088cc] uppercase tracking-wider font-mono">Academic Degree</span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">B.Sc. in Information Technology</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Mumbai University (D G Ruparel College) &bull; 2022–2024 &bull; <strong className="text-slate-800">CGPA: 7.50 / 10</strong>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
