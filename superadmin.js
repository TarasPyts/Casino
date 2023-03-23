import { Casino } from './casino.js';
import { GameMachine } from './gamemachine.js';
import { User } from './user.js';

export class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money);
    this.casino = null;
  }

  createCasino(name) {
    const newCasino = new Casino(name);
    this.casino = newCasino;
    console.log('I made a casino');
    return newCasino;
  }

  createGameMashine(number) {
    if (!this.casino) {
      console.error(`${this.name} create a new Casino`);
      return;
    }
    if (number >= this.money) {
      console.error(`${this.name} you don't have enough money`);
      return;
    }

    const newMachine = new GameMachine(number);
    this.casino.machines.push(newMachine);
    this.money -= number;
    console.log('I made a mashine');
    console.log(this.money);
    return newMachine;
  }

  removeGameMachine(id) {
    if (!this.casino) {
      console.error(`${this.name} create a new Casino`);
      return;
    }
    const machines = [...this.casino.machines];
    if (!machines.length) {
      console.error(`${this.name} create some machines!`);
      return;
    }
    if (machines[id] === undefined) {
      console.error('Machine ID is wrong.');
      return;
    }

    const cash = machines[id].number;
    machines.splice(id, 1);
    const machineCount = machines.length;

    machines.forEach((machine) => {
      const profit = (cash / machineCount).toFixed();
      machine.number = machine.number + parseInt(profit);
      console.log(`profit is: ${profit}`);
    });

    this.casino.machines = [...machines];

    console.log('I deleted a mashine');
  }

  takeMoneyFromCasino(number) {
    const machines = [...this.casino.machines];
    machines.sort((a, b) => b.number - a.number);
    let collectedAmount = 0;
    let i = 0;
    while (collectedAmount < number && i < machines.length) {
      const machine = machines[i];
      const amountToAdd = Math.min(number - collectedAmount, machine.number);
      collectedAmount += amountToAdd;
      machine.number -= amountToAdd;
      i++;
    }
    if (collectedAmount < number) {
      console.error('Money are larger that casino bank');
      return;
    }
    this.casino.machines = [...machines];
    this.money += collectedAmount;
    return collectedAmount;
  }

  addMoneyToCasino(money) {
    if (money <= 0) {
      console.error('Please, enter sum > 0');
      return;
    }

    if (!this.casino) {
      console.error('Please, create some casino.');
      return;
    }

    const length = this.casino.machines.length;
    if (!length) {
      console.error('Please, create some machine.');
      return;
    }

    if (money >= this.money) {
      console.error('Not enough money');
      return;
    }

    this.casino.machines.forEach((machine) => {
      machine.number += money / length;
    });

    this.money -= money;
  }

  addMoneyToGameMachine(id, money) {
    if (money <= 0) {
      console.error('Please, enter sum > 0');
      return;
    }

    if (!this.casino) {
      console.error('Please, create some casino.');
      return;
    }

    if (money >= this.money) {
      console.error('Not enough money');
      return;
    }

    if (this.casino.machines[id] === undefined) {
      console.error('Game machine ID is wrong.');
      return;
    }

    this.money -= money;
    this.casino.machines[id].number += money;
  }
}
