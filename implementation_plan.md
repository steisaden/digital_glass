# Implementation Plan: Pixel-Perfect Luxury Port

## Goal
Adapt the design from `Luxury-Portfolio-Website-Design` to be pixel-perfect in the Next.js application.

## Dependencies
- [ ] Install `framer-motion` (or `motion`)
- [ ] Install `lucide-react`
- [ ] Install `clsx` and `tailwind-merge` if needed for standard shadcn-like utils.

## Design System Update
- **Theme**: Sync `globals.css` with `src/styles/theme.css` variables (exact colors, glass values).
- **Fonts**: Ensure `Inter` and `Playfair Display` are applied exactly as in the reference (weights, tracking).

## Component Migration
Migrate the following components from the reference `src/app/components` to our `components/` directory:
1.  **Navigation**: `Navigation.tsx`
2.  **Hero**: `ImpactHero.tsx` (Replace current Hero)
3.  **Metrics**: `MetricsSection.tsx`
4.  **Portfolio**: `TheCollection.tsx` (Replace `PropertyCard` grid)
5.  **Services**: `Infrastructure.tsx` (Replace current Services)
6.  **Testimonials**: `Testimonials.tsx`
7.  **Footer**: `Footer.tsx`
8.  **Background**: Update `NoiseBackground` or adopt `PaperShaderBackground` (Decide on SVG vs Iframe, prefer SVG for performance but match visual).

## Page Assembly
- Update `app/page.tsx` to assemble these new components.

## Verification
- Visual comparison with the reference design (if running locally) or simply ensuring the code structure matches the high-quality reference.
- Verify animations work smoothly (Framer Motion).
- Verify responsive behavior.
