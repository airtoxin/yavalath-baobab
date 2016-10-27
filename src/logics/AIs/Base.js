import { flatten } from 'lodash';
import { constants } from '../../tree';

const { gridStates: { empty } } = constants;

export default class Base {
  step(board) {
    throw new Error("must override")
  }

  getPlayableGrids(board) {
    return flatten(board).filter(g => g.state === empty);
  }
}
