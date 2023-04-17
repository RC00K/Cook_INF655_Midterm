import React, { createContext, useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

// Store and manage the shopping cart data
const CartContext = createContext();

// Return the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Wrapper component that provides the CartContext to its children
export const CartProvider = ({ children }) => {
    // Initialized from localStorage or an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Adds a product to the cart or updates its quantity
    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                const newCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
                localStorage.setItem('cart', JSON.stringify(newCart));
                return newCart;
            } else {
                const newCart = [...prevCart, { ...product, quantity }];
                localStorage.setItem('cart', JSON.stringify(newCart));
                const docRef = addDoc(collection(db, "cart"), {
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    images: product.images,
                    description: product.description,
                    category: product.category,
                });
                console.log("Document written with ID: ", docRef.id);
                return newCart;
            }
        });
    };

    // Updates the quantity of a product in the cart
    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) => {
            const newCart = prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    // Removes a product from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter((item) => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    // Clears the cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    // Calculates the total price of the cart
    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Number(item.price) * Number(item.quantity);
        });
        return total;
    };

    // Value object contains the cart state and functions to manage the cart
    const value = {
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalPrice: calculateTotalPrice(),
        clearCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};