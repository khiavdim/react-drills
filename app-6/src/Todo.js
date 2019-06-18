import React, {Component} from 'react'

class Todo extends Component{
    render(){
        return(
            <p>
            <h5>{`${this.props.list}`}</h5>
            </p>
        )
    }
}

export default Todo