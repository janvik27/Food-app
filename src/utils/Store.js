import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const myStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default myStore;
