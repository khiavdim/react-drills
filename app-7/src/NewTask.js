import React, { Component } from "react"

class NewTask extends Component {
  constructor() {
    super()
    this.state = {
      newInput: ''
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInput(value) {
    this.setState({ 
        newInput: value
    })
  }

  handleAdd() {
    this.props.add(this.state.newInput)
    this.setState({
        newInput: ''
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.newInput}
          placeholder="Enter New Task"
          onChange={e => this.handleInput(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default NewTask