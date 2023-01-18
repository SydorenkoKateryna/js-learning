// # Модуль 2. Заняття 4. Функції

// ## Example 1 - Індекс маси тіла
// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

function calcBMI(weight, height) {
  const weightNum = transformStringToFloat(weight);
  const heightNum = transformStringToFloat(height);

  let result = weightNum / (heightNum * heightNum);

  return result.toFixed(1);
}

function transformStringToFloat(value) {
  return Number.parseFloat(value.replace(',', '.'));
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8

// ## Example 2 - Найменше з чисел
// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

// ## Example 3 - Площа прямокутника
// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді рядка. Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  const arr = dimensions.split(' ');
  return Number.parseInt(arr[0]) * Number.parseInt(arr[1]);
}

console.log(getRectArea('8 11'));

// ## Example 4 - Логування елементів
// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна починатися з `1`.

// Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0` буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.

function logItems(items) {

  let i = 0;

  for (const item of items) {
    i += 1;
    console.log(`${i} - ${item}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## Example 5 - Логування контактів
// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я та телефонний номер користувача. У параметри `names` та `phones` будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

function printContactsInfo(names, phones) {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  let i = 0;

  for (const name of namesArr) {
    console.log(`${name} : ${phonesArr[i]}`);
    i += 1;
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

// ## Example 6 - Пошук найбільшого елемента
// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в масиві.

function findLargestNumber(numbers) {
  
  let max = numbers[0];

  for (const number of numbers) {
    if (max < number) {
      max = number;
    }
  }

  return max;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// ## Example 7 - Середнє значення
// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   let result = 0;

//   for (const arg of arguments) {
//     result += arg;
//   }

//   return result / arguments.length;
// }

// or

function calAverage(...args) {
  let result = 0;

  for (const arg of args) {
    result += arg;
  }

  return result / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ## Example 8 - Форматування часу
// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes` (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes/ 60);
  const minutes = totalMinutes % 60;
  console.log(hours);
  console.log(minutes);
  
  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);
  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
console.log(formatTime(568));

// ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів `courses`:

// - `addCourse(name)` - додає курс до кінця колекції
// - `removeCourse(name)` - видаляє курс із колекції
// - `updateCourse(oldName, newName)` - змінює ім'я на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {

  if (!courses.includes(name)) {
    return courses.push(name);
  } else {
    console.log('Ви вже маєте такий курс');
  }
}

function removeCourse(name) {

  if (courses.includes(name)) {
    return courses.splice(courses.indexOf(name), 1);
  } else {
    console.log('Курс із таким ім\'ям не знайдено');
  }
}

function updateCourse(oldName, newName) {
  
  return courses.splice(courses.indexOf(oldName), 1, newName)
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
