import React from 'react';

import {
  Container, Row, Col, Image, Navbar, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HeaderRegister, BackgroundContainer, FormCustom } from './styled';
import Item from '../../components/Header/styled';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BackgroundContainer fluid>
      <Navbar expand="md">
        <Container>
          <Link to="/">
            <Item>
              <img src="src/assets/img/logo.svg" alt="logo" />
            </Item>
          </Link>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image src="src/assets/img/draw-login.svg" alt="Ilustração de Login" className="m-auto" fluid />
          </Col>
          <Col md={6}>
            <HeaderRegister className="text-center">Entre na sua conta</HeaderRegister>

            <FormCustom onClick={handleSubmit} className="d-flex flex-column">
              <Form.Group controlId="input-email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Digite o seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="input-password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Digite a seu senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary-custom" type="submit" className="mt-3">Entrar</Button>
            </FormCustom>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  );
}
