import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import violin from './pics/violin-pic.jpg';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    
    return (
        <div className="App">
          <div className='gradient'></div>
          <img className='background' alt='violin-pic' src={violin}></img>
          <h1 className='title'>Press any of the Keys below to Play the Violin</h1>
          <Buttons />
        </div>
    );
  }
}

export default App;
