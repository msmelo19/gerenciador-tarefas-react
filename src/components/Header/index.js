import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Container,
  Navbar,
} from 'react-bootstrap';
import NavLandingPage from './Modules/navLadingPage';
import NavUserLoggedIn from './Modules/navUserLoggedIn';

import Item from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return <></>;
  }

  return (
    <Navbar expand="md" className="mb-5">
      <Container>

        <Link to="/">
          <Item>
            <img src="src/assets/img/logo.svg" alt="logo" />
          </Item>
        </Link>

        {isLoggedIn ? (<NavUserLoggedIn />) : (<NavLandingPage />)}

      </Container>
    </Navbar>
  );
}
