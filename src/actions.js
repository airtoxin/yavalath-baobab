import lodash from 'lodash';

export function play(tree, gridX, gridY) {
  const { gridStates, players } = tree.get("constants");
  const gridCursor = tree.select("board", gridY, gridX);
  const turnPlayerCursor = tree.select("turnPlayer");

  // check play-able grid
  if (gridCursor.get("state") !== gridStates.empty) return;
  if (gridCursor.get("occupiedPlayer", "id") === turnPlayerCursor.get("id")) return;

  // occupy grid
  gridCursor.set(["state"], gridStates.occupied);
  gridCursor.set(["occupiedPlayer"], turnPlayerCursor.get());

  // next turn
  const nextTurnPlayer = lodash.find(players, p => p.id !== turnPlayerCursor.get("id"));
  turnPlayerCursor.set(nextTurnPlayer);

  tree.commit();
}
