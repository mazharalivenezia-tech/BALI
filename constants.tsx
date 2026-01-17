import { Product, Category } from './types';

export const COLORS = {
  magmaOrange: '#FF4500',
  pureWhite: '#FFFFFF',
  deepObsidian: '#050505',
  carbonGrey: '#14161b',
  glassBg: 'rgba(255, 255, 255, 0.02)'
};

export const CONTACT_DETAILS = {
  email: 'Darkfashionsports@gmail.com',
  instagram: 'https://www.instagram.com/dark.fashionsports?igsh=MTJyeTc5MDIwd296dA%3D%3D&utm_source=qr',
  facebook: 'https://www.facebook.com/share/p/19Q4etcVGu/?mibextid=wwXIfr'
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Magma Pitch Kit',
    category: Category.BALL_TEAM,
    subCategory: 'Football (Soccer)',
    price: 145,
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=1000&auto=format&fit=crop',
    color: 'magma',
    description: 'Elite technical jersey with thermal-mapped orange highlights for extreme visibility and high output.'
  },
  {
    id: '2',
    name: 'Obsidian Polo',
    category: Category.INDIVIDUAL_RACKET,
    subCategory: 'Tennis',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    color: 'obsidian',
    description: 'Precision-fit black polo with titanium white accents. Engineered for superior court agility.'
  },
  {
    id: '3',
    name: 'Strike Grappling Gi',
    category: Category.COMBAT,
    subCategory: 'MMA',
    price: 185,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
    color: 'magma',
    description: 'Reinforced carbon-fiber ripstop Gi with magma orange stitching for the elite fighter.'
  },
  {
    id: '4',
    name: 'Hydro-Blade Jammer',
    category: Category.WATER,
    subCategory: 'Swimming',
    price: 160,
    image: 'https://images.unsplash.com/photo-1606902960294-db8efe7a91bf?q=80&w=1000&auto=format&fit=crop',
    color: 'obsidian',
    description: 'Hydrodynamic obsidian surface with minimal drag. Optimized for record-breaking bursts.'
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
}

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'THE MAGMA PROTOCOL',
    excerpt: 'Engineering high-visibility gear for low-light high-intensity field sessions.',
    content: 'Full report on our new Performance Orange fabric technology...',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 25, 2024',
    tags: ['Tech', 'Innovation']
  },
  {
    id: 'b2',
    title: 'KINETIC OBSIDIAN',
    excerpt: 'The psychological advantage of matte black aesthetics in competitive arenas.',
    content: 'Deep dive into performance training with the right gear...',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop',
    date: 'Oct 24, 2024',
    tags: ['Aesthetics', 'Mental']
  }
];