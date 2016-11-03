/* eslint-disable max-len */
import { flatten } from 'lodash';
import { constants } from '../tree';

export const checkLose = (sortedGrids, { gridX, gridY, occupiedPlayer }) => {
  /* pattern 1 (3 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY][gridX + 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX + 2].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  /* pattern 2 (9 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY][gridX - 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX - 2].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  /* pattern 3 (5 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY + 1][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 2][gridX].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  /* pattern 4 (11 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY - 1][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 2][gridX].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  /* pattern 5 (1 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY - 1][gridX + 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 2][gridX + 2].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  /* pattern 6 (7 o'clock direction) */
  try {
    const isLose = (
      sortedGrids[gridY + 1][gridX - 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 2][gridX - 2].occupiedPlayer.id === occupiedPlayer.id);
    if (isLose) return true;
  } catch (e) { /* pass */ }

  return false;
};

export const checkWin = (sortedGrids, { gridX, gridY, occupiedPlayer }) => {
  /* pattern 1 (3 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY][gridX + 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX + 2].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX + 3].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  /* pattern 2 (9 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY][gridX - 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX - 2].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY][gridX - 3].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  /* pattern 3 (5 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY + 1][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 2][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 3][gridX].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  /* pattern 4 (11 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY - 1][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 2][gridX].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 3][gridX].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  /* pattern 5 (1 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY - 1][gridX + 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 2][gridX + 2].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY - 3][gridX + 3].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  /* pattern 6 (7 o'clock direction) */
  try {
    const isWin = (
      sortedGrids[gridY + 1][gridX - 1].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 2][gridX - 2].occupiedPlayer.id === occupiedPlayer.id &&
      sortedGrids[gridY + 3][gridX - 3].occupiedPlayer.id === occupiedPlayer.id);
    if (isWin) return true;
  } catch (e) { /* pass */ }

  return false;
};

export const checkFinish = (sortedGrids) => {
  const filledGrids = flatten(sortedGrids).filter(({ state, occupiedPlayer }) => state === constants.gridStates.occupied && occupiedPlayer !== null);

  let losing = null;

  for (const filledGrid of filledGrids) {
    if (checkWin(sortedGrids, filledGrid)) return true;
    if (checkLose(sortedGrids, filledGrid)) losing = true;
  }

  if (losing) return false;

  return null;
};

export const convertToRecordGridSystem = ({ gridX, gridY }) => {
  let x = gridX;
  const y = gridY;

  if (gridY < 4) x = gridX - (4 - gridY);
  return { x: x + 1, y: y + 1 };
};
