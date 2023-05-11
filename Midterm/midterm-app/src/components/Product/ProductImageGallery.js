import React from 'react';

function ProductImageGallery({ product, selectedImage, setSelectedImage }) {
    return (
        <div className="flex flex-row justify-between h-24">
            {product?.images?.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={product.name}
                    className={`w-24 h-24 rounded-md object-cover shadow-md cursor-pointer ${index === selectedImage ? "border-2 border-black" : ""
                        }`}
                    onClick={() => setSelectedImage(imageUrl)}
                />
            ))}
        </div>
    );
}

export default ProductImageGallery;