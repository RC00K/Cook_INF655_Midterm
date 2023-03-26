import React from 'react';

export default function Success() {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-4xl md:text-6xl lg:text-9xl">
                    Success
                </h1>
                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                    Your order has been placed.
                </p>
                <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                    You will receive the download link to your product shortly.
                </p>
                <a
                    href="/product"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Back to Products
                </a>
            </div>
        </div>
    );
}