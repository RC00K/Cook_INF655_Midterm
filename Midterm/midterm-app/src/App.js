import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/Navigation/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import SignInForm from './pages/SignInForm';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import ProductDetails from './components/Product/ProductDetails';
import { CartProvider } from './components/Cart/CartContext';
import { AuthContextProvider } from './components/Auth/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/signin" 
              element={<SignInForm />} 
            />
            <Route 
              path="/product" 
              element={<Products />} 
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/product/:productId" 
              element={<ProductDetails />} 
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
