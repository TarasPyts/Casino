import { Casino } from './casino.js';
import { GameMachine } from './gamemachine.js';
import { User } from './user.js';
import { SuperAdmin } from './superadmin.js';

const admin = new SuperAdmin('admin', 10000);
console.log(admin);
const casino = admin.createCasino('Las Wegas');
console.log(casino);
const mashine = admin.createGameMashine(1000);
console.log(mashine);
admin.createGameMashine(100);
admin.createGameMashine(500);
// admin.takeMoneyFromCasino(1000);
console.log(admin);

admin.setSelectMachine(5);
console.log(admin);
// admin.play(40);
// admin.getSelectMachine(1);
// // admin.play(40);
// // admin.play(40);
// console.log(admin);
// admin.play(40);
// console.log(admin);
