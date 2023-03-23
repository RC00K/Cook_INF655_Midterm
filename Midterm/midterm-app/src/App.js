import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ProductList from './components/Product/ProductList';
import Banner from './pages/Banner/Banner';
import ProductCollection from './pages/Collection/ProductCollection';
import ProductDetails from './pages/ProductDetails';
import CartSlideOut from './components/Cart/CartSlideOut';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="tasks/*" element={<TaskRoutes />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
//   <div>
//   <ProductList />
//   <CartSlideOut />
// </div>
  );
}

export default App;
