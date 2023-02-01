// Task 4
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    // if(this.pizzas.includes(pizzaName)) {
    //     console.log(onSuccess(pizzaName));
    //     return;
    // }

    // console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));

    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }

    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`,
    );
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Task 13
const changeEven = (numbers, value) => {
  const newArray = [];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  });

  return newArray;
};

console.log(changeEven([1, 2, 3, 4, 5], 10));

console.log(changeEven([17, 24, 68, 31, 42], 100));

// Task 14
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);

// Task 19
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => !(number % 2 === 0));

console.log(evenNumbers);
console.log(oddNumbers);

// Task 20
const books20 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];

const allGenres = books20.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (book, index, array) => array.indexOf(book) === index,
);

console.log(allGenres);
console.log(uniqueGenres);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// Task 21
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);




const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);

console.table(getUsersWithAge(users, 20, 30));


const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, allfriend) => allfriend.indexOf(friend) === index);

console.log(getFriends(users));

// Task 45
const books45 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books45.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((prev, next) => prev.localeCompare(next));

console.log(names);


// Task 46
const getNamesSortedByFriendCount = users => [...users].sort((prev, next) => prev.friends.length - next.friends.length).map(user => user.name);

console.log(getNamesSortedByFriendCount(users));


// const getSortedFriends = users => [...users].filter((friend, index, allfriends) => allfriends.indexOf[friend] === index).flatMap(user => user.friends).sort((prev, next) => prev.localeCompare(next));

const getSortedFriends = users => [...users].flatMap(user => user.friends).filter((friend, index, allfriend) => allfriend.indexOf(friend) === index).sort((prev, next) => prev.localeCompare(next));

console.log(getSortedFriends(users));


const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));
