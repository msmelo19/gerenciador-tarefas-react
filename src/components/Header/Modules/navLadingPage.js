import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Nav,
} from 'react-bootstrap';

import Item from '../styled';

export default function NavLandingPage() {
  return (
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
