import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./apis/categoryApi";
import { productDetailApi } from "./apis/productDetailApi";
import {
  addToCart,
  incrementItem,
  decrementItem,
  removeCart,
} from "./slices/cartSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(productDetailApi.middleware);
  },
});
setupListeners(store.dispatch);
export { addToCart, incrementItem, decrementItem, removeCart };
export { useFetchCategoryQuery } from "./apis/categoryApi";
export { useFetchProductDetailQuery } from "./apis/productDetailApi";
