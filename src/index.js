import React from 'react';
import ReactDOM from 'react-dom';
import { initialData } from './data';
import Column from './Column';

import './index.css';

class App extends React.Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns.find((elem) => elem.id === columnId);
      const tasks = column.taskIds.map((taskId) =>
        this.state.tasks.find((elem) => elem.id === taskId)
      );

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
