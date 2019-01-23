import * as React from 'react'
import TodoItem from './TodoList/TodoItem'

class TodoList extends React.Component {
  render() {
    //
    // Tasksの実装
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
