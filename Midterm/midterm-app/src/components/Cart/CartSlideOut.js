import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useCart } from './CartContext'
import { XMarkIcon } from '@heroicons/react/24/outline'

const CartSlideOut = ({ setOpen }) => {
    // Get cart data and functions from CartContext
    const { cart, removeFromCart, totalPrice } = useCart();

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
                                                    {cart.length === 0 ? (
                                                        <p className="text-center text-gray-500">Cart is Empty</p>
                                                    ) : (
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {cart.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    {/* Render the product image */}
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.images[0]}
                                                                            alt={product.name}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>
                                                                    {/* Render the product details */}
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
                                                                        {/* Render the product quantity and remove button */}
                                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                                            <span className="text-gray-500">Qty: {product.quantity}</span>
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
                                                </div>
                                            </div>
                                        </div>

                                        {/* Cart summary */}
                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            {/* Display the subtotal if totalPrice is a number */}
                                            {typeof totalPrice === 'number' && (
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>${totalPrice.toFixed(2)}</p>
                                                </div>
                                            )}
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