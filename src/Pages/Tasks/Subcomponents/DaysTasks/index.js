import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import axios from '../../../../services/axios';
import {
  Div, H5BoldPrimary, ComboBoxPriority, DivTasks, H4BoldPrimary, DivContainer, ButtonCustom,
  DivSpaced, H6BoldSecondary, LinkNoTxtDecoration, H6,
} from '../rootStyled';

export default function DaysTasks({ date }) {
  const [priority, setPriority] = React.useState(3);
  const [allTasks, setAllTasks] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);

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
    return (
      <H6BoldSecondary style={{ margin: 'auto' }}>Não há tarefas para esta data</H6BoldSecondary>
    );
  }

  function showTasks() {
    return tasks.map((task) => (
      <LinkNoTxtDecoration to={{
        pathname: `/task/${task.id}`,
        state: {
          date,
        },
      }}
      >
        <DivTasks key={String(task.id)}>
          <H4BoldPrimary>{task.title}</H4BoldPrimary>
          <H6>
            {`${new Date(task.start_date).getHours()}:${new Date(task.start_date).getMinutes()
              .toString().replace(/^(\d)$/, '0$1')}\
            - \
            ${new Date(task.final_date).getHours()}:${new Date(task.final_date).getMinutes()
              .toString().replace(/^(\d)$/, '0$1')}`}
          </H6>
        </DivTasks>
      </LinkNoTxtDecoration>
    ));
  }

  return (
    <Div>
      <Container>
        <Row>
          <H5BoldPrimary>
            {date.toLocaleDateString()}
          </H5BoldPrimary>
          <ComboBoxPriority className="ml-auto" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value={0}>Baixa</option>
            <option value={1}>Media</option>
            <option value={2}>Alta</option>
            <option value={3}>Todos</option>
          </ComboBoxPriority>
        </Row>
        <Row>
          <DivSpaced>
            <LinkNoTxtDecoration to={{
              pathname: '/task',
              state: {
                date,
              },
            }}
            >
              <ButtonCustom variant="primary-custom">
                <FaPlus style={{ margin: '0 8px' }} />
                Adicionar tarefa
              </ButtonCustom>
            </LinkNoTxtDecoration>
          </DivSpaced>
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
