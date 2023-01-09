// Math.random() (генерує від 0 до 1, тому змінюємо число (діапазон) математичними операціями)
const x = Math.random();
console.log(x);
console.log(x * 100);
console.log(x * (10 - 1));
console.log(x * (10 - 1) + 1);

// # Модуль 1. Заняття 1. Змінні, типи та оператори

// ## Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);

// ## Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором `+=`.

let students = 100;
students += 50;
console.log(students);

// ## Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

const result = 108 + 223 - 2 * 5;
console.log(result);

// ## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

const value = 27.9;
// Math.floor()
// Returns the largest integer less than or equal to x.
console.log(Math.floor(value));
// Math.ceil()
// Returns the smallest integer greater than or equal to x.
console.log(Math.ceil(value));
// Math.round()
// Returns the value of the number x rounded to the nearest integer.
console.log(Math.round(value));


// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `Cyberdyne Systems has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"



// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3';
let height = '1.75';

const bmi = Number.parseFloat(weight.replace(',', '.')) / (Number.parseFloat(height.replace(',', '.')) * Number.parseFloat(height));
console.log(bmi.toFixed(1)); // 28.8



// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу скрипта для наступних значень змінної `incomingValue`: null, undefined, 0, false. Використовуй оператор `??` (nullish coalescing operator).

const incomingValue = 5;
const defaultValue = 10;
// const value = incomingValue || defaultValue;
const valueNine = incomingValue ?? defaultValue;
// через ?? - це коротша версія тернарного оператору, коли потрібно порівняти тотожну змінну для першого випадку (у нашому випадку завдання в тому, що якщо перша змінна взагалі існує - вивести її же, якщо ні, то вивести другу змінну)
const valueNineSecondVariant = incomingValue ? incomingValue : defaultValue;

console.log(valueNine);
console.log(valueNineSecondVariant);
