import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { initialData } from './data';
import Column from './Column';

import './index.css';

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    // TODO
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns.find(elem => elem.id === columnId);
          const tasks = column.taskIds.map(taskId =>
            this.state.tasks.find(elem => elem.id === taskId)
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
