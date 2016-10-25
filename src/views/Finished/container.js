import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Component from './component';

const Container = ({ finished, winnerColor }) => <Component finished={finished} winnerColor={winnerColor}/>

export default branch({
  finished: ["game", "finished"],
  winnerColor: ["game", "winner", "color"],
}, Container);
