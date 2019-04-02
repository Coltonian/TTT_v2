import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {Board} from '../components/Board';


  export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hisotry = [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true
      }
    }



    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }


      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  