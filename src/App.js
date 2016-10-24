import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';

class App extends Component {
  render() {
    return (
      <h1>{JSON.stringify(this.props.board)}</h1>
    );
  }
}

export default branch({
  board: ['board'],
}, App);
