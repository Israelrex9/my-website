'use client';

import { useTheme } from '@/contexts/theme-context';
import { Moon, Sun, Monitor } from '@phosphor-icons/react';

export function ThemeToggle() {
  const { themeMode, setThemeMode, theme } = useTheme();

  const modes: Array<{ mode: 'light' | 'dark' | 'system'; icon: typeof Sun; label: string }> = [
    { mode: 'light', icon: Sun, label: 'Light' },
    { mode: 'dark', icon: Moon, label: 'Dark' },
    { mode: 'system', icon: Monitor, label: 'System' },
  ];

  return (
    <div 
      className="flex items-center"
      style={{
        backgroundColor: 'var(--secondary)',
        padding: '2px',
        gap: '2px',
        borderRadius: '24px',
      }}
    >
      {modes.map(({ mode, icon: Icon, label }) => {
        const isActive = themeMode === mode;

        return (
          <button
            key={mode}
            onClick={() => setThemeMode(mode)}
            style={{
              backgroundColor: isActive ? 'var(--background)' : 'transparent',
              padding: '8px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            className="transition-all duration-200"
            title={`Switch to ${label} theme`}
          >
            <Icon
              size={20}
              weight={'fill'}
              style={{
                color: isActive 
                  ? theme === 'dark' 
                    ? 'var(--primary)' 
                    : 'var(--primary-foreground)'
                  : 'var(--muted-foreground)',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

