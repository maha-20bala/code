import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import './App.css';


function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;