import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    all_products: [],
    filtered_products: [],
    filter: {
        search: ''
    },
    isLoading: false,
    error: null,
}; 

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        LOADING_PRODUCTS: (state, action) => {
            return { ...state, isLoading: action.payload };
        },
        SET_ALL_PRODUCTS: (state, action) => {
            const { products } = action.payload;
            return { ...state, all_products: products };
        },
        APPLY_FILTERS: (state, action) => {
            let { filter } = action.payload;
            let filteredProducts = state.all_products;
            // Search
            if(filter.search.lenght > 1) {
                const { search } = filter;
                filteredProducts = filteredProducts.filter(
                    (product) => product.name.search(search) !== -1
                );
            }
            return { ...state, filter, filtered_products: filteredProducts };
        },
    },
});

export const { actions: productActions, reducer: productReducers } = ProductSlice;