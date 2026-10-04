import React, { useState } from 'react';
import { Github, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

export const CTA: React.FC = () => {
  const [copiedTab, setCopiedTab] = useState<'npm' | 'cdn' | null>(null);

  const copy = (text: string, type: 'npm' | 'cdn') => {
    navigator.clipboard.writeText(text);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>Quick Install</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Ready to elevate your onboarding?
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Open-source, zero dependencies, and framework-ready. Integrate Spotlight.js into your application today.
        </p>

        {/* Snippets Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          
          {/* NPM Card */}
          <div className="charcoal-card p-4 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-neutral-500">Package Manager</span>
              <button
                onClick={() => copy('npm install spotlight-js', 'npm')}
                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                title="Copy npm command">
                {copiedTab === 'npm' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="font-mono text-xs text-neutral-900 dark:text-neutral-200 bg-neutral-100 dark:bg-black p-2.5 rounded border border-neutral-200 dark:border-neutral-800 overflow-x-auto">
              <code>npm install spotlight-js</code>
            </pre>
          </div>

          {/* CDN Card */}
          <div className="charcoal-card p-4 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-neutral-500">CDN Script Tag</span>
              <button
                onClick={() => copy('<script src="https://cdn.jsdelivr.net/npm/spotlight-js/dist/spotlight.global.js"></script>', 'cdn')}
                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                title="Copy CDN tag">
                {copiedTab === 'cdn' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="font-mono text-xs text-neutral-900 dark:text-neutral-200 bg-neutral-100 dark:bg-black p-2.5 rounded border border-neutral-200 dark:border-neutral-800 overflow-x-auto">
              <code>&lt;script src="https://cdn.../spotlight.global.js"&gt;&lt;/script&gt;</code>
            </pre>
          </div>

        </div>

        {/* GitHub Link Button */}
        <div className="inline-flex items-center justify-center">
          <a
            href="https://github.com/cttricks/spotlight.js"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 font-medium text-xs sm:text-sm transition-all shadow-sm">
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
};
