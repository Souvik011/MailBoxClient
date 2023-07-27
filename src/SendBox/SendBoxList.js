import React,{useEffect} from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import SendBoxListItem from "./SendBoxListItem";

const SendBoxList = props => {
    const Items = useSelector((state) => state.send.items);
    useEffect(() => {
        console.log(Items);
    }, [Items]);

    return (
        <ListGroup as="ul" variant="primary">
          {Items.map((item) => (
            <SendBoxListItem
              key={item.id}
              sendermail={item.sendermail}
              email={item.email}
              subject={item.subject}
              text={item.text}
              id={item.id}
              readreceipt={item.readreceipt}
            />
          ))}
        </ListGroup>
      );
};

export default SendBoxList;