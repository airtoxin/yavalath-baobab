// @flow
import type { Room, Player } from '../Types';
import uuid from 'uuid';

export function create(name: string): Room {
  return {
    id: uuid.v4(),
    name,
    started: false,
    finished: false,
    entry: {},
  };
}

export function canJoin(room: Room): boolean {
  return !Object.keys(room.entry).length >= 2;
}

export function join(room: Room, player: Player): Room {
  if (Object.keys(room.entry).length >= 2) return room;

  return {
    ...room,
    entry: {
      ...room.entry,
      [player.id]: true,
    }
  };
}
