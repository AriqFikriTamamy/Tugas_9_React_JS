import React from "react";
import NavbarComp from "./component/NavbarComp.js";
import Breadcrumbs from "./component/Breadcrumbs.js";
import TableNav from "./component/TableNav.js";
import {Container, Row, Col} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Container>
        <Row className="justify-content-md-center" bg="secondary">
          <Col md={{ span: 4, offset: 7 }}>
            <Breadcrumbs/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <TableNav/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
