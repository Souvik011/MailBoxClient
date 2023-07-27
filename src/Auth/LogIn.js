import React, {useRef} from "react";
import { Button, Form, Col, Row, Container  } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SendLogIn } from "../store/Action-Thunk";


const LogIn = () => {
    const dispatch = useDispatch(); 
    const emailRef = useRef();
    const passRef = useRef();
    const LogInSubmitHandler = async (e) => {
        e.preventDefault();
        const Obj = {
            email:emailRef.current.value,
            password:passRef.current.value,
        }

        dispatch(SendLogIn(Obj));
    };
    
    return (<Container className='justify-content-center' >
    <Row className='justify-content-center'>
         <Col xs={12} md={6}> 
         <Form onSubmit={LogInSubmitHandler} style={{marginLeft:"auto",marginRight:"auto",marginTop:"5rem",backgroundColor:"White",padding:" 10px"}}>
         <h3 style={{textAlign:"center",fontSize:"30px",fontFamily:"cursive",fontWeight:"bold",fontStyle:"bold italic",Color:"black",marginTop:"5px",marginBottom:"20px"}}>Log In</h3>
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
            <Form.Group className="text-center" style={{marginTop:"10px",display:"grid",justifyContent:"center"}}><Button
               type='submit'
               variant="outline-info"
               style={{color:"blue",borderRadius:"10px",fontWeight:"bold",backgroundColor:"burlywood",width:"8rem"}}
             >
              Log In
             </Button>
             <NavLink to="/forget" style={{marginTop:"1rem"}}><Button variant="outline-danger"> Forget Password</Button></NavLink></Form.Group>
             <div style={{textAlign:"center",color:"burlywood",fontWeight:"bold",marginTop:"1.5rem"}}> Doesn't Have any Account ?  <NavLink to="/signup">Click here</NavLink> To Create One</div>
         </Form>
         </Col>
     </Row> 
 </Container>);
};

export default LogIn;