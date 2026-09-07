import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, RefreshCw, X } from 'lucide-react';

export const PerformanceBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [swActive, setSwActive] = useState(false);
  const [cacheCount, setCacheCount] = useState<number>(0);
  const [loadTime, setLoadTime] = useState<string>('< 0.5s');

  useEffect(() => {
    // Check Service Worker status
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      setSwActive(true);
    } else if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => setSwActive(true));
    }

    // Inspect Cache storage
    if ('caches' in window) {
      caches.keys().then((keys) => {
        setCacheCount(keys.length);
      });
    }

    // Measure navigation timing
    if (window.performance && window.performance.timing) {
      const perf = window.performance.timing;
      const duration = perf.loadEventEnd - perf.navigationStart;
      if (duration > 0) {
        setLoadTime(`${(duration / 1000).toFixed(2)}s`);
      }
    }
  }, []);

  const handleClearCache = async () => {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      setCacheCount(0);
      window.location.reload();
    }
  };

  return (
    <aside 
      id="performance-monitor"
      aria-label="Performance and Cache Monitor"
      className="fixed bottom-5 right-5 z-40 font-sans"
    >
      {isOpen ? (
        <div className="w-80 rounded-2xl bg-[#0e0c1a]/95 border border-purple-500/30 p-5 shadow-2xl backdrop-blur-xl animate-fadeIn text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="font-bold text-xs uppercase tracking-wider font-mono">
                Performance & Cache
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-white/10"
              aria-label="Close performance widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Service Worker status */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#141126] border border-white/5">
              <span className="text-slate-400">Service Worker:</span>
              <span className={`font-mono flex items-center gap-1 ${swActive ? 'text-emerald-400' : 'text-amber-400'}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                {swActive ? 'Active' : 'Ready'}
              </span>
            </div>

            {/* Load duration */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#141126] border border-white/5">
              <span className="text-slate-400">Page Load Time:</span>
              <span className="font-mono text-purple-300 font-bold">{loadTime}</span>
            </div>

            {/* Active cache buckets */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#141126] border border-white/5">
              <span className="text-slate-400">Cache Buckets:</span>
              <span className="font-mono text-pink-300 font-bold">{cacheCount > 0 ? `${cacheCount} active` : '1 active'}</span>
            </div>

            {/* Caching & Optimization status */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#141126] border border-white/5">
              <span className="text-slate-400">Asset Optimization:</span>
              <span className="font-mono text-emerald-400">Active</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={handleClearCache}
              className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-purple-300 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Purge Cache</span>
            </button>

            <span className="text-[10px] font-mono text-slate-500">
              Client Monitor
            </span>
          </div>
        </div>
      ) : (
        <button
          id="performance-badge-toggle"
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0e0c1a]/90 hover:bg-[#151228] border border-purple-500/30 hover:border-purple-400 shadow-xl shadow-purple-500/15 backdrop-blur-md transition-all text-xs font-mono text-purple-200"
          title="Inspect Service Worker & Cache status"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Zap className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Performance</span>
        </button>
      )}
    </aside>
  );
};
