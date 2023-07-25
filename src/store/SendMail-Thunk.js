import { sendMailAction } from "./SendMailSlice";

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