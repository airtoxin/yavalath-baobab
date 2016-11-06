// @flow

export type Player = {
  id: Symbol;
};

export type Grid = {
  gridX: number;
  gridY: number;
  occupiedPlayer: Player;
};

export type Board = Array<Array<Grid>>;

export type FinishInfo = {
  finished: boolean;
  isWin?: boolean;
  player?: Player;
};

export type Room = {
  id: string;
  name: string;
}
