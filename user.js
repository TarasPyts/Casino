import { GameMachine } from './gamemachine.js';

export class User extends GameMachine {
  constructor(name, money) {
    super();
    this.name = name;
    this.money = money > 0 ? money : 0;
    this._selectMachine = null;
  }
  getSelectMachine() {
    console.log(`I choose a machine `);
    return this._selectMachine;
  }

  setSelectMachine(machine) {
    this._selectMachine = machine;
    console.log('I set a machine');
  }
  play(money) {
    if (money > this.money) {
      console.error(`${this.name} don't have enough money`);
      return;
    }

    if (this._selectMachine === null) {
      console.error('Please, select some Machine for game');

      return;
    }

    this.money += this._selectMachine.play(money);
  }
}
