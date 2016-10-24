import lodash from 'lodash';

export default class Player {
  constructor(id, color) {
    this.id = id;
    this.color = color;
  }
}

export default class Players {
  constructor(players) {
    this.players = players;
  }

  retrievePlayer(id) {
    return lodash.find(this.players, p => i.id === id);
  }
}
