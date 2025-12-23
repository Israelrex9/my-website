'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { designTokens } from '@/design-tokens';
import { Envelope, TwitterLogo, GithubLogo, DribbbleLogo} from '@phosphor-icons/react';
import { sortedUpdates } from '@/data/updates';
import { useTheme } from '@/contexts/theme-context';

export default function Home() {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('Writings');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filters = ['Writings', 'Components', 'Projects', 'Work'];

  // Filter updates based on selected filter
  const filteredUpdates = sortedUpdates.filter(update => update.category === selectedFilter);

  // Validate email format (must contain @ and domain with dot)
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = isValidEmail(email);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid) return;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Failed to subscribe:', response.status, errorData);
        return;
      }

      // Mark as subscribed and clear the input
      setIsSubscribed(true);
      console.log('Subscribed:', email);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="responsive-container flex flex-col mx-auto w-full pt-24 pb-24 px-4"
        style={{ 
          gap: designTokens.spacing.xwd
        }}
      >
        {/* Header/Profile Section */}
        <div className="flex flex-col" style={{ gap: designTokens.spacing.md }}>
          {/* Profile Picture with Name and Title */}
          <div 
            className="mb-6 flex items-center"
            style={{ gap: designTokens.spacing.lg }}
          >
            <div 
              className="h-12 w-12 shrink-0 overflow-hidden bg-[--surface]"
              style={{ borderRadius: designTokens.borders.radius.lg }}
            >
        <Image
                src="/profile-picture.png"
                alt="Israel Rex"
                width={48}
                height={48}
                className="h-full w-full object-cover"
          priority
        />
            </div>
            
            <div className="flex flex-col" style={{ gap: designTokens.spacing.sm }}>
              <h1 className="text-base font-medium text-foreground" style={{ lineHeight: '100%' }}>Israel Rex</h1>
              <p className="text-base font-medium text-[--muted]" style={{ lineHeight: '100%', color: 'var(--muted-foreground)' }}>Product Designer at PearProtocol</p>
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="mb-6 space-y-3">
            <p className="text-[--muted]" style={{ color: 'var(--muted)' }}>
              I&apos;m a founding designer at PearProtocol, a product designer and a design engineer. I design and build software products that feel magical, yet simple and intuitive.
            </p>
            <p className="text-[--muted]" style={{ color: 'var(--muted)' }}>
              Recently, I am picking interest in UI micro interactions and sharing my thoughts through writings and videos. Look forward to my first writing piece.
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap gap-2">
            {/* <a
              href="mailto:rex@xelmar.co"
              className="flex items-center py-3 px-6 text-xs text-foreground transition-colors"
              style={{ 
                gap: designTokens.spacing.sm, 
                borderRadius: designTokens.borders.radius.xbg,
                backgroundColor: 'var(--secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            >
              <Envelope size={15} color="currentColor" weight='fill' />
              Mail
            </a> */}
            {/* <a
              href="https://www.linkedin.com/in/israel-rex/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition-colors"
              style={{
                borderRadius: designTokens.borders.radius.xbg,
                backgroundColor: 'var(--secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            >
              <LinkedinLogo size={14} color="currentColor" weight='fill'/>
              Linkedin
            </a> */}
            <a
              href="https://x.com/israelxrex"
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition-colors"
              style={{
                borderRadius: designTokens.borders.radius.xbg,
                backgroundColor: 'var(--secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            >
              <TwitterLogo size={15} color="currentColor" weight='fill' />
              Twitter
          </a>
          <a
              href="https://github.com/Israelrex9"
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition-colors"
              style={{
                borderRadius: designTokens.borders.radius.xbg,
                backgroundColor: 'var(--secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            >
              <GithubLogo size={14} color="currentColor" weight='fill' />
              Github
            </a>
            <a
              href="https://dribbble.com/IsraelRex"
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition-colors"
              style={{
                borderRadius: designTokens.borders.radius.xbg,
                backgroundColor: 'var(--secondary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            >
              <DribbbleLogo size={14} color="currentColor" weight='fill' />
              Dribbble
            </a>
          </div>
        </div>

        {/* Mailing List Section */}
        <div 
          className="p-6 gap-4 border border-[var(--border)] bg-[var(--card)]"
          style={{ borderRadius: designTokens.borders.radius.lg }}
        >
          <p className="mb-4 text-sm font-normal text-[--muted-foreground]" style={{ color: 'var(--muted-foreground)' }}>
            Join my mailing list, to be the first to know when I release my first writing piece.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-xs rounded-md border border-[var(--border)] bg-[var(--input)] p-3 text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring focus:ring-[var(--border-secondary)]"
            />
            <button
              type="submit"
              disabled={!isEmailValid || isSubscribed}
              className={`rounded-lg bg-[var(--primary)] px-4 py-3 font-medium text-xs text-[var(--primary-foreground)] transition-colors ${
                isEmailValid && !isSubscribed
                  ? 'opacity-100 hover:opacity-90 cursor-pointer' 
                  : 'opacity-80 cursor-not-allowed'
              }`}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>

        <div className="flex flex-col" style={{ gap: '1rem' }}>
          {/* Content Filter/Navigation */}
          <div className="flex gap-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`cursor-pointer px-4 py-2 text-xs transition-colors ${
                  selectedFilter === filter
                    ? ''
                    : 'bg-transparent text-[--muted-foreground] hover:text-foreground'
                }`}
                style={{
                  borderRadius: designTokens.borders.radius.xbg,
                  ...(selectedFilter === filter
                    ? theme === 'dark'
                      ? { backgroundColor: '#ffffff', color: '#000000' }
                      : { backgroundColor: '#000000', color: '#ffffff' }
                    : {})
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Updates Section */}
          <div className="space-y-6">
          {filteredUpdates.length === 0 ? (
            <p className="text-[--muted-foreground]">No updates found for this filter.</p>
          ) : (
            filteredUpdates.map((update, index) => {
              const isWork = update.category === 'Work';
              const content = (
                <div
                  className="transition-colors"
                  style={{
                    display: 'flex',
                    padding: 'var(--Spacing-xmd, 0.75rem)',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 'var(--Spacing-xs, 0.25rem)',
                    alignSelf: 'stretch',
                    borderRadius: 'var(--Radius-md, 0.5rem)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={isWork ? undefined : (e) => {
                    e.currentTarget.style.backgroundColor = 'var(--button-hover)';
                  }}
                  onMouseLeave={isWork ? undefined : (e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <h2 className="text-base font-medium text-[--foreground]" style={{ color: 'var(--foreground)' }}>
                    {update.title}
                  </h2>
                  <p className="text-[--muted-foreground]" style={{ color: 'var(--muted-foreground)' }}>
                    {update.description}
                  </p>
                </div>
              );

              return <div key={index}>{content}</div>;
            })
          )}
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}
