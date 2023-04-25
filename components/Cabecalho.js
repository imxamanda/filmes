import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Movie</Navbar.Brand>
          <Nav className="me-auto">

            <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Populares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Em cartaz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho