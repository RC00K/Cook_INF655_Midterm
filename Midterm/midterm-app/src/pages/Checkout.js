import React, { Fragment, useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../components/Cart/CartContext'

export default function Cart() {
    // Get cart state and functions from context
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();
    // Get history object to redirect to the Thank You page
    const navigate = useNavigate();
    // Ref for the form
    const formRef = useRef(null);

    // State for the disabled attribute of the checkout button
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        // Update the disabled state of the checkout button
        if (formRef.current && cart.length > 0) {
            setIsDisabled(!formRef.current.checkValidity());
        } else {
            setIsDisabled(true);
        }
    }, [cart, formRef]);

    // Check if the form is filled
    const checkFormFilled = (e) => {
        // Update the disabled state of the checkout button
        if (cart.length > 0) {
            setIsDisabled(!formRef.current.checkValidity());
        } else {
            setIsDisabled(true);
        }
    };

    function handleSubmit() {
        // Redirect to the Thank You page
        navigate('/success');
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-left text-2xl font-bold mb-8">Cart</h2>
                <hr className="mb-8" />
                {/* Cart Items */}
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 mb-8">Cart is Empty</p>
                ) : (
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
                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={() => removeFromCart(product.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Shipping Information */}
                <div className="bg-white py-12 md:py-24">
                    <h2 className="text-xl font-bold mb-2">Shipping Information</h2>
                    <hr className="mb-8" />
                    <form
                        ref={formRef}
                        className="grid grid-cols-6 gap-4"
                        onSubmit={handleSubmit}
                        onChange={() => {
                            // Update the disabled state of the checkout button
                            if (cart.length > 0) {
                                setIsDisabled(!formRef.current.checkValidity());
                            } else {
                                setIsDisabled(true);
                            }
                        }}
                    >
                        <div className="col-span-3">
                            <label for="FirstName" class="block text-xs font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>
                        <div className="col-span-3">
                            <label for="LastName" class="block text-xs font-medium text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-6">
                            <label for="Address" class="block text-xs font-medium text-gray-700 mb-2">
                                Street Address
                            </label>
                            <input
                                type="address"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-4">
                            <label for="City" class="block text-xs font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                type="city"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label for="State" class="block text-xs font-medium text-gray-700 mb-2">
                                State
                            </label>
                            <input
                                type="state"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label for="Zip" class="block text-xs font-medium text-gray-700 mb-2">
                                Zip Code
                            </label>
                            <input
                                type="zip"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-4">
                            <label for="Phone" class="block text-xs font-medium text-gray-700 mb-2">
                                Phone
                            </label>
                            <input
                                type="phone"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>

                        <div className="col-span-6">
                            <label for="Email" class="block text-xs font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-md px-3 py-2 bg-gray-100 text-gray-900 text-sm focus:outline-none
                                focus:ring focus:ring-indigo-300 focus:ring-opacity-50 z-20"
                                onChange={checkFormFilled}
                                required
                            />
                        </div>
                    </form>
                </div>

                {/* Payment Information */}
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    {typeof totalPrice === 'number' && (
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                    )}
                    <div className="mt-6">
                        <a
                            href="/success"
                            className={`flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            onClick={(e) => {
                                if (isDisabled) {
                                    e.preventDefault();
                                } else {
                                    clearCart();
                                }
                            }}
                        >
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}