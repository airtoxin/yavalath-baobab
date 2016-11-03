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
    const shouldPlayGrid = this.searchShouldPlayGrid(board);
    if (shouldPlayGrid) return shouldPlayGrid;

    const gridWithScores = this.omitSuicide(board).map(grid =>
      this.playoutAll(board, grid, 1000));
    return gridWithScores.reduce((acc, curr) =>
      acc.score >= curr.score ? acc : curr).grid;
  }

  playoutAll(board, grid, numTrials) {
    let trials = 0;
    let wins = 0;

    while (trials < numTrials) {
      trials++;
      console.log("@trials", trials);
      wins += this.playout(board, grid);
    }

    const score = wins / trials;
    return {
      grid,
      score
    };
  }

  playout(board, playingGrid) {
    let simBoard = super.simulatePlay(board, playingGrid, this.self);
    const alreadyFinished = checkFinish(simBoard);
    if (alreadyFinished !== null) {
      if (alreadyFinished === true) {
        return 1;
      } else {
        return 0;
      }
    }

    while(1) {
      simBoard = this.simulateEnemyPlay(simBoard);
      const finishedByEnemyPlay = checkFinish(simBoard);
      if (finishedByEnemyPlay !== null) {
        if (finishedByEnemyPlay === false) {
          return 1;
        } else {
          return 0;
        }
      }

      simBoard = this.simulateSelfPlay(simBoard);
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

  simulateSelfPlay(board) {
    return super.simulatePlay(board, this.selfAi.step({ board }), this.self);
  }

  simulateEnemyPlay(board) {
    return super.simulatePlay(board, this.enemyAi.step({ board }), this.enemy);
  }
}
