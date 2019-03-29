import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import { Game } from '../src/components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
