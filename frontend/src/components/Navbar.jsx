import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderGit2, Phone, FileDown, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'py-3 shadow-sm border-b border-slate-100' : 'py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Left Logo */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-full border-[3.5px] border-[#0088cc] flex items-center justify-center bg-white shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:border-[#0077b6] transition-all duration-300">
            <span className="text-2xl font-black text-[#0088cc] font-sans leading-none group-hover:text-[#0077b6]">
              S
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight block">
                Shubham Harad
              </span>
              <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:block">Full-Stack Software Engineer</span>
          </div>
        </a>

        {/* Center/Right Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          <a
            href="#home"
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 ${
              activeSection === 'home' ? 'text-[#c26d38]' : 'text-slate-700 hover:text-[#0088cc]'
            }`}
          >
            <Home className="w-4 h-4 text-[#c26d38]" />
            <span>Home</span>
          </a>

          <a
            href="#about"
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 ${
              activeSection === 'about' ? 'text-[#0088cc]' : 'text-slate-700 hover:text-[#0088cc]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>About Me</span>
          </a>

          <a
            href="#experience"
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 ${
              activeSection === 'experience' ? 'text-[#0088cc]' : 'text-slate-700 hover:text-[#0088cc]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </a>

          <a
            href="#projects"
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 ${
              activeSection === 'projects' ? 'text-[#0088cc]' : 'text-slate-700 hover:text-[#0088cc]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </a>

          <a
            href="#contact"
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 ${
              activeSection === 'contact' ? 'text-[#0088cc]' : 'text-slate-700 hover:text-[#0088cc]'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0088cc] border-2 border-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#0088cc] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold text-[#c26d38] py-1"
          >
            <Home className="w-4 h-4 text-[#c26d38]" />
            <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold text-slate-800 py-1"
          >
            <User className="w-4 h-4" />
            <span>About Me</span>
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold text-slate-800 py-1"
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold text-slate-800 py-1"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold text-slate-800 py-1"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0088cc]"
          >
            <FileDown className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
