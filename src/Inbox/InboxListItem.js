import React from "react";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Inbox.css";
import { InboxMsgViewInfo,UpdateInboxList,DeleteInboxMail } from "../store/SendMail-Thunk";

const InboxListItem = (props) => {
  const Dispatch = useDispatch();
  console.log("deatails/", props);
  const ListItemHandler = () => {
    Dispatch(InboxMsgViewInfo(props.id));
    if (!props.readreceipt) {
      Dispatch(UpdateInboxList(props))
      return;
    }
  };
  const deleteHandler = () => {
    Dispatch(DeleteInboxMail(props.id));
    console.log("sendmeeage page");
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-.3 "
        variant="primary"
        key={props.id}
      >
        <Container>
          <Row>
            <Col className={
                  props.readreceipt ? "readreceiptboxseen" : "readreceiptbox"
                }>
              <div
                
                onClick={ListItemHandler}
              >
                <Link to="inboxmailview">
                  {props.sendermail}{" "}
                  <div
                    style={{
                      fontStyle: "oblique",
                      fontVariant: "historical-forms",
                      color: "black",
                    }}
                  >
                    {" "}
                    {props.subject}
                  </div>{" "}
                </Link>
              </div>
            </Col>

            <Col md={1} style={{ height: "20px" }}>
              <Button variant="danger" onClick={deleteHandler}>
                delete
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default InboxListItem;
