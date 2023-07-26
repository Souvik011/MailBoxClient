import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    islogin: false,
    signup: false,
    forgetPassowrd: false,
    email: null ,
    idToken: null,
    data: [],
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
      signup(state,action) {
          localStorage.setItem("signup" , true);
          state.signup = true ;
          localStorage.setItem("usermail",action.payload.email);
          state.email = action.payload.email;
          state.data.push(action.payload);
         
        },
      login (state,action) {
        localStorage.setItem("islogin" , true);
        state.islogin = true ; 
        localStorage.setItem("usermail",action.payload.email);
        localStorage.setItem("idToken" , action.payload.idToken);
        state.email = action.payload.email;
        state.idToken = action.payload.idToken;
        state.data = action.payload;
      },
      initialRander(state,action) {
        if(action.payload.useremail){
          state.email = action.useremail;
          state.idToken = action.payload.idToken;
          state.islogin = true ; 
        }
      },
      logout(state) {
        localStorage.setItem("islogin" , false);
        state.islogin = false;
        state.signup = false;
        state.idToken = null;
        localStorage.removeItem("idToken");
        localStorage.removeItem("usermail");
      }

    },
  });
  export const AuthAction = AuthSlice.actions;
  export default AuthSlice;