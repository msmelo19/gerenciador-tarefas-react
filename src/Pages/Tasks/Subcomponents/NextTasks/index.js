import React from 'react';
import { get } from 'lodash';

import axios from '../../../../services/axios';
import {
  NextTasksDiv, H5BoldPrimary, DivTasks, DivContainer, H4BoldPrimary, H6BoldSecondary,
  LinkNoTxtDecoration, H6,
} from '../rootStyled';

export default function NextTasks() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    async function getTasks() {
      const response = await axios.get(`/task?date=${Date.now()}`);
      const tasksBD = get(response, 'data');
      if (tasksBD.length > 0) {
        setTasks(tasksBD);
      }
    }

    getTasks();
  }, []);

  function printNoTaskMessage() {
    return (<H6BoldSecondary style={{ margin: 'auto' }}>Não há tarefas para hoje</H6BoldSecondary>);
  }

  function showTasks() {
    return tasks.map((task) => (
      <LinkNoTxtDecoration to={`/task/${task.id}`}>
        <DivTasks key={String(task.id)}>
          <H4BoldPrimary>{task.title}</H4BoldPrimary>
          <H6>
            {`${new Date(task.start_date).getHours().toString().replace(/^(\d)$/, '0$1')}:
              ${new Date(task.start_date).getMinutes().toString().replace(/^(\d)$/, '0$1')}
            -
            ${new Date(task.final_date).getHours().toString().replace(/^(\d)$/, '0$1')}:
            ${new Date(task.final_date).getMinutes().toString().replace(/^(\d)$/, '0$1')}`}
          </H6>
        </DivTasks>
      </LinkNoTxtDecoration>
    ));
  }

  return (
    <NextTasksDiv>
      <H5BoldPrimary>Tarefas de hoje</H5BoldPrimary>
      <DivContainer>
        {tasks.length > 0 ? showTasks() : printNoTaskMessage()}
      </DivContainer>
    </NextTasksDiv>
  );
}
