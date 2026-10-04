---
name: spotlight
description: >-
  Expert guide for implementing, configuring, and troubleshooting interactive product tours,
  onboarding walkthroughs, and UI highlights using Spotlight (@cttricks/spotlight).
  Use this skill whenever building site tours, user onboarding flows, or feature spotlights
  in React, Next.js (SSR safe), Vue, Vite, Astro, or vanilla HTML/CDN.
---

# Spotlight — Agent Implementation & Integration Skill

This skill provides AI agents (Antigravity, Claude Code, OpenAI Codex, Cursor, etc.) and developers with the definitive, complete instructions for integrating **Spotlight** (`@cttricks/spotlight`) into any web application.

---

## 1. Core Philosophy & Golden Rules

**Spotlight** is a modern, zero-dependency site tour engine built in pure TypeScript and CSS (~25 kB gzipped). It replaces fragile, detached 200-line JSON configuration arrays with **declarative in-DOM HTML attributes**.

### The 4 Golden Rules for Agents:
1. **Prefer Declarative Markup:** Annotate elements directly in HTML/JSX with `data-spot-*` attributes. Do not build large detached selector arrays unless the tour target elements are dynamically generated outside the template.
2. **Always Import CSS:** Spotlight requires its accompanying stylesheet. Tour popovers and cutouts will fail to render correctly without `import '@cttricks/spotlight/styles';`.
3. **SSR Safety First:** In Next.js, Remix, Astro, or Nuxt, always wrap `spotlight()` instantiation inside client lifecycle hooks (`useEffect` or `onMounted`) or guard with `typeof window !== 'undefined'`. Never run it during server evaluation.
4. **Call `tour.destroy()` on Unmount:** When a component or page unmounts, always invoke `tour.destroy()` to detach window listeners and clean up DOM artifacts.

---

## 2. Installation & Quick Setup

### Option A: Modern Package Managers (React, Next.js, Vue, Vite, Astro)

```bash
npm install @cttricks/spotlight
# or: pnpm add @cttricks/spotlight | yarn add @cttricks/spotlight | bun add @cttricks/spotlight
```

**Essential Imports:**
```typescript
import { spotlight } from '@cttricks/spotlight';
import '@cttricks/spotlight/styles'; // Required: Popover & overlay styling
```

---

### Option B: Instant Drop-in via `esm.sh` (Static HTML or No-Build)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <!-- 1. Stylesheet -->
  <link rel="stylesheet" href="https://esm.sh/@cttricks/spotlight/dist/styles/spotlight.css" />
</head>
<body>
  <!-- 2. Annotated DOM Elements -->
  <button 
    data-spot-id="1" 
    data-spot-name="Welcome!" 
    data-spot-summary="Click here to explore our dashboard.">
    Dashboard
  </button>

  <!-- 3. Module Script -->
  <script type="module">
    import { spotlight } from 'https://esm.sh/@cttricks/spotlight';
    
    const tour = await spotlight({ theme: 'auto' });
    tour.start();
  </script>
</body>
</html>
```

---

### Option C: Standalone Global Script (CDN Global IIFE)

```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://esm.sh/@cttricks/spotlight/dist/styles/spotlight.css" />

<!-- Standalone Global Bundle (exposes window.Spotlight) -->
<script 
  src="https://esm.sh/@cttricks/spotlight/dist/spotlight.global.js" 
  data-spotlight-auto="true" 
  data-spotlight-theme="auto">
</script>
```

---

## 3. Declarative HTML Attributes Reference

Annotate any target HTML or JSX element with `data-spot-*` attributes:

| Attribute | Type | Default | Description & Agent Notes |
|---|---|---|---|
| `data-spot-id` | `string \| number` | auto-generated | Step identifier. If numeric (e.g. `"1"`, `"2"`), Spotlight automatically sorts steps in ascending order. |
| `data-spot-order` | `number` | `1000 + index` | Explicit sorting sequence order when `data-spot-id` is a semantic string (e.g., `id="search-btn" data-spot-order="1"`). |
| `data-spot-name` | `string` | `""` | Popover title heading (alias: `data-spot-title`). |
| `data-spot-summary` | `string` | `""` | Popover description text (alias: `data-spot-desc`). **Supports HTML markup** (`<strong>`, `<a>`, `<p>`, etc.). |
| `data-spot-media` | `string` (URL) | `undefined` | Rich media embed. Automatically detects extension: `.mp4`/`.webm` (looping video), `.gif` (animation), or images (`.png`, `.jpg`, `.webp`, `.svg`). |
| `data-spot-position` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'auto'` | `'auto'` | Preferred popover placement. Auto-detects collisions and flips if close to viewport boundaries. |
| `data-spot-padding` | `number` | `8` | Clearance in pixels around this target element. |
| `data-spot-radius` | `number` | `8` | Cutout border corner radius in pixels. Use `9999` for circular icons or avatars! |
| `data-spot-group` | `string` | `'default'` | Multi-tour group tag. Allows isolating different tours on the same page (e.g. `'onboarding'`, `'billing'`). |

### Declarative Trigger Buttons
To let users trigger a tour without custom JS event listeners:
```html
<button data-spotlight-start>Take Tour</button>
<!-- Or with explicit button type: -->
<button type="spotlight-button:start">Take Tour</button>
```

---

## 4. Step Patterns & Recipes

### Pattern 1: Minimal Text-Only Step
Use for lightweight tips and callouts.
```html
<nav 
  data-spot-id="1" 
  data-spot-name="Main Navigation" 
  data-spot-summary="Quickly navigate between documents, settings, and teams."
  data-spot-position="right">
  <!-- Nav items -->
</nav>
```

---

### Pattern 2: Step with Animated GIF or Image
Ideal for showing visual hints or product graphics.
```html
<div 
  data-spot-id="2" 
  data-spot-name="Keyboard Shortcuts" 
  data-spot-summary="Press <code>⌘K</code> anywhere to open command search."
  data-spot-media="/assets/shortcuts-demo.gif"
  data-spot-position="bottom">
  Search Bar
</div>
```

---

### Pattern 3: Step with Looping Silent Video
Spotlight automatically detects `.mp4` and `.webm`, creating an autoplaying, looping, muted `<video>` with rounded glass borders.
```html
<button 
  data-spot-id="3" 
  data-spot-name="AI Copilot Action" 
  data-spot-summary="Watch how our AI agent refactors components in real time."
  data-spot-media="https://assets.example.com/demo.mp4"
  data-spot-position="left">
  Generate Code
</button>
```

---

### Pattern 4: Circular Target (Avatar, Floating Action Button)
Set `data-spot-radius="9999"` to render a perfectly circular SVG cutout morph:
```html
<img 
  src="/avatar.jpg" 
  class="rounded-full w-10 h-10"
  data-spot-id="4" 
  data-spot-name="Your Profile & Settings" 
  data-spot-summary="Manage API keys, billing subscriptions, and team seats."
  data-spot-radius="9999"
  data-spot-padding="4"
  data-spot-position="bottom" />
```

---

### Pattern 5: Multi-Tour Segmentation
Segregate tours by assigning groups. Elements only trigger when their group is started:
```html
<!-- Dashboard Tour Elements -->
<div data-spot-group="dashboard" data-spot-id="1" data-spot-name="Metrics" data-spot-summary="Monthly MRR">...</div>

<!-- Billing Tour Elements -->
<div data-spot-group="billing" data-spot-id="1" data-spot-name="Invoices" data-spot-summary="Download VAT receipts">...</div>
```

Launch specific group:
```typescript
tour.start({ group: 'billing' });
```

---

## 5. Configuration Options Reference (`SpotlightOptions`)

Pass these options to `spotlight(options)` or `new Spotlight(options)`:

```typescript
const tour = await spotlight({
  // Appearance & Theming
  theme: 'auto',              // 'auto' (OS color sync) | 'dark' | 'light'
  highlightColor: '#6366f1',  // Accent border and primary button color
  highlightStrokeWidth: 3,    // Border thickness in px
  highlightRadius: 8,         // Default cutout corner radius in px
  highlightPadding: 8,        // Default clearance around targets in px
  overlayColor: 'rgba(15, 23, 42, 0.65)', // Backdrop background
  overlayOpacity: 1,          // Backdrop opacity (0 to 1)
  backdropBlur: 4,            // Glassmorphism blur in px (or false to disable)
  zIndex: 99999,              // Overlay and popover z-index

  // Animation & Motion
  animationDuration: 320,     // Transition duration in ms

  // Interaction Controls
  exitOnBackdropClick: true,  // Clicking dark overlay exits tour
  keyboardNavigation: true,   // Escape = exit, ArrowLeft/Right = navigate
  confirmOnExit: false,       // Confirm prompt before exiting mid-tour
  confirmExitMessage: 'Are you sure you want to quit the tour?',

  // UI Text & Progress
  showProgress: true,         // Shows "1 of 5" in footer
  nextText: 'Next',           // Next button label
  previousText: 'Back',       // Back button label
  doneText: 'Finish',         // Final button label
  skipText: 'Skip',           // Skip button label

  // Targeting & Scope
  group: 'default',           // Default tour group to scan
  autoScan: true              // Scan DOM for data-spot-* attributes
});
```

---

## 6. Programmatic Controls & Event Lifecycle

### Tour Controls API
```typescript
// Navigation
await tour.start();                  // Starts tour from step 1
await tour.start({ from: 2 });       // Starts tour from step index or ID
await tour.next();                   // Advances to next step
await tour.previous();               // Returns to previous step
await tour.goTo(2);                  // Jumps to step index (0-based) or ID
tour.end();                          // Closes the active tour

// State & Dynamic Updates
await tour.updateSpots();            // Re-scans DOM for dynamic/conditional elements
tour.setTheme('dark');               // Switch theme ('dark' | 'light' | 'auto')
const state = tour.getState();       // { isActive, currentIndex, totalSteps, currentStep }
tour.destroy();                      // Destroys overlay and unbinds listeners
```

### Event Listeners
Spotlight includes a strongly-typed event emitter. Each `.on()` call returns an unbind function:

```typescript
// Step changed
const unsubChange = tour.on('change', ({ step, index, total, previousIndex }) => {
  console.log(`Step changed to ${index + 1}/${total}:`, step.title);
});

// Tour completed
tour.on('complete', () => {
  localStorage.setItem('has_completed_onboarding', 'true');
});

// Tour exited early
tour.on('exit', ({ reason, step, index }) => {
  console.log(`Exited via ${reason} at step ${index + 1}`);
});

// Cleanup when unmounting
unsubChange();
```

Available events: `'start'`, `'change'`, `'next'`, `'previous'`, `'complete'`, `'exit'`, `'spots-updated'`.

---

## 7. Framework Recipes

### React (Reusable Hook Pattern)

Create `useSpotlight.ts`:
```typescript
import { useEffect, useRef, useState, useCallback } from 'react';
import { spotlight, SpotlightControls, SpotlightOptions } from '@cttricks/spotlight';
import '@cttricks/spotlight/styles';

export function useSpotlight(options: SpotlightOptions = {}) {
  const tourRef = useRef<SpotlightControls | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    spotlight(options).then((instance) => {
      if (!isMounted) {
        instance.destroy();
        return;
      }
      tourRef.current = instance;

      instance.on('start', () => setIsActive(true));
      instance.on('complete', () => setIsActive(false));
      instance.on('exit', () => setIsActive(false));
    });

    return () => {
      isMounted = false;
      tourRef.current?.destroy();
      tourRef.current = null;
    };
  }, []);

  const startTour = useCallback(async (startOptions?: { from?: number | string; group?: string }) => {
    if (tourRef.current) {
      await tourRef.current.updateSpots(); // Ensures conditional DOM elements are detected
      await tourRef.current.start(startOptions);
    }
  }, []);

  const endTour = useCallback(() => {
    tourRef.current?.end();
  }, []);

  return {
    tour: tourRef.current,
    startTour,
    endTour,
    isActive
  };
}
```

Usage in component:
```tsx
'use client';

import { useSpotlight } from './useSpotlight';

export function Dashboard() {
  const { startTour } = useSpotlight({ theme: 'auto', highlightColor: '#3b82f6' });

  return (
    <div>
      <button onClick={() => startTour()}>Start Tour</button>
      <div data-spot-id="1" data-spot-name="Analytics" data-spot-summary="Live user stats.">
        Chart View
      </div>
    </div>
  );
}
```

---

### Next.js (App Router / React Server Components)

In Next.js App Router, components default to Server Components. Spotlight interacts with the DOM, so it **must be executed in a Client Component**:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { spotlight, SpotlightControls } from '@cttricks/spotlight';
import '@cttricks/spotlight/styles';

export default function OnboardingTour() {
  const tourRef = useRef<SpotlightControls | null>(null);

  useEffect(() => {
    // Guaranteed to run client-side only
    let active = true;

    spotlight({ theme: 'auto' }).then((tour) => {
      if (!active) {
        tour.destroy();
        return;
      }
      tourRef.current = tour;

      // Auto-trigger for first-time visitors
      const visited = localStorage.getItem('onboarding_seen');
      if (!visited) {
        tour.start();
        tour.on('complete', () => localStorage.setItem('onboarding_seen', 'true'));
      }
    });

    return () => {
      active = false;
      tourRef.current?.destroy();
    };
  }, []);

  return null; // Headless manager or render trigger button
}
```

---

### Vue 3 (Composition API / Nuxt)

```vue
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { spotlight, type SpotlightControls } from '@cttricks/spotlight';
import '@cttricks/spotlight/styles';

const tour = ref<SpotlightControls | null>(null);

onMounted(async () => {
  tour.value = await spotlight({ theme: 'auto' });
});

onBeforeUnmount(() => {
  tour.value?.destroy();
});

const startTour = () => {
  tour.value?.start();
};
</script>

<template>
  <button @click="startTour">Take Tour</button>
  <div data-spot-id="1" data-spot-name="Profile" data-spot-summary="Update your credentials.">
    User Card
  </div>
</template>
```

---

## 8. Dynamic Content & SPAs (Crucial Agent Knowledge)

### Problem: Conditional Rendering & Lazy-Loaded Elements
In React, Vue, or SPAs, elements may not exist in the DOM when the tour initializes (e.g. elements inside an unopened tab, modal, or fetched data).

### Solution: Call `await tour.updateSpots()`
Before starting the tour or opening a step that depends on newly-rendered elements, always call:
```typescript
await tour.updateSpots();
await tour.goTo('new-element-id');
```

---

## 9. Agent Troubleshooting & Validation Checklist

When writing or reviewing code that uses Spotlight, verify the following:

- [ ] **CSS Included:** Is `import '@cttricks/spotlight/styles';` present in the root layout or component?
- [ ] **SSR Safeguard:** Is `spotlight()` isolated to client lifecycle (`useEffect`, `onMounted`, or `'use client'`)?
- [ ] **Cleanup:** Is `tour.destroy()` called in unmount cleanup to avoid lingering SVG overlays?
- [ ] **Step Ordering:** Are steps numbered logically (`data-spot-id="1"`, `data-spot-id="2"`) or using `data-spot-order`?
- [ ] **Media Extensions:** Are media links valid URLs with proper extensions (`.mp4`, `.gif`, `.png`, `.webp`)?
- [ ] **Pill & Round Elements:** Are round buttons/avatars configured with `data-spot-radius="9999"`?
- [ ] **Collision Space:** If an element is tucked tightly in a screen corner, is `data-spot-position` set appropriately or left to `'auto'`?
