import { flatten } from 'lodash';
import { constants } from '../tree';

export const checkFinish = sortedGrids => {
  const filledGrids = flatten(sortedGrids).filter(({ state, occupiedPlayer }) => state === constants.gridStates.occupied && occupiedPlayer !== null);

  for (const { gridX, gridY, occupiedPlayer } of filledGrids) {
    /* pattern 1 (3 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY][gridX + 1].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY][gridX + 2].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY][gridX + 3].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}

    /* pattern 2 (9 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY][gridX - 1].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY][gridX - 2].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY][gridX - 3].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}

    /* pattern 3 (5 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY + 1][gridX].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY + 2][gridX].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY + 3][gridX].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}

    /* pattern 4 (11 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY - 1][gridX].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY - 2][gridX].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY - 3][gridX].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}

    /* pattern 5 (1 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY - 1][gridX + 1].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY - 2][gridX + 2].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY - 3][gridX + 3].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}

    /* pattern 6 (1 o'clock direction) */
    try {
      const isLose = sortedGrids[gridY + 1][gridX - 1].occupiedPlayer.id === occupiedPlayer.id && sortedGrids[gridY + 2][gridX - 2].occupiedPlayer.id === occupiedPlayer.id;
      try {
        const isWin = isLose && sortedGrids[gridY + 3][gridX - 3].occupiedPlayer.id === occupiedPlayer.id;
        if (isWin) return true;
      } catch(e) {}
      if (isLose) return false;
    } catch(e) {}
  }

  return null;
};
