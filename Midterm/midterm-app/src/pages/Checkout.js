import React from 'react';
import Total from './Total';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{ cart, user }] = useStateValue();
    const prodCart = [...cart];
    prodCart.sort((a, b) => a.id - b.id);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-left text-2xl font-bold mb-8">Your Cart</h2>
                <h3 className="text-left text-xl font-bold mb-8">{user ? `Hello, ${user?.email}` : 'Hello!'}</h3>
                <hr className="mb-8" />
                {/* Cart Items */}
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
                <Total />
            </div>
        </div>
    );
};

export default Checkout;

