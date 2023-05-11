import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartId: null,
    items: [],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        LOAD_CART: (state, action) => {
            const { items, cartId } = action.payload;
            return { cartId, items };
        },
        ADD_ITEM: (state, action) => {
            const { cartItem } = action.payload;
            let items = [...state.items, cartItem];
            return { ...state, items };
        },
        INCREASE_QUANTITY: (state, action) => {
            const { productId, amount } = action.payload;
            let item = state.items.find((e) => e.productId === productId);
            if(!item || item.quantity === amount - 1) return { ...state };
            return {
                cartId: state.cartId,
                items: state.items.map((i) => 
                    i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
                ),
            };
        },
        DECREASE_QUANTITY: (state, action) => {
            const { productId } = action.payload;
            let item = state.items.find((e) => e.productId === productId);
            if(!item || item.quantity === 1) return { ...state };
            return {
                cartId: state.cartId,
                items: state.items.map((i) => 
                    i.productId === productId ? { ...i, quantity: i.quantity - 1 } : i
                ),
            };
        },
        CLEAR_CART: (state, action) => {
            return { ...state, items: [] };
        },
        DELETE_CART: () => {
            return { items: [], cartId: null };
        },
        REMOVE_ITEM: (state, action) => {
            const { productId } = action.payload;
            return {
                cartId: state.cartId,
                items: state.items.filter((elem) => 
                    elem.productId !== productId
                ),
            };
        },
    },
});

export const { actions: cartActions, reducer: cartReducers } = CartSlice;