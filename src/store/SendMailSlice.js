import { createSlice } from "@reduxjs/toolkit";

const initialSendMailState = {
    items: [],count: 0,messageView: {}
};

const sendMailSlice = createSlice({
    name:"sendmail",
    initialState:initialSendMailState,
    reducers:{
        addSendItem(state,action) {
            state.items = action.payload;
        },
        addMessageViewinfo(state, action) {
            state.messageView = action.payload;
          },
    },
}); 

export const sendMailAction = sendMailSlice.actions;
export default sendMailSlice;