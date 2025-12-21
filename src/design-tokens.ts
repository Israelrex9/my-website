/**
 * Design Tokens
 * 
 * Add your custom color, border, and spacing tokens here.
 * These will be used throughout the application with theme support.
 */

export const designTokens = {
  colors: {
    // Light theme colors (from color-light-tokens.json)
    light: {
      background: '#F6F6F6', // BG.main
      surface: '#FCFCFC', // BG.card
      foreground: '#111111', // Text.primary
      muted: '#646464', // Text.secondary
      mutedForeground: '#858585', // Text.tertiary
      border: '#E8E8E8', // border.prim
      accent: '#00F7A1', // Button.primary
      accentForeground: '#111111', // Text.primary (for dark text on accent)
      primary: '#00F7A1', // Button.primary
      primaryForeground: '#111111', // Text.primary
      secondary: '#E7E7E7', // Button.secondary
      secondaryForeground: '#111111', // Text.primary
      hoverColor: '#F0F0F0', // Hover color (light)
      buttonHover: '#DDDDDD', // Button.hover (light theme)
      destructive: '#ef4444', // Error/destructive actions
      destructiveForeground: '#ffffff', // Text on destructive
      // Additional colors from tokens
      card: '#FCFCFC', // BG.card
      input: '#F6F6F6', // Input.Base
      borderSecondary: '#D2D2D2', // border.sec
    },
    
    // Dark theme colors (from color-dark-tokens.json)
    dark: {
      background: '#111111', // BG.main
      surface: '#0F0F0F', // BG.card
      foreground: '#EEEEEE', // Text.primary
      muted: '#B5B5B5', // Text.secondary
      mutedForeground: '#989898', // Text.tertiary
      border: '#252525', // border.prim
      accent: '#00F7A1', // Button.primary
      accentForeground: '#111111', // Dark text on accent
      primary: '#00F7A1', // Button.primary
      primaryForeground: '#111111', // Dark text on primary
      secondary: '#222222', // Button.secondary
      secondaryForeground: '#EEEEEE', // Text.primary
      hoverColor: '#181818', // Hover color (dark)
      buttonHover: '#2C2C2C', // Button.hover (dark theme)
      destructive: '#ef4444', // Error/destructive actions
      destructiveForeground: '#ffffff', // Text on destructive
      // Additional colors from tokens
      card: '#0F0F0F', // BG.card
      input: '#181818', // Input.Base
      borderSecondary: '#434343', // border.sec
    },
  },

  borders: {
    radius: {
      none: '0',
      s: '0.125rem', // Radius.s (2px)
      xs: '0.25rem', // Radius.xs (4px)
      sm: '0.375rem', // Radius.sm (6px)
      md: '0.5rem', // Radius.md (8px)
      xmd: '0.75rem', // Radius.xmd (12px)
      lg: '1rem', // Radius.lg (16px)
      xlg: '1.5rem', // Radius.xlg (24px)
      bg: '2rem', // Radius.bg (32px)
      xbg: '2.5rem', // Radius.xbg (40px)
      full: '9999px', // Full circle (keep as px for extreme values)
    },
    width: {
      none: '0',
      s: '0.0625rem', // border.s (1px)
      xs: '0.125rem', // border.xs (2px)
      sm: '0.25rem', // border.sm (4px)
    },
  },

  spacing: {
    // Spacing scale (converted to rem: 1rem = 16px)
    s: '0.125rem', // Spacing.s (2px)
    xs: '0.25rem', // Spacing.xs (4px)
    sm: '0.375rem', // Spacing.sm (6px)
    md: '0.5rem', // Spacing.md (8px)
    xmd: '0.75rem', // Spacing.xmd (12px)
    lg: '1rem', // Spacing.lg (16px)
    xlg: '1.5rem', // Spacing.xlg (24px)
    bg: '2rem', // Spacing.bg (32px)
    xbg: '2.5rem', // Spacing.xbg (40px)
    wd: '3rem', // Spacing.wd (48px)
    xwd: '3.5rem', // Spacing.xwd (56px)
  },

  // Glassmorphism settings for floating menu (from BG.floating menu)
  glass: {
    light: {
      background: 'rgba(246, 246, 246, 0.6)', // BG.floating menu with alpha 0.6
      border: 'rgba(232, 232, 232, 0.2)', // border.prim with opacity
      backdrop: 'blur(20px)',
    },
    dark: {
      background: 'rgba(17, 17, 17, 0.6)', // BG.floating menu with alpha 0.6
      border: 'rgba(37, 37, 37, 0.2)', // border.prim with opacity
      backdrop: 'blur(20px)',
    },
  },
} as const;

// Type exports for better TypeScript support
export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorToken = typeof designTokens.colors.light;
export type BorderToken = typeof designTokens.borders;
export type SpacingToken = typeof designTokens.spacing;

