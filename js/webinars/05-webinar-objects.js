// # Модуль 3. Заняття 1. Об'єкти

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта `user`, послідовно:
// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user);

user.mood = 'happy';
console.log(user);

user.hobby = 'skydiving';
console.log(user);

user.premium = false;
console.log(user);

// 1st variant
for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}

// 2d variant
for (const key in user) {
  console.log(`${key} : ${user[key]}`);
}

// ## Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// const getTotalSalary = function (allSalaries) {
//   let sum = 0;

//   const salaryValues = Object.values(allSalaries);

//   for (const value of salaryValues) {
//     sum += value;
//   }

//   return sum;
// };

const getTotalSalary = function (allSalaries) {
  let sum = 0;

  for (const value of Object.values(allSalaries)) {
    sum += value;
  }

  return sum;
};

console.log(getTotalSalary(salaries));

// ## Example 3 - Масив об'єктів
// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

// function calcTotalPrice (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// };

function calcTotalPrice(stones, stoneName) {
  let sum = 0;

  for (const stone of stones) {
    if (stone.name === stoneName) {
      sum += stone.price * stone.quantity;
    }
  }
  return sum;
}

console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Щебінь'));

// ## Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account` в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  // Додамо поточний id для подальшого перезапису (id - ідентифікатор поточної транзакції)
  currentId: 0,

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.generateId(),
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance = this.balance + amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Зняття такої суми не можливе, недостатньо коштів.');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance = this.balance - amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },

  // Додамо метод, щоб значення id змінювалось після кожної транзації
  generateId() {
    this.currentId = this.currentId + 1;
    return this.currentId;
  },
};

account.deposit(100);
console.log(1);
console.log(account);

account.withdraw(50);
console.log(account);

console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(2));
