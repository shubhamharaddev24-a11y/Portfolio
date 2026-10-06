import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: '⚡ Shubham Harad CLI [Version 2.4.0-prod]\nType "help" to see available commands or "hire" to initiate inquiry.',
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: input }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • help        - Show this help manual
  • skills      - List core tech stack & competencies
  • projects    - Summary of production projects & metrics
  • experience  - Career background at Mytek & Mediaworks
  • architecture- Architectural principles & queues
  • education   - Degree & College details
  • contact     - Contact coordinates (email, phone, LinkedIn)
  • hire        - Why hire Shubham & direct pipeline
  • clear       - Clear terminal window`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[CORE STACK]
  Frontend: React 19, Vite, Redux Toolkit, Tailwind, Radix UI, Fabric.js Canvas
  Backend:  Node.js, Express.js, Microservices, Core PHP, Laravel, JWT, RBAC
  DB/Cache: MongoDB Aggregations, MySQL, Redis Pub/Sub & Rate Limiting
  Queues:   BullMQ, Agenda, Socket.io Real-Time
  Cloud/AI: AWS S3, Azure OCR, Gemini, Claude, PixVerse, PayU, Razorpay`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[KEY DELIVERIES]
  1. DP Platform (B2B Auction): Real-time reverse bidding via Socket.io, PayU Escrow, RFQ-to-GST invoicing (80% faster).
  2. Open4All (BGV Engine): Azure OCR + Govt Setu API validation, BullMQ + Puppeteer tamper-proof PDF generation.
  3. Mytek AI (Creative Studio): Multi-model GenAI (Gemini/Claude/PixVerse), FFmpeg transcoding, WhatsApp CRM.
  4. Mediaworks E-Commerce: Razorpay, Redis server cache, 18% cart drop reduction.`,
        });
        break;

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          text: `[PROFESSIONAL HISTORY]
  • Nov 2024 – Present: Full-Stack Developer @ MYTEK INNOVATIONS PVT. LTD.
    - Auction platform, BGV API Gateway, GenAI content studio
    - Winner: "Conqueror of the Month Award"
  • Feb 2023 – Nov 2024: Full-Stack Developer @ MEDIAWORKS
    - E-commerce checkout, Razorpay, Redis cache, JWT RBAC`,
        });
        break;

      case 'architecture':
      case 'arch':
        newHistory.push({
          type: 'output',
          text: `[ENGINEERING PHILOSOPHY]
  • Zero race conditions: Redis atomic locks + Lua scripting.
  • Non-blocking APIs: Heavy tasks offloaded to BullMQ worker pools.
  • Resilient security: Rate-limiting token buckets + RBAC + Escrow.
  • Observability: Real-time telemetry, structured JSON logs.`,
        });
        break;

      case 'education':
      case 'edu':
        newHistory.push({
          type: 'output',
          text: `[ACADEMIC BACKGROUND]
  • B.Sc. in Information Technology (B.Sc. IT)
  • Mumbai University | D G Ruparel College (2022 - 2024)
  • CGPA: 7.50 / 10`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `[REACH OUT DIRECTLY]
  • Email:    shubhamharad25@gmail.com
  • Phone:    +91-8830331309
  • LinkedIn: linkedin.com/in/shubham-harad-a25797250
  • Location: Mumbai, India`,
        });
        break;

      case 'hire':
        newHistory.push({
          type: 'output',
          text: `🎯 WHY SHUBHAM HARAD?
  ✓ 2+ years battle-tested in mission-critical B2B & Fintech platforms.
  ✓ Strong system design: BullMQ, Redis, WebSockets, MERN, GenAI.
  ✓ Track record of quantifiable business impact (80% time saved, 40% latency cut).
  👉 Ready to interview immediately. Scroll to Contact form or email shubhamharad25@gmail.com!`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section className="py-16 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header Bar */}
        <div className="rounded-t-2xl bg-slate-900 border-x border-t border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs font-mono text-slate-400 ml-2">shubham@prod-terminal: ~ (bash)</span>
          </div>
          <button
            onClick={() => setHistory([])}
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>

        {/* Terminal Window Body */}
        <div className="rounded-b-2xl bg-slate-950/95 border-x border-b border-slate-800 p-5 font-mono text-xs shadow-2xl h-80 overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="mb-2">
              {item.type === 'input' ? (
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">shubham@server:~$</span>
                  <span>{item.text}</span>
                </div>
              ) : (
                <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Interactive Input Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-900">
            <span className="text-emerald-400">shubham@server:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'skills', 'projects', 'hire'..."
              className="flex-1 bg-transparent border-none text-cyan-300 focus:outline-none font-mono text-xs placeholder:text-slate-600"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>

      </div>
    </section>
  );
};
