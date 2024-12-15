import React from 'react';
import { MenuItem } from '../components/menu/MenuItem';
import { CartSidebar } from '../components/cart/CartSidebar';
import { menuItems } from '../data/menuItems';

export default function Menu() {
  const coffeeItems = menuItems.filter(item => item.category === 'coffee');
  const foodItems = menuItems.filter(item => item.category === 'food');

  return (
    <div className="min-h-screen bg-aqua-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center font-greek">Το Μενού μας</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-greek">Καφέδες</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 font-greek">Σάντουιτς</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <CartSidebar />
      </div>
    </div>
  );
}