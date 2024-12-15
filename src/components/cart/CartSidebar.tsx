import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const CartSidebar: React.FC = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="fixed top-20 right-4 w-72 bg-white rounded-lg shadow-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-greek">Καλάθι Αγορών</h3>
        <ShoppingBag className="w-5 h-5 text-aqua-dark" />
      </div>
      
      {state.items.length === 0 ? (
        <p className="text-gray-500 text-center py-4 font-greek">Το καλάθι είναι άδειο</p>
      ) : (
        <>
          <div className="space-y-4 max-h-96 overflow-auto">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium font-greek">{item.name}</p>
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <Link to="/order">
              <Button className="w-full font-greek">
                Ολοκλήρωση Παραγγελίας
              </Button>
            </Link>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="w-full text-sm text-red-500 hover:text-red-700 font-greek"
            >
              Άδειασμα καλαθιού
            </button>
          </div>
        </>
      )}
    </div>
  );
};