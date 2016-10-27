import { sample, find } from 'lodash';
import Base from './Base';
import { checkFinish } from '../boardLogics';

export default class Random extends Base {
  step({ board, players }) {
    const humanPlayer = find(players, p => p.manipulator !== this.id);
    return this.searchCheckmate(board, humanPlayer);
  }

  searchCheckmate(board, humanPlayer) {
    for (const grid of this.getPlayableGrids(board)) {
      const copyGrid = { ...grid, state: this.gridStates.occupied, occupiedPlayer: humanPlayer };
      const copyBoard = this.setGrid(board, copyGrid);
      const playerWins = checkFinish(copyBoard);

      if (playerWins) return grid;
    }

    return sample(this.getPlayableGrids(board));
  }

  set(i, value, xs) {
    return [
      ...xs.slice(0, i),
      value,
      ...xs.slice(i + 1),
    ];
  }

  setGrid(board, grid) {
    return this.set(
      grid.gridY,
      this.set(
        grid.gridX,
        grid,
        board[grid.gridY],
      ),
      board,
    );
  }
}
