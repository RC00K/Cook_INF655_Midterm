import React, { useEffect, useState } from 'react';

const CheckoutProduct = (prop) => {
    const { id, imageSrc, name, type, price, hideButtons } = prop;
    const initAmount = prop.amount;
    const [, dispatch] = useStateValue();
    const [amount, setAmount] = useState();

    useEffect(() => {
        setAmount(initAmount);
    }, []);
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id
        });
    };
    const addToCart = () => {
        setAmount(amount + 1);
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                imageSrc,
                name,
                type,
                price,
                amount
            }
        });
    };
    const decreaseInCart = () => {
        if (amount > 0) {
            setAmount(amount - 1);
            dispatch({
                type: 'REDUCE_IN_CART',
                item: {
                    id,
                    imageSrc,
                    name,
                    type,
                    price,
                    amount
                }
            });
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <ul role="list" className="-my-6 divide-y divide-gray-200 mb-2">
                    {/* Cart Item */}
                    <li key={id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                                src={imageSrc}
                                alt={name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <a href={`/product/${id}`}>{name}</a>
                                    </h3>
                                    <p className="ml-4">${price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{type}</p>
                            </div>
                            {!hideButtons && (
                                <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty</p>
                                    <button
                                        type="button"
                                        className={amount < 1 ? 'disable' : 'font-medium text-indigo-600 hover:text-indigo-500'}
                                        disable={amount < 1}
                                        onClick={decreaseInCart}
                                    >
                                        -
                                    </button>
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="amount"
                                        value={amount}
                                        placeholder="Amount"
                                        required
                                        disabled
                                        className="block w-24 border border-gray-300 rounded-md py-1 px-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={addToCart}>
                                        +
                                    </button>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={removeFromCart}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CheckoutProduct;