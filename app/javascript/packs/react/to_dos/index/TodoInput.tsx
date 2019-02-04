import * as React from 'react';

interface Props {
  addTodo;
}

interface State {
  inputValue;
}

export default class TodoInput extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick() {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }

  render() {
    return (
      <div className="TodoInput">
        <input placeholder="新規ToDoを入力してください"
               value={this.state.inputValue}
               onChange={this.handleChange} />
        <button onClick={this.handleClick} >登録</button>
      </div>
    );
  }
}
