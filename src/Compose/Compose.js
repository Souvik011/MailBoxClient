import React,{useState,useRef} from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Row, Col, Container, Card, Button , ListGroup  , Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SendMailHandler } from '../store/SendMail-Thunk';

const Compose = () => {
    const Dispatch = useDispatch();
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const Enteredemail = useRef(null);
    const Enteredsubject = useRef(null);
    const FormsubmitHandler = (event) => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const message = rawContentState.blocks[0].text;
        console.log(message);
        event.preventDefault();
        const mailData = {
          sendermail:localStorage.getItem("usermail"),
          email: Enteredemail.current.value,
          subject: Enteredsubject.current.value,
          text:message,
          readreceipt:false
        };
        console.log(mailData);
        Dispatch((SendMailHandler(mailData)));
      };

      const updateTextDescription = (editorState) => {
        setEditorState(editorState);
      };
    return (<Container fluid>
        <Row>
        <Col xs={2} className=" bg-info" variant="primary" style={{height:"100vh"}} >
            <ListGroup className="p-2" as="ul">
            <Link to="/compose"><ListGroup.Item className="m-1 bg-" action>
            <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                  <p>Compose Mail</p> 
                </div>
              </ListGroup.Item></Link>
              <Link to="/inboxpage" ><ListGroup.Item className="m-1 bg-" action>
              <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                  <p>Inbox</p> 
                </div>
              </ListGroup.Item></Link>
              <Link to="/sendbox" ><ListGroup.Item className="m-1" action>
              <div style={{display:"flex",justifyContent:"space-around",maxHeight:"4vh"}}>
                  <p>SendBox</p> 
                </div>
              </ListGroup.Item></Link>
              
            </ListGroup>
          </Col>
          
          <Col xs={10}>
            <Form className="pt-7"  onSubmit={FormsubmitHandler}>
              <Card style={{ width: "auto" ,height:"100vh" }} border="success">
                <Card.Body style={{backgroundColor:"rgba(243, 241, 247, 0.719)"}}>
                  <Form.Group controlId="email" style={{display:"table" , width:"auto"}}>
                    <Form.Label style={{float:"left",width:"auto"}}>To :</Form.Label>
                    <Form.Control style={{float:"left",width:"56rem",height:"2rem" , marginLeft:"1rem"}}
                      size="sm"
                      type="email"
                      placeholder="Enter Email"
                      ref={Enteredemail}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="subject" style={{display:"table" , width:"auto" , marginTop:"2rem"}}>
                    <Form.Label style={{float:"left",width:"auto"}}>Subject : </Form.Label>
                    <Form.Control style={{float:"left",width:"54rem",marginLeft:"1rem"}}
                      type="text"
                      placeholder="Enter subject"
                      ref={Enteredsubject}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="message" style={{marginTop:"2rem",height:"20rem",backgroundColor:"white"}}>
                    <Form.Label>Message</Form.Label>
                    <Editor style={{marginLeft:"1rem"} } 
                    type = "textarea"
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={updateTextDescription}
                  />
                  </Form.Group>
                </Card.Body>

                <Card.Footer style={{display:"table"}}>
                <Button variant="primary" type="submit" style={{float:"left",width:"auto"}}>
                    Send
                  </Button>
                  
                </Card.Footer>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>);
};

export default Compose;