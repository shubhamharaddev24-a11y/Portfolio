import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, MousePointer } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100 w-full">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column matching reference image exactly */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-12">
            
            {/* Top Purple Icon */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#6366f1] via-[#7c3aed] to-[#a855f7] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L18 8.5 12 12.2 6 8.5 12 4.8zm-6 5.9l5 3.1v6.4l-5-3.1v-6.4zm7 9.5v-6.4l5-3.1v6.4l-5 3.1z" />
              </svg>
            </div>

            {/* Pill with Cursor matching reference */}
            <div className="relative inline-block">
              <div className="bg-[#6d28d9] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-sm">
                Shubham Harad
              </div>
              <div className="absolute -top-3 -right-3 text-[#6d28d9]">
                <MousePointer className="w-4 h-4 fill-[#6d28d9]" />
              </div>
            </div>

            {/* Big Headline matching reference typography */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Full-Stack<br />
                Projects &amp;<br />
                Case Studies
              </h2>
            </div>

            {/* Blue link with diagonal downward arrow matching reference */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-[#0066ff] hover:underline"
              >
                <span>&#8600; View System Architectures &amp; Work</span>
              </a>
            </div>

          </div>

          {/* Right Column: 2-Column Vertical Editorial Sheet Cards matching reference */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            
            {/* Column 1 */}
            <div className="space-y-8">
              
              {/* CARD 1: Warm Sand/Yellow (#fbf0c9) */}
              <div className="bg-[#fbf0c9] p-6 sm:p-7 rounded shadow-xs space-y-4 text-slate-900 border border-black/5">
                {/* Top Image */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-white shadow-xs">
                  <img
                    src="/assets/auction_platform.jpg"
                    alt="B2B Auction Platform"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight pt-1">
                  B2B Reverse Auction (DP Platform)
                </h3>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  High-concurrency real-time reverse bidding marketplace enabling sub-second bid updates via Socket.io, dynamic supplier ranking, and PayU Escrow.
                </p>

                {/* Bullet Points */}
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Automated complete RFQ to GST Invoicing workflow (80% faster).</li>
                  <li>PayU Escrow milestone release on delivery confirmation.</li>
                  <li>Interactive Leaflet warehouse and route mapping.</li>
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['React 19', 'Node.js', 'Socket.io', 'PayU Escrow', 'MongoDB'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/10 text-slate-900 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <a
                    href="https://mytek.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#0066ff] transition-colors"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* CARD 4: Soft Mint/Green (#d4ecd9) */}
              <div className="bg-[#d4ecd9] p-6 sm:p-7 rounded shadow-xs space-y-4 text-slate-900 border border-black/5">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  E-Commerce &amp; High-Speed Checkout
                </h3>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Custom e-commerce web platform engineered for conversion with multi-step checkout and automated GST invoicing at Mediaworks.
                </p>

                {/* Bullet Points */}
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Decreased cart abandonment by 18% via streamlined checkout.</li>
                  <li>Frontend code splitting &amp; Redis caching (35% speedup).</li>
                  <li>JWT HTTP-only authentication with RBAC security.</li>
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['React.js', 'Node.js', 'Razorpay', 'Redis Caching', 'JWT'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/10 text-slate-900 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              
              {/* CARD 2: Soft Rose/Pink (#f9dbdb) */}
              <div className="bg-[#f9dbdb] p-6 sm:p-7 rounded shadow-xs space-y-4 text-slate-900 border border-black/5">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Open4All – Enterprise BGV Hub
                </h3>

                {/* Image */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-white shadow-xs">
                  <img
                    src="/assets/bgv_verification.jpg"
                    alt="Open4All BGV Platform"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Automated background verification engine connecting PAN, Aadhaar, and Govt Setu APIs with Azure AI Form Recognizer OCR.
                </p>

                {/* Bullet Points */}
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Asynchronous BullMQ + Puppeteer PDF report generator.</li>
                  <li>95%+ entity extraction accuracy with fraud detection.</li>
                  <li>Cashfree &amp; PhonePe automated webhook reconciliation.</li>
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Node.js', 'BullMQ', 'Puppeteer', 'Azure OCR', 'Redis'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/10 text-slate-900 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <a
                    href="https://open4all.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#0066ff] transition-colors"
                  >
                    <span>Visit Live Gateway</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* CARD 3: Soft Blue (#dce8f8) */}
              <div className="bg-[#dce8f8] p-6 sm:p-7 rounded shadow-xs space-y-4 text-slate-900 border border-black/5">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Mytek AI – Content Studio &amp; CRM
                </h3>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Multi-model Generative AI video/image generator orchestrating Google Gemini, Claude, and PixVerse APIs with real-time progress streaming.
                </p>

                {/* Bullet Points */}
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Real-time WebSocket streaming during video rendering.</li>
                  <li>Automated bulk WhatsApp campaign manager with BullMQ.</li>
                  <li>Fabric.js canvas editor &amp; FFmpeg transcoding on AWS S3.</li>
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Gemini AI', 'Claude', 'PixVerse', 'Socket.io', 'BullMQ'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/10 text-slate-900 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <a
                    href="https://mytek.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#0066ff] transition-colors"
                  >
                    <span>Visit AI Studio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
