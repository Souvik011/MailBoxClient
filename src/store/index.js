import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import sendMailSlice from "./SendMailSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        send: sendMailSlice.reducer,
      },
});

export default store;