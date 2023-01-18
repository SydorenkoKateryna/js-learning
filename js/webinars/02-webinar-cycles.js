// # Модуль 1. Заняття 2. Розгалуження. Цикли

// ## Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
// `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`

// const input = prompt('Яка офіційна назва JavaScript?');

// if (input.toLowerCase() === 'ecmascript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// ## Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.

const hours2 = 14;
const minutes2 = 26;
let timestring;

if (minutes2 > 0) {
  timestring = `${hours2} г. ${minutes2} хв.`;
} else {
  timestring = `${hours2} г.`;
}
console.log(timestring);

// ## Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.

// const userInput = prompt('Введіть число');

// if (Number(userInput) > 0) {
//     console.log('Це позитивне число');
// } else if (Number(userInput) === 0) {
//     console.log('Це нуль');
// } else if (Number(userInput) < 0) {
//     console.log('Це негативне число');
// } else {
//     console.log('Помилка!');
// }

// ## Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.

const a = 20;
const b = 180;

if (a > 100 && b > 100) {
  console.log(a > b ? a : b);
} else {
  console.log(b + 512);
}

// ## Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.

let link5 = 'https://my-site.com/about';

if (!link5.endsWith('/')) {
  link5 += '/';
}

console.log(link5);

// ## Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
// `if...else`.

let link6 = 'https://somesite.com/about';

if (!link6.endsWith('/') && link6.includes('my-site')) {
  link6 += '/';
}

console.log(link6);

// ## Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

let link7 = 'https://somesite.com/about';
// if (link7.includes('my-site') && !link7.endsWith('/')) {
//   link7 += '/';
// }

link7 += link7.includes('my-site') && !link7.endsWith('/') ? '/' : '';
console.log(link7);

// ## Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної `hours`.
// Якщо значення змінної `hours`:
// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`

const hours8 = 25;

if (hours8 < 17) {
  console.log('Pending');
} else if (hours8 >= 17 && hours8 <= 24) {
  console.log('Expires');
} else {
  console.log('Overdue');
}

// ## Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію `if...else`.
// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"

const daysUntilDeadline9 = 1;

if (daysUntilDeadline9 === 0) {
  console.log('Сьогодні');
} else if (daysUntilDeadline9 === 1) {
  console.log('Завтра');
} else if (daysUntilDeadline9 === 2) {
  console.log('Післязавтра');
} else {
  console.log('Дата у майбутньому');
}

// ## Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи `switch`.

const daysUntilDeadline10 = 10;

// if (daysUntilDeadline10 === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline10 === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline10 === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }

switch (daysUntilDeadline10) {
  case daysUntilDeadline10 < 0 ? daysUntilDeadline10 : null:
    console.log('Error');
    break;
  case 0:
    console.log('Сьогодні');
    break;
  case 1:
    console.log('Завтра');
    break;
  case 2:
    console.log('Післязавтра');
    break;
  default:
    console.log('Дата у майбутньому');
    break;
}

// ## Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
// до `max`, але тільки якщо число кратне `5`.

const max = 100;
const min = 2;

for (let i = min; i <= max; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// ## Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.
// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`

// Пароль перевіряти так:
// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// - Інакше виводити рядок `"Невірний пароль"`

const userLogin = prompt('Введіть логін');

if (userLogin === 'Адмін') {
    const userPassword = prompt('Введіть пароль'); 
    // if (userPassword === 'Я адмін') {
    //     console.log('Здрастуйте!');
    // } else {
    //     console.log('Невірний пароль');
    // }
    console.log(userPassword === 'Я адмін' ? 'Здрастуйте!' : 'Невірний пароль');
} else if (!userLogin) {
    console.log('Скасовано')
} else {
    console.log('Я вас не знаю');
}