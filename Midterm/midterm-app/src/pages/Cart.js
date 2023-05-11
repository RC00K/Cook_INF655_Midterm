// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CheckoutProduct from './CheckoutProduct';

// function Cart() {
//     const history = useNavigate();
//     const prodCart = [...cart];
//     prodCart.sort((a, b) => a.id - b.id);
//     const [checkoutDisable, setCheckoutButtonState] = useState(false);

//     const countNon0Products = () => {
//         let count = 0;
//         cart.forEach((i) => {
//             if (i.amount > 0) {
//                 count += 1;
//             }
//         });
//         if (count === 0) {
//             setCheckoutButtonState(true);
//         }
//         return count;
//     };

//     return (
//         <div className="bg-white">
//             <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//                 {/* Render the cart items */}
//                 {/* Cart Header */}
//                 <h2 className="text-left text-2xl font-bold mb-8">Your Cart</h2>
//                 <h3 className="text-left text-xl font-bold mb-8">{user ? `Hello, ${user?.email}` : 'Hello!'}</h3>
//                 <hr className="mb-8" />
//                 <div className="flow-root">
//                     {prodCart.map((item) => (
//                         <CheckoutProduct
//                             key={item.name + item.price}
//                             id={item.id}
//                             name={item.name}
//                             type={item.type}
//                             price={item.price}
//                             imageSrc={item.imageSrc}
//                             amount={item.amount}
//                         />
//                     ))}
//                 </div>
//                 {/* Cart summary */}
//             <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                
//             </div>

//             <div className="mt-6">
//                 <button type="button" disabled={checkoutDisable} onClick={() => history.push('/checkoutform')} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700">
//                     Proceed to Checkout
//                 </button>
//             </div>
//             </div>
//         </div>

//     );
// };

// export default Cart;