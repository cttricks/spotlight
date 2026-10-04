import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Examples } from './components/Examples';
import { UseCases } from './components/UseCases';
import { Configurator, TourConfig } from './components/Configurator';
import { WhyBuilt } from './components/WhyBuilt';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('spotlight-site-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [config, setConfig] = useState<TourConfig>({
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

  const tourRef = useRef<any>(null);

  // Sync theme with DOM and localStorage
  const applyTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    localStorage.setItem('spotlight-site-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.style.colorScheme = newTheme;
    tourRef.current?.setTheme?.(newTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Initialize theme on mount and listen to system preference
  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = theme;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('spotlight-site-theme');
      if (!saved) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else {
      (mediaQuery as any).addListener(handleSystemChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemChange);
      } else {
        (mediaQuery as any).removeListener(handleSystemChange);
      }
    };
  }, []);

  // Initialize Spotlight Tour instance
  useEffect(() => {
    let isMounted = true;

    async function initTour() {
      try {
        let spotlightFn: any;

        // 1. Try esm.sh CDN
        try {
          const loadDynamic = new Function('url', 'return import(url)');
          const cdnModule = await loadDynamic('https://esm.sh/@cttricks/spotlight');
          spotlightFn = cdnModule.spotlight;
        } catch {
          // 2. Try window.Spotlight
          if (typeof window !== 'undefined' && (window as any).Spotlight?.spotlight) {
            spotlightFn = (window as any).Spotlight.spotlight;
          } else {
            // 3. Try build output
            try {
              const loadDynamic = new Function('url', 'return import(url)');
              const localModule = await loadDynamic('../../dist/index.js');
              spotlightFn = localModule.spotlight;
            } catch {
              // Ignore fallback errors
            }
          }
        }

        if (spotlightFn && isMounted) {
          const instance = await spotlightFn({
            ...config,
            theme: theme
          });
          tourRef.current = instance;
        }
      } catch (err) {
        console.warn('[Spotlight Website] Tour loader note:', err);
      }
    }

    initTour();

    return () => {
      isMounted = false;
      tourRef.current?.destroy();
    };
  }, []);

  const handleConfigChange = (newConfig: TourConfig) => {
    setConfig(newConfig);
    if (tourRef.current) {
      tourRef.current.applyOptions?.(newConfig);
      if (newConfig.theme === 'dark' || newConfig.theme === 'light') {
        applyTheme(newConfig.theme);
      } else {
        tourRef.current.setTheme?.('auto');
      }
    }
  };

  const handleStartTour = (from = 0) => {
    if (tourRef.current) {
      tourRef.current.applyOptions?.({
        ...config,
        theme: theme
      });
      tourRef.current.start({ from });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onStartTour={handleStartTour} 
      />
      <main className="flex-1">
        <Hero onStartTour={handleStartTour} />
        <Examples />
        <UseCases />
        <Configurator
          config={config}
          onChange={handleConfigChange}
          onTest={handleStartTour}
        />
        <WhyBuilt />
        <FAQ />
        <CTA />
      </main>
      <Footer onStartTour={handleStartTour} />
    </div>
  );
}
