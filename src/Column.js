import React from 'react';
import styled from 'styled-components';

const Column = ({ column }) => (
  <Container>
    <Title>{column.title}</Title>
    <TaskList>Tasks</TaskList>
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
