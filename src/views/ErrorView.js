import React, { Component } from 'react';

export default class ErrorView extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  componentWillMount() {
    global.addEventListener('error', ee => this.setState({ error: ee.error }));
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>{this.state.error.name}</h1>
          <h2>{this.state.error.message}</h2>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
