import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {Square} from '../components/Square';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    renderSquare(i) {
        return ( <Square 
                value = {this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                />
        );
    }

    handleClick(i) {
    //change which letter is placed on board
    //check against winning combos
        let squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })

    }

    render() {
        const status = `Next Player is: ${this.state.xIsNext ? 'X' : 'O'}`;

        return(
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
    }

}