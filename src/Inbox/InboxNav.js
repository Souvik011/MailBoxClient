import React from "react";
import { Container, Button,Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './Inbox.css';
import { AuthAction} from "../store/AuthSlice";
import { useDispatch } from "react-redux";

const InboxNav = () => {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    const LogOutHandler = () => {
        Dispatch(AuthAction.logout());
        Navigate("/");
    };

    return (<Navbar bg="success" fluid="true">
    <Container fluid="true" style={{display:"flex",justifyContent:"space-around"}}>
      <img
        className="thum-img"
        alt="Img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
      ></img>
      <div style={{ width: "600px",fontFamily:"monospace" , fontWeight:"bold" , color:"InfoBackground",textAlign:"center",fontSize:"3rem" }}>MailBox Client</div>
      <Button variant="danger" onClick={LogOutHandler}  style={{float:"right"}}> Log Out</Button>
    </Container>
  </Navbar>);
};

export default InboxNav;