import React, { useState } from 'react';
import { Tag, Sparkles, Video, Compass, Palette, Globe, Check, Copy } from 'lucide-react';

export const Examples: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cards = [
    {
      id: "ex-declarative",
      icon: Tag,
      title: "Declarative Markup",
      description: "Decorate elements directly in HTML or JSX without fragile DOM comment nodes or complex selector arrays.",
      code: `<button 
  data-spot-id="1"
  data-spot-name="Instant Search"
  data-spot-summary="Search documents and shortcuts."
  data-spot-position="bottom">
  Search
</button>`,
      badge: "Zero Selectors"
    },
    {
      id: "ex-morphing",
      icon: Sparkles,
      title: "Fluid Cutout Morphing",
      description: "The SVG spotlight cutout smoothly glides between target elements with hardware-accelerated cubic-bezier transitions.",
      code: `// Cutout dynamically tracks any element size
tour.next(); // Smoothly morphs x, y, width, height, rx`,
      badge: "60 FPS Animation"
    },
    {
      id: "ex-media",
      icon: Video,
      title: "Rich Media (Video & GIF)",
      description: "Embed autoplaying looping HTML5 videos, animated GIFs, or preview images right inside your tour steps.",
      code: `<div 
  data-spot-name="Feature Demo"
  data-spot-media="/spotlight.png">
  Canvas Component
</div>`,
      badge: "Video / GIF / Image"
    },
    {
      id: "ex-collision",
      icon: Compass,
      title: "Smart Collision Detection",
      description: "Popovers auto-flip when approaching screen boundaries and clamp coordinates to stay 100% visible on mobile.",
      code: `// Automatically flips: bottom -> top, right -> left
data-spot-position="auto"`,
      badge: "Auto-Flipping"
    },
    {
      id: "ex-themes",
      icon: Palette,
      title: "Adaptive Theme Engine",
      description: "Supports 'light', 'dark', and 'auto' modes, automatically matching the user's OS prefers-color-scheme in real-time.",
      code: `const tour = await spotlight({
  theme: 'auto', // Tracks system light/dark mode
  highlightColor: '#ffffff'
});`,
      badge: "System Sync"
    },
    {
      id: "ex-universal",
      icon: Globe,
      title: "Universal & Framework-Ready",
      description: "SSR-safe and zero external dependencies. Works out of the box with Next.js, React, Vite, Vue, Astro, and esm.sh browser imports.",
      code: `<!-- Direct esm.sh Browser Import -->
<script type="module">
  import { spotlight } from 'https://esm.sh/@cttricks/spotlight';
</script>`,
      badge: "React / Vite / esm.sh"
    }
  ];

  return (
    <section id="examples" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">Capabilities</div>
          <h2 
            data-spot-id="3"
            data-spot-name="Feature Highlights"
            data-spot-summary="Explore Spotlight.js capabilities: declarative attributes, smooth SVG morphing, and rich media."
            data-spot-position="bottom"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Engineered for modern production apps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Everything you need to build interactive onboarding experiences without adding heavy bundle dependencies.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                data-spot-id={card.id}
                data-spot-name={card.title}
                data-spot-summary={card.description}
                data-spot-position="top"
                className="charcoal-card rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-8 h-8 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono tracking-wide rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1.5">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{card.description}</p>
                </div>

                {/* Code Snippet Box */}
                <div className="relative rounded-md bg-neutral-100 dark:bg-[#000000] border border-neutral-200 dark:border-neutral-800/80 p-3 font-mono text-xs text-neutral-800 dark:text-neutral-300 overflow-x-auto group">
                  <button
                    onClick={() => handleCopy(card.code, idx)}
                    className="absolute top-2 right-2 p-1 rounded bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy code">
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <pre className="pr-6"><code>{card.code}</code></pre>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
