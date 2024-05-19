import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store1 = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
