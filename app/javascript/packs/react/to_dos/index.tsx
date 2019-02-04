import * as React from "react";
import * as ReactDOM from "react-dom";

import TodoInput from './index/TodoInput';
import TodoList from './index/TodoList';

interface Props {}
interface State {
  tasks;
  uniqueId;
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'default TODO',
          id: 0,
        },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo = (title) => {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render () {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
);
