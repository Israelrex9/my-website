'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Briefcase, Wrench, PaperPlaneTilt } from '@phosphor-icons/react';
import { ThemeToggle } from './theme-toggle';
import { designTokens } from '@/design-tokens';
import { useTheme } from '@/contexts/theme-context';

export function FloatingNav() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const navItems = [
    { href: '/', label: 'Home', icon: House, external: false, isChat: false },
    { href: '/#work', label: 'Work', icon: Briefcase, external: false, isChat: false },
    // { href: '/#projects', label: 'Projects', icon: Star, external: false, isChat: false },
    { href: '/#stack', label: 'Stack', icon: Wrench, external: false, isChat: false },
    { href: 'http://t.me/israelrex', label: 'Chat', icon: PaperPlaneTilt, external: true, isChat: true },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      // Check if we're on the home page and the hash matches
      const hash = href.replace('/#', '');
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === `#${hash}`;
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform"
      style={{
        background: theme === 'light' 
          ? 'var(--BG-floating-menu, rgba(246, 246, 246, 0.60))'
          : 'var(--BG-floating-menu, rgba(17, 17, 17, 0.60))',
        border: `0.5px solid var(--border-secondary)`,
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderRadius: '40px',
        padding: designTokens.spacing.sm,
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-center gap-4 p-1">
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const linkClassName = `flex items-center gap-1 rounded-4xl px-4 py-3 text-medium transition-all duration-200 ${
              active
                ? 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
                : 'text-[var(--muted-foreground)] hover:bg-[var(--button-hover)] hover:text-[var(--foreground)]'
            }`;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <Icon
                    size={16}
                    weight="fill"
                    className={`transition-transform duration-200 ${
                      item.isChat
                        ? theme === 'light'
                          ? 'text-[var(--foreground)]'
                          : 'text-[var(--primary)]'
                        : ''
                    }`}
                  />
                  <span className={`nav-label text-sm font-medium ${
                    item.isChat 
                      ? theme === 'light' 
                        ? 'text-[var(--foreground)]' 
                        : 'text-[var(--primary)]'
                      : ''
                  }`}>{item.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName}
              >
                <Icon
                  size={16}
                  weight="fill"
                  className={`transition-transform duration-200 ${
                    item.isChat
                      ? theme === 'light'
                        ? 'text-[var(--foreground)]'
                        : 'text-[var(--primary)]'
                      : ''
                  }`}
                />
                <span className={`nav-label text-sm font-medium ${
                  item.isChat 
                    ? theme === 'light' 
                      ? 'text-[var(--foreground)]' 
                      : 'text-[var(--primary)]'
                    : ''
                }`}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-[--border-secondary]" />

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

