import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // console.log('ssss',action?.payload);
      const items = state.items.find((i) => i.id === action.payload.id);
      if (items) {
        items.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    incrementQuantity: (state, action) => {
      console.log("s", action?.payload);
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.totalPrice -= 0;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const cartItem = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;

// console.log('d',cartItem);

export const { addItem, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
