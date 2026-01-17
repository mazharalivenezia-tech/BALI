export enum Category {
  BALL_TEAM = 'Ball/Team Sports',
  INDIVIDUAL_RACKET = 'Individual/Racket Sports',
  COMBAT = 'Combat Sports',
  WATER = 'Water Sports',
  WINTER = 'Winter Sports',
  MOTORSPORTS = 'Motorsports',
  GYMNASTICS = 'Gymnastics',
  ATHLETICS = 'Athletics (Track & Field)',
  CYCLING = 'Cycling',
  EQUESTRIAN = 'Equestrian',
  STRENGTH_WEIGHT = 'Strength/Weight',
  TARGET = 'Target Sports',
  BOARD_DISC = 'Board/Disc Sports',
  MIND = 'Mind Sports'
}

export const CATEGORY_MAP: Record<Category, string[]> = {
  [Category.BALL_TEAM]: ['Football (Soccer)', 'Basketball', 'Cricket', 'Rugby', 'Volleyball', 'Handball', 'Hockey', 'Baseball', 'Lacrosse', 'Water Polo'],
  [Category.INDIVIDUAL_RACKET]: ['Tennis', 'Badminton', 'Golf', 'Table Tennis', 'Squash', 'Archery'],
  [Category.COMBAT]: ['Boxing', 'Judo', 'Karate', 'Taekwondo', 'Wrestling', 'Fencing', 'MMA'],
  [Category.WATER]: ['Swimming', 'Diving', 'Sailing', 'Surfing', 'Water Polo', 'Canoe/Kayak'],
  [Category.WINTER]: ['Skiing (Alpine, Cross-Country)', 'Snowboarding', 'Ice Hockey', 'Curling', 'Figure Skating', 'Bobsleigh'],
  [Category.MOTORSPORTS]: ['Formula 1', 'Rallying', 'Motorcycle Racing'],
  [Category.GYMNASTICS]: ['Artistic', 'Rhythmic', 'Trampoline'],
  [Category.ATHLETICS]: ['Running', 'Jumping (Long Jump, High Jump)', 'Throwing (Shot Put, Javelin)'],
  [Category.CYCLING]: ['Road', 'Track', 'BMX', 'Mountain Biking'],
  [Category.EQUESTRIAN]: ['Dressage', 'Jumping', 'Eventing'],
  [Category.STRENGTH_WEIGHT]: ['Weightlifting', 'Bodybuilding'],
  [Category.TARGET]: ['Shooting', 'Darts', 'Billiards', 'Snooker'],
  [Category.BOARD_DISC]: ['Skateboarding', 'Surfing', 'Kitesurfing', 'Ultimate Frisbee'],
  [Category.MIND]: ['Chess', 'Go', 'Bridge']
};

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory?: string;
  price: number;
  image: string;
  color: 'magma' | 'obsidian';
  availableColors?: string[];
  availableSizes?: string[];
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}