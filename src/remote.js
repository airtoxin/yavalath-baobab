import firebase from 'firebase';

export default class Remote {
  constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      storageBucket: process.env.storageBucket,
    });
    this.db = firebase.database();
  }

  saveBoard(gameId, board) {
    this.db.ref(`games/${gameId}/board`).set(board);
  }
}
