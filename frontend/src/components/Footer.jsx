import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs sm:text-sm w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full border-2 border-[#0088cc] flex items-center justify-center">
            <span className="font-black text-[#0088cc] text-base">S</span>
          </div>
          <div>
            <span className="font-extrabold text-slate-900 block text-base">{personal.name}</span>
            <span className="text-xs text-slate-500 font-medium">Full-Stack Software Engineer &bull; Mumbai, India</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-700 font-medium text-xs sm:text-sm">
          <a href="#home" className="hover:text-[#0088cc] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#0088cc] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#0088cc] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#0088cc] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#0088cc] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[#0088cc] transition-colors">Contact</a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-slate-500 hover:text-[#0088cc] transition-colors font-medium cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
