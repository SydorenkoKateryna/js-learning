// Number.parseInt and Number.parseFloat
let elementWidth = '50px';
// Add new variable
// const result = Number.parseInt(elementWidth);
// console.log('elementWidth:', result);
// console.log('elementWidthType:', typeof result);

// Rewrite variable
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

// toFixed
let salary = 1300.16472;
// Можна використовувати вкладеність (1 варіант)
// salary = salary.toFixed(1);
// salary = Number(salary);
// ----->
// salary = Number(salary.toFixed(1));

// Можна використовувати вкладеність (2 варіант)
// console.log(salary);
console.log(Number(salary.toFixed(3)));

// Приведення до числа
let quantity = '30';
let value = 'cannot be a number';
console.log(Number(quantity));
console.log(Number(value));

// Math
const base = 2;
const power = 3;
console.log(Math.PI);
// Зведення в ступінь 'exponentiation' or 'raising to the power'
const result = Math.pow(base, power);
console.log(result);

console.log(5 ** 2);

// Задача: 1) написати скрипт, який просить користувача ввести число та ступінь; 2) звести введенні дані в ступінь та вивести результат в консоль

// let userNumber = prompt('Enter a number');
// userNumber = Number(userNumber);
// console.log(userNumber);
// let userPower = prompt('Enter the power');
// userPower = Number(userPower);
// console.log(userPower);
// console.log(userNumber ** userPower);

// const userResult = userNumber ** userPower;
// console.log(userResult);


// Генеруємо псевдовипадкові числа
// Math.random()
// Math.round()

console.log(Math.random());

// Згенерувати у контректному діапазоні
// Math.random() * (max - min) + min

// console.log(Math.random() * (50 - 20) + 20);

const max = 100;
const min = 80;

const resultRandom = Math.round(Math.random() * (max - min) + min);
console.log(resultRandom);


// Приклад різного фону на body
const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const maxColors = colors.length - 1;
const minColors = 0;

const index =  Math.round(Math.random() * (maxColors - minColors) + minColors);

const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;