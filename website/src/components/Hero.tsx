import React, { useState } from 'react';
import { Play, Copy, Check, ArrowRight, Github } from 'lucide-react';

interface HeroProps {
  onStartTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTour }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install spotlight-js');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-grid-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Stage Spotlight Lamp Fixture */}
        <div className="relative flex justify-center items-center mb-2">
          <div className="relative w-40 h-40 -mt-6 select-none pointer-events-none">
            {/* The Lamp Image */}
            <img 
              src="/spotlight.png" 
              alt="Spotlight Lamp" 
              className="w-full h-full object-contain relative z-20 spotlight-lamp"
            />
          </div>
        </div>

        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>v2.1.0 • TypeScript Native</span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">Zero Dependencies</span>
        </div>

        {/* Main Headline */}
        <h1 
          data-spot-id="1"
          data-spot-name="Welcome to Spotlight.js"
          data-spot-summary="Spotlight.js directs your users' focus with fluid SVG cutout morphing, modern glassmorphic popovers, and rich media support."
          data-spot-media="/spotlight.png"
          data-spot-position="bottom"
          className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5 max-w-3xl mx-auto leading-[1.12]">
          Cinematic site tours for modern web apps
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed font-normal">
          Direct user attention with fluid SVG cutout morphing, collision-aware popovers, and declarative HTML markup. Pure TypeScript, zero external bloat.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button
            onClick={onStartTour}
            data-spot-id="2"
            data-spot-name="Interactive Tour Trigger"
            data-spot-summary="Launch the guided walkthrough programmatically or declaratively with single-click hooks."
            data-spot-position="top"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 font-medium text-sm transition-all shadow-sm active:scale-95">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Live Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick Copy Command */}
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-4 py-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-xs font-mono transition-all">
            <span>npm i spotlight-js</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
            )}
          </button>

          {/* GitHub Repo */}
          <a
            href="https://github.com/cttricks/spotlight.js"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-all">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Feature Cards Grid (Vercel Charcoal Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div className="charcoal-card p-4 rounded-lg">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">Architecture</div>
            <div className="font-semibold text-neutral-900 dark:text-white text-sm">Zero Dependencies</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Pure TypeScript & SVG (~25KB gzipped)</div>
          </div>

          <div className="charcoal-card p-4 rounded-lg">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">Targeting</div>
            <div className="font-semibold text-neutral-900 dark:text-white text-sm">HTML Data Attributes</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">data-spot-* markup or programmatic API</div>
          </div>

          <div className="charcoal-card p-4 rounded-lg">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">Positioning</div>
            <div className="font-semibold text-neutral-900 dark:text-white text-sm">Collision Auto-Flip</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Viewport clamping & tethered arrow</div>
          </div>

          <div className="charcoal-card p-4 rounded-lg">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">Compatibility</div>
            <div className="font-semibold text-neutral-900 dark:text-white text-sm">Universal & SSR-Safe</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">React, Next.js, Vue, or CDN script</div>
          </div>

        </div>

      </div>
    </section>
  );
};
