import { GameMachine } from './gamemachine.js';
import { User } from './user.js';
import { SuperAdmin } from './superadmin.js';

const admin = new SuperAdmin('admin', 10000);
const casino = admin.createCasino('Las Palmas');
const machine = admin.createGameMachine(100);
const ma = admin.casino.machines;
admin.createGameMachine(200);
admin.createGameMachine(300);
console.log(admin);
admin.setSelectMachine(ma[2]);
console.log(admin);
admin.play(20);

const machine1 = new GameMachine(1000);

const user = new User('Taras', 500);
user.setSelectMachine(ma[1]);
console.log(user);
user.play(10);
user.play(10);
user.play(10);
user.play(10);
user.play(10);
admin.removeGameMachine(1);
user.setSelectMachine(ma[1]);
console.log(user);
console.log(casino);
admin.takeMoneyFromCasino(100);
admin.addMoneyToGameMachine(0, 100);
