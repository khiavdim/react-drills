import React, {Component} from 'react'

class Todo extends Component{
    render(){
        return(
            <div>
                {this.props.list.map((e) => {return <p>{e}</p>})}
            </div>
        )
    }
}

export default Todo