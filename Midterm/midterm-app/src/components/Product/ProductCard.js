import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../helper';

function ProductCard({ product }) {
    const navigate = useNavigate();

    // Navigate to the product details page
    const handleProductClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div key={product?.id} className="relative object-cover transform transition-all duration-300 hover:-translate-y-2">
            <div className="object-cover">
                <img
                src={product?.imageSrc}
                alt={product?.imageAlt}
                className="w-full aspect-auto object-cover rounded-xl mb-4"
                onClick={handleProductClick}
                />
            </div>
            <div className="flex justify-between items-start mb-5">
            <div className="w-2/3 pr-6">
                <h3 className="text-gray-900 font-semibold text-lg">
                {product?.name}
                </h3>
                <p className="text-gray-600 text-sm">{product?.type}</p>
            </div>
            <p className="text-gray-700 font-bold text-xl">
                {formatPrice(product?.price)}
            </p>
            </div>
        </div>
    );
}

export default ProductCard;