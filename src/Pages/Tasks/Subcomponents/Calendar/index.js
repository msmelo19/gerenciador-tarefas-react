import React from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';
import { Div, DivContainer, H5BoldPrimary } from '../rootStyled';

import 'react-calendar/dist/Calendar.css';

export default function MyCalendar({ date, setDate }) {
  return (
    <Div>
      <Container>
        <Row>
          <H5BoldPrimary>Calendário</H5BoldPrimary>
        </Row>
        <Row>
          <DivContainer style={{ margin: 'auto' }}>
            <Calendar value={date} onChange={setDate} />
          </DivContainer>
        </Row>
      </Container>
    </Div>
  );
}

MyCalendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};
