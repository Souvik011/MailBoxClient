import { createSlice } from "@reduxjs/toolkit";

const initialinboxState = { Triggerval: 0, receivedItem: [], messageView: {}, reply:localStorage.getItem("mailid"),replymode:false };

const InboxMailSlice = createSlice({
    name:"receivedmail",
    initialState:initialinboxState,
    reducers:{
        addReceiveItem(state,action) {
            state.receivedItem = action.payload;
        },
        addMessageViewinfo(state, action) {
          state.messageView = action.payload;
        },
    },
});

export const InboxActions = InboxMailSlice.actions;
export default InboxMailSlice;