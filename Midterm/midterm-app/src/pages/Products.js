import {
  getDocs,
  collection
} from 'firebase/firestore';
import React, { useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import ProductCard from '../components/Product/ProductCard';
import { firestore } from '../firebase/config';

const Products = () =>{
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

  // // State for search results
  // const [searchResults, setSearchResults] = useState([]);
  // // State for searching
  // const [isSearching, setIsSearching] = useState(false);
  
  // // Event handler for searching products
  // const handleSearch = (e) => {
  //     const searchTerm = e.target.value.toLowerCase();
  //     setIsSearching(searchTerm !== '');
  //     if (searchTerm === '') {
  //         setSearchResults([]);
  //     } else {
  //         const results = productData.filter((product) => 
  //             product.name.toLowerCase().includes(searchTerm)
  //         );
  //         setSearchResults(results);
  //     }
  // };

  // // Display search results if searching, otherwise display all products
  // const displayedProducts = isSearching ? searchResults : productData;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-2xl font-bold mb-8">Graphic Packs</h2>
        <hr className="mb-8" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="w-full mb-8 px-4 py-2 border border-gray-300 rounded-md"
        />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (              
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-600">
              No Product Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;