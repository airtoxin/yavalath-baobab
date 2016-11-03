import { sample } from 'lodash';
import Base from './Base';
import { checkFinish } from '../boardLogics';

export default class Heuristic extends Base {
  step({ board }) {
    const shouldPlayGrid = this.searchShouldPlayGrid(board);
    if (shouldPlayGrid) return shouldPlayGrid;

    return sample(this.omitSuicide(board));
  }

  searchShouldPlayGrid(board) {
    const shouldPlayGrid = this.searchCheckmate(board, this.self);
    if (shouldPlayGrid) return shouldPlayGrid;
    const shouldGuardGrid = this.searchCheckmate(board, this.enemy);
    if (shouldGuardGrid) return shouldGuardGrid;
  }

  searchCheckmate(board, player) {
    for (const grid of this.getPlayableGrids(board)) {
      const simulation = this.simulatePlay(board, grid, player);
      const result = checkFinish(simulation);

      if (result === true) return grid;
    }

    return null;
  }

  omitSuicide(board) {
    return this.getPlayableGrids(board).filter((grid) => {
      const simulation = this.simulatePlay(board, grid, this.self);
      const result = checkFinish(simulation);
      return result !== false;
    });
  }

  simulatePlay(board, grid, player) {
    const copyGrid = { ...grid, state: this.gridStates.occupied, occupiedPlayer: player };
    return Base.play(board, copyGrid);
  }
}
