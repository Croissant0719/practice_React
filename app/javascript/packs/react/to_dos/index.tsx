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
  }

  // addTodo(title) {
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

  render () {
    return (
      <div className="App">
        <h1>TODO App</h1>
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
