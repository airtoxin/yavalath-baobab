import React, { Component, PropTypes } from 'react';
import Button from '../../atoms/Button';
import styles from './styles.css';

export default class Room extends Component {
  render() {
    return (
      <div className={styles.card}>
        <a className={styles.link} onClick={this.props.onClick}>{this.props.room.name}</a>
        <Button className={styles.white}>{joined ? "Leave" : "Join"}</Button>
      </div>
    );
  }
}

Room.propTypes = {
  room: PropTypes.object,
  joined: PropTypes.bool,
  onClick: PropTypes.func,
};
