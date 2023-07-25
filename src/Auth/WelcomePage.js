import { Row, Col, Container, ListGroup  } from "react-bootstrap";
import {Link} from "react-router-dom";


const WelcomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={2}
          className=" bg-info"
          variant="primary"
          style={{ height: "100vh" }}
        >
          <ListGroup className="p-2" as="ul">
            <Link to="/compose">
              <ListGroup.Item className="m-1 bg-" action>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "4vh",
                  }}
                >
                  <p>Compose Mail</p>
                </div>
              </ListGroup.Item>
            </Link>
            <Link to="/inboxpage">
              <ListGroup.Item className="m-1 bg-" action>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "4vh",
                  }}
                >
                  <p>Inbox</p>
                </div>
              </ListGroup.Item>
            </Link>
            <Link to="/sendbox">
              <ListGroup.Item className="m-1" action>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    maxHeight: "4vh",
                  }}
                >
                  <p>SendBox</p>
                </div>
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>

        <Col xs={10}>
            <div style={{backgroundColor:"yellowgreen",height:"100vh",width:"100%",display:"grid",alignItems:"center",justifyContent:"center"}}><h3 style={{color:"blueviolet"}}>Welcome TO MailBox Client</h3></div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
