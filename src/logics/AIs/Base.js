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
}
