import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  tasks;
}
interface State {}

class TodoList extends React.Component<Props, State> {
  render() {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} />;
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default TodoList;
