import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const { personal, education, achievements } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-slate-100 w-full overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column: Vertical Pill Badge + Circular Portrait */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0">
            
            {/* Vertical "ABOUT ME" Pill matching reference image */}
            <div className="hidden sm:flex items-center justify-center border-2 border-[#eab308] rounded-full py-6 px-2 text-[#ca8a04] shadow-xs">
              <span 
                className="text-xs font-bold uppercase tracking-[0.25em] select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                ABOUT ME
              </span>
            </div>

            {/* Mobile Header Badge */}
            <div className="sm:hidden flex items-center justify-center border-2 border-[#eab308] rounded-full px-4 py-1 text-[#ca8a04] text-xs font-bold tracking-widest uppercase mb-4">
              ABOUT ME
            </div>

            {/* Circular Photo Card with subtle background circle matching reference */}
            <div className="relative">
              {/* Soft circular background ring */}
              <div className="absolute inset-0 bg-[#f1f5f9] rounded-full scale-105 -z-10"></div>
              
              {/* Main Circular Profile Image */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-slate-100 shadow-xl border-4 border-white">
                <img
                  src="/assets/shubham_real.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/avatar.jpg';
                  }}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Quoted Editorial Content matching reference typography */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            {/* Main Headline Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-relaxed">
              &ldquo;Hi, I&apos;m <span className="text-slate-900 font-extrabold">{personal.name.split(' ')[0]}</span>, a Full-Stack Software Engineer offering scalable web application architecture, real-time WebSocket systems, and Generative AI pipelines. I engineer high-concurrency enterprise platforms that deliver high performance and measurable business impact.
            </p>

            {/* Secondary Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              I have been into full-stack engineering and distributed systems for over <strong className="text-slate-900 font-bold">2+ years</strong> across the <strong className="text-slate-900 font-bold">MERN stack (React 19, Node.js, Express, MongoDB)</strong>, <strong className="text-slate-900 font-bold">BullMQ &amp; Redis</strong> background task queues, and <strong className="text-slate-900 font-bold">Socket.io</strong> real-time systems. I constantly build with modern architectures to ensure sub-second response times and zero thread-blocking bottlenecks.
            </p>

            {/* Third Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Awarded the <strong className="text-slate-900 font-bold">Conqueror of the Month Award</strong> at <strong className="text-slate-900 font-bold">Mytek Innovations</strong> for outstanding project delivery and architecture execution, and graduated with a <strong className="text-slate-900 font-bold">B.Sc. in Information Technology</strong> from Mumbai University (D G Ruparel College) with a <strong className="text-slate-900 font-bold">CGPA of 7.50 / 10</strong>.&rdquo;
            </p>

            {/* Quick Summary Credentials Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                <Briefcase className="w-3.5 h-3.5 text-[#0088cc]" />
                <span>2+ Yrs Production Exp</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                <Trophy className="w-3.5 h-3.5 text-[#eab308]" />
                <span>Conqueror of the Month</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-[#0088cc]" />
                <span>B.Sc. IT (7.50 CGPA)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
