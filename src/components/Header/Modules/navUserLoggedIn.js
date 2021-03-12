import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Nav, Button,
} from 'react-bootstrap';
import Item from '../styled';

import * as actions from '../../../store/modules/auth/actions';

export default function NavUserLoggedIn() {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(actions.loginFailure());
  };

  return (
    <Nav>
      <Item>
        <Link to="/">
          <Button variant="link-primary-custom" onClick={handleClickLogout}>
            Sair
          </Button>
        </Link>
      </Item>
    </Nav>
  );
}
