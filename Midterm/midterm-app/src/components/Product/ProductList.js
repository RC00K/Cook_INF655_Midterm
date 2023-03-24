import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Product/ProductData';

const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-2xl font-bold mb-8">Graphic Packs</h2>
        <hr className="mb-8" />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;