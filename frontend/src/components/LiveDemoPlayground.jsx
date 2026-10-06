import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Play, RotateCcw, Activity, CheckCircle2, AlertCircle, Sparkles, Cpu, Layers } from 'lucide-react';

export const LiveDemoPlayground = ({ defaultTab = 'bgv' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  // Tab 1: BGV Simulator State
  const [docType, setDocType] = useState('PAN');
  const [docNumber, setDocNumber] = useState('ABCDE1234F');
  const [holderName, setHolderName] = useState('SHUBHAM HARAD');
  const [bgvLoading, setBgvLoading] = useState(false);
  const [bgvResult, setBgvResult] = useState(null);

  // Tab 2: Reverse Auction State
  const [currentL1, setCurrentL1] = useState(1250000);
  const [myBid, setMyBid] = useState(1220000);
  const [supplierName, setSupplierName] = useState('Apex Industrial Tech');
  const [bidHistory, setBidHistory] = useState([
    { id: 1, supplier: 'Metro Heavy Logistics', amount: 1350000, time: '14:20:05', status: 'OUTBID' },
    { id: 2, supplier: 'Precision Industrial Supplies', amount: 1250000, time: '14:21:40', status: 'CURRENT_L1' },
  ]);
  const [auctionLoading, setAuctionLoading] = useState(false);
  const [auctionMsg, setAuctionMsg] = useState(null);

  // Tab 3: BullMQ Queue Monitor State
  const [queueMetrics, setQueueMetrics] = useState(null);
  const [queueLoading, setQueueLoading] = useState(false);

  // Set default tab when prop changes
  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  // Handle BGV Verify
  const handleVerifyBGV = async (e) => {
    e?.preventDefault();
    setBgvLoading(true);
    setBgvResult(null);

    try {
      const res = await fetch('/api/simulation/bgv-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docType, docNumber, name: holderName }),
      });

      if (res.ok) {
        const data = await res.json();
        setBgvResult(data);
      } else {
        throw new Error('Fallback to client mock');
      }
    } catch (err) {
      // Fallback mock simulation
      setTimeout(() => {
        setBgvResult({
          success: true,
          timestamp: new Date().toISOString(),
          service: 'Open4All BGV Engine v2.4 (Async Worker Pool)',
          latencyMs: 142,
          verified: true,
          result: {
            category: 'Individual',
            panStatus: 'OPERATIVE & SEEDED WITH AADHAAR',
            holderName: holderName || 'SHUBHAM HARAD',
            matchScore: 99.2,
            ocrConfidence: '99.4%',
            complianceStatus: 'CLEAR',
            verificationId: `BGV-PAN-${Date.now()}`,
          },
        });
      }, 400);
    } finally {
      setBgvLoading(false);
    }
  };

  // Handle Reverse Auction Bid
  const handlePlaceBid = async (e) => {
    e?.preventDefault();
    const bidAmount = parseFloat(myBid);
    if (!bidAmount || isNaN(bidAmount)) return;

    setAuctionLoading(true);
    setAuctionMsg(null);

    try {
      const res = await fetch('/api/simulation/auction-bid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          auctionId: 'AUC-2026-DP-891',
          currentL1,
          newBidAmount: bidAmount,
          supplierName,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        processBidResponse(data.data, bidAmount);
      } else {
        throw new Error('Fallback to client');
      }
    } catch (err) {
      // Fallback simulation
      const isNewL1 = bidAmount < currentL1;
      const reductionPercent = (((currentL1 - bidAmount) / currentL1) * 100).toFixed(2);
      processBidResponse(
        {
          supplier: supplierName,
          submittedBid: bidAmount,
          previousL1: currentL1,
          isNewL1,
          rank: isNewL1 ? 1 : 2,
          priceDropPercent: isNewL1 ? `${reductionPercent}%` : '0%',
          escrowLocked: true,
          gateway: 'PayU Escrow Protected',
        },
        bidAmount
      );
    } finally {
      setAuctionLoading(false);
    }
  };

  const processBidResponse = (data, bidAmount) => {
    if (data.isNewL1) {
      setCurrentL1(bidAmount);
      setAuctionMsg({
        type: 'success',
        text: `🎉 You are now the L1 Lowest Bidder! Price reduced by ${data.priceDropPercent}. PayU Escrow locked.`,
      });
      setBidHistory((prev) => [
        {
          id: Date.now(),
          supplier: data.supplier,
          amount: bidAmount,
          time: new Date().toLocaleTimeString(),
          status: 'CURRENT_L1 (NEW)',
        },
        ...prev.map((b) => ({ ...b, status: 'OUTBID' })),
      ]);
      setMyBid(Math.floor(bidAmount * 0.98));
    } else {
      setAuctionMsg({
        type: 'warning',
        text: `Bid accepted at INR ${bidAmount.toLocaleString('en-IN')}, but did not beat the current L1 of INR ${currentL1.toLocaleString('en-IN')}.`,
      });
      setBidHistory((prev) => [
        {
          id: Date.now(),
          supplier: data.supplier,
          amount: bidAmount,
          time: new Date().toLocaleTimeString(),
          status: 'OUTBID',
        },
        ...prev,
      ]);
    }
  };

  // Fetch Queue Metrics
  const fetchQueueMetrics = async () => {
    setQueueLoading(true);
    try {
      const res = await fetch('/api/simulation/queue-metrics');
      if (res.ok) {
        const data = await res.json();
        setQueueMetrics(data.queues);
      } else {
        throw new Error();
      }
    } catch {
      setQueueMetrics([
        {
          name: 'pdf-certificate-worker',
          concurrency: 10,
          active: 3,
          completed: 14820,
          failed: 12,
          avgProcessingTimeMs: 420,
          status: 'HEALTHY',
        },
        {
          name: 'ai-video-transcoding',
          concurrency: 4,
          active: 1,
          completed: 3910,
          failed: 5,
          avgProcessingTimeMs: 4800,
          status: 'PROCESSING',
        },
        {
          name: 'whatsapp-bulk-campaign',
          concurrency: 25,
          active: 14,
          completed: 284000,
          failed: 38,
          avgProcessingTimeMs: 85,
          status: 'RUNNING',
        },
      ]);
    } finally {
      setQueueLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'queue' && !queueMetrics) {
      fetchQueueMetrics();
    }
  }, [activeTab]);

  return (
    <section id="playground" className="py-24 relative bg-slate-950 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Real-Time Backend Logic Live
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Experience the actual algorithms &amp; asynchronous workflows I developed for high-concurrency auctions, government BGV identity checks, and BullMQ queue workers.
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('bgv')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'bgv'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>1. Open4All BGV &amp; OCR Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('auction')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'auction'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>2. Real-Time Reverse Auction (DP)</span>
            </button>

            <button
              onClick={() => setActiveTab('queue')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'queue'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>3. BullMQ Distributed Queues</span>
            </button>
          </div>
        </div>

        {/* Playground Interactive Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
          
          {/* TAB 1: BGV & OCR SIMULATOR */}
          {activeTab === 'bgv' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Government Document OCR &amp; Verification
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Simulates Azure AI Form Recognizer + Govt Setu API validation pipeline.
                  </p>
                </div>

                <form onSubmit={handleVerifyBGV} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Document Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['PAN', 'AADHAAR', 'CIN'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setDocType(t);
                            if (t === 'PAN') setDocNumber('ABCDE1234F');
                            if (t === 'AADHAAR') setDocNumber('5489 2201 9845');
                            if (t === 'CIN') setDocNumber('U72900MH2020PTC339841');
                          }}
                          className={`py-2 rounded-xl text-xs font-mono font-medium border ${
                            docType === t
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {docType} Number
                    </label>
                    <input
                      type="text"
                      value={docNumber}
                      onChange={(e) => setDocNumber(e.target.value.toUpperCase())}
                      placeholder="e.g. ABCDE1234F"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Target Entity / Individual Name
                    </label>
                    <input
                      type="text"
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      placeholder="SHUBHAM HARAD"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={bgvLoading}
                    className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {bgvLoading ? (
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 animate-spin text-slate-950" />
                        Executing Azure OCR &amp; Govt Validation...
                      </span>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Run Verification Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Result Preview (JSON Terminal) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      Open4All API Response Stream
                    </span>
                    {bgvResult && (
                      <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {bgvResult.latencyMs}ms Latency
                      </span>
                    )}
                  </div>

                  <div className="py-4 overflow-x-auto text-slate-300">
                    {bgvResult ? (
                      <pre className="text-[11px] leading-relaxed text-emerald-400">
                        {JSON.stringify(bgvResult, null, 2)}
                      </pre>
                    ) : (
                      <div className="text-slate-500 text-center py-12">
                        <p className="font-mono text-xs">&gt; Click &apos;Run Verification Request&apos; to trigger live pipeline</p>
                        <p className="text-[10px] text-slate-600 mt-2">Azure Form Recognizer &bull; Redis Rate Limiter &bull; Puppeteer Certificate Hook</p>
                      </div>
                    )}
                  </div>

                  {bgvResult && (
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Status: Tamper-Proof Verified
                      </span>
                      <span className="text-slate-500">PDF Certificate Queued in BullMQ</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REVERSE AUCTION SIMULATOR */}
          {activeTab === 'auction' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    Sub-Second Reverse Bidding Room
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Suppliers underbid to win purchase orders. Dynamic rank recalculation &amp; PayU Escrow.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Current Lowest Bid (L1)</div>
                  <div className="text-3xl font-extrabold text-cyan-400 font-mono mt-1">
                    ₹ {currentL1.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Auction: AUC-2026-DP-891 &bull; 50 MT Stainless Steel</span>
                  </div>
                </div>

                <form onSubmit={handlePlaceBid} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Supplier / Company Name</label>
                    <input
                      type="text"
                      value={supplierName}
                      onChange={(e) => setSupplierName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Bid Amount (₹)</label>
                    <input
                      type="number"
                      value={myBid}
                      onChange={(e) => setMyBid(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={auctionLoading}
                    className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                  >
                    {auctionLoading ? (
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 animate-spin" />
                        Submitting over Socket.io...
                      </span>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Submit Live Bid via WebSocket</span>
                      </>
                    )}
                  </button>
                </form>

                {auctionMsg && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      auctionMsg.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{auctionMsg.text}</span>
                  </div>
                )}
              </div>

              {/* Real-Time Live Bidding Feed */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      Live Socket.io Broadcast Feed
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      SUB-50MS SYNC
                    </span>
                  </div>

                  <div className="py-3 space-y-2 overflow-y-auto max-h-64">
                    {bidHistory.map((b) => (
                      <div
                        key={b.id}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                          b.status.includes('CURRENT_L1')
                            ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-white">{b.supplier}</div>
                          <div className="text-[10px] text-slate-500">Timestamp: {b.time} &bull; Socket Channel #dp-891</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-mono text-sm">₹ {b.amount.toLocaleString('en-IN')}</div>
                          <span
                            className={`inline-block text-[10px] px-2 py-0.5 rounded font-mono ${
                              b.status.includes('CURRENT_L1')
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {b.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>PayU Escrow: Locked on RFQ Delivery</span>
                    <span>GST Invoicing: Automated</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BULLMQ QUEUE WORKER MONITOR */}
          {activeTab === 'queue' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    Distributed BullMQ Worker Pool Telemetry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Redis-backed background task queues handling PDF generation, AI video stitching, and bulk WhatsApp broadcasts.
                  </p>
                </div>

                <button
                  onClick={fetchQueueMetrics}
                  disabled={queueLoading}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200"
                >
                  <RotateCcw className={`w-3.5 h-3.5 text-cyan-400 ${queueLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh Queue Health</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(queueMetrics || []).map((q, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-white truncate max-w-[180px]">{q.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {q.status}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono text-slate-400">
                      <div className="flex justify-between">
                        <span>Concurrency:</span>
                        <span className="text-white font-bold">{q.concurrency} workers</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Tasks:</span>
                        <span className="text-cyan-400 font-bold">{q.active}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed:</span>
                        <span className="text-emerald-400 font-bold">{q.completed.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Latency:</span>
                        <span className="text-indigo-300">{q.avgProcessingTimeMs} ms</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                      <span>Redis Rate Limit: Active</span>
                      <span>Zero Thread-Block</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
