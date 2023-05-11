import {
    getDocs,
    collection
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CartSlideOut from '../../components/Cart/CartSlideOut';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import { firestore } from '../../firebase/config';

// Array of navigation items
const navigation = [
    { name: 'Home', href: '/', current: true }, // the current property indicates the active item
    { name: 'Products', href: '/product', current: false },
    { name: 'Checkout', href: '/checkout', current: false },
]

// Utility function to concatenate classes
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);

    const handleSignOut = async () => {
        await auth.signOut(auth);
        sessionStorage.removeItem("user");
        dispatch(cartActions.DELETE_CART());
        navigate("/")
    };

    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get all products from the database
    const getProducts = async () => {
      const productsRef = collection(firestore, 'products');
      const productsSnapshot = await getDocs(productsRef);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    getProducts();
  }, []);

  // Search functionality
  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  // State for searching
  const [isSearching, setIsSearching] = useState(false);

  // Event handler for searching products
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setIsSearching(searchTerm !== '');
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }
  };

  // Display search results if searching, otherwise display all products
  const displayedProducts = isSearching ? searchResults : products;

    return (
        <Disclosure as="nav" className="bg-gray-900 w-full z-10 fixed top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absulute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {/* Map navigation array to generate navigation links */}
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex items-center">
                                    {/* Input for searching products */}
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-64 rounded-md px-3 py-2 bg-gray-800 text-gray-300 text-sm focus:outline-none
                                            focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                        onChange={handleSearch}
                                    />
                                    {/* Search results */}
                                    {isSearching && displayedProducts.length > 0 && (
                                        <div className="absolute mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-10 top-full">
                                            <ul className="divide-y divide-gray-700">
                                                {/* Map search results to generate product list */}
                                                {displayedProducts.map((product) => (
                                                    <li key={product.id} className="p-2">
                                                        <div className="flex items-center relative">
                                                            <img
                                                                src={product.imageSrc}
                                                                alt={product.name}
                                                                className="h-10 w-10 object-cover object-center rounder-md"
                                                            />
                                                            <div className="ml-2">
                                                                <p className="text-sm font-bold text-gray-200">
                                                                    {product.name}
                                                                </p>
                                                                <p className="text-xs text-gray-100">{product.type}</p>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href={`/product/${product.id}`}
                                                            className="block mt-2 font-medium text-white hover:text-indigo-600 text-sm"
                                                        >
                                                            View
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {/* No product found */}
                                    {isSearching && displayedProducts.length === 0 && (
                                        <div className="absolute mt-2 w-64 bg-gray-800 rounded-md shadow-lg p-2 z-10 top-full">
                                            <p className="text-sm text-center text-white">No Product Found</p>
                                        </div>
                                    )}
                                </div>
                                {user?.isLoggedIn ? (
                                    <div className="ml-4 hidden items-center gap-4 lg:flex">
                                        <span className="text-gray-400">Hello, {user?.name}</span>
                                        <Link to={!user ? '/signin' : '/'} className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                                            <div className="flex items-center gap-2">
                                                <button onClick={handleSignOut} type="button">
                                                    {user ? 'Sign Out' : 'Sign In'}
                                                </button>
                                            </div>
                                        </Link>
                                        <Link to={!user ? '/signin' : '/orders'} className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                                            <div className="flex items-center gap-2">
                                                <button type="button">
                                                    Orders
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="ml-4 hidden items-center gap-4 lg:flex">
                                        <span className="text-gray-400">Hello, Guest</span>
                                        <Link to={!user ? '/' : '/signin'} className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                                            <div className="flex items-center gap-2">
                                                <button onClick={handleSignOut} type="button">
                                                    {user ? 'Sign In' : 'Sign Out'}
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                                <div className="ml-4">
                                    {/* View Cart */}
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative object-cover transform transition-all duration-300 hover:-translate-y-2"
                                        onClick={() => setCartOpen(true)}
                                    >
                                        <span className="sr-only">View Cart</span>
                                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    {/* Cart Slide Out */}
                                    {cartOpen && <CartSlideOut setOpen={setCartOpen} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default NavBar;