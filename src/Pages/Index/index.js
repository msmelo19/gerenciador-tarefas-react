import React from 'react';
import {
  Col, Image, Row, Button,
} from 'react-bootstrap';

import {
  CustomContainer, MainHeader, SubHeader, CustomColHeader,
} from './styled';

export default function Index() {
  return (
    <CustomContainer>
      <Row>
        <CustomColHeader md={6}>
          <Row>
            <Col>
              <MainHeader>
                Organize as tarefas do dia a dia
              </MainHeader>
              <SubHeader>
                Você no controle da sua vida com Helper
              </SubHeader>
            </Col>
          </Row>
          <Row style={{ paddingLeft: '15px' }}>
            <Col lg={4} style={{ padding: '0px' }}>
              <Button variant="primary-custom">Cadastre-se</Button>
            </Col>
            <Col lg={4} style={{ padding: '0px' }}>
              <Button variant="link-primary-custom">Mais informações</Button>
            </Col>
          </Row>
        </CustomColHeader>
        <Col md={6}>
          <Image src="src/assets/img/draw-index.svg" alt="ilustracao" />
        </Col>
      </Row>
    </CustomContainer>
  );
}
