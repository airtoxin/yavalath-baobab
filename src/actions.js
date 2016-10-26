import { find, findLast } from 'lodash';
import { checkFinish } from './logics/boardLogics';

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

export function enableHighlight(tree, highlightGrid) {
  tree.set(["highlight"], { ...highlightGrid, occupiedPlayer: { ...highlightGrid.occupiedPlayer, color: 'red' } });
  tree.commit();
}

export function disableHighlight(tree) {
  tree.set(["highlight"], null);
  tree.commit();
}

export function historyBack(tree) {
  // back history
  const historySize = tree.get("history").length;
  const lastMove = tree.get("history", historySize - 1);
  if (!lastMove) return; // history is empty
  tree.pop("history");
  tree.select("historyBackHistory").push(lastMove);

  // back turn
  const turnPlayerCursor = tree.select("turnPlayer");
  const players = tree.get("constants", "players");
  const prevTurnPlayer = findLast(players, p => p.id !== turnPlayerCursor.get("id"));
  turnPlayerCursor.set(prevTurnPlayer);

  // back gridState
  const { empty } = tree.get("constants", "gridStates");
  const gridCursor = tree.select(["board", lastMove.gridY, lastMove.gridX]);
  gridCursor.set(["state"], empty);
  gridCursor.set(["occupiedPlayer"], null);

  // back finished
  tree.set(["game", "finished"], false);
  tree.set(["game", "winner"], null);

  tree.commit();
}

function historyForwardWithoutCommit(tree) {
  const hbHistoryCursor = tree.select(["historyBackHistory"]);
  const size = hbHistoryCursor.get().length;
  const lastBackedHistory = hbHistoryCursor.get(size - 1);

  if (lastBackedHistory) {
    // forward history
    hbHistoryCursor.pop();
    playWithoutCommit(tree, lastBackedHistory.gridX, lastBackedHistory.gridY);
  }
}

export function historyForward(tree) {
  historyForwardWithoutCommit(tree);
  tree.commit();
}
