import React from "react";
import Logo from "../images/logo_oh.png";
import { Container, Navbar, Nav, NavDropdown, Ratio } from "react-bootstrap";

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
      {/* <Nav.Link href="#features">¿Por qué?</Nav.Link> */}
      <NavDropdown title="¿Qué hacemos?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Presentaciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Infografías</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vídeos presentación</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Guías corporativas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Material formativo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contenidos RRSS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Imagen de marca</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#portfolio" className="section">Portfolio</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#contacto" className="section">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<div style={{ marginTop: '86px'}}>
  <Ratio aspectRatio="16x9">
  <iframe frameBorder="0" src="https://view.genial.ly/6159ab4c7deef00e1f33dbd9" type="text/html" allowFullScreen={true}/>
  </Ratio>
</div>

</>
  );
  
}
