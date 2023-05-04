import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
     <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu