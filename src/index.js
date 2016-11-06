import React from 'react';
import { find } from 'lodash';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import ErrorView from './views/ErrorView';
import App from './views/pages/App';
import HeuristicAI from './logics/AIs/Heuristic';
import MonteCarlo from './logics/AIs/MonteCarlo';
import { boardActions } from './actions';
import Remote from './remote';

const remote = new Remote();

const Rooted = root(tree, App);

const connect = (refPath, selector, defaultValue) => {
  const ref = remote.db.ref(refPath);
  const cursor = tree.select(selector);

  ref.on('value', snapshot => {
    cursor.set(snapshot.val() || defaultValue);
    tree.commit();
  });
  cursor.on('update', updatee => ref.set(updatee.target.get() || defaultValue));
}

connect('rooms', ['rooms'], {});

tree.select('game', 'started').on('update', (updatee) => {
  if (!updatee.target.get()) return;

  tree.get('players')
    .filter(p => p.manipulator === tree.get('constants', 'manipulators', 'robot'))
    .forEach((robot, i) => {
      const enemy = find(tree.get('players'), p => p.id !== robot.id);
      const ai = new MonteCarlo(robot, enemy, tree.get('constants'));

      tree.select('turnPlayer').on('update', (tpUpdatee) => {
        if (tpUpdatee.target.get().id === robot.id) {
          setTimeout(() => {
            const { gridX, gridY } = ai.step(tree.get());
            boardActions.play(tree, gridX, gridY);
          }, 10);
        }
      });

      // play if first turn player is robot
      if (tree.get('turnPlayer', 'manipulator') === tree.get('constants', 'manipulators', 'human')) return;
      const { gridX, gridY } = ai.step(tree.get());
      boardActions.play(tree, gridX, gridY);
    });
});

render(<ErrorView><Rooted /></ErrorView>, global.document.getElementById('app'));
