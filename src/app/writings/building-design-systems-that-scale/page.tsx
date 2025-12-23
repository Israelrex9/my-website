'use client';

import { FloatingNav } from '@/components/floating-nav';
import { designTokens } from '@/design-tokens';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

export default function ArticleDesignSystems() {
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

        {/* Article Content */}
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Building Design Systems That Scale</h1>
            <p className="text-sm text-[var(--muted-foreground)]">Published on November 20, 2024</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              A well-architected design system is the foundation of scalable product development. It enables teams to build faster, maintain consistency, and create better user experiences at scale.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">The Foundation</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Every great design system starts with a solid foundation: design tokens. These are the atomic values that define colors, typography, spacing, and other visual properties. By centralizing these decisions, you ensure consistency across all touchpoints.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Component Architecture</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Components should be built with composability in mind. Start with primitive components and build up to more complex ones. This approach allows for flexibility while maintaining consistency. Each component should be well-documented, tested, and versioned.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Documentation and Governance</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              A design system is only as good as its documentation. Clear guidelines, usage examples, and accessibility considerations are essential. Establish governance processes to ensure the system evolves in a controlled, thoughtful manner.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Scaling Strategies</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-[var(--muted-foreground)]">
              <li>Start small and iterate based on real usage</li>
              <li>Involve both designers and developers in the process</li>
              <li>Create clear contribution guidelines</li>
              <li>Regularly audit and refactor components</li>
              <li>Balance flexibility with consistency</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Conclusion</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Building a design system that scales requires careful planning, strong collaboration, and continuous iteration. The investment pays off in faster development cycles, better consistency, and improved user experiences across your entire product ecosystem.
            </p>
          </div>
        </article>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}

