/* eslint-disable class-methods-use-this */
import { flatten } from 'lodash';

export default class Base {
  constructor(self, constants) {
    this.self = self;
    Object.assign(this, constants);
  }

  step(/* state */) {
    throw new Error('must override');
  }

  getPlayableGrids(board) {
    return flatten(board).filter(g => g.state === this.gridStates.empty);
  }

  static set(i, value, xs) {
    return [
      ...xs.slice(0, i),
      value,
      ...xs.slice(i + 1),
    ];
  }

  static setGrid(board, grid) {
    return Base.set(
      grid.gridY,
      Base.set(
        grid.gridX,
        grid,
        board[grid.gridY],
      ),
      board,
    );
  }
}
