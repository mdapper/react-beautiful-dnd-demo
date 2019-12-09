import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

const Column = ({ column, tasks }) => (
  <Container>
    <Title>{column.title}</Title>
    <Droppable droppableId={column.id}>
      {provided => (
        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </Container>
);

const Container = styled.div`
  margin: 16px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default Column;
