'use client';

import { FloatingNav } from '@/components/floating-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Writings() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-4xl px-6 py-12 pb-32">
        {/* Theme Toggle - Top Right */}
        <div className="mb-8 flex justify-end">
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-bold">Writings</h1>
            <p className="text-[var(--muted-foreground)]">
              Your thoughts, articles, and writings.
            </p>
          </div>

          {/* Add your writings content here */}
          <div className="space-y-6">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="mb-2 text-2xl font-semibold">Article Title</h2>
              <p className="mb-4 text-sm text-[var(--muted-foreground)]">Published on Date</p>
              <p className="text-[var(--muted-foreground)]">
                Add your article content here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}





