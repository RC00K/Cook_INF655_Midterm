import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = [...prevCart, product];
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Number(item.price);
        });
        return total;
    };

    const value = {
        cart,
        addToCart,
        totalPrice: calculateTotalPrice(),
    };

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>;
}