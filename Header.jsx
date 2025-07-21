import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
          alt="Amazon Logo"
          className="logo"
        />
      </Link>

      <div className="location">Deliver to <strong>Pondicherry 605007</strong></div>

      <div className="search-bar">
        <input type="text" placeholder="Search Amazon.in" />
        
      </div>

      <div className="nav-links">
        <Link to="#">🌐 EN</Link>
        <Link to="#">Account & Lists</Link>
        <Link to="#">Returns & Orders</Link>
        <Link to="/cart">🛒 Cart({cartItems.length})</Link>
      </div>
    </header>
  );
};

export default Header;