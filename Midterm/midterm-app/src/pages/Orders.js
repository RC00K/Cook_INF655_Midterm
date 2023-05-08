import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/Cart/CartContext';

export default function Orders() {
    // Get cart state and functions from context
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-left text-2xl font-bold mb-8">Your Orders</h2>
                <hr className="mb-8" />

                <ul role="list" className="-my-6 divide-y divide-gray-200 mb-2">
                    {/* Cart Item */}
                    {cart.map((product) => (
                        <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a href={`/product/${product.id}`}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.type}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Payment Information */}
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    {typeof totalPrice === 'number' && (
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
