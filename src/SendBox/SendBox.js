import React,{useEffect} from "react";
import { Container,Row,Col,ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Inbox/Inbox.css';
import { useSelector,useDispatch } from "react-redux";
import InboxNav from "../Inbox/InboxNav";
import { getSendBoxMailList } from "../store/SendMail-Thunk";
import SendBoxList from "./SendBoxList";

const SendBox = props => {
    const Dispatch = useDispatch();
    const Items = useSelector((state) => state.send.items);
    const sendLength = Items.length;
    const InboxItem = useSelector((state) => state.receive.receivedItem);
    const inboxLength = InboxItem.length;
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
    useEffect(()=>{
      Dispatch(getSendBoxMailList());
    },[mail]);
    useEffect(() => {
      const intervelid = setInterval(() => {
        console.log("setintervelid", intervelid);
        Dispatch(getSendBoxMailList());
    }, 2000);
  
      return () => {
        console.log("clearintervalid", intervelid);
        clearInterval(intervelid);
      };
    });
    

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
                  <Link to="/inboxpage" ><ListGroup.Item className="m-1 bg-" action>
                  <div style={{display:"flex",justifyContent:"center",maxHeight:"4vh"}}>
                      <p>Inbox</p> <p style={{marginLeft:"8px",fontSize:"small",fontWeight:"bold",color:"yellowgreen",marginTop:"3px"}}>{`(${inboxCount} / ${inboxLength})` }</p>
                    </div>
                  </ListGroup.Item></Link>
                  <ListGroup.Item className="m-1" style={{backgroundColor:"blue"}} action>
                  <div style={{display:"flex",justifyContent:"center",maxHeight:"4vh"}}>
                      <p>SendBox</p> <p style={{marginLeft:"8px",fontSize:"small",fontWeight:"bold",color:"yellowgreen",marginTop:"3px"}}>{`(${Unreadmessage} / ${sendLength})` }</p>
                    </div>
                  </ListGroup.Item>
                  
                </ListGroup>
              </Col>
          <Col xs={10} className="">
           <SendBoxList />
          </Col>
        </Row>
      </Container></>);

};

export default SendBox;