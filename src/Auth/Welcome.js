import React from 'react';
import { Row,Col,Container,Card,Button,Image } from 'react-bootstrap';
import Img from '../Img/Welcome.jpg';
import {useNavigate} from 'react-router-dom';

const Welcome = () => {
    const Navigate = useNavigate();
    const LoginTrigerHandler = () => {
        Navigate("/login");
    };

    const SignUpTrigerHandler = () => {
        Navigate("/signup")
    };
    return (<Container fluid="true">
        <Row className='justify-content-center'>
            <Col xs={14} md={6} >
            <Card style={{height:"auto",width:"auto",backgroundColor:"whitesmoke",marginLeft:"auto",marginRight:"auto",marginTop:"2rem"}}>
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title style={{fontWeight:"bold"}}>Welcome To MailBox Client Application</Card.Title>
                <Image src={Img} style={{height:"100%",width:"100%",marginTop:"12px"}} />
                <Button variant="primary" onClick={LoginTrigerHandler} style={{marginTop:"12px",marginRight:"2rem"}}>Click Here To LogIn</Button>
                <Button variant="primary" onClick={SignUpTrigerHandler} style={{marginTop:"12px"}}>Click Here To Sign Up</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>);

};

export default Welcome;