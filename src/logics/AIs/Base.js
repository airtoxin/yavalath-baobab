import { flatten } from 'lodash';

export default class Base {
  step(board) {
    throw new Error("must override")
  }

  getPlayableGrids(board) {
    return flatten(board).filter(g => g !== null && g.occupied === false);
  }
}
