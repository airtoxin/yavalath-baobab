/* eslint-disable class-methods-use-this */
import { flatten, find } from 'lodash';

export default class Base {
  constructor(self, enemy, constants) {
    this.self = self;
    this.enemy = enemy;
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

  static play(board, grid) {
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
