import React from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree, { constants } from './tree';
import App from './views/App';
import RandomAI from './logics/AIs/Random';
import { play } from './actions';

const Rooted = root(tree, App);

const ai = new RandomAI();

tree.select("turnPlayer").on("update", updatee => {
  // if (updatee.data.currentData.id === constants.players[1].id) {
  //   const { gridX, gridY } = ai.step(tree.get("board"));
  //   play(tree, gridX, gridY);
  // }
});

render(<Rooted />, global.document.getElementById('app'));
