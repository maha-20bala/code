import { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <p>Rating: {item.rating}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;