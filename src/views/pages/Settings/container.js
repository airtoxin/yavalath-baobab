import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Button from '../../atoms/Button';
import Player from '../../organisms/Player';
import { gameActions } from '../../../actions';
import styles from './styles.css';

function Settings({ players, dispatch }) {
  const Players = players.map((player, i) => (
    <Player
      key={i}
      className={styles.playerManipulator}
      player={player}
      onChange={manipulator => dispatch(gameActions.setManipulator, player.id, manipulator)}
    />
  ));

  return (
    <div>
      {Players}
      <Button onClick={() => dispatch(gameActions.start)}>start</Button>
    </div>
  );
}

export default branch({
  players: ['players'],
  manipulators: ['constants', 'manipulators'],
}, Settings);
