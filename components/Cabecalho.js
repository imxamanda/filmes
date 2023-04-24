import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Atores</Nav.Link>
            <Nav.Link href="#features">Series TV</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho