import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Array to store cart items
    },
    reducers: {
        addToCart: (state, action) => {
            const { productId, productTitle, productPrice, productImg } = action.payload;
            const existingItem = state.items.find(item => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    productId,
                    productTitle,
                    productPrice,
                    productImg,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.productId === productId);
            if (item) {
                item.quantity = parseInt(quantity, 10);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;