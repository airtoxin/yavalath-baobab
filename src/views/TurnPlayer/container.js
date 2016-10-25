import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

const TurnPlayer = ({ playerColor }) => <Component playerColor={playerColor}/>;

export default branch({
  playerColor: ["turnPlayer", "color"],
}, TurnPlayer);
