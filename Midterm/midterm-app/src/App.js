import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/Navigation/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Checkout from './pages/Total';
import ChechoutForm from './pages/CheckoutForm';
import Orders from './pages/Orders';
import Success from './pages/Success';
import ProductDetails from './components/Product/ProductDetails';
import { CartProvider } from './components/Cart/CartContext';
import ProtectedRoute from './routes/ProtectedRoute';
import { useStateValue } from './store/StateProvider';
import { auth } from './firebase';
import './App.css';

function App() {  
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  return (
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
            element={<SignIn />} 
          />
          <Route
            path="/signup"
            element={<SignUp />}
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
            path="/checkoutform"
            element={<ChechoutForm />}
          />
          <Route
            path="/orders"
            element={<Orders />}
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
  );
}

export default App;
