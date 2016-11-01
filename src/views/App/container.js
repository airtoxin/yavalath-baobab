import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import Header from '../Header';
import Board from '../Board';
import TurnPlayer from '../TurnPlayer';
import Finished from '../Finished';
import History from '../History';
import { start } from '../../actions/gameActions';

class App extends Component {
  render() {
    const content = this.props.started ? (
      <div>
        <History />
        <TurnPlayer />
        <Finished />
        <Board board={this.props.board} />
      </div>
    ) : (
      <button onClick={() => this.props.dispatch(start)}>start</button>
    );

    return (
      <div>
        <Header />
        {content}
      </div>
    );
  }
}

export default branch({
  started: ['game', 'started'],
  board: ['board'],
}, App);
