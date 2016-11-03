import { findIndex } from 'lodash';

let i = 0;
export function setManipulator(tree, playerId, manipulator) {
  const playerIdx = findIndex(tree.get("players"), p => p.id === playerId);
  tree.set(["players", playerIdx, "manipulator"], manipulator);

  tree.commit();
}

export function start(tree) {
  tree.set(['game', 'started'], true);
  tree.set(['turnPlayer'], tree.get('players', 0));
  tree.commit();
}
