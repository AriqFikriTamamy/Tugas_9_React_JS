import React from "react";
import {Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from "react-bootstrap"

function NavbarComp () {
  return(
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Akses-Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#berita">Berita</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#scores">Live Scores</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="#pemain">Transfer Pemain</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#tim">Tim</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="me-2"/>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp;
