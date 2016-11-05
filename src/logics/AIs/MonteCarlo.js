import { flatten } from 'lodash';
import Base from './Base';
import Heuristic from './Heuristic';
import Random from './Random';
import { checkFinish, checkDraw } from '../boardLogics';

export default class MonteCarlo extends Heuristic {
  constructor(self, enemy, constants) {
    super(self, enemy, constants);

    this.selfAi = new Random(self, enemy, constants);
    this.enemyAi = new Random(enemy, self, constants);
  }

  step({ board }) {
    const shouldPlayGrid = super.searchShouldPlayGrid(board);
    if (shouldPlayGrid) return shouldPlayGrid;

    const gridWithScores = this.getPlayableGrids(board).map(grid =>
      this.playouts(board, grid, 5));
    return gridWithScores.reduce((acc, curr) =>
      acc.score >= curr.score ? acc : curr).grid;
  }

  playouts(board, grid, numTrials) {
    let trials = 0;
    let wins = 0;

    while (trials < numTrials) {
      trials++;
      console.log('@trials', trials);
      wins += this.playout(board, grid);
    }

    const score = wins / trials;
    return {
      grid,
      score,
    };
  }

  playout(board, playingGrid) {
    let simBoard = this.simulatePlay(board, playingGrid, this.self);
    const alreadyFinished = checkFinish(simBoard);
    if (alreadyFinished !== null) {
      if (alreadyFinished === true) {
        return 1;
      } else {
        return 0;
      }
    }

    while (1) {
      // simulate enemy play
      const enemyPlayedGrid = this.selfAi.step({ board: simBoard });
      simBoard = this.simulatePlay(simBoard, enemyPlayedGrid, this.self);
      const finishedByEnemyPlay = checkFinish(simBoard);
      if (finishedByEnemyPlay !== null) {
        if (finishedByEnemyPlay === false) {
          return 1;
        } else {
          return 0;
        }
      }

      if (checkDraw(simBoard)) return 0;

      // simulate self play
      const playedGrid = this.enemyAi.step({ board: simBoard });
      simBoard = this.simulatePlay(simBoard, playedGrid, this.enemy);
      const finishedByPlay = checkFinish(simBoard);
      if (finishedByPlay !== null) {
        if (finishedByPlay === true) {
          return 1;
        } else {
          return 0;
        }
      }

      if (checkDraw(simBoard)) return 0;
    }
  }
}
