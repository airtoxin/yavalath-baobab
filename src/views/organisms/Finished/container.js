import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

function Container({ finished, winnerColor }) {
  return <Component finished={finished} winnerColor={winnerColor} />;
}

export default branch({
  finished: ['game', 'finished'],
  winnerColor: ['game', 'winner', 'color'],
}, Container);
