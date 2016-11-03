import React, { Component } from 'react';
import { branch } from 'baobab-react/higher-order';
import Button from '../atoms/Button';
import Switch from '../atoms/Switch';
import PlayerManipulator from '../PlayerManipulator';
import { gameActions } from '../../actions';
import styles from './styles.css';

class Settings extends Component {
  getIndex(manipulator) {
    // TODO: logic
    if (manipulator === this.props.manipulators.human) return 0;
    if (manipulator === this.props.manipulators.robot) return 1;
    return -1;
  }

  getManipulator(index) {
    // TODO: logic
    if (index === 0) return this.props.manipulators.human;
    if (index === 1) return this.props.manipulators.robot;
    return null;
  }

  render() {
    const PlayerManip = this.props.players.map((player, i) => {
      const activeIndex = this.getIndex(player.manipulator);

      return (
        <PlayerManipulator
          key={i}
          id={i}
          className={styles.playerManipulator}
          activeIndex={activeIndex}
          onChange={nextIdx => this.props.dispatch(gameActions.setManipulator, player.id, this.getManipulator(nextIdx))}
        />
      );
    });

    return (
      <div>
        {PlayerManip}
        <Button onClick={() => this.props.dispatch(gameActions.start)}>start</Button>
      </div>
    );
  }
}

export default branch({
  players: ["players"],
  manipulators: ["constants", "manipulators"],
}, Settings);
