import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Greetings from './Modules/Greetings';
import NextTasks from './Modules/NextTasks';
import DaysTasks from './Modules/DaysTasks';
import Calendar from './Modules/Calendar';
import BgPrimaryColor from './styled';

export default function Tasks() {
  return (
    <>
      <Greetings />
      <BgPrimaryColor fluid>
        <Container>
          <Row>
            <Col>
              <NextTasks />
            </Col>
          </Row>

          <Row>
            <Col lg={{ order: 'last' }}>
              <Calendar />
            </Col>
            <Col lg={{ order: 'first' }}>
              <DaysTasks />
            </Col>
          </Row>
        </Container>
      </BgPrimaryColor>
    </>
  );
}
