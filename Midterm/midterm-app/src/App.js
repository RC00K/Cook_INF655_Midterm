import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';
import NavBar from './pages/Navigation/NavBar';
import { auth, firestore } from './firebase/config';
import { loadCollections } from './firebase/helpers';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import ProductDetails from './components/Product/ProductDetails';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Success from './pages/Success';
import { cartActions } from './store/CartSlice';
import { productActions } from './store/ProductSlice';
import { userActions } from './store/UserSlice';

function App() {  
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(productActions.LOADING_PRODUCTS(true));
    loadCollections("products")
      .then((response) => {
        dispatch(productActions.SET_ALL_PRODUCTS({ products: response }));
      })
      .catch((err) => console.error(err));
    dispatch(productActions.LOADING_PRODUCTS(false));
  }, []);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(
          userActions.SET_USER({
            uid: user.uid,
            name: user.displayName
              ? user.displayName
              : user.email.split(0, -10),
            email: user.email,
            isEmailVerified: user.emailVerified,
            isLoggedIn: true,
          })
        );
        loadCart(user.uid).catch((err) => console.error(err));
      } else {
        sessionStorage.removeItem("user");
        dispatch(userActions.REMOVE_USER());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function loadCart(uid) {
    const collectionRef = collection(firestore, "cart");
    let q = query(collectionRef, where("user_id", "==", uid));
    let documents = await getDocs(q);
    let cart = {
      items: [],
      user_id: uid,
      createdOn: serverTimestamp(),
      lastModified: serverTimestamp(),
    };
    let cartId = null;
    let items = [];
    if(documents.empty) {
      const result = await addDoc(collectionRef, cart);
      cartId = result.id;
    } else {
      cartId = documents.docs[0].id;
      items = documents.docs[0].data()?.items;
    }
    dispatch(cartActions.LOAD_CART({ items, cartId }));
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route 
          path="/orders" 
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route 
          path="/success" 
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
