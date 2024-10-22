import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Copilot from './components/Copilot';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Checkout from './pages/CheckOut';
import Account from './pages/Account';
import CustomerService from './pages/CustomerService';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import ShopKeeper from './pages/ShopKeeper';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <main className="flex-grow container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/shopkeeper" element={<ShopKeeper />} />
            </Routes>
          </main>
          <Footer />
          <Copilot />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
