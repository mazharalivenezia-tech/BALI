
import { Product, Category } from './types';

export const COLORS = {
  electricBlue: '#0369A1', // Deep Tactical Blue
  pulseOrange: '#C2410C', // Matte Safety Orange
  nitroRed: '#BE123C',    // Crimson Matte Red
  deepObsidian: '#080808',
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
    name: 'Total Control Pitch Kit',
    category: Category.BALL_TEAM,
    subCategory: 'Football (Soccer)',
    price: 145,
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'High-ventilation technical jersey engineered for football and team-based pitch dynamics.'
  },
  {
    id: '2',
    name: 'Court Matrix Polo',
    category: Category.INDIVIDUAL_RACKET,
    subCategory: 'Tennis',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Precision-fit polo with reinforced shoulder seams for tennis and racket sport mobility.'
  },
  {
    id: '3',
    name: 'Tactical Combat Gi',
    category: Category.COMBAT,
    subCategory: 'MMA',
    price: 185,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Reinforced ripstop fabric designed for elite grappling, Judo, and MMA conditioning.'
  },
  {
    id: '4',
    name: 'Streamline Competition Jammer',
    category: Category.WATER,
    subCategory: 'Swimming',
    price: 160,
    image: 'https://images.unsplash.com/photo-1606902960294-db8efe7a91bf?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Ultra-compressed hydrodynamic surface for competitive swimming and diving.'
  },
  {
    id: '5',
    name: 'Summit Performance Shell',
    category: Category.WINTER,
    subCategory: 'Skiing (Alpine, Cross-Country)',
    price: 135,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Three-layer thermal insulation with moisture management for alpine and cross-country skiing.'
  },
  {
    id: '6',
    name: 'GP Racing Tech Jacket',
    category: Category.MOTORSPORTS,
    subCategory: 'Formula 1',
    price: 120,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Fire-resistant aesthetic outerwear engineered for high-speed endurance racing.'
  },
  {
    id: '7',
    name: 'Aero-Balance Singlet',
    category: Category.GYMNASTICS,
    subCategory: 'Artistic',
    price: 220,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Seamless four-way stretch leotard for rhythmic and artistic gymnastics precision.'
  },
  {
    id: '8',
    name: 'Kinetic Track Singlet',
    category: Category.ATHLETICS,
    subCategory: 'Running',
    price: 155,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Ultralight aerated mesh designed for sprinting, hurdles, and long-distance track events.'
  },
  {
    id: '9',
    name: 'Endurance Road Bib',
    category: Category.CYCLING,
    subCategory: 'Road',
    price: 140,
    image: 'https://images.unsplash.com/photo-1556316301-d83e50054243?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Ergonomic padding and aero-contoured sleeves for road and track cycling.'
  },
  {
    id: '10',
    name: 'Titan Pro Lifting Singlet',
    category: Category.STRENGTH_WEIGHT,
    subCategory: 'Weightlifting',
    price: 115,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Heavy-duty compression for core stability during Olympic weightlifting and bodybuilding.'
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
    title: 'HYPER-FABRIC DISCOVERY',
    excerpt: 'How we engineered a textile that absorbs sweat and reflects kinetic heat.',
    content: 'Full story about our technical manufacturing process...',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 24, 2024',
    tags: ['Tech', 'Innovation']
  },
  {
    id: 'b2',
    title: 'THE 0.01% PROTOCOL',
    excerpt: 'Maximizing your explosive power through kinetic uniform alignment.',
    content: 'Deep dive into performance training with the right gear...',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop',
    date: 'Oct 23, 2024',
    tags: ['Training', 'Power']
  }
];
