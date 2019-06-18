import React, {Component} from 'react'

class Login extends Component {
    constructor(){ 
        super()
        this.state = {
            username: null,
            password: ''
        }

    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this)
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)
    }

    handleUsernameUpdate(user){
        this.setState({
            username: user
        })
    }

    handlePasswordUpdate(pass){
        this.setState({
            password: pass
    })
    }

    showInfo(e){
        alert(`Username: ${this.state.username} with password: ${this.state.password}`)
    }

    render() {
        console.log(this.state.username)
        console.log(this.state.password)
        return (
        <div className="App">
            <input placeholder="username" onChange={e => this.handleUsernameUpdate(e.target.value)}></input>
            <input placeholder="password" onChange={e => this.handlePasswordUpdate(e.target.value)}></input>
            <button onClick={(e) => this.showInfo(e)}>Login</button>
        </div>
        );
    }
}

export default Login