import Baobab from 'baobab';

const tree = new Baobab({
  board: [
    [
      {
        state: Symbol(),
        occupiedPlayer: {
          id: Symbol(),
          color: '',
        }
      }
    ]
  ],
  turnPlayer: {
    id: Symbol(),
    color: '',
  },
  game: {
    finished: false,
    winner: Symbol(),
  },
  constants: {
    game: {
      boardSize: 5,
      gridSize: 30,
    },
    players: [
      {
        id: Symbol(),
        color: ''
      }
    ],
  },
}, {
  autoCommit: false,
});
