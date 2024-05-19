import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import { JWT_PERSISTENT_STATE } from "./user.slice";
import { CART_PERSISTENT_STATE } from "./cart.slice";
import { saveState } from "./storage";
import cartSlice from "./cart.slice";

export const store = configureStore({
   reducer: {
      user: userSlice,
      cart: cartSlice,
   },
});

store.subscribe(() => {
   saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
   saveState(store.getState().cart, CART_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
console.log(`store.getState: `, store.getState);

export type AppDispath = typeof store.dispatch;

export default store;
