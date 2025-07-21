
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    if (!cartItems.find(p => p.id === item.id)) {
      const updated = [...cartItems, item];
      setCartItems(updated);
      console.log('Cart updated:', updated);
    } else {
      console.log('Item already in cart');
    }
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}