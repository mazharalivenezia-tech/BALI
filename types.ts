
export enum Category {
  SPEED = 'SPEED',
  POWER = 'POWER',
  ENDURANCE = 'ENDURANCE',
  ELITE = 'ELITE'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  color: 'blue' | 'red';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
