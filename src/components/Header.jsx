import React from "react";
import Logo from "../images/logo_oh.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export function Header() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top">
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
  <h2 className="title">PRESENTACIONES</h2>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto section">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">¿Por qué?</Nav.Link>
      <NavDropdown title="¿Qué hacemos?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Presentaciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Infografías</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vídeo presetaciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Guías corporativas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Material formativo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contenidos RRSS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Imagen de marca</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing" className="section">Portfolio</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="section">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<div ><div ><iframe frameBorder="0"  type="text/html" allowscriptaccess="always" allowFullScreen={true} allow="autoplay" scrolling="yes" allownetworking="all"></iframe> </div> </div>

</>
  );
  
}
