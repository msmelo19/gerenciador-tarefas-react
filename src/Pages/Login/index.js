import React from 'react';
import { Link } from 'react-router-dom';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import {
  Container, Row, Col, Image, Navbar, Form, Button,
} from 'react-bootstrap';

import * as actions from '../../store/modules/auth/actions';

import {
  HeaderLogin, BackgroundContainer, FormCustom, ColImage,
} from './styled';
import Item from '../../components/Header/styled';
import * as colors from '../../config/colors';

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [passErrorMsgStyle, setPassErrorMsgStyle] = React.useState({});
  const [errorInputEmailStyle, setErrorInputEmailStyle] = React.useState({});
  const [errorInputPassStyle, setErrorInputPassStyle] = React.useState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailErrorMsg('');
    setErrorInputEmailStyle({});
    setErrorInputPassStyle({});
    setPassErrorMsgStyle({});

    const history = get(props, 'history');

    let formErros = false;
    if (!isEmail(email)) {
      formErros = true;
      setEmailErrorMsg('E-mail inválido');
      setErrorInputEmailStyle({ border: `2px solid ${colors.alertColor}` });
    }

    if (password.length < 6 || password.length > 25) {
      formErros = true;
      setErrorInputPassStyle({ border: `2px solid ${colors.alertColor}` });
      setPassErrorMsgStyle({ color: `${colors.alertColor}` });
    }

    if (formErros) return;

    dispatch(actions.loginRequest({ email, password, history }));
  };

  return (
    <BackgroundContainer fluid>
      <Navbar expand="md" className="mb-5">
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
          <ColImage lg={6}>
            <Image src="src/assets/img/draw-login.svg" alt="Ilustração de Login" className="m-auto" fluid />
          </ColImage>
          <Col lg={6}>
            <HeaderLogin className="text-center">Entre na sua conta</HeaderLogin>

            <FormCustom onSubmit={handleSubmit} className="d-flex flex-column">
              <Form.Group controlId="input-email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Digite o seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  style={errorInputEmailStyle}
                />
                <Form.Text style={{ color: `${colors.alertColor}` }}>
                  {emailErrorMsg}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="input-password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Digite a seu senha"
                  onChange={(e) => setPassword(e.target.value)}
                  style={errorInputPassStyle}
                />
                <Form.Text style={passErrorMsgStyle}>
                  *Senha deve ter entre 6 e 25 caracteres
                </Form.Text>
              </Form.Group>
              <Button variant="primary-custom" type="submit" className="mt-3">Entrar</Button>
            </FormCustom>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  );
}
