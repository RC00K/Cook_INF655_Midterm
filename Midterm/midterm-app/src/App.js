import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import products from './components/Product/ProductData';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import { CartProvider } from './components/Cart/CartContext';
import Banner from './pages/Banner/Banner';
import ProductCollection from './pages/Collection/ProductCollection';
import CartSlideOut from './components/Cart/CartSlideOut';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
