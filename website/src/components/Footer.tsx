import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black py-10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img 
              src="/spotlight.png" 
              alt="Spotlight Logo" 
              className="w-6 h-6 object-contain filter dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
            />
            <div>
              <div className="text-xs font-semibold text-neutral-900 dark:text-white">Spotlight.js</div>
              <p className="text-[11px] text-neutral-500">
                Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer" className="underline hover:text-neutral-700 dark:hover:text-neutral-300">MIT License</a>. Free for personal & commercial use.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <a href="https://github.com/cttricks/spotlight.js" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/spotlight-js" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">npm Package</a>
            <a href="https://github.com/cttricks/spotlight.js/issues" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Issues</a>
            <a href="https://github.com/cttricks/spotlight.js/blob/master/Contribution.md" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contribute</a>
          </div>

          {/* Author Credits */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-neutral-700 dark:text-neutral-300 fill-current" />
            <span>by</span>
            <a href="https://github.com/cttricks" target="_blank" rel="noreferrer" className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline">
              Tanish Raj (@cttricks)
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
