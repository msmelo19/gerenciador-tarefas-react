import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Greetings from './Subcomponents/Greetings';
import NextTasks from './Subcomponents/NextTasks';
import DaysTasks from './Subcomponents/DaysTasks';
import MyCalendar from './Subcomponents/Calendar';
import BgPrimaryColor from './styled';

export default function Tasks() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    date.setHours(0, 0, 0, 0);
  }, []);

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
              <MyCalendar date={date} setDate={setDate} />
            </Col>
            <Col lg={{ order: 'first' }}>
              <DaysTasks date={date} />
            </Col>
          </Row>
        </Container>
      </BgPrimaryColor>
    </>
  );
}
