'use client';

import { FloatingNav } from '@/components/floating-nav';
import { designTokens } from '@/design-tokens';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

export default function CardComponent() {
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
            <h1 className="text-4xl font-bold mb-4">Card Component</h1>
            <p className="text-sm text-[var(--muted-foreground)]">Published on January 10, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              A flexible and reusable card component that provides a clean container for displaying content. Perfect for dashboards, product listings, and content organization.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Features</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-[var(--muted-foreground)]">
              <li>Multiple layout options: header, body, and footer sections</li>
              <li>Image support with aspect ratio control</li>
              <li>Hover effects and interactive states</li>
              <li>Responsive design that adapts to all screen sizes</li>
              <li>Customizable padding and spacing</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Usage</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              The card component serves as a versatile container for various types of content. It can be used standalone or as part of a grid layout. The component is fully customizable and supports both static and interactive content.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Layout Options</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Cards can include optional header and footer sections, allowing for flexible content organization. The body section can contain any content type, from text and images to complex interactive elements. This flexibility makes the card component suitable for a wide range of use cases.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Design Principles</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              The card component follows modern design principles with subtle shadows, rounded corners, and clean borders. It maintains visual consistency while providing enough flexibility to adapt to different content types and contexts. The design ensures proper visual hierarchy and readability.
            </p>
          </div>
        </article>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}

