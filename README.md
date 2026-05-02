# Web Components Gallery

A curated collection of **100+ interactive web component examples** built with Vue 3 and Tailwind CSS. This project serves as an interactive showcase and learning resource for modern web UI patterns, animations, and design systems.

## Purpose

This gallery demonstrates:
- **Interactive UI Components** — toggles, buttons, form inputs, and navigation patterns
- **Advanced Animations** — CSS transitions, keyframes, and motion design
- **Full-Page Templates** — e-commerce, authentication, dashboards, and complex layouts
- **Web Technology Visualizations** — CSS properties, JavaScript concepts, OOP patterns
- **Real-World Implementations** — games, music players, shopping carts, social media clones

Each component is a fully functional, standalone Vue 3 single-file component that can be explored in the interactive gallery or used as reference code.

## Features

- **Grid Gallery View** — Browse all 100+ components in a responsive grid (2–4 columns)
- **Lazy Loading** — Components load only when they scroll into view for performance
- **Interactive Previews** — Hover over any component to interact with it live without leaving the gallery
- **Direct Source Access** — Click "View Source" to jump to the component's code on GitHub
- **Mobile Responsive** — Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend Framework** — Vue 3 with Composition API
- **Build Tool** — Vite (lightning-fast development and production builds)
- **Styling** — Tailwind CSS 3 with custom animations
- **Routing** — Vue Router 4 (for component organization and deep linking)
- **Backend Services** — Firebase (optional, for components requiring auth/storage)
- **Development** — Node.js, npm

## Project Structure

```
web-components/
├── src/
│   ├── components/              # 140+ Vue component examples
│   │   ├── RoundedToggle.vue    # Interactive UI demos
│   │   ├── ECommerce.vue        # Full-page templates
│   │   ├── CSSFlexboxVisualizer.vue  # Educational visualizers
│   │   └── ...
│   ├── router/
│   │   ├── index.js             # Main route definitions (100+ routes)
│   │   └── route1.js            # Additional routes (lazy-split)
│   ├── App.vue                  # Gallery grid shell
│   ├── ComponentCard.vue         # Grid card with lazy loading
│   ├── main.js                  # Vue app initialization & Firebase config
│   └── index.css                # Global styles
├── public/                      # Static assets (images, logos, favicons)
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies & scripts
```

## Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PaulSong213/web-components.git
   cd web-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173` (or the next available port).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Gallery Controls

- **Hover** over any component card to interact with it
- **Click "View Source"** to see the component's code on GitHub
- **Scroll** to load more components as they come into view
- **Responsive Grid** — automatically adapts from 2 columns (mobile) → 3 (tablet) → 4 (desktop)

## Component Categories

### UI Interactions
Toggles, buttons, dropdowns, selectors, pagination, and form inputs with various animation styles.

### Animations & Transitions
Sliding elements, morphing shapes, gradient effects, spring physics, and keyframe sequences.

### Templates & Layouts
Full-page designs including e-commerce shops, login flows, dashboards, portfolios, and navigation systems.

### Visualizers
Interactive demonstrations of CSS properties (flexbox, grid, positioning, transforms) and JavaScript concepts (array methods, async patterns, OOP).

### Games & Applications
Tic-tac-toe, music player, todo app, counter, and other interactive mini-applications.

## Environment Variables

Create a `.env` file for Firebase integration (optional):

```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_measurementId=your_firebase_measurement_id
VITE_IS_MAKING_VIDEO=false
```

(Firebase is optional; components work without it)

## Adding a New Component

1. Create a new Vue 3 Single File Component in `src/components/`:
   ```vue
   <!-- src/components/MyComponent.vue -->
   <template>
     <section class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
       <!-- Your component markup -->
     </section>
   </template>

   <script>
   export default {
     data() {
       return { /* state */ }
     }
   }
   </script>
   ```

2. Add a route in `src/router/index.js`:
   ```js
   {
     path: '/my-component',
     name: 'My Component',
     component: () => import('../components/MyComponent.vue')
   }
   ```

3. Save and refresh — your component appears in the gallery automatically

## Performance Notes

- **Lazy Loading** — Components load only when scrolling near them (via IntersectionObserver)
- **Code Splitting** — Dynamic imports ensure large components don't block page load
- **Vite Optimization** — Pre-bundling, tree-shaking, and efficient dev HMR
- **Tailwind Purging** — CSS is optimized to include only used classes

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This project is open source. Check `LICENSE` file for details.

## Contributing

Found a bug or want to add a component? Contributions are welcome! 

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Related Projects

- [Point of Sale](https://github.com/PaulSong213/PointOfSale) — Full e-commerce application
- [DataTables Example](https://github.com/PaulSong213/datatables-example) — Data visualization patterns
- [Web Dev Roadmap](https://www.figma.com/file/qUs5tSVOJTsQfQt6IPX8kK/Web-dev-Roadmap) — Learning progression

---

**Built with ❤️ using Vue 3 & Vite**
