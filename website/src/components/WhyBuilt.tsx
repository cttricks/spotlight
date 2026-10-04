import React from 'react';
import { Sparkles, Check, X, ShieldAlert, Cpu } from 'lucide-react';

export const WhyBuilt: React.FC = () => {
  return (
    <section id="why-i-made-this" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">The Backstory</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Why I built Spotlight
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            A frustration born out of building complex SaaS dashboards.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="charcoal-card rounded-xl p-6 sm:p-10 mb-12">

          {/* Pain Hook */}
          <div className="border-l-2 border-neutral-900 dark:border-white pl-4 sm:pl-6 mb-8">
            <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
              Every site tour library forced me to maintain a 200-line detached JSON file synced with fragile CSS classes that quietly broke the moment someone renamed a button. I was tired of spending more time debugging broken selector strings than actually shipping features.
            </p>
          </div>

          {/* Story Body */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            <p>
              Whenever our team refactored a component, moved a navigation item, or updated layout classes, our onboarding tours would either highlight an invisible element, point off-screen, or crash completely. Juggling between component files and a detached configuration file felt fundamentally broken for modern development workflows.
            </p>
            <p>
              I wanted something dead simple: <strong className="text-neutral-900 dark:text-white font-semibold">what if the element itself declared its own tour step?</strong> No selector gymnastics. No central JSON mapping. Just tag the element directly with native <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-*</code> attributes for title, summary, media, and group, and let a lightweight engine auto-discover the walkthrough.
            </p>
            <p>
              Today, this library is dogfooded across production dashboards that me and my team build at <strong className="text-neutral-900 dark:text-white font-semibold">Dotix</strong>. It powers everything from new user first-login flows to contextual feature walkthroughs, without any external framework bloat.
            </p>
          </div>

          {/* Author Badge */}
          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
            <a href='https://cttricks.com' target='_blank'>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-xs text-neutral-700 dark:text-neutral-300">
                  <img src='https://cttricks.com/profile-card/tanish-sm.webp' className='w-full h-full rounded-full' />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">Tanish Raj</div>
                  <div className="text-[11px] text-neutral-500">Creator of Spotlight • Tested in production at Dotix</div>
                </div>
              </div>
            </a>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Production Dogfooded at <a href='https://dotix.io' target='_blank' className='underline'>Dotix</a></span>
            </div>
          </div>

        </div>

        {/* Side-by-side comparison: The Old Way vs The Spotlight Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Old Way */}
          <div className="charcoal-card rounded-lg p-5 border-dashed">
            <div className="flex items-center gap-2 mb-3 text-neutral-500 font-semibold text-xs uppercase tracking-wider">
              <X className="w-4 h-4 text-rose-500" />
              <span>The Fragile JSON Way</span>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-rose-500">•</span>
                <span>Separate 200+ line JSON config disconnected from component code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500">•</span>
                <span>Brittle CSS class selectors (<code className="font-mono">.header &gt; div:nth-child(2)</code>) that break on refactor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500">•</span>
                <span>Difficult to group multiple independent tours on complex pages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500">•</span>
                <span>Heavy bundle footprint with complex external dependencies.</span>
              </li>
            </ul>
          </div>

          {/* Spotlight Way */}
          <div className="charcoal-card rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-white font-semibold text-xs uppercase tracking-wider">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>The Spotlight Way</span>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">•</span>
                <span>Declarative <code className="font-mono text-[11px]">data-spot-*</code> attributes placed directly on components.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">•</span>
                <span>Zero selectors to maintain; tours survive CSS and layout refactors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">•</span>
                <span>Native <code className="font-mono text-[11px]">data-spot-group</code> to isolate distinct tour flows effortlessly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">•</span>
                <span>Zero dependencies (~25KB gzipped), adaptive light/dark theming.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

