import uuid from 'uuid';

export function addRoom(tree, name) {
  const id = uuid.v4();
  tree.set(["rooms", id], name);
  tree.commit();
}

export function startGame(tree, id) {
  console.log("@id", id);
}
