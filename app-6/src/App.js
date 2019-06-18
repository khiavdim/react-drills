import React, { Component } from "react";
import Todo from './Todo'
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      taskList: [],
      newTask: ''
    }

  this.handleTask = this.handleTask.bind(this)
  this.handleInput = this.handleInput.bind(this)
  }

  handleInput(value){
    this.setState({
      newTask: value
    })
  }

  handleTask(newTask){
    this.setState({
      taskList: [...this.state.taskList, this.state.newTask]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input placeholder="Enter New Task" onChange={e => this.handleInput(e.target.value)} />
        <button onClick={e => this.handleTask(e.target.value)}>Add</button>
        <Todo list={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
