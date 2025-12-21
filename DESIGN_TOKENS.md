# Design Tokens Guide

This file explains how to use and customize the design tokens in your portfolio.

## File Location

All design tokens are defined in `src/design-tokens.ts`

## Structure

### Colors

Colors are organized by theme (light/dark). Each theme has:
- `background` - Main page background
- `surface` - Card/container backgrounds
- `foreground` - Primary text color
- `muted` - Secondary text color
- `mutedForeground` - Tertiary text color
- `border` - Border colors
- `accent` - Accent color (used for highlights, active states)
- `accentForeground` - Text on accent backgrounds
- `primary` - Primary action colors
- `primaryForeground` - Text on primary buttons
- `secondary` - Secondary action colors
- `secondaryForeground` - Text on secondary buttons
- `destructive` - Error/destructive action colors
- `destructiveForeground` - Text on destructive buttons

### Borders

- `radius` - Border radius values (none, sm, md, lg, xl, full)
- `width` - Border width values (none, thin, medium, thick)

### Spacing

Spacing scale from `xs` (4px) to `6xl` (96px)

### Glass Effect

Settings for the floating navigation glassmorphism effect:
- `background` - Glass background color with opacity
- `border` - Glass border color with opacity
- `backdrop` - Backdrop blur value

## How to Use

### In TypeScript/React Components

```typescript
import { designTokens } from '@/design-tokens';

// Use spacing
const padding = designTokens.spacing.lg; // "1rem"

// Use border radius
const borderRadius = designTokens.borders.radius.md; // "0.5rem"

// Use colors (theme-aware via CSS variables)
<div className="bg-[var(--background)] text-[var(--foreground)]">
```

### In CSS/Tailwind

The color tokens are automatically converted to CSS variables and can be used like:

```css
.my-element {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

```tsx
<div className="bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]">
```

## Customization

1. Open `src/design-tokens.ts`
2. Modify the color values in the `light` and `dark` objects
3. Adjust spacing, border radius, or glass effect settings as needed
4. The changes will automatically apply throughout the application

## CSS Variables

The design tokens are automatically synced to CSS variables in `src/app/globals.css`. 
When you update the tokens, make sure to also update the corresponding CSS variables
in `:root.light` and `:root.dark` sections of globals.css for full compatibility.





