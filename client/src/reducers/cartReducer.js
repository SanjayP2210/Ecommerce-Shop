import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i._id === item._id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.totalCount += 1;
            state.totalPrice += item.basePrice;

        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find((i) => i._id === itemId);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((i) => i._id !== itemId);
                } else {
                    existingItem.quantity -= 1;
                }

                state.totalCount -= 1;
                state.totalPrice -= existingItem.basePrice;
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
