import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../components/Product/ProductData';

const Products = () => {
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
          const results = productData.filter((product) => 
              product.name.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results);
      }
  };

  // Display search results if searching, otherwise display all products
  const displayedProducts = isSearching ? searchResults : productData;

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
            <div key={product.id} className="relative object-cover transform transition-all duration-300 hover:-translate-y-2">
              <div className="object-cover">
                <Link to={`/product/${product.id}${product.name}`}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full aspect-auto object-cover rounded-xl mb-4"
                  />
                </Link>
              </div>
              <div className="flex justify-between items-start mb-5">
                <div className="w-2/3 pr-6">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.type}</p>
                </div>
                <p className="text-gray-700 font-bold text-xl">
                  ${product.price}
                </p>
              </div>
            </div>
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