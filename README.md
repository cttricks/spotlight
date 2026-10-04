![Spotlight.JS OgBanner](https://repository-images.githubusercontent.com/847267775/7c287ba8-4b90-4b2c-84a5-efcc0bd94351)

# Spotlight.js

[![npm version](https://img.shields.io/badge/Spotlight.js-v2.1.0-red?style=flat-square)](https://www.npmjs.com/package/spotlight-js)
[![license](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![Playground](https://img.shields.io/badge/Live-Playground-success?style=flat-square)](https://spotlight-js.cttricks.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg?style=flat-square)](#)

**The zero-dependency site tour engine for modern web apps.**  
Direct user focus with declarative HTML annotations, fluid SVG cutout morphing, and adaptive theming.

[**Explore Live Playground →**](https://spotlight-js.cttricks.com) · [**Read Documentation →**](./docs) · [**Why Spotlight.js?**](https://spotlight-js.cttricks.com#why-i-made-this) · [**Report Issue →**](https://github.com/cttricks/spotlight.js/issues)


## Why Spotlight.js?

Traditional onboarding libraries force you to manage detached 200-line JSON config arrays paired with brittle CSS selectors (`.btn-primary > div:first-child`). The second a teammate refactors a class name, the tour silently breaks.

**Spotlight.js flips this model:** your DOM elements declare their own tour steps in-place using native `data-spot-*` attributes.

- **Zero External Dependencies** — Written in pure TypeScript with lightweight hardware-accelerated SVG (~25KB gzipped).
- **100% Declarative Markup** — Annotate elements directly with `data-spot-name`, `data-spot-summary`, and `data-spot-media`.
- **Fluid Cutout Morphing** — Smooth cubic-bezier transitions glide between target elements of any shape or size.
- **Collision-Aware Positioning** — Auto-flips (top, bottom, left, right) with boundary clamping and dynamically tethered arrows.
- **Rich Media Embeds** — Seamlessly renders looping MP4/WebM videos, animated GIFs, or responsive images in popovers.
- **Adaptive Theme Engine** — Real-time `'auto'` (system sync), `'dark'`, and `'light'` color modes.
- **Universal & SSR-Safe** — Works out-of-the-box with React, Next.js, Vue, Svelte, Astro, or via `esm.sh` in plain HTML.
- **Production Proven** — Built and dogfooded across production dashboards at [Dotix](https://spotlight-js.cttricks.com#why-i-made-this).


## 📦 Installation

Install via your preferred package manager:

```bash
npm install spotlight-js
# or: pnpm add spotlight-js | yarn add spotlight-js | bun add spotlight-js
```

### Instant Drop-in via `esm.sh` (No Build Step)

```html
<!-- Include Stylesheet -->
<link rel="stylesheet" href="https://esm.sh/spotlight-js/dist/styles/spotlight.css">

<!-- Import & Start -->
<script type="module">
  import { spotlight } from 'https://esm.sh/spotlight-js';
  const tour = await spotlight();
  tour.start();
</script>
```


## ⚡ 30-Second Quickstart

### 1. Tag your elements in HTML or JSX

```html
<button 
  data-spot-id="search-btn"
  data-spot-name="Instant Search" 
  data-spot-summary="Press ⌘K anytime to search documents and shortcuts."
  data-spot-media="/assets/search-preview.mp4"
  data-spot-position="bottom">
  Search (⌘K)
</button>
```

### 2. Launch in JavaScript / TypeScript

```typescript
import { spotlight } from 'spotlight-js';
import 'spotlight-js/styles';

const tour = await spotlight({
  theme: 'auto',              // 'light' | 'dark' | 'auto' (OS color sync)
  highlightColor: '#ffffff',  // Custom stroke & accent color
  backdropBlur: 4             // Glassmorphism backdrop blur (px)
});

tour.start();
```


## Programmatic Controls

```typescript
tour.start();            // Start tour from step 1
tour.start({ from: 2 }); // Start from specific step ID or index
tour.next();             // Advance to next step
tour.previous();         // Return to previous step
tour.goTo(3);            // Jump directly to step index
tour.end();              // Close the active tour
tour.setTheme('dark');   // Switch theme live ('light' | 'dark' | 'auto')
tour.destroy();          // Unbind all event listeners and remove DOM overlay
```

> **Need multi-tour flows?** Tag elements with `data-spot-group="billing"` and launch isolated sequences using `tour.start({ group: 'billing' })`.

## 🤖 Built for AI Pair Programmers

Spotlight.js ships with a built-in agent skill specification ([`SKILL.md`](./SKILL.md)).

When using **Claude Code**, **Cursor**, **Codex**, or **Antigravity** in your project, simply prompt your agent:
> *"Read `node_modules/spotlight-js/SKILL.md` and implement an onboarding tour for our dashboard."*

The agent will automatically know all declarative `data-spot-*` attributes, SSR safeguards, and framework recipes without guessing.

## Complete Documentation

Detailed specifications, API references, and framework recipes are organized in the [`docs/`](./docs) directory:

| Guide | Description |
| :--- | :--- |
| [**AI Agent Skill (SKILL.md)**](./SKILL.md) | Agent prompt instructions, declarative cheat-sheet, and framework recipes for Claude Code, Cursor, Codex, and Antigravity. |
| [**Data Attributes Reference**](./docs/data-attributes-spec.md) | Complete specification for all `data-spot-*` attributes, media types, and grouping. |
| [**Framework & CDN Integration**](./docs/framework-cdn-guide.md) | Setup recipes for Next.js (App & Pages router), React hooks, Vue, Astro, and CDN script tags. |
| [**UI, Animation & Theme Design**](./docs/ui-animation-design.md) | Cutout morphing mechanics, glassmorphic popover styling, and CSS token overrides. |
| [**Architecture & API Reference**](./docs/architecture.md) | Engine lifecycle state machine, typed event emitters, collision detection, and SSR safety. |


## Live Playground

Tweak highlight strokes, cutout radiuses, backdrop opacities, and animation timings in real-time on our official showcase:

👉 [**spotlight-js.cttricks.com**](https://spotlight-js.cttricks.com#configurator)


## Contributing & Community

Contributions, issues, and feature requests are welcome!
- See [Contribution.md](./Contribution.md) for local development setup.
- File bug reports and proposals on [GitHub Issues](https://github.com/cttricks/spotlight.js/issues).

> **AI Disclosure** 🤖
>
> This project was developed with the assistance of [Antigravity](https://antigravity.google/). I used it to improve and refine the library, while the [playground/demo-site](https://spotlight-js.cttricks.com) were completely generated by [Antigravity](https://antigravity.google/).
>
> — Tanish


MIT © [Tanish Raj](https://github.com/cttricks)
