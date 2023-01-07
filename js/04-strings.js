// string - рядок
// length
const message = 'This string has 27 symbols.'
console.log(message.length);

// Конкатенація рядків - зшивання рядків
const firstName = 'Chalsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
// console.log (firstName + ' ' + lastName);

const room = 716;
const type = 'VIP';

// Old school
// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' заселяється в ' + type + ' номер ' + room;
// console.log(welcomeMsg);

// New school
// Шаблонні рядки (template strings)
const welcomeMsg = `Гість ${firstName} ${lastName} заселяється у ${type} номер ${room}.`;
console.log(welcomeMsg);

const quality = 15;
// const orderMsg = 'You are ordering 5 refrigerators.';
const orderMsg = `You are ordering ${quality} refrigerators.`;
console.log(orderMsg);

// Нормалізація з методом toLowerCase()
// 1 variant
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();

// console.log(normalizedBrand);

// 2 variant
// let brand = 'Samsung';
// brand = brand.toLowerCase();

// console.log(brand);

// 3 variant
// let brand = prompt('What brand do you need?');
// brand = brand.toLowerCase();

// console.log(brand);

// Додатковий приклад з обрізанням (копією) рядка через slice(почати з індексу ..) + незмінний символ через квадратні скобки та індекс
let brand = 'SamSunG';
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);

// Пошук в рядку з методом inCludes(). Повертає true чи false, відповідно
const blacklistedWord = 'спам';

const string1 = 'Привіт, це не спам, тицьни кнопку!';

console.log(string1.includes(blacklistedWord));
console.log(string1.includes('квітка'));

// Додаємо нормалізацію, так як текст у повідомленні може бути будь-яким
const string2 = 'Привіт, це не СПАМ, тицьни кнопку!';
const normalizedString2 = string2.toLowerCase();

console.log(normalizedString2.includes(blacklistedWord));