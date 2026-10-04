import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How is Spotlight different from traditional libraries like Intro.js or Driver.js?",
      answer: (
        <>
          Most tour engines force you to maintain a detached JavaScript/JSON config array referencing fragile CSS selectors (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">.btn-primary &gt; span:first-child</code>). The second a teammate refactors a class name, the tour silently breaks. Spotlight is 100% declarative: you annotate elements directly in HTML/JSX with <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-*</code> attributes. The engine auto-scans the DOM at runtime.
        </>
      )
    },
    {
      question: "Does it support modern frameworks like React, Next.js, and Vue?",
      answer: (
        <>
          Yes. Spotlight is completely framework-agnostic and written in pure TypeScript with zero external dependencies (~25KB gzipped). It is SSR-safe and works out of the box with React, Next.js (App & Pages router), Vue, Svelte, Astro, or via a single CDN script tag on plain HTML websites.
        </>
      )
    },
    {
      question: "How do I run multiple independent tours on the same page?",
      answer: (
        <>
          Use the <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-group</code> attribute. For example, annotate billing steps with <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-group="billing"</code> and dashboard overview steps with <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-group="overview"</code>. You can trigger specific tour flows whenever needed by calling <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">{"tour.start({ group: 'billing' })"}</code>.
        </>
      )
    },
    {
      question: "Can I embed rich media like GIFs and looping videos in tour steps?",
      answer: (
        <>
          Yes. Add <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-media="/assets/tutorial.mp4"</code> or an image/GIF link directly on the target element. Spotlight automatically detects video formats (MP4, WebM, OGG) and renders an autoplaying, muted, looping player, or a responsive image card directly inside the step popover.
        </>
      )
    },
    {
      question: "How does the adaptive light and dark theme engine work?",
      answer: (
        <>
          Spotlight features a built-in theme engine supporting <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">'auto'</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">'dark'</code>, and <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">'light'</code> modes. In auto mode, it dynamically monitors <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">prefers-color-scheme</code> and reacts in real-time. You can also explicitly toggle themes at runtime using <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.setTheme('dark')</code> to sync with your application's theme provider.
        </>
      )
    },
    {
      question: "Can I control the tour programmatically with JavaScript?",
      answer: (
        <>
          Absolutely. While step discovery is declarative, you retain full JavaScript programmatic control: <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.start()</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.next()</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.prev()</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.goTo(id)</code>, and <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">tour.stop()</code>. You can also listen to lifecycle events like <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">onStepChange</code>, <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">onComplete</code>, and <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">onExit</code>.
        </>
      )
    },
    {
      question: "Is Spotlight compatible with AI coding agents (Claude Code, Cursor, Codex, Antigravity)?",
      answer: (
        <>
          Yes! Spotlight includes a dedicated <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">SKILL.md</code> packaged directly with the library. When building features with AI pair programmers, simply prompt your agent: <em>"Read node_modules/@cttricks/spotlight/SKILL.md and implement an onboarding tour for our dashboard."</em> The agent will automatically know all declarative <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">data-spot-*</code> attributes, SSR safety patterns, and lifecycle methods without hallucinating.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Everything you need to know about Spotlight and how it works under the hood.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="charcoal-card rounded-lg overflow-hidden transition-colors">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}>
                  <span className="font-medium text-sm sm:text-base text-neutral-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-neutral-900 dark:text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-neutral-200/60 dark:border-neutral-800/60 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

