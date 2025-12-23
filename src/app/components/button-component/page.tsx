'use client';

import { FloatingNav } from '@/components/floating-nav';
import { designTokens } from '@/design-tokens';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

export default function ButtonComponent() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div 
        className="responsive-container flex flex-col mx-auto w-full pt-24 pb-24 px-4"
        style={{ 
          gap: designTokens.spacing.xwd
        }}
      >
        {/* Back Link */}
        <Link 
          href="/"
          className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>

        {/* Component Content */}
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Button Component</h1>
            <p className="text-sm text-[var(--muted-foreground)]">Published on January 15, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              A versatile and accessible button component built with modern design principles. This component provides multiple variants, states, and sizes to fit any use case in your application.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Features</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-[var(--muted-foreground)]">
              <li>Multiple variants: primary, secondary, outline, and ghost</li>
              <li>Different sizes: small, medium, and large</li>
              <li>Full accessibility support with ARIA attributes</li>
              <li>Loading and disabled states</li>
              <li>Icon support for enhanced visual communication</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Usage</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              The button component is designed to be flexible and easy to use. Simply import it and customize it with props to match your design system. It follows accessibility best practices and includes proper focus states and keyboard navigation.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Variants</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              The component includes four main variants: primary for main actions, secondary for supporting actions, outline for less prominent actions, and ghost for minimal visual impact. Each variant is carefully designed to maintain visual hierarchy while ensuring consistency across your interface.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Accessibility</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Built with accessibility in mind, this component includes proper ARIA labels, keyboard navigation support, and focus indicators. It meets WCAG 2.1 AA standards and works seamlessly with screen readers and other assistive technologies.
            </p>
          </div>
        </article>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}

