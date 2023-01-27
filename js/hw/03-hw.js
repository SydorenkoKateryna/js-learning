// Task 7
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.area = 60;
apartment.rooms = 3;
// First we need to create a new empty object
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

console.log(apartment);

// Task 10
const apartment10 = {
  descr10: 'Spacious apartment in the city center',
  rating10: 4,
  price10: 2153,
};

const keys = [];
const values = [];

for (const key in apartment10) {
  keys.push(key);
  values.push(apartment10[key]);
}

console.log(keys);
console.log(values);

// Task 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  for (const val of Object.values(salaries)) {
    totalSalary += val;
  }
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// Task 17
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

// Task 18
const products18 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products18) {
    if (product.name === productName) {
      return product.price;
    }
  }

  return null;
}

console.log(getProductPrice('Radar'));
console.log(getProductPrice('Engine'));
console.log(getProductPrice('Scanner'));
console.log(getProductPrice('Grip'));
console.log(getProductPrice('Engine'));

// Task 19
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const arr = [];

  for (const product of products) {
    if (propName === 'name') {
      arr.push(product.name);
    } else if (propName === 'price') {
      arr.push(product.price);
    } else if (propName === 'quantity') {
      arr.push(product.quantity);
    }
  }

  return arr;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));

// Task 20
const products20 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let total = 0;
  for (const product of products20) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }

  return total;
}

console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Blaster'));

// Task 30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  return { category, priority, ...data, completed };
}

console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  }),
);

console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));

// Task 31
function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(add(12, 4, 11, 48));

// Task 32
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Task 33
function findMatches(arr, ...args) {
  const matches = []; // Don't change this line

  for (const arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// Task 35
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const oldBookIndex = this.books.indexOf(oldName);

    this.books.splice(oldBookIndex, 1, newName);

    return this.books;
  },
};

console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// Task 41
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const newProduct = { ...newPotion };

    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newProduct);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
      }
    }

  },
};

console.log(atTheOldToad.getPotions());
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion("Dragon breath"));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
console.table(atTheOldToad.getPotions());