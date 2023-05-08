import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../store/StateProvider';
import { getCartTotal } from '../store/reducer';
import { useCart } from '../components/Cart/CartContext';

function Total() {
    const history = useNavigate();
    const [{ cart }] = useStateValue();
    const [checkoutDisable, setCheckoutButtonState] = useState(false);

    const countNon0Products = () => {
        let count = 0;
        cart.forEach((i) => {
            if (i.amount > 0) {
                count += 1;
            }
        });
        if (count === 0) {
            setCheckoutButtonState(true);
        }
        return count;
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Payment Information */}
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>{`Total Products: ${countNon0Products()}`}</p>
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
                    <div className="mt-6">
                        <button type="button" disabled={checkoutDisable} onClick={() => history.push('/checkoutform')} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;