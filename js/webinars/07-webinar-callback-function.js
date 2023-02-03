// # Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

// ## Example 1 - Коллбек функції
// Напишіть наступні функції:

// - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// Рішення
function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ## Example 2 - Коллбек функції
// Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а другий та третій - коллбеки.
// Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// Рішення
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// ## Example 3 - Коллбек функції
// Напишіть функцію `each(array, callback)`, яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// Рішення
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);

// ## Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct4(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

const createProduct4 = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
};

// function logProduct4(product) {
//   console.log(product);
// }

// function logTotalPrice4(product) {
//   console.log(product.price * product.quantity);
// }

const logProduct4 = product => console.log(product);

const logTotalPrice4 = product => console.log(product.price * product.quantity);

createProduct4({ name: '🍎', price: 30, quantity: 3 }, logProduct4);
createProduct4({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice4);

// ## Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const TRANSACTION_LIMIT5 = 1000;

const account5 = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT5) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT5} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT5) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT5} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

// function handleSuccess5(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError5(message) {
//   console.log(`❌ Error! ${message}`);
// }

const handleSuccess5 = message => console.log(`✅ Success! ${message}`);

const handleError5 = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess5, handleError5);
account.withdraw(600, handleSuccess5, handleError5);
account.withdraw(300, handleSuccess5, handleError5);
account.deposit(1700, handleSuccess5, handleError5);
account.deposit(0, handleSuccess5, handleError5);
account.deposit(-600, handleSuccess5, handleError5);
account.deposit(600, handleSuccess5, handleError5);

// ## Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const each6 = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(each6([64, 49, 36, 25, 16], value => value * 2));

console.log(each6([64, 49, 36, 25, 16], value => value - 10));

console.log(each6([64, 49, 36, 25, 16], value => Math.sqrt(value)));

console.log(each6([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

console.log(each6([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ## Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

const logItems = items => {
  console.log(items);

  items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
  nameList.forEach((el, index) => console.log(`${el}: ${phoneList[index]}`));
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// ## Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calсulateAverage = (...args) => {
  let total = 0;

  args.forEach(el => (total += el));

  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
