import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import products from '../Product/ProductData';
import ProductListViewMore from './ProductListViewMore';

const ProductDetails = () => {
    const { productId } = useParams();
    
    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    
    const [selectedImage, setSelectedImage] = useState(0);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(selectedProduct);
    };

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-left text-xl font-bold">
                <a 
                    href="/product"
                    className="mt-2 font-semibold hover:text-indigo-600 text-sm"
                >
                    Go Back
                </a>
            </h2>
            <h2 className="text-left text-2xl font-bold mb-8">{selectedProduct.name} Pack</h2>
            <hr className="mb-8" />
            {selectedProduct && (
                <div className="flex flex-col justify-between lg:flex-row gap-16" key={selectedProduct.id}>
                    {/* Product images */}
                    <div className="flex flex-col gap-6 lg:w-2/4">
                        {selectedProduct.images?.length > 0 && (
                            <>
                                <img
                                    src={selectedProduct.images[selectedImage]}
                                    alt={selectedProduct.name}
                                    className="w-full h-full aspect-auto object-cover rounded-xl"
                                />
                                <div className="flex flex-row justify-between h-24">
                                    {selectedProduct.images.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={selectedProduct.name}
                                            className={`w-24 h-24 rounded-md object-cover shadow-md cursor-pointer ${index === selectedImage ? "border-2 border-black" : ""
                                                }`}
                                            onClick={() => setSelectedImage(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {/* Product Details */}
                    <div className="flex flex-col gap-4 lg:w-2/4">
                        <div>
                            <span className="text-gray-400 font-semibold">{selectedProduct.type}</span>
                            <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
                        </div>
                        <p className="text-gray-700">{selectedProduct.description}</p>
                        <h6 className="text-2xl font-semibold">${selectedProduct.price}</h6>
                        <div className="flex flex-row items-center gap-12">
                            <button 
                                className="bg-black text-white font-semibold py-3 px-6 rounded-xl h-full"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Features</h2>
                            {selectedProduct.features && (
                                <ul className="mt-2 list-disc list-inside">
                                    {selectedProduct.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <ProductListViewMore  />
        </div>
    );
}

export default ProductDetails;
