import React, { Component, PropTypes } from 'react';

export default class Room extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <li>
        <a onClick={this.handleClick}>{this.props.name}</a>
      </li>
    );
  }

  handleClick() {
    console.log("@this.id", this.props.id);
  }
}

Room.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};
