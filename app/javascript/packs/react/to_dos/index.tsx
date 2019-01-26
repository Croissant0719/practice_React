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
  }

  render () {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
);
