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
  manipulators: {
    human: Symbol('human'),
    robot: Symbol('robot'),
  },
};

const player1 = {
  ...constants.players[0],
  manipulator: constants.manipulators.human
};
const player2 = {
  ...constants.players[1],
  manipulator: constants.manipulators.human
};

const turnPlayer = player1;

const game = {
  finished: false,
  winner: null,
};

const history = [];
const historyBackHistory = [];

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

const highlight = null;

const tree = new Baobab({
  constants,
  game,
  board,
  history,
  historyBackHistory,
  turnPlayer,
  player1,
  player2,
  highlight,
}, {
  autoCommit: false,
});

export default tree;
