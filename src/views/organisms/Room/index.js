import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export default class Room extends Component {
  render() {
    return (
      <li>
        <a className={styles.link} onClick={this.props.onClick}>{this.props.name}</a>
      </li>
    );
  }
}

Room.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
