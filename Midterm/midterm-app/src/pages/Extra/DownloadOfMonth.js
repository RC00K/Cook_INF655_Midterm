import React from 'react';
import { Link } from 'react-router-dom';

// Pack of the Month
const packOfTheMonth = [
    {
        id: 4,
        name: 'Grunge Vibes',
        type: 'Graphic Pack',
        price: 'Free',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/designdifferentgraphics.appspot.com/o/GrungeVibesPack%2FWelcomeGrungeVibes.jpg?alt=media&token=17cac06c-ce36-4939-97bd-09a3bb188cb3',
        imageAlt: 'Grunge is a new kind of vibe.',
    }
];

const DownloadOfMonth = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Pack image */}
                    {packOfTheMonth.map((pack) => (
                        <div key={pack.id} className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                src={pack.imageSrc}
                                alt={pack.imageAlt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    {/* Details about each pack */}
                    {packOfTheMonth.map((pack) => (
                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Free Pack of the Month</h2>
                            <p className="mt-4 text-gray-300">
                                Grunge Vibes Pack is one of our high-quality grunge textures that is exclusively free to download this month.
                            </p>
                            {/* Link to download each pack */}
                            <Link to={`/product/${4}${pack.name}`}
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500"
                            >
                                Download Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DownloadOfMonth;