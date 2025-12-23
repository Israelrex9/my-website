/**
 * Updates Data
 * 
 * Store all your work, projects, writings, and components here.
 * Updates are automatically sorted by date (most recent first).
 */

export interface Update {
  title: string;
  description: string;
  category: 'Work' | 'Projects' | 'Writings' | 'Components';
  date: string; // Format: YYYY-MM-DD
  slug?: string; // Optional slug for writings/articles
}

export const updates: Update[] = [
  {
    title: 'Paynest',
    description: 'A modern payment management platform designed to simplify financial transactions for individuals and businesses. Built with a focus on user experience and security.',
    category: 'Projects',
    date: '2025-01-12',
  },
  {
    title: 'The Art of Micro-interactions in Modern UI Design',
    description: 'Exploring how subtle animations and micro-interactions can enhance user experience and create more engaging digital products.',
    category: 'Writings',
    date: '2025-12-15',
    slug: 'art-of-micro-interactions',
  },
  {
    title: 'Building Design Systems That Scale',
    description: 'A comprehensive guide on creating and maintaining design systems that grow with your product and team.',
    category: 'Writings',
    date: '2025-11-20',
    slug: 'building-design-systems-that-scale',
  },
  {
    title: 'Button Component',
    description: 'A versatile and accessible button component built with modern design principles. Provides multiple variants, states, and sizes to fit any use case.',
    category: 'Components',
    date: '2025-01-15',
    slug: 'button-component',
  },
  {
    title: 'Card Component',
    description: 'A flexible and reusable card component that provides a clean container for displaying content. Perfect for dashboards, product listings, and content organization.',
    category: 'Components',
    date: '2025-01-10',
    slug: 'card-component',
  },
  {
    title: 'Head of Product Design',
    description: 'I work on the product team at PearProtocol, where I focus on designing the end to end trading experience for expert to beginner traders, through feedbacks.',
    category: 'Work',
    date: '2024-01-15',
  },
  {
    title: 'Lead Web3 Product Designer',
    description: 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.',
    category: 'Work',
    date: '2023-06-10',
  },
  {
    title: 'Lead Web3 Product Designer',
    description: 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.',
    category: 'Work',
    date: '2022-03-20',
  },
];

// Sort by date (most recent first)
export const sortedUpdates = [...updates].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

