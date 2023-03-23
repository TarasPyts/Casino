export class Casino {
  constructor(name) {
    this.name = name;
    this.machines = [];
  }

  getMoney() {
    return this.machines.reduce((acc, machine) => {
      return acc + machine.number;
    }, 0);
  }

  getMachineCount() {
    console.log(this.machines.length);
    return this.machines.length;
  }
}
