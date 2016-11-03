import assert from 'assert';
import { checkLose } from '../../../src/logics/boardLogics';

const _ = null;
const x = Symbol('player1');

const createBoard = specs => (
  specs.map((rowSpecs, gridY) => (
    rowSpecs.map((spec, gridX) => ({
      gridX,
      gridY,
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
