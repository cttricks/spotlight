import React, { useState } from 'react';
import { Github, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  const [copiedTab, setCopiedTab] = useState<'npm' | 'cdn' | null>(null);
  const [pm, setPm] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');

  const pmCommands = {
    npm: 'npm install spotlight-js',
    pnpm: 'pnpm add spotlight-js',
    yarn: 'yarn add spotlight-js',
    bun: 'bun add spotlight-js',
  };

  const cdnSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spotlight.js Quick Test</title>
  <!-- 1. Include Spotlight Styles -->
  <link rel="stylesheet" href="https://esm.sh/spotlight-js/dist/styles/spotlight.css">
</head>
<body style="font-family: sans-serif; padding: 50px; text-align: center;">

  <!-- 2. Annotate any element with data-spot-* attributes -->
  <button 
    data-spot-id="demo"
    data-spot-name="Welcome to Spotlight!" 
    data-spot-summary="Zero build step needed. Tag elements directly with data-spot-* attributes."
    data-spot-position="bottom"
    style="padding: 12px 24px; font-size: 16px; border-radius: 8px; cursor: pointer;">
    Explore Feature
  </button>

  <!-- 3. Load Spotlight from esm.sh & Start Tour -->
  <script type="module">
    import { spotlight } from 'https://esm.sh/spotlight-js';

    const tour = await spotlight();
    tour.start();
  </script>
</body>
</html>`;

  const copy = (text: string, type: 'npm' | 'cdn') => {
    navigator.clipboard.writeText(text);
    setCopiedTab(type);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section id="quick-install" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>Quick Install</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
          Add Spotlight.js to your project
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Zero dependencies, framework-ready, and lightweight (~25KB gzipped). Choose your preferred setup below.
        </p>

        {/* 1. NPM: Exact-size centered rounded container */}
        <div className="mb-14">
          <div className='flex justify-center items-center mb-4'>
            <img src='https://skillicons.dev/icons?i=nuxt,next,react,vue,vite,html,svelte,angular,astro' className='h-7 w-auto' />
          </div>

          <div className="text-xs text-neutral-500 mb-3 text-center">
            For React, Next.js, Vue, Vite, and modern bundle pipelines
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 shadow-sm">

            {/* Package Manager Selector */}
            <div className="flex items-center gap-1 border-r border-neutral-300 dark:border-neutral-700/80 pr-2 sm:pr-3">
              {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((mgr) => (
                <button
                  key={mgr}
                  onClick={() => setPm(mgr)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${pm === mgr
                      ? 'bg-white dark:bg-black text-black dark:text-white font-semibold shadow-xs'
                      : 'text-neutral-500 hover:text-black dark:hover:text-white'
                    }`}>
                  {mgr}
                </button>
              ))}
            </div>

            {/* Install Command */}
            <code className="font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 px-1 select-all">
              {pmCommands[pm]}
            </code>

            {/* Copy Button */}
            <button
              onClick={() => copy(pmCommands[pm], 'npm')}
              className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              title="Copy install command">
              {copiedTab === 'npm' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

        </div>

        {/* 2. CDN: Full-size div with complete codes & copy button for <5s test */}
        <div className="max-w-3xl mx-auto text-left mb-12">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 px-1">
            <div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>Zero-Build esm.sh Drop-in</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  Test in &lt; 5 sec
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Paste this into an empty <code className="font-mono">index.html</code> file to run a complete interactive tour with zero setup:
              </p>
            </div>

            <button
              onClick={() => copy(cdnSnippet, 'cdn')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 font-medium text-xs transition-all flex-shrink-0 shadow-sm self-start sm:self-auto">
              {copiedTab === 'cdn' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-600" />
                  <span>Copied HTML!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Full Code Box Window */}
          <div className="rounded-lg bg-black border border-neutral-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="text-[11px] font-mono text-neutral-400 ml-2">index.html</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">Complete HTML5 Template</span>
            </div>

            <pre className="p-4 sm:p-5 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
              <code>{cdnSnippet}</code>
            </pre>
          </div>

        </div>

        {/* GitHub Star & Community CTA */}
        <div className="inline-flex items-center justify-center gap-3">
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
