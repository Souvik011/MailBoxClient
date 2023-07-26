import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const InboxMsgView = (props) => {
    const navigate = useNavigate();
    const messageView = useSelector((state) => state.receive.messageView);
    console.log(messageView, " mymailmessageView");
    const replybuttonHandler = () => {
      navigate("/compose");
    };
    return (
      <React.Fragment>
        <Card className="mt-3">
          <Card.Header>
            <h3>{messageView.subject}</h3>
          </Card.Header>
          <Card.Body>
            <p className="mb-5">{messageView.text}</p>
          </Card.Body>
          <Card.Footer>
            <h6>{messageView.email}</h6>
            <Button onClick={replybuttonHandler}>Reply</Button>
          </Card.Footer>
        </Card>
      </React.Fragment>
    );
};

export default InboxMsgView;