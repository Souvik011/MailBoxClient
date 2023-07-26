import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import InboxListItem from "./InboxListItem";
import { useSelector } from "react-redux";

const InboxList = (props) => {
  const InboxItem = useSelector((state) => state.receive.receivedItem);
  useEffect(() => {
    console.log(InboxItem);
  }, [InboxItem]);
  return (
    <ListGroup as="ul" variant="primary">
      {InboxItem.map((item) => (
        <InboxListItem
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


export default InboxList;
