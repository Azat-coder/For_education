// import MyString from './string.js';
// import * as classes from './user.js';
import * as elJS from './eloquentJS.js';

// Класс для работы со строкой
// const myString = new MyString('Привет');
// console.log('myString.string: ', myString.string);
// console.log('myString.getString(): ', myString.getString());
// myString.setString('Новая строка');
// console.log('myString.string: ', myString.string);
// console.log('myString.getStringLength(): ', myString.getStringLength());
// console.log('myString.toString(): ', myString.toString());
// console.log('+myString: ', +myString, 'Язык JavaScript не поддерживает operator overloading');
// console.log('myString.toNumber(): ', myString.toNumber());

// Классы для пользователей
// const user = new classes.User('Azat', new Date(2022, 1, 1));
// const admin = new classes.Admin('Thor', new Date(2022, 1, 1), true);
// const guest = new classes.Guest('Loki', new Date(2018,11,12));
// console.log(user.getInfo());
// console.log(admin.getInfo());
// console.log(guest.getInfo());


// Выпразительный JS
// Глава 2
elJS.drawTriangle();
elJS.fizzBuzz();
elJS.chessBoard();
// Глава 3
console.log(elJS.min(3,5));
console.log(elJS.isEven(15));
console.log(elJS.countBs('sgfgkjaslkusrnagfcyjgfcn,jdbjgfnsdgmfzncjkb', 'j'));
// Глава 4
console.log(elJS.range(5,15));
console.log(elJS.sum([2,3,4,5,6,7]));
console.log(elJS.sum(elJS.range(5,15)));
console.log(elJS.stepRange(5,15,2));
console.log(elJS.reverseArray([1,2,3,4,5,6,7]));
console.log(elJS.reverseArrayInPlace([1,2,3,4,5,6]));
console.log(elJS.arrayToList([1,2,3,4,5]));
console.log(elJS.prependToList(elJS.arrayToList([1,2,3,4,5]), 50));
console.log(elJS.nth(elJS.arrayToList([1,2,3,4,5]), 2));
console.log(elJS.nthRec(elJS.arrayToList([1,2,3,4,5]), 2));

const a = {
  name: 'Dima',
  age: 29,
  isAdmin: true,
  adress: {
    line1: "55 Green Park Road",
    line2: "Purple Valley"
  },
  sum: function(a, v) {
    return a + v;
  },
}

const b = {
  name: 'Dima',
  age: 29,
  isAdmin: true,
  adress: {
    line1: "55 Green Park Road",
    line2: "Purple Valley"
  },
  sum: function(a, v) {
    return a + v;
  },
}
console.log(elJS.deepEqual(a, b));