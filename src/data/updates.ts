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
}

export const updates: Update[] = [
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

