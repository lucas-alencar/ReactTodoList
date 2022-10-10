import React, { Component } from 'react';
import AddTask from './components/AddTask';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  CreateTask() {

  }

  render() {
    return (
      <AddTask onCreate={this.CreateTask} />
    );
  }
}

export default App;
