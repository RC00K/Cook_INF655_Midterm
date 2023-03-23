import React from 'react';
import WelcomeGrungeVibes from '../images/GrungeVibesPack/WelcomeGrungeVibes.jpg';

const packOfTheMonth = [
    {
        id: 1,
        name: 'Grunge Vibes',
        type: 'Graphic Pack',
        price: 'Free',
        imageSrc: WelcomeGrungeVibes,
        imageAlt: 'Grunge is a new kind of vibe.',
    }
];

const DownloadOfMonth = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    {packOfTheMonth.map((pack) => (
                        <div key={pack.id} className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                src={pack.imageSrc}
                                alt={pack.imageAlt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Free Pack of the Month</h2>
                        <p className="mt-4 text-gray-300">
                            Grunge Vibes Pack is one of our high-quality grunge textures that is exclusively free to download this month.
                        </p>
                        <a
                            href=""
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500"
                        >
                            Download Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadOfMonth;