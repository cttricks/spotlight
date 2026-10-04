import React, { useState } from 'react';
import { Rocket, BellRing, Layers, Cpu, Check } from 'lucide-react';

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'announcements' | 'tutorials' | 'groups'>('onboarding');

  const useCases = {
    onboarding: {
      title: "New User Onboarding",
      subtitle: "Accelerate time-to-value for newly registered users",
      description: "Guide users through their first workspace setup, dashboard overview, and primary action buttons. Spotlight ensures attention stays locked on key value drivers without overwhelming modal dialogues.",
      benefits: [
        "Increases activation and completion rates",
        "Reduces support tickets and user drop-off",
        "Focuses user attention one step at a time"
      ],
      code: `import { spotlight } from '@cttricks/spotlight';
import '@cttricks/spotlight/styles';

// Launch on first user login
const tour = await spotlight({
  theme: 'auto',
  onComplete: () => {
    localStorage.setItem('has_seen_onboarding', 'true');
  }
});

tour.start();`
    },
    announcements: {
      title: "Feature Announcements & Release Tours",
      subtitle: "Showcase new features in context without banner fatigue",
      description: "When shipping major updates or UI redesigns, pinpoint the exact button, tool, or shortcut right in the active interface. Users see the feature live in action rather than reading static release notes.",
      benefits: [
        "Higher engagement than passive email changelogs",
        "Contextual explanation right where the button lives",
        "Optional embedded video demonstrating usage"
      ],
      code: `<button 
  data-spot-id="new-ai-copilot"
  data-spot-name="Meet AI Copilot"
  data-spot-summary="Generate queries, summarize tables, and automate workflows in seconds."
  data-spot-media="/spotlight.png"
  data-spot-position="right">
  Ask AI
</button>`
    },
    tutorials: {
      title: "Interactive In-App Tutorials",
      subtitle: "Guide users through complex multi-step workflows",
      description: "Teach users how to complete intricate tasks like connecting an API, inviting team members, or setting up billing. Spotlight keeps the overlay active while users navigate the steps.",
      benefits: [
        "Hands-on learning directly in production UI",
        "Keyboard navigable (Arrow keys, Esc)",
        "Auto-scrolls smoothly to each action item"
      ],
      code: `// Multi-step workflow tutorial
const tutorial = await spotlight({
  confirmOnExit: true,
  confirmExitMessage: "Leave the tutorial? You can resume anytime from Settings.",
  nextText: "Continue",
  doneText: "Ready to Build!"
});

tutorial.start({ from: 'step-api-key' });`
    },
    groups: {
      title: "Multi-Tour Flows (data-spot-group)",
      subtitle: "Organize separate tours on the same page",
      description: "Run different tour sequences on the same page (e.g. 'quick-tour', 'advanced-settings', 'billing-tour') by assigning data-spot-group attributes.",
      benefits: [
        "Isolate steps into distinct user journeys",
        "Start specific tour flows from different buttons",
        "Clean organization without class naming conflicts"
      ],
      code: `// Run only steps belonging to the 'editor' flow
const editorTour = await spotlight({
  group: 'editor'
});

// Launch editor tour
editorTour.start();`
    }
  };

  const current = useCases[activeTab];

  return (
    <section id="use-cases" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">Use Cases</div>
          <h2 
            data-spot-id="4"
            data-spot-name="Real-World Use Cases"
            data-spot-summary="Discover how product teams use Spotlight.js for onboarding, feature releases, and tutorials."
            data-spot-position="bottom"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Built for real product workflows
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            From single-page web applications to complex enterprise SaaS portals.
          </p>
        </div>

        {/* Vercel-Style Segmented Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
            
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'onboarding'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm border border-neutral-200/80 dark:border-neutral-700/80'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}>
              <Rocket className="w-3.5 h-3.5" />
              <span>Onboarding</span>
            </button>

            <button
              onClick={() => setActiveTab('announcements')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'announcements'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm border border-neutral-200/80 dark:border-neutral-700/80'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}>
              <BellRing className="w-3.5 h-3.5" />
              <span>Releases</span>
            </button>

            <button
              onClick={() => setActiveTab('tutorials')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'tutorials'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm border border-neutral-200/80 dark:border-neutral-700/80'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}>
              <Layers className="w-3.5 h-3.5" />
              <span>Tutorials</span>
            </button>

            <button
              onClick={() => setActiveTab('groups')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === 'groups'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm border border-neutral-200/80 dark:border-neutral-700/80'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}>
              <Cpu className="w-3.5 h-3.5" />
              <span>Multi-Tour Groups</span>
            </button>

          </div>
        </div>

        {/* Tab Content Box */}
        <div className="charcoal-card rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                {current.subtitle}
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">{current.title}</h3>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {current.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Code Window */}
          <div className="lg:col-span-6">
            <div className="rounded-lg bg-black border border-neutral-800 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400">snippet.ts</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                <code>{current.code}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
