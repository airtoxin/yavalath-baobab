// @flow
/* eslint-disable max-len */
import { flatten } from 'lodash';
import { constants } from '../tree';

type Player = {
  id: Symbol;
};

type Grid = {
  gridX: number;
  gridY: number;
  occupiedPlayer: Player;
};

type Board = Array<Array<Grid>>;

type FinishInfo = {
  finished: boolean;
  isWin?: boolean;
  player?: Player;
};

export function isSamePlayerOccupied(sortedGrids: Board, { gridX, gridY, occupiedPlayer }: Grid, direction: number, hop: number) {
  try {
    switch (direction) {
      case 3: // →
        return sortedGrids[gridY][gridX + hop].occupiedPlayer.id === occupiedPlayer.id;
      case 9: // ←
        return sortedGrids[gridY][gridX - hop].occupiedPlayer.id === occupiedPlayer.id;
      case 5: // ↘
        return sortedGrids[gridY + hop][gridX].occupiedPlayer.id === occupiedPlayer.id;
      case 11: // ↖
        return sortedGrids[gridY - hop][gridX].occupiedPlayer.id === occupiedPlayer.id;
      case 1: // ↗
        return sortedGrids[gridY - hop][gridX + hop].occupiedPlayer.id === occupiedPlayer.id;
      case 7: // ↙
        return sortedGrids[gridY + hop][gridX - hop].occupiedPlayer.id === occupiedPlayer.id;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

export function checkBoard(sortedGrids: Board): FinishInfo {
  const filledGrids = flatten(sortedGrids).filter(({ state, occupiedPlayer }) => state === constants.gridStates.occupied && occupiedPlayer !== null);

  let mayLosePlayer: Player | null = null;
  function win(player: Player): FinishInfo {
    return { finished: true, player, isWin: true };
  }
  function lose(player: Player): FinishInfo {
    return { finished: true, player, isWin: false };
  }

  for (const grid of filledGrids) {
    /* pattern 1 (3 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 3, 1) && isSamePlayerOccupied(sortedGrids, grid, 3, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 3, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
    /* pattern 2 (9 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 9, 1) && isSamePlayerOccupied(sortedGrids, grid, 9, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 9, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
    /* pattern 3 (5 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 5, 1) && isSamePlayerOccupied(sortedGrids, grid, 5, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 5, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
    /* pattern 4 (11 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 11, 1) && isSamePlayerOccupied(sortedGrids, grid, 11, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 11, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
    /* pattern 5 (1 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 1, 1) && isSamePlayerOccupied(sortedGrids, grid, 1, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 1, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
    /* pattern 6 (7 o'clock direction) */
    if (isSamePlayerOccupied(sortedGrids, grid, 7, 1) && isSamePlayerOccupied(sortedGrids, grid, 7, 2)) {
      if (isSamePlayerOccupied(sortedGrids, grid, 7, 3)) return win(grid.occupiedPlayer);
      mayLosePlayer = grid.occupiedPlayer;
    }
  }

  if (mayLosePlayer !== null) return lose(mayLosePlayer);

  return { finished: false };
};

export const checkFinish = (sortedGrids: Board) => {
  const { finished, isWin } = checkBoard(sortedGrids);
  if (finished) return isWin;
  return null;
};

export const checkDraw = (sortedGrids: Board) => {
  const emptyGrids = flatten(sortedGrids).filter(({ state }) => state === constants.gridStates.empty);
  return emptyGrids.length === 0;
};

export const convertToRecordGridSystem = ({ gridX, gridY }: Grid) => {
  let x = gridX;
  const y = gridY;

  if (gridY < 4) x = gridX - (4 - gridY);
  return { x: x + 1, y: y + 1 };
};
