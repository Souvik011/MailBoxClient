import { createSlice } from "@reduxjs/toolkit";

const initialSendMailState = {
    sendMail: false, getMail: false, items: [],count: 0,messageView: {}
};

const sendMailSlice = createSlice({
    name:"sendmail",
    initialState:initialSendMailState,
    reducers:{
        setSentData(state, action) {
            state.sendMail = !state.sendMail;
            state.count = state.count+1;
      
          },
    },
}); 

export const sendMailAction = sendMailSlice.actions;
export default sendMailSlice;