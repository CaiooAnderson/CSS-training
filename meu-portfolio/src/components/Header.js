import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ toggleTheme }) => {
  return (
    <Navbar bg="light" expand="lg" className="d-none d-lg-block">
      <Navbar.Brand href="#home">Meu Portfólio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Sobre Mim</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#projects">Projetos</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>
        </Nav>
        <button onClick={toggleTheme} className="btn btn-secondary">Trocar Tema</button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;