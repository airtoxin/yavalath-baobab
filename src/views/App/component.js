import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import Board from '../Board';
import TurnPlayer from '../TurnPlayer';

class App extends Component {
  render() {
    return (
      <div>
        <TurnPlayer />
        <Board board={this.props.board} />
      </div>
    );
  }
}

export default branch({
  board: ['board'],
}, App);
