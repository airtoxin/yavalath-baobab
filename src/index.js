import React from 'react';
import { find } from 'lodash';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree, { constants } from './tree';
import App from './views/App';
import RandomAI from './logics/AIs/Random';
import GuardHeuristicAI from './logics/AIs/GuardHeuristic';
import { boardActions } from './actions';

const Rooted = root(tree, App);

const robot = find(tree.get("players"), p => p.manipulator === tree.get("constants", "manipulators", "robot"));

if (robot) {
  const ai = new GuardHeuristicAI(robot.id, tree.get("constants"));

  tree.select("turnPlayer").on("update", updatee => {
    if (updatee.data.currentData.manipulator === constants.manipulators.robot) {
      const { gridX, gridY } = ai.step(tree.get());
      boardActions.play(tree, gridX, gridY);
    }
  });
}

render(<Rooted />, global.document.getElementById('app'));
