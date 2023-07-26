import { sendMailAction } from "./SendMailSlice";
import { InboxActions } from "./InboxMailSlice";

export const SendMailHandler = (Obj) => {
    return async (Disptach) => {
    let senderEmail = Obj.sendermail.replace(/[&@.]/g, "");
    let receiverEmail = Obj.email.replace(/[&@.]/g, "");
    console.log(senderEmail," ",receiverEmail); 

    const mailSend = async () => {
        const response = await fetch(
            `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${senderEmail}/sendbox.json`,
            {
              method: "POST",
              body: JSON.stringify(Obj),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (data.error) {
            throw new Error("failed");
          }
          return data;
    };

    const inboxMail = async () => {
        const response = await fetch(
            `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${receiverEmail}/inbox.json`,
            {
              method: "POST",
              body: JSON.stringify(Obj),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (data.error) {
            throw new Error("failed");
          }
          return data;
    };
    try {
        await mailSend();
        await inboxMail();
        Disptach(sendMailAction.setSentData());
      } catch (error) {
        console.log(error.message);
      }
    };
};

export const getInboxMailList = () => {

  let emailId = localStorage.getItem("usermail").replace(/[&@.]/g, "");
   return async (Dispatch) => {
    const getMail = async () => {
      const response = await fetch(
        `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${emailId}/inbox.json`,
        {
          method: "Get",
        }
      );
      const data = await response.json();
        if (data.error) {
          throw new Error("faild");
        }
        return data;
    };
    try {

      const inboxData = await getMail();
      
      const InboxDataArray= [];
      for (const key in inboxData) {
        const InboxObj = {
          id: key,
          ...inboxData[key],
        };
        InboxDataArray.push(InboxObj);
        
    } 
    Dispatch(InboxActions.addReceiveItem(InboxDataArray));
    } catch (error) {
      console.log(error.message);
  };
   };

};

export const InboxMsgViewInfo  = (messageId) => {
  let emailId = localStorage.getItem("usermail").replace(/[&@.]/g, "");
  return async (Disptach) => {
    const gettingMsg = async () => {
      const response = await fetch(
        `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${emailId}/inbox/${messageId}.json`,
        {
          method: "Get",
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("failed");
      }
      return data;
    };
    try {
      const data = await gettingMsg();
      console.log(data);
      Disptach(InboxActions.addMessageViewinfo(data));
    } catch (error) {
      console.log(error.message);
    }
  };

};


export const UpdateInboxList = (obj) => {

  return async (Dispatch) => {
    let emailId = localStorage.getItem("usermail").replace(/[&@.]/g, "");

    const UpdateEmailList = async () => {
      const response = await fetch(
        `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${emailId}/inbox/${obj.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            email: obj.email,
            subject: obj.subject,
            text: obj.text,
            sendermail:obj.sendermail,
            readreceipt: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      return data;
    };
    try {
      const data = await UpdateEmailList();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};


export const DeleteInboxMail = (id) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("usermail").replace(/[&@.]/g, "");

    const DeletingMail = async () => {
      
    
    try {
      const response = await fetch(
        `https://mailbox-client-a617d-default-rtdb.firebaseio.com/${emailId}/inbox/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log("Deleting This working Mail");
      Dispatch(getInboxMailList());
    } catch (error) {
      console.log(error.message);
    }
  };
  DeletingMail();
};
};