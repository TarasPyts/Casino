export class GameMachine {
  constructor(number) {
    this.number = number;
  }

  getMoney() {
    return this.number;
  }

  takeMoney(number) {
    if (number <= this.number) {
      this.number -= number;
    }
  }

  putMyMoney(number) {
    this.number += number;
  }

  play(number) {
    if (number > this.number) {
      console.log(`Game machine: not enough money to play`);
      return 0;
    }
    let generatedNumber = Math.floor(Math.random() * 900) + 100;
    let digits = String(generatedNumber).split('');
    let sameDigits = new Set(digits);
    if (digits.length === sameDigits.size) {
      console.log('You Lose!');
      this.number += number;
      return -number;
    } else if (sameDigits.size === 2) {
      console.log('2X');
      number *= 2;
      this.number -= number;
      return number;
    } else {
      console.log('3X');
      number *= 3;
      this.number -= number;
      return number;
    }
  }
}
