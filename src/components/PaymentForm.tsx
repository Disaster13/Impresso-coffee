import React, { useState } from 'react';
import { CreditCard, HelpCircle } from 'lucide-react';

export default function PaymentForm() {
  const [showCVVHelp, setShowCVVHelp] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-coffee-dark">Payment Details</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <div className="mt-1 relative">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="1234 5678 9012 3456"
            />
            <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="MM/YY"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVV
              <button
                type="button"
                className="ml-1 inline-flex items-center"
                onMouseEnter={() => setShowCVVHelp(true)}
                onMouseLeave={() => setShowCVVHelp(false)}
              >
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </button>
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="123"
            />
            {showCVVHelp && (
              <div className="absolute mt-1 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                The CVV is the 3-digit security code on the back of your card
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
          <textarea
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-aqua-dark focus:border-aqua-dark"
            rows={3}
            placeholder="Enter your full delivery address"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-aqua-dark text-white py-2 px-4 rounded-md hover:bg-aqua transition"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
}