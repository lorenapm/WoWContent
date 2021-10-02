import React from "react";
import ReactDom from "react-dom";
import Logo from "../images/logo_oh.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export function Header() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt="logo oh! presentaciones"
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{'  '}
      
      </Navbar.Brand>
  <h2>Presentaciones</h2>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">¿Por qué nosotros?</Nav.Link>
      <NavDropdown title="¿Qué hacemos?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Presentaciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Infografías</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vídeo presetaciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Guías corporativas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Material formativo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contenidos RRSS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Imagen de marca</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Portfolio</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
  );
}
