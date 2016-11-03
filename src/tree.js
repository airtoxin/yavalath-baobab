/* eslint-disable no-mixed-operators */
import Baobab from 'baobab';
import lodash from 'lodash';
import { gridPoint } from 'react-hex';

export const constants = {
  gridStates: {
    empty: Symbol('empty'),
    occupied: Symbol('occupied'),
  },
  players: [
    { id: Symbol('red'), name: 'Player 1', color: 'hotpink' },
    { id: Symbol('blue'), name: 'Player 2', color: 'steelblue' },
  ],
  manipulators: {
    human: Symbol('human'),
    robot: Symbol('robot'),
  },
};

const players = [
  {
    ...constants.players[0],
    manipulator: constants.manipulators.human,
  },
  {
    ...constants.players[1],
    manipulator: constants.manipulators.robot,
  },
];

const turnPlayer = null;

const game = {
  started: false,
  constants: {
    boardSize: 5,
    gridSize: 30,
  },
  finished: false,
  winner: null,
};

const history = [];
const historyBackHistory = [];

const board = lodash.range(game.constants.boardSize * 2 - 1).map(gridY => (
  lodash.range(game.constants.boardSize * 2 - 1).map((gridX) => {
    const { center: [x, y] } = gridPoint('pointy-topped', game.constants.gridSize, gridX, gridY, 30, 30);
    return {
      x,
      y,
      gridX,
      gridY,
      state:
        (gridX + gridY < game.constants.boardSize - 1) ||
        (gridX + gridY >= game.constants.boardSize * 3 - 2) ?
        null : constants.gridStates.empty,
      occupiedPlayer: null,
    };
  })
));

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
  asynchronous: false,
});

export default tree;
