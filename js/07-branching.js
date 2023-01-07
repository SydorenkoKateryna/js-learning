// Оператор розгалуження if
if (10 < 0) {
  console.log(true);
}

// Оператор розгалуження if...else
if (5 > 30) {
  console.log('x > y');
} else {
  console.log('x < y');
}

// Оператор розгалуження else...if
const salary = 1800;

if (salary <= 500) {
  console.log('Level 1');
} else if (salary > 500 && salary <= 1500) {
  console.log('Level 2');
} else if (salary > 1500 && salary <= 3000) {
  console.log('Level 3');
} else {
  console.log('Level 4');
}

// Тернарний оператор

const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Positive balance';
// } else {
//   message = 'Negative balance';
// }

const message = balance >=0 ? 'Positive balance' : 'Negative balance'; 

console.log(message);

// Блокова видимість змінних
const a = 5;

if (true) {
    const b = 10;
}

console.log(a);
console.log(b);