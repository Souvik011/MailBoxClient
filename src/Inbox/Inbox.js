import React,{useEffect} from "react";
import { Container,Row,Col,ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Inbox.css';
import { useSelector,useDispatch } from "react-redux";
import { getInboxMailList } from "../store/SendMail-Thunk";
import InboxList from "./InboxList";
import InboxNav from "./InboxNav";


const Inbox = props => {
    const Dispatch = useDispatch();
    const Items = useSelector((state) => state.send.items);
    const InboxItem = useSelector((state) => state.receive.receivedItem);
    const mail = localStorage.getItem("usermail");
    let Unreadmessage = 0;
    Items.map((item) => {
      if (item.readreceipt === false) {
        return Unreadmessage++;
      }
      return Unreadmessage;
    });

    let inboxCount = 0 ;
    InboxItem.map((item) => {
      if (item.readreceipt === false) {
        return inboxCount++;
      }
      return inboxCount;
    });

    useEffect(()=> {
        Dispatch(getInboxMailList());
    },[mail]);

    return ( <>
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
              <ListGroup.Item className="m-1 bg-" style={{backgroundColor:"blue"}} action>
              <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                  <p>Inbox</p> 
                </div>
              </ListGroup.Item>
              <Link to="/sendbox" ><ListGroup.Item className="m-1" action>
              <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                  <p>SendBox</p> 
                </div>
              </ListGroup.Item></Link>
              
            </ListGroup>
          </Col>
      <Col xs={10} className="">
        <InboxList />
      </Col>
    </Row>
  </Container></>);
};

export default Inbox;