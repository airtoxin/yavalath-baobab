import { sample } from 'lodash';
import Base from './Base';

export default class Random extends Base {
  step({ board }) {
    return sample(this.getPlayableGrids(board));
  }
}
