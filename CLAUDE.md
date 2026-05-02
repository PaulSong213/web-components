# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (accessible on network via host: true)
npm run build    # Production build
npm run preview  # Preview production build
```

No test runner or linter is configured.

## Architecture

This is a **Vue 3 + Vite** showcase/portfolio project with 100+ interactive component examples. The main purpose is demonstrating UI patterns: animations, forms, games, ecommerce UIs, CSS visualizations, and more.

### Routing

All component examples are registered as individual top-level routes in [src/router/index.js](src/router/index.js), using dynamic imports for code splitting. A secondary route file [src/router/route1.js](src/router/route1.js) is spread-merged into the main routes array. Routes follow a flat structure — no nesting.

### App Shell

[App.vue](src/App.vue) provides the shell: a `<RouterView>` plus a bottom navigation bar that steps through routes sequentially (prev/next). The bottom nav is hidden when the `VITE_IS_MAKING_VIDEO` env flag is set.

### Components

All examples live as Vue 3 Single File Components in [src/components/](src/components/). They are standalone — each component handles its own state, styling (Tailwind), and any CDN dependencies (e.g. Ionicons loaded via `<script>` tags inside the component).

### Styling

Tailwind CSS 3 with a custom `blob` animation keyframe added in [tailwind.config.js](tailwind.config.js). The `@` alias resolves to `src/`.

### Firebase

[main.js](main.js) initializes Firebase and Analytics using 8 `VITE_*` environment variables (see `.env.example`). Firebase is used in components that require auth or storage — not all components depend on it.

## Adding a New Component

1. Create `src/components/MyComponent.vue`
2. Add a route entry in `src/router/index.js` (or `route1.js`) using a dynamic import:
   ```js
   { path: '/my-component', component: () => import('../components/MyComponent.vue') }
   ```
3. The new route is automatically included in bottom-nav traversal.
