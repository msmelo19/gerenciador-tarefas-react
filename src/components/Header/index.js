import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Button,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

import Item from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const location = useLocation();

  const getNav = () => {
    let nav;
    if (isLoggedIn) {
      nav += (
        <Nav><Item>Home</Item></Nav>
      );
    } else {
      nav = (
        <Nav className="ml-auto">
          <Item>
            <Link to="/register">
              <Button variant="primary-custom">Cadastre-se</Button>
            </Link>
          </Item>

          <Item>
            <Link to="/login">
              <Button variant="outline-primary-custom">Login</Button>
            </Link>
          </Item>
        </Nav>
      );
    }

    return nav;
  };

  const getNavbar = () => {
    const navbar = (
      <Navbar expand="md">
        <Container>

          <Link to="/">
            <Item>
              <img src="src/assets/img/logo.svg" alt="logo" />
            </Item>
          </Link>

          {getNav()}

        </Container>
      </Navbar>
    );

    return navbar;
  };

  if (location.pathname === '/') {
    return getNavbar();
  }
  return <></>;
}
