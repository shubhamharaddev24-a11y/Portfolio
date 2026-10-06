import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, GraduationCap, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-slate-100 w-full overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top "ABOUT ME" Pill Badge placed at the top above image & content */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center border-2 border-[#f59e0b] rounded-full px-6 py-2 text-[#d97706] text-xs font-bold tracking-[0.25em] uppercase shadow-xs bg-amber-50/40">
            ABOUT ME
          </div>
        </div>

        {/* Main Content Area: Floated Circle with Circular Text Wrapping */}
        <div className="max-w-4xl mx-auto">
          
          {/* Floated Circular Image with shape-outside for organic curve wrapping */}
          <div 
            className="mx-auto sm:mx-0 sm:float-left mb-6 sm:mb-2 sm:mr-8 md:mr-10 relative group"
            style={{
              shapeOutside: 'circle(50% at 50% 50%)',
              shapeMargin: '28px',
            }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[#f1f3f6] border-4 border-white shadow-xl relative transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/assets/shubham_real.jpg"
                alt={personal.name}
                className="w-full h-full object-cover object-[center_18%]"
                onError={(e) => {
                  e.target.src = '/assets/avatar.jpg';
                }}
              />
            </div>
          </div>

          {/* Editorial Paragraphs wrapping naturally around the circular contour */}
          <div className="text-slate-800 leading-relaxed sm:leading-loose text-center sm:text-left space-y-5 sm:space-y-6 pt-1 sm:pt-3">
            
            {/* Paragraph 1 - Headline style with opening quote */}
            <p className="text-base sm:text-lg md:text-[1.125rem] text-slate-800 font-medium">
              &ldquo;Hi, I&apos;m <span className="font-bold text-slate-900">{personal.name.split(' ')[0]}</span>, a multi-skilled <strong className="font-bold text-slate-900">Full-Stack Software Engineer</strong> offering <strong className="font-bold text-slate-900">Scalable Web Architecture</strong>, <strong className="font-bold text-slate-900">Microservices</strong>, and <strong className="font-bold text-slate-900">Generative AI Pipelines</strong>. I help fast-growing startups and enterprises stand out with robust backend systems, real-time engines, and high-performance user experiences.
            </p>

            {/* Paragraph 2 - Experience and modern tech stack */}
            <p className="text-sm sm:text-base md:text-[1.025rem] text-slate-700 font-normal">
              I have been into Full-Stack Development and Distributed Systems since <strong className="font-bold text-slate-900">2+ years</strong> across the <strong className="font-bold text-slate-900">MERN stack (React 19, Node.js, Express, MongoDB)</strong>, <strong className="font-bold text-slate-900">Redis &amp; BullMQ</strong> background task queues, and <strong className="font-bold text-slate-900">Socket.io</strong> real-time systems. I constantly build with modern cloud patterns to ensure sub-second response times and zero thread-blocking bottlenecks.
            </p>

            {/* Paragraph 3 - Impact, awards and degree with closing quote */}
            <p className="text-sm sm:text-base md:text-[1.025rem] text-slate-700 font-normal">
              I have worked on mission-critical B2B supply chain auction platforms, automated background verification engines, and omnichannel marketing hubs with secure multi-payment integrations. Recognized with the <strong className="font-bold text-slate-900">Conqueror of the Month Award</strong> at <strong className="font-bold text-slate-900">Mytek Innovations</strong> and graduated with a <strong className="font-bold text-slate-900">B.Sc. in Information Technology</strong> (CGPA 7.50 / 10).&rdquo;
            </p>

            {/* Bottom Quick Credential Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <Briefcase className="w-3.5 h-3.5 text-[#0088cc]" />
                <span>2+ Years Exp</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
                <Trophy className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Conqueror of the Month</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-[#0088cc]" />
                <span>B.Sc. IT (7.50 CGPA)</span>
              </div>
            </div>

          </div>

          {/* Clear fix to ensure layout integrity */}
          <div className="clear-both"></div>

        </div>

      </div>
    </section>
  );
};
