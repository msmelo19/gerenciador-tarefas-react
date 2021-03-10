import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { H2BoldSecondary, H3Secondary } from '../rootStyled';
import axios from '../../../../services/axios';

export default function Greetings() {
  const [userName, setUserName] = React.useState('');
  const [todayTasks, setTodayTasks] = React.useState(0);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/user/');
      const { name } = response.data;
      setUserName(name.split(' ')[0]);

      const responseDate = await axios.get(`/task?date=${Date.now()}`);
      setTodayTasks(responseDate.data.length);
    }

    getData();
  }, []);

  return (
    // <Greetings name={userName} />
    <Container>
      <Row>
        <Col>
          <H3Secondary>{`Olá, ${userName}`}</H3Secondary>
          <H2BoldSecondary>{`Você tem ${todayTasks} tarefa${todayTasks !== 1 ? 's' : ''} hoje`}</H2BoldSecondary>
        </Col>
      </Row>
    </Container>
  );
}
