import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 6,
        name: 'Vintage Future',
        description: 'Vintage is the new future.',
        type: 'Graphic Pack',
        price: '$15',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/NewVintageFuturePack%2FWelcomeNewFuture.jpg?alt=media&token=fa0fc698-1711-4803-a2a7-bcf1787037c8',
        imageAlt: 'Vintage is the new future.',
    },
    {
        id: 11,
        name: 'Social Design Dark',
        type: 'Graphic Pack',
        description: 'Social just got a whole lot darker.',
        price: '$25',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/SocialDesignPack%2FWelcomeDarkSocialDesign.jpg?alt=media&token=e7b6282e-b122-46c8-b8ce-083524d50765',
        imageAlt: 'Social just got a whole lot darker.',
    },
];

const ProductCollection = () => {
    return (
        <section>
            {/* Sets the maximum width and padding of the content */}
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                {/* Sets the grid layout for the content */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    {/* Ccontains title and a paragraph */}
                    <div className="grid p-6 bg-gray-100 rounded place-content-center ms:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    Popular
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    Check out our Graphic Packs. We have a wide variety of graphics to choose from. Here are some of our most popular graphics.
                                </p>
                            </header>
                        </div>
                    </div>
                    {/* List of products */}
                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="flex flex-wrap gap-4">
                            {/* Maps each product in the array to a list item */}
                            {products.map((product) => (
                                <li key={product.id} className="w-full">
                                    {/* Image, name, type, and price for each product */}
                                    <div className="relative object-cover transform transition-all duration-300 hover:-translate-y-2">
                                        <div className="object-cover">
                                            <Link to={`/product/${product.id}${product.name}`}>
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="w-full aspect-square object-cover rounded-xl mb-4"
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
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCollection; 