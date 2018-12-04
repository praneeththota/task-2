import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './ValidationComponent/Validation'
import Char from './ValidationComponent/Char';

class App extends Component {
  state = {
    userIp: ''
  }
  changeHandler = (event) => {
    this.setState({userIp: event.target.value})
  }
  deleteCharHandler = (index) => {
    const text = this.state.userIp.split('');
    text.splice(index, 1)
    const updateText = text.join('')
    this.setState({userIp: updateText})
  }
  render() {
    const charList = this.state.userIp.split('').map((ch, index) => {
      return <Char val= {ch} key = {index} click={() => this.deleteCharHandler(index)}/>
    })
    return (
      <div className="App">
       <hr/>
       <input type = "text" 
       onChange={this.changeHandler} 
       value={this.state.userIp}/>
       <p>{this.state.userIp}</p>
       <Validation iplength={this.state.userIp.length}/>
       {charList}
      </div>
    );
  }
}

export default App;
