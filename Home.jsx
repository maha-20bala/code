import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductCard from './ProductCard';
import './Home.css';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <main className="home">
      <h1>Welcome to Amazon 🛒</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;