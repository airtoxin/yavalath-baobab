import { findLast } from 'lodash';
import { playWithoutCommit } from './boardActions';

export function enableHighlight(tree, highlightGrid) {
  tree.set(['highlight'], { ...highlightGrid, occupiedPlayer: { ...highlightGrid.occupiedPlayer, color: 'red' } });
  tree.commit();
}

export function disableHighlight(tree) {
  tree.set(['highlight'], null);
  tree.commit();
}

export function historyBack(tree) {
  // back history
  const historySize = tree.get('history').length;
  const lastMove = tree.get('history', historySize - 1);
  if (!lastMove) return; // history is empty
  tree.pop('history');
  tree.select('historyBackHistory').push(lastMove);

  // when game is end, turn didn't switch
  if (!tree.get(['game', 'finished'])) {
    // back turn
    const turnPlayerCursor = tree.select('turnPlayer');
    const players = tree.get('players');
    const prevTurnPlayer = findLast(players, p => p.id !== turnPlayerCursor.get('id'));
    turnPlayerCursor.set(prevTurnPlayer);
  }

  // back gridState
  const { empty } = tree.get('constants', 'gridStates');
  const gridCursor = tree.select(['board', lastMove.gridY, lastMove.gridX]);
  gridCursor.set(['state'], empty);
  gridCursor.set(['occupiedPlayer'], null);

  // back finished
  tree.set(['game', 'finished'], false);
  tree.set(['game', 'winner'], null);

  tree.commit();
}

export function historyForwardWithoutCommit(tree) {
  const hbHistoryCursor = tree.select(['historyBackHistory']);
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
