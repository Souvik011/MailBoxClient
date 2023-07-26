import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import sendMailSlice from "./SendMailSlice";
import InboxMailSlice from "./InboxMailSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        send: sendMailSlice.reducer,
        receive:InboxMailSlice.reducer,
      },
});

export default store;