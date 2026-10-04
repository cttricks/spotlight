import React, { useState } from 'react';
import { 
  Heart, 
  ArrowUp, 
  Github, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Copy, 
  Play, 
  BookOpen, 
  Bot,
  Package
} from 'lucide-react';

interface FooterProps {
  onStartTour?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartTour }) => {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText('npm install @cttricks/spotlight');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-black/95 transition-colors duration-200 pt-16 pb-12 overflow-hidden">
      
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-dots-subtle pointer-events-none opacity-40 dark:opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16">
          
          {/* Brand Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 p-1 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <img 
                  src="/spotlight.png" 
                  alt="Spotlight Logo" 
                  className="w-full h-full object-contain filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
                  Spotlight
                </span>
                <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  v1.0.1
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Cinematic, zero-dependency site tours for modern web apps. Built with pure TypeScript, hardware-accelerated SVG cutouts, and declarative HTML markup.
            </p>

            {/* Quick Install Pill with Copy Button */}
            <div className="pt-2">
              <button
                onClick={copyInstall}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-800 dark:text-neutral-300 text-xs font-mono transition-all shadow-xs group">
                <Terminal className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <span>npm i @cttricks/spotlight</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />
                )}
              </button>
            </div>

            {/* Production Badge */}
            <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tested & dogfooded in production at Dotix</span>
            </div>
          </div>

          {/* Col 2: Product & Showcase */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-semibold">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              {onStartTour && (
                <li>
                  <button 
                    onClick={onStartTour}
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium">
                    <Play className="w-3 h-3 fill-current text-emerald-500" />
                    <span>Launch Live Tour</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#configurator" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Interactive Configurator
                </a>
              </li>
              <li>
                <a href="#examples" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Media & Tour Demos
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Framework Use Cases
                </a>
              </li>
              <li>
                <a href="#why-i-made-this" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  The Backstory
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Documentation & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-semibold">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/SKILL.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-medium">
                  <Bot className="w-3.5 h-3.5 text-purple-500" />
                  <span>AI Agent Skill (SKILL.md)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/docs/data-attributes-spec.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Data Attributes Reference
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/docs/framework-cdn-guide.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Next.js, React & CDN Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/docs/ui-animation-design.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Cutout Morphing & Themes
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/docs/architecture.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Architecture & API Spec
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.npmjs.com/package/@cttricks/spotlight" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <Package className="w-3.5 h-3.5" />
                  <span>npm Package Registry</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/issues" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Report Issues & Roadmap
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cttricks/spotlight/blob/master/Contribution.md" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  Contributing Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="https://dotix.io" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <span>Dotix.io</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://cttricks.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <span>Cttricks.com</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Decorative Watermark Typography */}
        <div className="relative py-4 my-2 border-y border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden select-none pointer-events-none">
          <div className="text-[8vw] font-black tracking-tighter text-center leading-none text-neutral-200/50 dark:text-neutral-900/50 uppercase whitespace-nowrap">
            SPOTLIGHT
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          {/* Copyright & License */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Spotlight.</span>
            <span>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-200">MIT License</a>.</span>
          </div>

          {/* Author Credits & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current inline-block" />
              <span>by</span>
              <a 
                href="https://cttricks.com" 
                target="_blank" 
                rel="noreferrer" 
                className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline">
                Tanish Raj (@cttricks)
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all shadow-xs"
              aria-label="Scroll back to top">
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
