// Test 6
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log (message);

// Test 7 - function
function sayHi () {
    console.log("Hello, this is my first function!");
  }
  
  sayHi();


// Test 8 - parameters of function
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// Test 9, 10 - function (return)
  function add(a, b, c) {
  return a + b + c;
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));


  function makeMessage (name, price) {
     const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
  };

  console.log(makeMessage('Radar', 6150));
  console.log(makeMessage('Scanner', 3500));

//   Test 12
//   function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//       const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//       const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
//     return message;
//   }

//   console.log(makeOrderMessage(2, 100, 50));

  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));

//   Test 13
function isAdult(age) {
    const passed = age >= 18;

    return passed;
  }

  console.log(isAdult(20));
  console.log(isAdult(14));

//   Test 14
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password === SAVED_PASSWORD;

    return isMatch;
  }

  console.log(isValidPassword("mangodab3st"));
  console.log(isValidPassword("kiwirul3z"));
  console.log(isValidPassword("jqueryismyjam"));

  //   Test 18
  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
      const totalPrice  = pricePerDroid * orderedQuantity;
  
    if(totalPrice > customerCredits) {
      message = 'Insufficient funds!';
    } else {
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }

    return message;
  }

  console.log(makeTransaction(3000, 5, 23000));
  console.log(makeTransaction(2000, 10, 3000));

  //   Test 19
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) {
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) {
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword(null));
  console.log(checkPassword("jqueryismyjam"));

//   Test 31 length
  const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

//   Test 33 slice
function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    if(message.length <= maxLength) {
      result = message;
    } else {
      result = message.slice(0, maxLength) + '...';
    }
    /// Change code above this line
    return result;
  }

  
  console.log(formatMessage('Curabitur ligula sapien', 5));

//   Test 36 includes
  function checkForSpam(message) {
    let result;
    message = message.toLowerCase();
  
    if(message.includes('spam') || message.includes('sale')) {
      result = true;
    } else {
      result = false;
    }

    return result;
  }

  console.log (checkForSpam("JavaScript weekly newsletter"));
  console.log (checkForSpam("Get best sAle offers now!"));
  console.log (checkForSpam("Amazing SalE, only tonight!"));