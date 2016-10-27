import { find, findLast } from 'lodash';
import { checkFinish } from '../logics/boardLogics';

function playWithoutCommit(tree, gridX, gridY) {
  // check game is already finished
  if (tree.get("game", "finished")) return;

  const { gridStates, players } = tree.get("constants");
  const turnPlayerCursor = tree.select("turnPlayer");

  // check play-able grid
  const gridCursor = tree.select("board", gridY, gridX);
  if (gridCursor.get("state") !== gridStates.empty) return;
  if (gridCursor.get("occupiedPlayer", "id") === turnPlayerCursor.get("id")) return;

  // occupy grid
  gridCursor.set(["state"], gridStates.occupied);
  gridCursor.set(["occupiedPlayer"], turnPlayerCursor.get());

  // push history
  tree.select("history").push(gridCursor.get());

  // check game is just finished
  const nextTurnPlayer = find(players, p => p.id !== turnPlayerCursor.get("id"));
  const finished = checkFinish(tree.get("board"));
  if (finished !== null) {
    // game end
    tree.set(["game", "finished"], true);

    if (finished === true) {
      // turn player win
      tree.set(["game", "winner"], turnPlayerCursor.get());
    } else {
      // turn player lose
      tree.set(["game", "winner"], nextTurnPlayer);
    }
  } else {
    // next turn
    turnPlayerCursor.set(nextTurnPlayer);
  }
}

export function play(tree, gridX, gridY) {
  const hbHistoryCursor = tree.select(["historyBackHistory"]);
  const size = hbHistoryCursor.get().length;
  const lastBackedHistory = hbHistoryCursor.get(size - 1);

  if (lastBackedHistory && lastBackedHistory.gridX === gridX && lastBackedHistory.gridY === gridY) {
    // do forward
    historyForwardWithoutCommit(tree);
  } else {
    // clear back history
    hbHistoryCursor.set([]);
    // do play
    playWithoutCommit(tree, gridX, gridY);
  }

  tree.commit();
}
