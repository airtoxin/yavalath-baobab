import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import Board from '../Board';

class App extends Component {
  render() {
    return (<Board board={this.props.board}/>);
  }
}

export default branch({
  board: ['board'],
}, App);
