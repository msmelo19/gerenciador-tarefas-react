import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Button,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src="src/assets/img/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link>
            <Button variant="primary-custom">Cadastre-se</Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="outline-primary-custom">Login</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
