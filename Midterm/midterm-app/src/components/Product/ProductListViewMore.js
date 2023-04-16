import React from 'react';
import { Link } from 'react-router-dom';

// Products
const products = [
    {
        id: 1,
        name: 'Abstract Fun',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FWelcomeAbstractFun.jpg?alt=media&token=63e77f30-f0f9-49c2-89e5-3110b9ea2b10',
        imageAlt: 'Abstract fun is the best kind of fun.',
    },
    {
        id: 2,
        name: 'Abstract Fun Invert',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/AbstractFunPack%2FWelcomeAbstractFunInvert.jpg?alt=media&token=00b5501c-788c-48f3-a497-82a6896fcb9a',
        imageAlt: 'Abstract fun is the best kind of fun.',
    },
    {
        id: 3,
        name: 'Burst of Color',
        type: 'Graphic Pack',
        price: '$2',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/BurstOfColorPack%2FWelcomeBurstOfColor.jpg?alt=media&token=c73929cd-654a-4305-b3c8-ba51de96a948',
        imageAlt: 'Burst of color is the best kind of color.',
    },
    {
        id: 4,
        name: 'Grunge Vibes',
        type: 'Graphic Pack',
        price: '$0',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/GrungeVibesPack%2FWelcomeGrungeVibes.jpg?alt=media&token=17cac06c-ce36-4939-97bd-09a3bb188cb3',
        imageAlt: 'Grunge is a new kind of vibe.',
    }
];

const ProductListViewMore = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-left text-2xl font-bold mb-8">Graphic Packs</h2>
                <hr className="mb-8" />
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {/* Products */}
                    {products.map((product) => (
                        <div key={product.id} className="relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                            <div className="object-cover">
                            {/* Link to Product */}
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
                <div className="flex justify-center">
                <a
                    href="/product"
                    className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500"
                >
                    View More
                </a>
                </div>
            </div>
        </div>
    );
};

export default ProductListViewMore;