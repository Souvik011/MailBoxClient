import React , {useRef} from 'react';
import { Button, Form, Col, Row, Container  } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { Sendsignup } from '../store/Action-Thunk';


const SignUp = () => {
  const dispatch = useDispatch(); 
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const SignUpSubmitHandler = async (e) => {
    e.preventDefault();
    const Obj = {
      email:emailRef.current.value,
      password:passRef.current.value,
      confirmPassword:confirmPassRef.current.value,
    };
    
    dispatch(Sendsignup(Obj));
    

  };
  return (
  <Container className='justify-content-center' >
     <Row className='justify-content-center'>
          <Col xs={12} md={6}> 
          <Form onSubmit={SignUpSubmitHandler} style={{marginLeft:"auto",marginRight:"auto",marginTop:"5rem",backgroundColor:"White",padding:" 10px"}}>
          <h3 style={{textAlign:"center",fontSize:"30px",fontFamily:"revert-layer",fontStyle:"bold italic",Color:"black",marginTop:"5px",marginBottom:"20px"}}>Sign Up</h3>
            <Form.Group controlId='email' style={{marginTop:"10px"}}>
            <Form.Label style={{fontFamily:"fantasy",fontWeight:"bold"}}>EMAIL :</Form.Label>
              <Form.Control
              type="email"
              placeholder="Enter email"
              style={{backgroundColor:"black" , color:"white" }}
              ref={emailRef}
              />
            </Form.Group >
            <Form.Group controlId='password' style={{marginTop:"10px"}}>
            <Form.Label style={{fontFamily:"fantasy",fontWeight:"bold"}}>PASSWORD :</Form.Label>
              <Form.Control
              type="password"
              placeholder="Enter Password"
              style={{backgroundColor:"black" , color:"white" }}
              ref={passRef}
              />
            </Form.Group>
            <Form.Group controlId='confirmPassword' style={{marginTop:"10px"}}>
            <Form.Label style={{fontFamily:"fantasy",fontWeight:"bold"}}>CONFIRM PASSWORD :</Form.Label>
              <Form.Control
              type="password"
              placeholder="Confirm Your Password"
              style={{backgroundColor:"black" , color:"white" }}
              ref={confirmPassRef}
              />
            </Form.Group>
             <Form.Group className="text-center" style={{marginTop:"10px"}}><Button
                type='submit'
                variant="outline-info"
                style={{color:"blue",borderRadius:"10px",fontWeight:"bold",backgroundColor:"burlywood"}}
              >
               Sign Up
              </Button></Form.Group>
              <div style={{textAlign:"center",color:"blueviolet",marginTop:"1.5rem"}}> Already Have an Account ?  <NavLink to="/login">Click here</NavLink> To LogIn</div>
          </Form>
          </Col>
      </Row> 
  </Container>);
};

export default SignUp;