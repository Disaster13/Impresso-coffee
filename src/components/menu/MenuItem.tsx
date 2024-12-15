import React from 'react';
import { MenuItem as MenuItemType } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ShoppingCart } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 font-greek">{item.name}</h3>
        <p className="text-gray-600 mb-4 font-greek">{item.description}</p>
        <Button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
          className="w-full flex items-center justify-center gap-2 font-greek"
        >
          <ShoppingCart className="w-4 h-4" />
          Προσθήκη στο καλάθι
        </Button>
      </div>
    </div>
  );
};