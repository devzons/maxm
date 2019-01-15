import React, { Component } from 'react';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import './App.css'

class App extends Component {
  state = {username: 'janedoe'}

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} />
        <UserOutput 
          username={this.state.username} 
          text="Hello, this is my text one!" />
      </div>
    );
  }
}

export default App
