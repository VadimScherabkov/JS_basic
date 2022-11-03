/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const { arrayBuffer } = require('stream/consumers');

/**
 * write function that will do sum for two numbers
 *
 */

function sum(a, b) {
  return a + b;
}

/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

var person = {
  firstName: 'John',
  lastName: 'Dou',
};

function getFullName(obj) {
  return obj.firstName + ' ' + obj.lastName;
}
getFullName(person);

/**
 * write function that checks if number is odd
 * true if odd, false if even
 */

function isOdd(n) {
  if (n % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */

//Я подсмотрел это решение в интернете
function getShortest(wordArray) {
  return wordArray.sort((a, b) => a.length - b.length)[0];
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */

function getGoogle(n) {
  let a = '';
  for (let i = 0; i < n; i++) {
    a += 'o';
  }
  return 'g' + a + 'gle';
}

/**
 * write function that returns object based on the given information
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */

function getUser(firstName = null, lastName = null, age = null) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  return user;
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
  let sum = 0;
  for (let i = 0; i < path.length; i += 1) {
    sum += path[i].distance;
  }
  return sum;
}

/**
 * write a function that calculates a final price considering the Amount
 * reduced by discount percentage(hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
  return function(amount) {
    return amount - (percentage * amount) / 100;
  }
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friends: ['Mike', 'Alan', 'Daniel'],
  keys() {
    //write your code here
    for (let i in myObject) console.log(i);
  },
  call() {
    //write your code here
    return (
      'My name is ' +
      myObject.name +
      ' ' +
      myObject.lastName +
      ' and I am ' +
      myObject.age +
      ' years old. My best friend is ' +
      myObject.friends[2]
    );
  },
};

module.exports = {
  sum,
  getFullName,
  isOdd,
  getShortest,
  getGoogle,
  getUser,
  getTotalPath,
  discountFunction,
  myObject,
};
