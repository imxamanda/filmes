import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Galeria from './Galeria';

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
            <NavDropdown title="Séries" id="basic-nav-dropdown">
              <NavDropdown.Item href="/series">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/series/ar">No Ar</NavDropdown.Item>
              <NavDropdown.Item href="/series/estreias">Estreias</NavDropdown.Item>
              <NavDropdown.Item href="/series/top">Top Rated</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/atores">Atores</Nav.Link>
            <Nav.Link href="/generos">Gêneros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho