import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import axios from '../../../../services/axios';
import {
  Div, H5BoldPrimary, ComboBoxPriority, DivTasks, H4BoldPrimary, DivContainer,
} from '../rootStyled';

export default function DaysTasks({ date }) {
  const [priority, setPriority] = React.useState(3);
  const [allTasks, setAllTasks] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);

  const today = new Date();

  React.useEffect(() => {
    async function getTasks() {
      const response = await axios.get(`/task?date=${Date.parse(date)}`);
      const tasksBD = get(response, 'data');
      setAllTasks(tasksBD);
      setTasks(tasksBD);
      setPriority(3);
    }

    getTasks();
  }, [date]);

  React.useEffect(() => {
    if (priority < 3) {
      const filteredTasks = allTasks.filter((task) => task.priority === Number(priority));
      setTasks(filteredTasks);
    } else {
      setTasks(allTasks);
    }
  }, [priority]);

  function printNoTaskMessage() {
    return (<p>Não há tarefas para esta data</p>);
  }

  function showTasks() {
    return tasks.map((task) => (
      <DivTasks key={String(task.id)}>
        <H4BoldPrimary>{task.title}</H4BoldPrimary>
        <h5>
          {`${new Date(task.start_date).getUTCHours()}:${new Date(task.start_date).getUTCMinutes()}\
           - \
          ${new Date(task.final_date).getUTCHours()}:${new Date(task.final_date).getUTCMinutes()}`}
        </h5>
      </DivTasks>
    ));
  }

  return (
    <Div>
      <Container>
        <Row>
          <H5BoldPrimary>
            {date.toLocaleDateString() === today.toLocaleDateString() ? 'Hoje' : date.toLocaleDateString()}
          </H5BoldPrimary>
          <ComboBoxPriority className="ml-auto" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value={0}>Baixa</option>
            <option value={1}>Media</option>
            <option value={2}>Alta</option>
            <option value={3}>Todos</option>
          </ComboBoxPriority>
        </Row>
        <Row>
          <DivContainer>
            {tasks.length > 0 ? showTasks() : printNoTaskMessage()}
          </DivContainer>
        </Row>
      </Container>
    </Div>
  );
}

DaysTasks.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
