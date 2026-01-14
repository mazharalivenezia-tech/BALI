
import { Product, Category } from './types';

export const COLORS = {
  electricBlue: '#00d4ff', // Volt Blue
  pulseOrange: '#F54A02', // Brand Signature
  nitroRed: '#ff0033',    // Nitro Red
  deepObsidian: '#0c0c0c',
  glassBg: 'rgba(255, 255, 255, 0.03)'
};

export const CONTACT_DETAILS = {
  email: 'Darkfashionsports@gmail.com',
  instagram: 'https://www.instagram.com/dark.fashionsports?igsh=MTJyeTc5MDIwd296dA%3D%3D&utm_source=qr',
  facebook: 'https://www.facebook.com/share/p/19Q4etcVGu/?mibextid=wwXIfr'
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Phantom Striker V2',
    category: Category.SPEED,
    price: 145,
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'High-speed technical weave for zero-drag sprinting.'
  },
  {
    id: '2',
    name: 'Nitro Power Compression',
    category: Category.POWER,
    price: 110,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Elite power jersey with reinforced core stabilization.'
  },
  {
    id: '3',
    name: 'Midfield Matrix Elite',
    category: Category.ELITE,
    price: 185,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Total control kit for the underground pitch master.'
  },
  {
    id: '4',
    name: 'Keeper Shield X-1',
    category: Category.POWER,
    price: 160,
    image: 'https://images.unsplash.com/photo-1606902960294-db8efe7a91bf?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Impact-resistant goaltender tech with kinetic grip.'
  },
  {
    id: '5',
    name: 'Wing-Back Volt Armor',
    category: Category.SPEED,
    price: 135,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Ultra-lightweight kit for rapid defensive transitions.'
  },
  {
    id: '6',
    name: 'Deep-Play Catalyst',
    category: Category.ENDURANCE,
    price: 120,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Sweat-wicking stamina gear for the full 90+ minutes.'
  },
  {
    id: '7',
    name: 'Obsidian Captain Kit',
    category: Category.ELITE,
    price: 220,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Premium signature kit for field commanders.'
  },
  {
    id: '8',
    name: 'Sprint-Tech Apex',
    category: Category.SPEED,
    price: 155,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Aerodynamic performance jersey for pure attackers.'
  },
  {
    id: '9',
    name: 'Brute-Force Defender',
    category: Category.POWER,
    price: 140,
    image: 'https://images.unsplash.com/photo-1556316301-d83e50054243?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Heavyweight durability with zero mobility loss.'
  },
  {
    id: '10',
    name: 'Marathon Core Unit',
    category: Category.ENDURANCE,
    price: 115,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Engineered for the hardest-working players on the pitch.'
  },
  {
    id: '11',
    name: 'Stealth Shadow Keeper',
    category: Category.ELITE,
    price: 195,
    image: 'https://images.unsplash.com/photo-1628891890467-b79f2c879758?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'The ultimate goaltender kit in matte obsidian finish.'
  },
  {
    id: '12',
    name: 'Flashpoint Striker',
    category: Category.SPEED,
    price: 165,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Nitro-injected fibers for explosive start-stop movement.'
  },
  {
    id: '13',
    name: 'Tank Unit V3',
    category: Category.POWER,
    price: 150,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Maximum protection for physical defensive play.'
  },
  {
    id: '14',
    name: 'Long-Run Maestro',
    category: Category.ENDURANCE,
    price: 130,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Breathable knit for non-stop pitch coverage.'
  },
  {
    id: '15',
    name: 'Underground Legend Kit',
    category: Category.ELITE,
    price: 250,
    image: 'https://images.unsplash.com/photo-1510051646601-9860a317e897?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Limited edition bespoke performance wear.'
  },
  {
    id: '16',
    name: 'Vortex Sprint Jersey',
    category: Category.SPEED,
    price: 140,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Whirlwind tech for the fastest players in the league.'
  },
  {
    id: '17',
    name: 'Titan Power Plate',
    category: Category.POWER,
    price: 170,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Reinforced plating for high-impact physical matchups.'
  },
  {
    id: '18',
    name: 'Infinite Stamina Shell',
    category: Category.ENDURANCE,
    price: 125,
    image: 'https://images.unsplash.com/photo-1516731415730-0c641bd0d538?q=80&w=1000&auto=format&fit=crop',
    color: 'red',
    description: 'Lightweight endurance tech with zero-heat retention.'
  },
  {
    id: '19',
    name: 'Director Kit X',
    category: Category.ELITE,
    price: 215,
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'Precision mapping for tactical pitch management.'
  },
  {
    id: '20',
    name: 'Racer-Back Pro Soccer',
    category: Category.SPEED,
    price: 130,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6eda1eed15?q=80&w=1000&auto=format&fit=crop',
    color: 'blue',
    description: 'The standard for professional velocity in modern soccer.'
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
