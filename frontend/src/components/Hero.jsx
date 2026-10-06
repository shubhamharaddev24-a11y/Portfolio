import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero = () => {
  const { personal } = portfolioData;

  const handleHireClick = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0088cc', '#c26d38', '#38bdf8', '#34d399'],
    });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden w-full">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sub-heading in cyan matching reference */}
            <p className="text-xl sm:text-2xl font-medium text-[#38bdf8] tracking-wide">
              Welcome to my portfolio
            </p>

            {/* Headline matching reference colors */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0088cc] tracking-tight leading-[1.12]">
              Hi, I&apos;m <span className="text-[#0088cc]">{personal.name.split(' ')[0]}</span>, a<br />
              <span className="text-[#0088cc]">Full-Stack</span>{' '}
              <span className="text-[#c26d38]">Developer.</span>
            </h1>

            {/* Clean summary paragraph */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl font-normal">
              I am a focused and talented Full-Stack Software Engineer with <strong className="font-semibold text-slate-900">2+ years of professional experience</strong> designing and deploying scalable web applications, microservices, and AI platforms across <strong className="font-semibold text-slate-900">React.js, Node.js, Express, MongoDB</strong>, distributed background queues (<strong className="font-semibold text-slate-900">BullMQ, Redis</strong>), and <strong className="font-semibold text-slate-900">Socket.io</strong> real-time systems at <strong className="font-semibold text-slate-900">Mytek Innovations</strong>. B.Sc. IT graduate from <strong className="font-semibold text-slate-900">Mumbai University (CGPA 7.50)</strong>.
            </p>

            {/* Action Buttons matching reference style */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleHireClick}
                className="px-8 py-3 rounded-lg text-sm font-bold text-white btn-solid-teal inline-flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform"
              >
                Hire me !
              </a>

              <a
                href="#projects"
                className="px-8 py-3 rounded-lg text-sm font-bold btn-outline-teal inline-flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                See My Project
              </a>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm font-medium text-slate-500">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-[#0088cc] transition-colors">
                <Mail className="w-4 h-4 text-[#0088cc]" />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-[#0088cc] transition-colors">
                <Phone className="w-4 h-4 text-[#0088cc]" />
                <span>{personal.phone}</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Mumbai, India</span>
              </span>
            </div>

          </div>

          {/* Right Column: Mobile-Responsive Double Layer Curved Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="relative w-[300px] xs:w-[340px] sm:w-[390px] md:w-[440px] aspect-[438/465]">
              
              {/* Back Layer 1: Vibrant Cyan Shape (Responsive offset) */}
              <div 
                className="absolute top-5 sm:top-8 -left-4 sm:-left-6 w-[98%] h-[92%] bg-[#56c2e6] z-0"
                style={{
                  borderTopLeftRadius: '20px',
                  borderBottomLeftRadius: '160px',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '0px',
                }}
              ></div>

              {/* Front Layer 2: Photo Card Layer sitting on top (z-10) */}
              <div 
                className="relative z-10 w-full h-full overflow-hidden shadow-2xl bg-white group"
                style={{
                  borderTopLeftRadius: '18px',
                  borderBottomLeftRadius: '145px',
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px',
                }}
              >
                <img
                  src="/assets/avatar.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
