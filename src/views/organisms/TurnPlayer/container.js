import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

const TurnPlayer = ({ player }) => <Component player={player} />;

export default branch({
  player: ['turnPlayer'],
}, TurnPlayer);
