import React from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import App from './views/App';
import HeuristicAI from './logics/AIs/Heuristic';
import { boardActions } from './actions';

const Rooted = root(tree, App);

tree.select('game', 'started').on('update', updatee => {
  if (!updatee.target.get()) return;

  tree.get('players')
    .filter(p => p.manipulator === tree.get('constants', 'manipulators', 'robot'))
    .forEach((robot) => {
      const ai = new HeuristicAI(robot, tree.get('constants'));

      tree.select('turnPlayer').on('update', (updatee) => {
        if (updatee.target.get().id === robot.id) {
          setTimeout(() => {
            const { gridX, gridY } = ai.step(tree.get());
            boardActions.play(tree, gridX, gridY);
          }, 10);
        }
      });

      // play if first turn player is robot
      if (tree.get('turnPlayer', "manipulator") === tree.get("constants", "manipulators", "human")) return;
      const { gridX, gridY } = ai.step(tree.get());
      boardActions.play(tree, gridX, gridY);
    });
});

render(<Rooted />, global.document.getElementById('app'));
