import React, {Component} from 'react'

class Image extends Component {
    render(){
        console.log(this.props.imgsrc)
        return (
            <div>
                <img src={this.props.imgsrc} alt="To Child From Parent"></img>
            </div>
        )
    }
}

export default Image