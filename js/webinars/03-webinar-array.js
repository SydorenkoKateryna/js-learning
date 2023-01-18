// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом
// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

const genres = ['Jazz', 'Blues'];
console.log(genres);

genres.push('Rock-n-Roll');
console.log(genres);

console.log(genres[0]);
console.log(genres[genres.length-1]);

const genresFirstElement = genres.splice(0, 1);
console.log(genresFirstElement);

genres.splice(0, 0, 'Country', 'Reggae');
console.log(genres);


// ## Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

const values = '8 11';
const valuesSplit = values.split(' ');

console.log(valuesSplit);

const S = Number.parseInt(valuesSplit[0]) * Number.parseInt(valuesSplit[1]);

console.log(S);


// ## Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

let i3 = 0;

for (const fruit of fruits) {
  i3 += 1;
  console.log(`${i3}: ${fruit}`);
}

// ## Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesSplit = names.split(',');
const phonesSplit = phones.split(',');

console.log(namesSplit);
console.log(phonesSplit);

for (let i = 0; i <= namesSplit.length - 1; i += 1) {
  console.log(`${namesSplit[i]} : ${phonesSplit[i]}`);
}

// or

let i4 = 0;

for (const names of namesSplit) {
  console.log(`${names} : ${phonesSplit[i4]}`);
  i4 += 1;
}


// ## Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

const string5 = 'Welcome to the future';

const arr = string5.split(' ');

console.log(arr);

arr.shift();
console.log(arr);

arr.pop();
console.log(arr);

for (const value of arr) {
  console.log(value);
}

const string = arr.join(' ');
console.log(string);


// ## Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

const string6= 'Welcome to the future';

console.log(string6.split('').reverse().join(''));

// or

const arr6 = string6.split('');

arr6.reverse();

const result6 = arr6.join('');

console.log(result6);


// ## Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

console.log(langs.sort());

// or
let result = [];

for (let i = 0; i < langs.length; i++) {
    for (let j = 0; j < i; j++) {
        if (langs[i] < langs[j]) {
            let temp = langs[i];
            langs[i] = langs[j];
            langs[j] = temp;
        }
    }
}

console.log(langs);

// ## Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

const numbers = [2, 17, 94, 1, 23, 37, -1, 100, -2];

let min = numbers[0];

for (const number of numbers) {
    if(number < min) {
        min = number;
    }
}

console.log(min);