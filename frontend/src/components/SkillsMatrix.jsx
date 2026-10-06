import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Activity, Sparkles, Cloud, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code,
      color: 'text-[#0088cc]',
      bg: 'bg-sky-50',
      skills: [
        'React.js (React 19)',
        'Vite',
        'Redux Toolkit',
        'Tailwind CSS',
        'Material UI (MUI)',
        'Radix UI',
        'Fabric.js (Canvas)',
        'HTML5 & CSS3',
      ],
    },
    {
      title: 'Backend & Microservices',
      icon: Server,
      color: 'text-[#0077b6]',
      bg: 'bg-blue-50',
      skills: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'Microservices Architecture',
        'Core PHP & Laravel',
        'JWT Authentication',
        'Role-Based Access Control (RBAC)',
      ],
    },
    {
      title: 'Databases & Caching',
      icon: Database,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      skills: [
        'MongoDB (Mongoose)',
        'Aggregation Pipelines',
        'MySQL',
        'Redis (Caching & Rate Limiting)',
        'Redis Pub/Sub',
      ],
    },
    {
      title: 'Queues & Real-Time Communication',
      icon: Activity,
      color: 'text-[#c26d38]',
      bg: 'bg-orange-50',
      skills: [
        'BullMQ Distributed Queues',
        'Socket.io (Real-Time Bid Sync)',
        'Agenda',
        'Node-cron Scheduled Tasks',
      ],
    },
    {
      title: 'AI Models & Integrations',
      icon: Sparkles,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      skills: [
        'Google Gemini & OpenAI APIs',
        'Anthropic Claude & Groq',
        'PixVerse AI Video Generation',
        'Azure AI Form Recognizer (OCR)',
        'WhatsApp Business API',
        'Payment Gateways (PayU, Razorpay, Cashfree, PhonePe)',
      ],
    },
    {
      title: 'Cloud, Media & Tools',
      icon: Cloud,
      color: 'text-slate-700',
      bg: 'bg-slate-100',
      skills: [
        'AWS (S3, CloudFront, EC2)',
        'Puppeteer & Playwright',
        'FFmpeg Transcoding',
        'PDF-Lib Certificate Engine',
        'Docker & Git',
        'Postman API Testing',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0088cc] font-mono">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-[#0088cc] mx-auto mt-3.5 rounded-full"></div>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Battle-tested technologies utilized across production systems, microservices, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm hover:border-[#0088cc]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                  <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center shrink-0 shadow-2xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-sky-50 hover:text-[#0088cc] hover:border-sky-200 hover:scale-105 transition-all cursor-default shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
