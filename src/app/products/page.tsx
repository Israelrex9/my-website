'use client';

import { FloatingNav } from '@/components/floating-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Products() {
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
            <h1 className="mb-4 text-4xl font-bold">Products</h1>
            <p className="text-[var(--muted-foreground)]">
              Showcase your products and projects.
            </p>
          </div>

          {/* Add your products content here */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="mb-2 text-xl font-semibold">Product 1</h2>
              <p className="text-[var(--muted-foreground)]">
                Add your product information here.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="mb-2 text-xl font-semibold">Product 2</h2>
              <p className="text-[var(--muted-foreground)]">
                Add your product information here.
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





