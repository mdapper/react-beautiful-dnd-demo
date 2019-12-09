import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        {task.content}
      </Container>
    )}
  </Draggable>
);

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : '#fff')};
`;

export default Task;
