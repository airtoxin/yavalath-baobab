// @flow
import firebase from 'firebase';

import type { Board } from './Types';

export default class Remote {
  firebase: Object;
  db: Object;
  constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      storageBucket: process.env.storageBucket,
    });
    this.db = firebase.database();
  }

  saveRoom(roomId: string, name: string) {
    this.db.ref(`rooms/roomId`).set({
      name,
    });
  }

  saveBoard(gameId: string, board: Board) {
    this.db.ref(`games/${gameId}/board`).set(board);
  }
}
