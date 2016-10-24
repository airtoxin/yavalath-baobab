import lodash from 'lodash';

export class Player {
  constructor(id, color) {
    this.id = id;
    this.color = color;
  }
}

export class Players {
  constructor(players) {
    this.players = players;
  }

  retrievePlayer(id) {
    return lodash.find(this.players, p => i.id === id);
  }
}
