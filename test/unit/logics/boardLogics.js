import assert from 'assert';
import { checkBoard } from '../../../src/logics/boardLogics';
import { constants } from '../../../src/tree';

const _ = null;
const x = Symbol('player1');
const o = Symbol('player2');

const createBoard = specs => (
  specs.map((rowSpecs, gridY) => (
    rowSpecs.map((spec, gridX) => ({
      gridX,
      gridY,
      state: spec ? constants.gridStates.occupied : constants.gridStates.empty,
      occupiedPlayer: { id: spec },
    }))
  ))
);

describe('checkBoard', () => {
  it('x wins by 4 stones', () => {
    const board = createBoard([
      [x, o, x, x, x, x, o, _],
        [_, o, o, _, _, _, _, _],
          [_, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: x });
    assert.strictEqual(isWin, true);
  });

  it('x wins by 4 stones with o leech', () => {
    const board = createBoard([
      [x, o, x, x, x, x, _, _],
        [_, o, o, _, _, _, _, _],
          [_, _, _, _, _, _, _, _],
            [_, o, _, o, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: x });
    assert.strictEqual(isWin, true);
  });

  it('x wins by 5 stones', () => {
    const board = createBoard([
      [x, o, x, x, x, x, x, _],
        [_, o, _, _, o, o, _, _],
          [_, _, _, o, _, _, _, _],
            [_, _, _, o, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: x });
    assert.strictEqual(isWin, true);
  });

  it('x wins by 4 stones with 3 stones line', () => {
    const board = createBoard([
      [x, o, x, x, x, x, _, _],
        [_, o, _, _, x, _, _, _],
          [_, _, _, o, x, _, _, _],
            [_, _, _, o, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, o, o, _, o, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: x });
    assert.strictEqual(isWin, true);
  });

  it('x lose by 3 stones', () => {
    const board = createBoard([
      [x, o, x, x, x, _, _, _],
        [_, o, _, _, o, _, _, _],
          [_, _, _, o, _, _, _, _],
            [_, _, _, o, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: x });
    assert.strictEqual(isWin, false);
  });

  it('o win by 4 stones', () => {
    const board = createBoard([
      [x, o, x, o, x, _, _, _],
        [_, o, _, o, o, _, _, _],
          [_, _, _, o, _, _, _, _],
            [_, _, _, o, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished, player, isWin } = checkBoard(board);
    assert.strictEqual(finished, true);
    assert.deepEqual(player, { id: o });
    assert.strictEqual(isWin, true);
  });

  it('no winner no loser', () => {
    const board = createBoard([
      [x, o, x, o, x, x, o, o],
        [x, o, x, x, o, o, x, x],
          [o, x, o, o, x, x, o, o],
            [o, o, x, o, o, x, x, o],
              [x, x, o, x, x, o, o, x],
                [o, x, o, o, x, x, o, o],
                  [o, o, x, x, o, o, x, x],
                    [x, x, o, o, x, x, o, o],
    ]);
    const { finished } = checkBoard(board);
    assert.strictEqual(finished, false);
  });

  it('empty x board', () => {
    const board = createBoard([
      [_, o, _, o, _, _, o, o],
        [_, o, _, _, o, o, _, _],
          [o, _, o, o, _, _, o, o],
            [o, o, _, o, o, _, _, o],
              [_, _, o, _, _, o, o, _],
                [o, _, o, o, _, _, o, o],
                  [o, o, _, _, o, o, _, _],
                    [_, _, o, o, _, _, o, o],
    ]);
    const { finished } = checkBoard(board);
    assert.strictEqual(finished, false);
  });

  it('empty o board', () => {
    const board = createBoard([
      [x, _, x, _, x, x, _, _],
        [x, _, x, x, _, _, x, x],
          [_, x, _, _, x, x, _, _],
            [_, _, x, _, _, x, x, _],
              [x, x, _, x, x, _, _, x],
                [_, x, _, _, x, x, _, _],
                  [_, _, x, x, _, _, x, x],
                    [x, x, _, _, x, x, _, _],
    ]);
    const { finished } = checkBoard(board);
    assert.strictEqual(finished, false);
  });

  it('empty board', () => {
    const board = createBoard([
      [_, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _],
          [_, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _],
              [_, _, _, _, _, _, _, _],
                [_, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, _, _, _, _, _, _, _],
    ]);
    const { finished } = checkBoard(board);
    assert.strictEqual(finished, false);
  });
});
