import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, ArrowRight, ShieldCheck, Zap, Server, Activity, Database, CheckCircle, Network } from 'lucide-react';

export const SystemArchitecture = () => {
  const { architectures } = portfolioData;
  const [activeArch, setActiveArch] = useState(architectures[0].id);

  const selectedBlueprint = architectures.find(a => a.id === activeArch) || architectures[0];

  return (
    <section id="architecture" className="py-24 relative bg-slate-950/80 border-t border-slate-900 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM DESIGN &amp; DEEP-DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Architecture Blueprints
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Explore step-by-step how I architect high-concurrency real-time WebSocket pipelines, distributed BullMQ task queues, and Generative AI workflows.
          </p>

          {/* Blueprint Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {architectures.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setActiveArch(arch.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeArch === arch.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/40'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Network className="w-4 h-4 text-cyan-300" />
                <span>{arch.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/60 border border-white/10 text-cyan-200">
                  {arch.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Flow Visualization */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800 flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-wider">Active Blueprint</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">{selectedBlueprint.name}</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Production Proven &bull; Zero Race Conditions</span>
            </div>
          </div>

          {/* Step Nodes Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {selectedBlueprint.nodes.map((node, index) => (
              <div key={node.id} className="relative flex flex-col justify-between">
                
                {/* Node Card */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all flex flex-col justify-between h-full group">
                  <div>
                    {/* Node Step Number & Type */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center border border-cyan-500/30">
                        {index + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {node.type}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Step 0{index + 1}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>

                {/* Arrow connecting to next node (on desktop) */}
                {index < selectedBlueprint.nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-cyan-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture Insights Callout */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-950/80 to-indigo-950/40 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fault Tolerance &amp; Scaling Guarantee</h4>
                <p className="text-xs text-slate-400">Redis lock TTLs ensure zero stale data, while BullMQ workers guarantee at-least-once job execution.</p>
              </div>
            </div>
            <a
              href="#playground"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shrink-0"
            >
              <span>Test This in Live Playground</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
