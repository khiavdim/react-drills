import React, {Component} from 'react'
import Todo from "./Todo"

export default class List extends Component {
  render() {
    let newList = this.props.taskList.map((curr, index) => {
      return <Todo key={index} task={curr} />
    })
    
    return <div>{newList}</div>
  }
}