// Test 3

//   function checkStorage(available, ordered) {
//     // Change code below this line
//     let message;

//     if (ordered === 0) {
//       message = "Your order is empty!";
//     } else if (ordered > available) {
//       message = "Your order is too large, not enough goods in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }

//     return message;
//     // Change code above this line
//   }

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return 'Your order is empty!';
  }

  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';

  // Change code above this line
}

console.log(checkStorage(100, 20));

// Test 9
function getExtremeElements(array) {
  array.splice(1, array.length - 2);
  return array;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// Test 10
function splitMessage(message, delimiter) {
  let words;
  if (delimiter === ' ') {
    words = message.split(' ');
  } else if (delimiter === '') {
    words = message.split('');
  } else if (delimiter === '_') {
    words = message.split('_');
  } else {
    words = message.split(delimiter);
  }
  return words;
}

console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango', ''));
console.log(splitMessage('best_for_week', '_'));
console.log(splitMessage('best*for*week*pop', '*'));

// Test 11
function calculateEngravingPrice(message, pricePerWord) {
  const arr = message.split(' ');
  const price = arr.length * pricePerWord;

  return price;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));

// Test 13
function slugify(title) {
  const slug = title.toLowerCase().split(' ').join('-');

  return slug;
}

console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// Test 14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Test 16
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// []

// Test 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  if (i % 2 === 0) {
    console.log(Math.log(i));
  } else {
    console.log(i);
  }
}

// Test 18
function calculateTotal(number) {
  let total = 0;

  for (let i = 0; i <= number; i += 1) {
    total += i;
  }

  return total;
}

console.log(calculateTotal(7));

// Test 20
function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
// 138
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// 1116

// Test 21
function findLongestWord(string) {
  const arrString = string.split(' ');

  let longestWord = arrString[0];

  for (const word of arrString) {
    if (longestWord.length < word.length) longestWord = word;
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));

// Test 22
function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
// [1, 2, 3]
console.log(createArrayOfNumbers(29, 34));
// [29, 30, 31, 32, 33, 34]

// Test 23
function filterArray(numbers, value) {
  const numbersNew = [];

  for (const number of numbers) {
    if (number > value) {
      numbersNew.push(number);
    }
  }

  return numbersNew;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
// [4, 5]
console.log(filterArray([12, 24, 8, 41, 76], 20));
// [24, 41, 76]

// Test 24
function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit);
}

console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));

// Test 25
function getCommonElements(array1, array2) {
  const array3 = [];

  // for (let i = 0; i < array1.length; i += 1) {
  //   for (let j = 0; j < array2.length; j += 1) {
  //     if (array1[i] === array2[j]) {
  //       array3.push(array1[i]);
  //     }
  //   }
  // }

  const length = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < length; i += 1) {
    if (array2.includes(array1[i])) {
      array3.push(array1[i]);
    }
  }

  return array3;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// [12, 27, 3]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// []


// Test 26
function calculateTotalPriceNew(order) {
  let total = 0;


  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

  for (const value of order) {
    total += value
  }

  return total;
}

console.log(calculateTotalPriceNew([164, 48, 291]));
console.log(calculateTotalPriceNew([412, 371, 94, 63, 176]));


// Test 29
function getEvenNumbers(start, end) {
  const arr = [];

  for (let i = start; i <= end; i += 1){
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
 }

 console.log(getEvenNumbers(3, 11));
//  [4, 6, 8, 10]
 console.log(getEvenNumbers(8, 8));
// [8]
console.log(getEvenNumbers(7, 7));
// []


// Test 32
function includes(array, value) {

  for (const val of array) {
    if (val === value) {
      return true;
    }
  }

  return false;

}

console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// true
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// false
