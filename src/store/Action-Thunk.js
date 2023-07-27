import { AuthAction } from "./AuthSlice";

const signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKhYLI8muDF7nwER_abab3OcVOKw9zQa0";

  export const Sendsignup = (obj) => {
    return async (dispatch) => {
      const sendingAuth = async () => {
        const response = await fetch(signupUrl, {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        if (data.error) {
          alert(data.error.message);
          throw new Error(data.error.message);
        }
  
        return data;
      };
      try {
        const data = await sendingAuth();
        console.log(data);
        dispatch(AuthAction.signup(data));
      } catch (error) {
        alert(error.message);
      }
    };
  };


  const LoginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKhYLI8muDF7nwER_abab3OcVOKw9zQa0";

  export const SendLogIn = (obj) => {
    return async(dispatch) => {
      const retrivingAuth = async () => {
        const response = await fetch (LoginUrl,{
          method:"POST",
          body:JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if(data.error){
          alert(data.error.message);
          throw new Error(data.error.message);
        };

        return data;
      };
      try {
        const data = await retrivingAuth();
        dispatch(AuthAction.login(data));
      } catch (error) {alert(error.message)}
    };
  };

  const forgotPassUrl = "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBKhYLI8muDF7nwER_abab3OcVOKw9zQa0"

  export const SendForgotPassward  = (email) => {
    return (Dispatch) => {
      const ForgotPass = async (email) => {
        try{
          const response = await fetch (forgotPassUrl,{
            method: "POST",
            body: JSON.stringify({
              email: email,
              requestType: "PASSWORD_RESET",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })

          const data = await response.json();
          if (data.error) {
            alert(data.error.message);
            throw new Error(data.error.message);
          }
    
        }
        catch(error){  console.log(error);

        }
      };
      ForgotPass(email);
    };
  };
