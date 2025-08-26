# Kapunka Design System

This style guide documents the foundational design tokens and component standards used throughout the Kapunka project. The system is built on a 4 px/8 px grid and supports light and dark themes.

## Typography
- **Type scale (1.25 ratio):** 12 px, 15 px, 18 px, 24 px, 30 px, 37 px, 46 px
- **Font weights:** 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- **Line heights:**
  - Headings: 1.2
  - Body text: 1.5
  - UI elements: 1.4
- **Letter spacing:**
  - Large headings: −0.02 em (`tracking-tight`)
  - Body text: 0 (`tracking-normal`)
  - Small caps: +0.05 em (`tracking-caps`)

## Color Palette
- **Primary (actions)** – charcoal based
- **Secondary (information)** – sage based
- **Semantic** – success, warning and error scales
- Each palette provides 10 variants (50–900) for flexibility and WCAG AA contrast.

### Example usage
- `bg-primary-500` / `text-primary-50`
- `text-secondary-700` for informational accents
- `bg-success-500` for success states, `bg-warning-500` for warnings, `bg-error-500` for errors

## Spacing & Layout
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64 px
- **Border radius:** 2, 4, 8, 12, 16 px
- Components and layouts align to this grid to maintain rhythm and breathing room.

## Components
- **Buttons:** heights of 32 px (`sm`), 40 px (`default`), 48 px (`lg`) with matching padding and focus states.
- **Inputs:** default height 40 px with consistent padding and rounded corners.
- **Icons:** 16 px, 20 px, 24 px, 32 px for optical balance.
- **Cards/Containers:** use unified border radii and shadow tokens.
- **States:** loading, empty and error states should rely on semantic colors above.

## Accessibility
- All color combinations target WCAG AA (4.5:1) contrast.
- Dark mode uses the same tokens with inverted foreground/background values.

Use these tokens via Tailwind classes defined in `tailwind.config.ts` and the global styles in `styles/globals.css`.
