import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

function TurnPlayer({ playerColor }) {
  return <Component playerColor={playerColor} />;
}

export default branch({
  playerColor: ['turnPlayer', 'color'],
}, TurnPlayer);
