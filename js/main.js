import MyString from './string.js';
import * as classes from './user.js';

// Класс для работы со строкой
const myString = new MyString('Привет');
console.log('myString.string: ', myString.string);
console.log('myString.getString(): ', myString.getString());
myString.setString('Новая строка');
console.log('myString.string: ', myString.string);
console.log('myString.getStringLength(): ', myString.getStringLength());
console.log('myString.toString(): ', myString.toString());
console.log('+myString: ', +myString, 'Язык JavaScript не поддерживает operator overloading');
console.log('myString.toNumber(): ', myString.toNumber());

// Классы для пользователей
const user = new classes.User('Azat', new Date(2022, 1, 1));
const admin = new classes.Admin('Thor', new Date(2022, 1, 1), true);
const guest = new classes.Guest('Loki', new Date(2018,11,12));
console.log(user.getInfo());
console.log(admin.getInfo());
console.log(guest.getInfo());