'use client';

import { FloatingNav } from '@/components/floating-nav';
import { designTokens } from '@/design-tokens';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

export default function ArticleMicroInteractions() {
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
            <h1 className="text-4xl font-bold mb-4">The Art of Micro-interactions in Modern UI Design</h1>
            <p className="text-sm text-[var(--muted-foreground)]">Published on December 15, 2024</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Micro-interactions are the subtle, often overlooked details that make digital experiences feel polished and delightful. These small animations and feedback mechanisms can transform a good interface into a great one.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">What Are Micro-interactions?</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Micro-interactions are small, focused interactions that provide feedback, communicate status, or guide user behavior. They can be as simple as a button changing color on hover, or as complex as a loading animation that entertains while data loads.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Why They Matter</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Well-designed micro-interactions can significantly improve user experience by providing immediate feedback, reducing perceived wait times, and making interfaces feel more responsive and human. They help users understand the system's state and guide them through their journey.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-[var(--muted-foreground)]">
              <li>Keep animations subtle and purposeful</li>
              <li>Ensure they enhance rather than distract</li>
              <li>Maintain consistency across your product</li>
              <li>Consider performance implications</li>
              <li>Test with real users to ensure they add value</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Conclusion</h2>
            <p className="mb-4 text-[var(--muted-foreground)]">
              Micro-interactions are a powerful tool in a designer's toolkit. When used thoughtfully, they can elevate the user experience and create products that feel more polished and engaging. The key is to find the right balance between functionality and delight.
            </p>
          </div>
        </article>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}

