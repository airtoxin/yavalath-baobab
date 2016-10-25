import Baobab from 'baobab';
import lodash from 'lodash';
import { gridPoint } from 'react-hex';

export const constants = {
  game: {
    boardSize: 5,
    gridSize: 30,
  },
  gridStates: {
    empty: Symbol('empty'),
    occupied: Symbol('occupied'),
  },
  players: [
    { id: Symbol('red'), color: 'hotpink' },
    { id: Symbol('blue'), color: 'steelblue' },
  ],
};

const turnPlayer = constants.players[0];

const game = {
  finished: false,
  winner: null,
};

const board = lodash.range(constants.game.boardSize * 2 - 1).map((gridY) => {
  return lodash.range(constants.game.boardSize * 2 - 1).map((gridX) => {
    const { center: [x, y] } = gridPoint('pointy-topped', constants.game.gridSize, gridX, gridY, 30, 30);
    return {
      x,
      y,
      gridX,
      gridY,
      state: (gridX + gridY < constants.game.boardSize - 1) || (gridX + gridY >= constants.game.boardSize * 3 - 2) ? null : constants.gridStates.empty,
      occupiedPlayer: null,
    };
  });
});

export default new Baobab({
  constants,
  game,
  board,
  turnPlayer,
}, {
  autoCommit: false,
});
