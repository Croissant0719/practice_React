import * as React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.addTodo('新規Todo');
  }

  render() {
    return (
      <div>
        <input placeholder="新規ToDoを入力してください" />
        <button onClick={this.handleClick} >登録</button>
      </div>
    );
  }
}

export default TodoInput;
