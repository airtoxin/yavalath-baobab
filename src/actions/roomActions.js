import uuid from 'uuid';
import { start } from './gameActions';

export function addRoom(tree, name) {
  const id = uuid.v4();
  tree.set(["rooms", id], name);
  tree.commit();
}

export function startGame(tree, id) {
  const manipulators = tree.get('constants', 'manipulators');

  // set player info
  tree.set(['players', 0, 'manipulator'], manipulators.human);
  tree.set(['players', 1], { ...(tree.get(['players', 1])), manipulator: manipulators.online, name: 'remote' });

  start(tree);

  tree.commit();
}
