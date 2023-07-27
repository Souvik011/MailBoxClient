import React from "react";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import '../Inbox/Inbox.css';
import { SendboxMsgViewInfo,UpdateSendboxList,DeleteSendboxMail } from "../store/SendMail-Thunk";



const SendBoxListItem = props => {
    const Dispatch = useDispatch();
  console.log("deatails/", props);
  const ListItemHandler = () => {
    Dispatch(SendboxMsgViewInfo(props.id));
    if (!props.readreceipt) {
      Dispatch(UpdateSendboxList(props))
      return;
    }
  };
  const deleteHandler = () => {
    Dispatch(DeleteSendboxMail(props.id));
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
                <Link to="sendboxmailview">
                  <h6>{props.email}{" "}</h6>
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

export default SendBoxListItem;