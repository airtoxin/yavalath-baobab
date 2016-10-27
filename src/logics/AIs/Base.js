import { flatten } from 'lodash';
import { constants } from '../../tree';

const { gridStates: { empty } } = constants;

export default class Base {
  constructor(id, constants) {
    this.id = id;
    Object.assign(this, constants);
  }

  step(state) {
    throw new Error("must override")
  }

  getPlayableGrids(board) {
    return flatten(board).filter(g => g.state === empty);
  }
}
