import { find, flatten } from 'lodash';
import { constants } from '../../tree';

const { gridStates: { empty } } = constants;

export default class Base {
  constructor(self, constants) {
    this.self = self;
    Object.assign(this, constants);
  }

  step(state) {
    throw new Error("must override")
  }

  getPlayableGrids(board) {
    return flatten(board).filter(g => g.state === empty);
  }
}
