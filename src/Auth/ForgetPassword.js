import React,{useRef} from 'react';
import { Button, Form, Col, Row, Container  } from "react-bootstrap";
import { NavLink ,useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SendForgotPassward } from '../store/Action-Thunk';

const ForgetPassword = () => {
    const Dispatch = useDispatch(); 
    const Navigate = useNavigate();
    const emailRef = useRef();
    const SubmitHandler = async (e) => {
        e.preventDefault();
        Dispatch(SendForgotPassward(emailRef.current.value));
        alert("Check Your Email To Reset Your Password");
        Navigate("/login");
        
    };
    
    return (<Container className='justify-content-center' >
    <Row className='justify-content-center'>
         <Col xs={12} md={6}> 
         <Form onSubmit={SubmitHandler} style={{marginLeft:"auto",marginRight:"auto",marginTop:"5rem",backgroundColor:"White",padding:" 10px"}}>
         <h3 style={{textAlign:"center",fontSize:"30px",fontFamily:"cursive",fontWeight:"bold",fontStyle:"bold italic",Color:"black",marginTop:"5px",marginBottom:"20px"}}>Forget Password</h3>
           <Form.Group controlId='email' style={{marginTop:"10px"}}>
            <Form.Label style={{fontFamily:"fantasy",fontWeight:"bold"}}>Enter Your Email :</Form.Label>
             <Form.Control
             type="email"
             placeholder="Enter email"
             style={{backgroundColor:"black" , color:"white" }}
             ref={emailRef}
             />
           </Form.Group >
            <Form.Group className="text-center" style={{marginTop:"10px"}}><Button
               type='submit'
               variant="outline-info"
               style={{color:"blue",borderRadius:"10px",fontWeight:"bold",backgroundColor:"burlywood"}}
             >
              Send Verification Link
             </Button></Form.Group>
             <div style={{textAlign:"center",color:"burlywood",fontWeight:"bold",marginTop:"1.5rem"}}> Doesn't Have any Account ?  <NavLink to="/signUp">Click here</NavLink> To Create One</div>
         </Form>
         </Col>
     </Row> 
 </Container>);
};

export default ForgetPassword;