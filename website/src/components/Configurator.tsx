import React, { useState } from 'react';
import { Sliders, Copy, Check, Play, RotateCcw } from 'lucide-react';

export interface TourConfig {
  theme: 'auto' | 'dark' | 'light';
  highlightColor: string;
  highlightStrokeWidth: number;
  highlightRadius: number;
  highlightPadding: number;
  overlayOpacity: number;
  backdropBlur: number;
  animationDuration: number;
  confirmOnExit: boolean;
}

interface ConfiguratorProps {
  config: TourConfig;
  onChange: (newConfig: TourConfig) => void;
  onTest: (from?: number) => void;
}

export const Configurator: React.FC<ConfiguratorProps> = ({ config, onChange, onTest }) => {
  const [copied, setCopied] = useState(false);

  const update = <K extends keyof TourConfig>(key: K, value: TourConfig[K]) => {
    onChange({ ...config, [key]: value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDefaults = () => {
    onChange({
      theme: 'auto',
      highlightColor: '#ffffff',
      highlightStrokeWidth: 2,
      highlightRadius: 8,
      highlightPadding: 8,
      overlayOpacity: 0.75,
      backdropBlur: 4,
      animationDuration: 300,
      confirmOnExit: false
    });
  };

  return (
    <section id="configurator" className="py-20 relative border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">Playground</div>
          <h2 
            data-spot-id="5"
            data-spot-name="Interactive Playground"
            data-spot-summary="Fine-tune colors, border radiuses, overlay opacities, and test changes live."
            data-spot-position="bottom"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Live Configurator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Tweak styling tokens and preview the tour engine in action on this very page.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-6 charcoal-card rounded-lg p-5 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium text-sm">
                <Sliders className="w-4 h-4 text-neutral-500" />
                <span>Configuration Controls</span>
              </div>
              <button
                onClick={resetDefaults}
                className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                title="Reset to default values">
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Theme Mode */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Theme Mode</label>
                <select
                  value={config.theme}
                  onChange={(e) => update('theme', e.target.value as any)}
                  className="w-full px-3 py-1.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-500">
                  <option value="auto">Auto (System Sync)</option>
                  <option value="dark">Dark Theme</option>
                  <option value="light">Light Theme</option>
                </select>
              </div>

              {/* Highlight Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Highlight Stroke Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.highlightColor}
                    onChange={(e) => update('highlightColor', e.target.value)}
                    className="w-8 h-8 rounded border border-neutral-200 dark:border-neutral-800 cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={config.highlightColor}
                    onChange={(e) => update('highlightColor', e.target.value)}
                    className="flex-1 px-2.5 py-1.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-100 font-mono"
                  />
                </div>
              </div>

              {/* Border Stroke Width */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Stroke Width</span>
                  <span className="text-neutral-500 font-mono">{config.highlightStrokeWidth}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={config.highlightStrokeWidth}
                  onChange={(e) => update('highlightStrokeWidth', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

              {/* Highlight Radius */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Cutout Radius</span>
                  <span className="text-neutral-500 font-mono">{config.highlightRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={config.highlightRadius}
                  onChange={(e) => update('highlightRadius', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

              {/* Padding */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Clearance Padding</span>
                  <span className="text-neutral-500 font-mono">{config.highlightPadding}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={config.highlightPadding}
                  onChange={(e) => update('highlightPadding', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

              {/* Overlay Opacity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Backdrop Opacity</span>
                  <span className="text-neutral-500 font-mono">{Math.round(config.overlayOpacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.95"
                  step="0.05"
                  value={config.overlayOpacity}
                  onChange={(e) => update('overlayOpacity', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

              {/* Backdrop Blur */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Backdrop Filter Blur</span>
                  <span className="text-neutral-500 font-mono">{config.backdropBlur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="16"
                  value={config.backdropBlur}
                  onChange={(e) => update('backdropBlur', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

              {/* Animation Duration */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Animation Duration</span>
                  <span className="text-neutral-500 font-mono">{config.animationDuration}ms</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="800"
                  step="10"
                  value={config.animationDuration}
                  onChange={(e) => update('animationDuration', Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-neutral-100 cursor-pointer"
                />
              </div>

            </div>

            {/* Test Action */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">Settings apply live to the active tour instance.</span>
              <button
                onClick={() => onTest(4)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 font-medium text-xs transition-all shadow-sm active:scale-95">
                <Play className="w-3 h-3 fill-current" />
                <span>Test Live Tour</span>
              </button>
            </div>
          </div>

          {/* JSON Output (Right) */}
          <div className="lg:col-span-6 rounded-lg bg-black border border-neutral-800 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="text-[11px] font-mono text-neutral-400 ml-2">spotlight-options.json</span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-[11px] font-medium text-neutral-300 transition-colors">
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>

            <pre className="p-5 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
              <code>{JSON.stringify(config, null, 2)}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
