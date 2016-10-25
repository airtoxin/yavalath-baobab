import { flatten } from 'lodash';
import { constants } from '../tree';

export const checkFinish = sortedGrids => {
  const filledGrids = flatten(sortedGrids).filter(({ state }) => state !== null && state !== constants.gridStates.empty);

  for (const { gridX, gridY, state } of filledGrids) {
    /* pattern 1 (3 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY][gridX + 1].state === state && sortedGrids[gridY][gridX + 2].state === state;
      const isWin = isLose && sortedGrids[gridY][gridX + 3].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}

    /* pattern 2 (9 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY][gridX - 1].state === state && sortedGrids[gridY][gridX - 2].state === state;
      const isWin = isLose && sortedGrids[gridY][gridX - 3].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}

    /* pattern 3 (5 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY + 1][gridX].state === state && sortedGrids[gridY + 2][gridX].state === state;
      const isWin = isLose && sortedGrids[gridY + 3][gridX].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}

    /* pattern 4 (11 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY - 1][gridX].state === state && sortedGrids[gridY - 2][gridX].state === state;
      const isWin = isLose && sortedGrids[gridY - 3][gridX].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}

    /* pattern 5 (1 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY - 1][gridX + 1].state === state && sortedGrids[gridY - 2][gridX + 2].state === state;
      const isWin = isLose && sortedGrids[gridY - 3][gridX + 3].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}

    /* pattern 6 (1 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY + 1][gridX - 1].state === state && sortedGrids[gridY + 2][gridX - 2].state === state;
      const isWin = isLose && sortedGrids[gridY + 3][gridX - 3].state === state;
      if (isWin) return true;
      if (isLose) return false;
    } catch(e) {}
  }

  return null;
};
