import React from 'react';
import { Sun, Moon, Github, BookOpen, Play } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onStartTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onStartTour }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Brand Logo with Spotlight Icon */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <img 
              src="/spotlight.png" 
              alt="Spotlight Logo" 
              className="w-7 h-7 object-contain transition-transform group-hover:scale-105 filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
            <span className="font-semibold text-base tracking-tight text-neutral-900 dark:text-white">
              Spotlight
            </span>
          </a>
          
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
            v1.0.1
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-400">
          <a href="#examples" className="hover:text-black dark:hover:text-white transition-colors">
            Features
          </a>
          <a href="#use-cases" className="hover:text-black dark:hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#configurator" className="hover:text-black dark:hover:text-white transition-colors">
            Playground
          </a>
          <a href="#why-i-made-this" className="hover:text-black dark:hover:text-white transition-colors">
            Story
          </a>
          <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">
            FAQ
          </a>
          <a 
            href="https://github.com/cttricks/spotlight.js#readme" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Docs</span>
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-1.5 sm:p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Start Tour Button */}
          <button
            onClick={onStartTour}
            data-spot-id="nav-tour-btn"
            data-spot-name="Quick Launch Tour"
            data-spot-summary="Click this button anytime to launch an interactive walkthrough across the page."
            data-spot-position="bottom"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Start Tour</span>
          </button>

          {/* GitHub Repo */}
          <a
            href="https://github.com/cttricks/spotlight.js"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 sm:p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>

        </div>

      </div>
    </header>
  );
};
