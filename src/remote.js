import firebase from 'firebase';

export default class Remote {
  constructor() {
    const config = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      storageBucket: process.env.storageBucket,
    };
    console.log("@config", config);
    this.firebase = firebase.initializeApp(config);
    this.db = firebase.database();
  }
}
