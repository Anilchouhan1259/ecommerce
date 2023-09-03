import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      state.data.push(action.payload);
    },
    removeCart(state, action) {
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload;
      });
      console.log(index);
      state.data.splice(index, 1);
    },
    incrementItem(state, action) {
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state.data[index].itemcount = state.data[index].itemcount + 1;
    },
    decrementItem(state, action) {
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state.data[index].itemcount = state.data[index].itemcount - 1;
    },
  },
});
export const { addToCart, incrementItem, decrementItem, removeCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
