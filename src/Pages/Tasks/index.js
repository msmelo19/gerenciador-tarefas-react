import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from '../../services/axios';

import Header3Secondary from './styled';

export default function Tasks() {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/user/');
      const { name } = response.data;
      setUserName(name.split(' ')[0]);
    }

    getData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Header3Secondary>{`Olá, ${userName}`}</Header3Secondary>
        </Col>
      </Row>
    </Container>
  );
}
