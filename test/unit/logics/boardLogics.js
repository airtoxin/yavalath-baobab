import assert from 'assert';
import { checkLose, checkWin, checkFinish } from '../../../src/logics/boardLogics';
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

describe('checkLose', () => {
  describe('direction -', () => {
    it('[x] x x => true', () => {
      const board = createBoard([
        [x, x, x],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [x, x, x, x, x],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] => true', () => {
      const board = createBoard([
        [x, x, x],
      ]);
      const result = checkLose(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x [x] x => false', () => {
      const board = createBoard([
        [x, x, x],
      ]);
      const result = checkLose(board, { gridX: 1, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ x => false', () => {
      const board = createBoard([
        [x, _, x],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ _ => false', () => {
      const board = createBoard([
        [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x x _ x x => false', () => {
      const board = createBoard([
        [x, x, _, x, x, _, x, x],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });

  describe('direction /', () => {
    it('[x] x x => true', () => {
      const board = createBoard([
        [_, _, x],
          [_, x, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [_, _, _, _, x],
          [_, _, _, x, _],
            [_, _, x, _, _],
              [_, x, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 4, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] => true', () => {
      const board = createBoard([
        [_, _, x],
          [_, x, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x [x] x => false', () => {
      const board = createBoard([
        [_, _, x],
          [_, x, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 1, gridY: 1, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ x => false', () => {
      const board = createBoard([
        [_, _, x],
          [_, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ _ => false', () => {
      const board = createBoard([
        [_, _, _],
          [_, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x x _ x x => false', () => {
      const board = createBoard([
        [_, _, _, _, _, _, _, x],
          [_, _, _, _, _, _, x, _],
            [_, _, _, _, _, _, _, _],
              [_, _, _, _, x, _, _, _],
                [_, _, _, x, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [_, x, _, _, _, _, _, _],
                      [x, _, _, _, _, _, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 7, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });

  describe('direction \\', () => {
    it('[x] x x => true', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
              [x, _, _],
                [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] => true', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x [x] x => false', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 1, gridY: 1, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ x => false', () => {
      const board = createBoard([
        [x, _, _],
          [_, _, _],
            [x, _, _],
      ]);
      const result = checkLose(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] _ _ => false', () => {
      const board = createBoard([
        [x, _, _],
          [_, _, _],
            [_, _, _],
      ]);
      const result = checkLose(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x x _ x x => false', () => {
      const board = createBoard([
        [x, _, _, _, _, _, _, _],
          [x, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _],
              [x, _, _, _, _, _, _, _],
                [x, _, _, _, _, _, _, _],
                  [_, _, _, _, _, _, _, _],
                    [x, _, _, _, _, _, _, _],
                      [x, _, _, _, _, _, _, _],
      ]);
      const result = checkLose(board, { gridX: 0, gridY: 7, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });
});

describe('checkWin', () => {
  describe('direction -', () => {
    it('[x] x x => false', () => {
      const board = createBoard([
        [x, x, x],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('x x [x] => false', () => {
      const board = createBoard([
        [x, x, x],
      ]);
      const result = checkWin(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x x x => true', () => {
      const board = createBoard([
        [x, x, x, x],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x [x] => true', () => {
      const board = createBoard([
        [x, x, x, x],
      ]);
      const result = checkWin(board, { gridX: 3, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [x, x, x, x, x],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x x [x] => true', () => {
      const board = createBoard([
        [x, x, x, x, x],
      ]);
      const result = checkWin(board, { gridX: 4, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] x x => false', () => {
      const board = createBoard([
        [x, x, x, x, x],
      ]);
      const result = checkWin(board, { gridX: 2, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x => false', () => {
      const board = createBoard([
        [x, x, _, x],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });

  describe('direction /', () => {
    it('[x] x x => false', () => {
      const board = createBoard([
        [_, _, x],
          [_, x, _],
            [x, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('x x [x] => false', () => {
      const board = createBoard([
        [_, _, x],
          [_, x, _],
            [x, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x x x => true', () => {
      const board = createBoard([
        [_, _, _, x],
          [_, _, x, _],
            [_, x, _, _],
              [x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 3, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x [x] => true', () => {
      const board = createBoard([
        [_, _, _, x],
          [_, _, x, _],
            [_, x, _, _],
              [x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 3, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [_, _, _, _, x],
          [_, _, _, x, _],
            [_, _, x, _, _],
              [_, x, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 4, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x x [x] => true', () => {
      const board = createBoard([
        [_, _, _, _, x],
          [_, _, _, x, _],
            [_, _, x, _, _],
              [_, x, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 4, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] x x => false', () => {
      const board = createBoard([
        [_, _, _, _, x],
          [_, _, _, x, _],
            [_, _, x, _, _],
              [_, x, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 2, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x => false', () => {
      const board = createBoard([
        [_, _, _, _, x],
          [_, _, _, x, _],
            [_, _, x, _, _],
              [_, x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 3, gridY: 1, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });

  describe('direction \\', () => {
    it('[x] x x => false', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('x x [x] => false', () => {
      const board = createBoard([
        [x, _, _],
          [x, _, _],
            [x, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x x x => true', () => {
      const board = createBoard([
        [x, _, _, _],
          [x, _, _, _],
            [x, _, _, _],
              [x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x [x] => true', () => {
      const board = createBoard([
        [x, _, _, _],
          [x, _, _, _],
            [x, _, _, _],
              [x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 3, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('[x] x x x x => true', () => {
      const board = createBoard([
        [x, _, _, _, _],
          [x, _, _, _, _],
            [x, _, _, _, _],
              [x, _, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x x x [x] => true', () => {
      const board = createBoard([
        [x, _, _, _, _],
          [x, _, _, _, _],
            [x, _, _, _, _],
              [x, _, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 4, occupiedPlayer: { id: x } });
      assert.strictEqual(result, true);
    });

    it('x x [x] x x => false', () => {
      const board = createBoard([
        [x, _, _, _, _],
          [x, _, _, _, _],
            [x, _, _, _, _],
              [x, _, _, _, _],
                [x, _, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 0, gridY: 2, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });

    it('[x] x _ x => false', () => {
      const board = createBoard([
        [_, x, _, _, _],
          [_, x, _, _, _],
            [_, _, _, _, _],
              [_, x, _, _, _],
      ]);
      const result = checkWin(board, { gridX: 1, gridY: 0, occupiedPlayer: { id: x } });
      assert.strictEqual(result, false);
    });
  });
});

describe('checkFinish', () => {
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
    const result = checkFinish(board);
    assert.strictEqual(result, true);
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
    const result = checkFinish(board);
    assert.strictEqual(result, true);
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
    const result = checkFinish(board);
    assert.strictEqual(result, true);
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
    const result = checkFinish(board);
    assert.strictEqual(result, true);
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
    const result = checkFinish(board);
    assert.strictEqual(result, false);
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
    const result = checkFinish(board);
    assert.strictEqual(result, true);
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
    const result = checkFinish(board);
    assert.strictEqual(result, null);
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
    const result = checkFinish(board);
    assert.strictEqual(result, null);
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
    const result = checkFinish(board);
    assert.strictEqual(result, null);
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
    const result = checkFinish(board);
    assert.strictEqual(result, null);
  });
});
