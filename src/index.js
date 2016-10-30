import React from 'react';
import { find } from 'lodash';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree, { constants } from './tree';
import App from './views/App';
import RandomAI from './logics/AIs/Random';
import HeuristicAI from './logics/AIs/Heuristic';
import { boardActions } from './actions';

const Rooted = root(tree, App);

tree.get("players")
  .filter(p => p.manipulator === tree.get("constants", "manipulators", "robot"))
  .forEach(robot => {
    const ai = new HeuristicAI(robot, tree.get("constants"));

    tree.select("turnPlayer").on("update", updatee => {
      if (updatee.data.currentData.id === robot.id) {
        setTimeout(() => {
          const { gridX, gridY } = ai.step(tree.get());
          boardActions.play(tree, gridX, gridY);
        }, 10);
      }
    });
  });

render(<Rooted />, global.document.getElementById('app'));
