import React from "react";
import { Button, Card,Container,Row,Col,ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import InboxNav from "../Inbox/InboxNav";

const SendBoxMsgView = props => {
    const navigate = useNavigate();
    const messageView = useSelector((state) => state.send.messageView);
    console.log(messageView, " mymailmessageView");
    const replybuttonHandler = () => {
      navigate("/compose");
    };
    return (
        <>
        <InboxNav />
        <Container fluid="true">
        <Row style={{ height: "600px" }}>
        <Col xs={2} className=" bg-info" variant="primary"  >
                <ListGroup className="p-2" as="ul">
                <Link to="/compose" ><ListGroup.Item className="m-1 bg-"  action>
                <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                      <p>Compose</p> 
                    </div>
                  </ListGroup.Item></Link>
                  <Link to="/inboxpage" ><ListGroup.Item className="m-1 bg-" action>
                  <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                      <p>Inbox</p> 
                    </div>
                  </ListGroup.Item></Link>
                  <Link to="/sendbox" ><ListGroup.Item className="m-1" style={{backgroundColor:"blue"}} action>
                  <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                      <p>SendBox</p> 
                    </div>
                  </ListGroup.Item></Link>
                  
                </ListGroup>
              </Col>
          <Col xs={10} className="">
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
          </Col>
        </Row>
      </Container></>
      
    );
};

export default SendBoxMsgView;