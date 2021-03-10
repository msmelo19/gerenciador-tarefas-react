import React from 'react';
import { get } from 'lodash';

import axios from '../../../../services/axios';
import {
  NextTasksDiv, H5BoldPrimary, DivTasks, DivContainer, H4BoldPrimary,
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
    return (<p>Não há tarefas para hoje</p>);
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
    <NextTasksDiv>
      <H5BoldPrimary>Tarefas de hoje</H5BoldPrimary>
      <DivContainer>
        {tasks.length > 0 ? showTasks() : printNoTaskMessage()}
      </DivContainer>
    </NextTasksDiv>
  );
}
