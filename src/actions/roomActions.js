import * as roomLogics from '../logics/roomLogics';
import { startRemoteGame } from './gameActions';
import { constants } from '../tree';

export function createRoom(tree, name) {
  const room = roomLogics.create(name);
  // create room
  tree.set(["rooms", room.id], room);

  tree.commit();
}

export function joinRoom(tree, roomId) {
  const { manipulators: { human, online } } = constants;

  tree.set(['rooms', roomId, 'players', tree.get('id')], true);

  // set player info
  startRemoteGame(tree);

  tree.commit();
}
