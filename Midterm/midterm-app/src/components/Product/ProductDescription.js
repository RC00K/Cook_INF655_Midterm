import React from 'react';
import { formatPrice } from '../../helper';

function ProductDescription({ product }) {
    return (
        <>
            {/* Product Details */}
            <div className="flex flex-col gap-4 lg:w-2/4">
                <div>
                    <span className="text-gray-400 font-semibold">{product.type}</span>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                </div>
                <p className="text-gray-700">{product.description}</p>
                <div className="flex flex-row items-center gap-4">
                    <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                </div>
            </div>
            <div className="mt-2">
                <h2 className="text-xl font-bold">Features</h2>
                {product.features && (
                    <ul className="mt-2 list-disc list-inside">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default ProductDescription;