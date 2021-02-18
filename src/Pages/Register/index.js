import React from 'react';

import {
  Container, Row, Col, Image, Navbar, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HeaderRegister, BackgroundContainer, FormCustom } from './styled';
import Item from '../../components/Header/styled';

export default function Register() {
  const [name, setName] = React.useState('');
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
          <Col md={6}>
            <Image src="src/assets/img/draw-register.svg" alt="Ilustração de Cadastro" className="m-auto" fluid />
          </Col>
          <Col md={6}>
            <HeaderRegister className="text-center">Cadastre-se</HeaderRegister>

            <FormCustom onClick={handleSubmit} className="d-flex flex-column">
              <Form.Group controlId="input-name">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Digite o seu nome"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

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
              <Button variant="primary-custom" type="submit" className="mt-3">Cadastrar</Button>
            </FormCustom>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  );
}
