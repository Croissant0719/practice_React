// import React, { Compornent } from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom";

import TodoInput from './index/TodoInput';
import TodoList from './index/TodoList';

class App extends React.Component {
  render () {
    // To Do
    const tasks = [
      { title: 'Todo 1st', id: 0 },
      { title: 'Todo 2nd', id: 1 },
    ];

    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
