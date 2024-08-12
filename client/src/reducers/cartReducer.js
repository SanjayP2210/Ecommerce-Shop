import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiService from '../service/apiService';

export const getCart = createAsyncThunk('cart/getCart', async (params) => {
    return await apiService.getRequest('cart');
});

export const addToCart = createAsyncThunk('cart/addToCart', async (data) => {
    return await apiService.postRequest('cart/add-to-cart', data);
});

export const removeFromCart = createAsyncThunk('users/removeFromCart', async (productId) => {
    return await apiService.deleteRequest(`cart/remove-from-cart/${productId}`);
});

const initialState = {
    cartItems: [],
    isCartUpdated: false,
    isDeleted: false,
    totalCount: 0,
    totalPrice: 0,
    isLoading:true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCartState: (state, action) => {
            state.isCartUpdated = false;
            state.isDeleted = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                if (action.payload.isError) return;
                const { items, totalCount, totalPrice } = action.payload.cart;
                state.cartItems = items;
                state.totalCount = totalCount;
                state.totalPrice = totalPrice;
                console.log('cartItems:', state.cartItems);
                state.isLoading = false;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                if (action.payload.isError) return;
                const { cart, productId } = action.payload;
                const { item, totalCount, totalPrice } = cart;
                const existItem = state.cartItems.find(x => x.productId === productId);
                if (existItem) {
                    state.cartItems = state.cartItems.map(x =>
                        x.productId === existItem.productId ? item : x
                    );
                } else {
                    state.cartItems.push(item);
                }
                state.totalCount = totalCount;
                state.totalPrice = totalPrice;
                state.isCartUpdated = true;
                state.isLoading = false;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                if (action.payload.isError) return;
                const { cart, productId } = action.payload;
                const { totalCount, totalPrice } = cart;
                const existingItem = state.cartItems.find(x => x.productId === productId);

                if (existingItem) {
                    if (existingItem.quantity === 1) {
                        state.cartItems = state.cartItems.filter(x => x.productId !== productId);
                    } else {
                        existingItem.quantity -= 1;
                    }
                }
                state.totalCount = totalCount;
                state.totalPrice = totalPrice;
                state.isLoading = false;
                state.isDeleted = true;
                console.log('cartItems:', state.cartItems);
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            });
    },
});

export const { resetCartState } = cartSlice.actions;
export default cartSlice.reducer;
