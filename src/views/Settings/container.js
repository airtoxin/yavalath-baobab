import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import { start } from '../../actions/gameActions';

class Settings extends Component {
  render() {
    return <button onClick={() => this.props.dispatch(start)}>start</button>
  }
}

export default branch({

}, Settings);
