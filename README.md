# Iluro Garden 3D

A modern plant discovery experience built with React, TypeScript, and Three.js.  
Iluro Garden 3D combines a polished storefront-style UI with interactive 3D plant previews, category browsing, and a lightweight cart flow.

## Features

- Interactive 3D plant rendering using `@react-three/fiber` + `@react-three/drei`
- Plant discovery by category with dedicated category pages
- Individual plant detail pages with care information and related plants
- Search suggestions with quick navigation to plant pages
- Zustand-powered cart with add, remove, clear, and discounted pricing
- Styled with MUI and a custom dark garden theme
- Client-side routing with React Router

## Tech Stack

- React 19
- TypeScript
- Vite
- Material UI (MUI)
- Three.js ecosystem (`three`, `@react-three/fiber`, `@react-three/drei`)
- Zustand
- React Router
- ESLint + Biome

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ (or compatible)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview built app locally
- `npm run lint` - Run ESLint
- `npm run format` - Format project files with Biome

## App Routes

- `/` - Home page (categories, featured plants, offers)
- `/about` - About page
- `/cart` - Cart page
- `/category/:categoryId` - Category listing page
- `/plant/:plantSlug` - Plant detail page

## Project Structure

```text
src/
	components/      Reusable UI and 3D presentation components
	constants/       Plant data, categories, and asset URL helpers
	pages/           Route-level page components
	store/           Zustand store for cart state
	utils/           Helper utilities (for example, slug generation)
```

## Data and Assets

- Plant catalog is defined in `src/constants/plantsData.ts` and adapted into card models.
- 3D models and images are loaded from public blob URLs configured in `src/constants/assetUrls.ts`.

## Notes

- If remote model assets are unavailable, the UI shows graceful loading/error states for 3D panels.
- Cart state is currently in-memory (reset on page refresh).

## License

No license has been specified yet. Add a `LICENSE` file if you plan to publish this repository publicly.
