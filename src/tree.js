import Baobab from 'baobab';
import lodash from 'lodash';
import { gridPoint } from 'react-hex';

export const constants = {
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

const players = {
  1: {
    ...constants.players[0],
    manipulator: constants.manipulators.human
  },
  2: {
    ...constants.players[1],
    manipulator: constants.manipulators.human
  },
};

const turnPlayer = players[1];

const game = {
  constants: {
    boardSize: 5,
    gridSize: 30,
  },
  finished: false,
  winner: null,
};

const history = [];
const historyBackHistory = [];

const board = lodash.range(game.constants.boardSize * 2 - 1).map((gridY) => {
  return lodash.range(game.constants.boardSize * 2 - 1).map((gridX) => {
    const { center: [x, y] } = gridPoint('pointy-topped', game.constants.gridSize, gridX, gridY, 30, 30);
    return {
      x,
      y,
      gridX,
      gridY,
      state: (gridX + gridY < game.constants.boardSize - 1) || (gridX + gridY >= game.constants.boardSize * 3 - 2) ? null : constants.gridStates.empty,
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
  players,
  highlight,
}, {
  autoCommit: false,
});

export default tree;
