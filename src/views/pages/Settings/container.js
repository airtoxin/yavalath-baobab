import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import Button from '../../atoms/Button';
import Player from '../../organisms/Player';
import { gameActions } from '../../../actions';
import styles from './styles.css';

class Settings extends Component {
  render() {
    const Players = this.props.players.map((player, i) => {

      return (
        <Player
          key={i}
          className={styles.playerManipulator}
          player={player}
          onChange={manipulator => this.props.dispatch(gameActions.setManipulator, player.id, manipulator)}
        />
      );
    });

    return (
      <div>
        {Players}
        <Button onClick={() => this.props.dispatch(gameActions.start)}>start</Button>
      </div>
    );
  }
}

export default branch({
  players: ["players"],
  manipulators: ["constants", "manipulators"],
}, Settings);
