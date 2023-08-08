import { UserSlice } from "./slices/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    User: UserSlice.reducer,
  },
});

export default Store;
