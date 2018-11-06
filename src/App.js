import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './components/Controls';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controls></Controls>
        <Game></Game>
      </div>
    );
  }
}

export default App;
