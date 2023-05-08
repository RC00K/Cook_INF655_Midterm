import { Fragment, useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Dialog, Transition } from '@headlessui/react';
import { useStateValue } from '../../store/StateProvider';
import { getCartTotal } from '../../store/reducer';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CheckoutProduct from '../../pages/CheckoutProduct';

const CartSlideOut = ({ setOpen }) => {
    const [{ cart }] = useStateValue();
    const prodCart = [...cart];
    prodCart.sort((a, b) => a.id - b.id);

    return (
        // Transition for the slide-out cart
        <Transition.Root show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* Semi-transparent background */}
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 trasition-opacity" />
                </Transition.Child>

                {/* Layout for the slide-out cart */}
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                {/* Render the cart panel */}
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        {/* Render the cart header */}
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Cart</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    {/* Close button for the cart */}
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Render the cart items */}
                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    {prodCart.map((item) => (
                                                        <CheckoutProduct
                                                            key={item.name + item.price}
                                                            id={item.id}
                                                            name={item.name}
                                                            type={item.type}
                                                            price={item.price}
                                                            imageSrc={item.imageSrc}
                                                            quantity={item.quantity}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Cart summary */}
                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                {/* Display the subtotal if totalPrice is a number */}
                                                <CurrencyFormat
                                                    renderText={(value) => (
                                                        <>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <p>Subtotal</p>
                                                                <p>{`${value}`}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                    decimalScale={2}
                                                    value={getCartTotal(cart)}
                                                    displayType="text"
                                                    thousandSeparator
                                                    prefix="$"
                                                />
                                                {/* Go to Cart */}
                                                <div className="mt-6">
                                                    <a
                                                        href="/checkout"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                                    >
                                                        Go to Cart
                                                    </a>
                                                </div>

                                                {/* Continue Shopping */}
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default CartSlideOut;