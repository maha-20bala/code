import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
   const[rating,setRating]=useState(0);
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <h4>Price : ₹{product.price}</h4>
      <h4>Rating :  {product.rating}</h4>
      <div className="btn-group">
        <Link to={`/product/${product.id}`}>
          <button className ="view-btn">View</button> </Link>
        
        <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}


export default ProductCard;