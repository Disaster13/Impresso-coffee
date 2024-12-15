export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  category: 'coffee' | 'food';
}

export interface CartItem extends MenuItem {
  quantity: number;
}