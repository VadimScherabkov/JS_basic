const { rejects } = require('assert');
const { readFile } = require('fs');
const { resolve } = require('path');
const { getDogs, getCats, getBirds, firstPromise, secondPromise } = require('./utils/utilPromises');

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  //PLACE YOUR CODE HERE:
  const promise = Promise.resolve('Resolved!');
  return promise;
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  //PLACE YOUR CODE HERE:
  return new Promise((resolve, reject) => {
    return reject('Rejected!');
  });
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  //PLACE YOUR CODE HERE:
  const promise = new Promise((resolve, reject) => {
    if (param) {
      reject('Rejected!');
    } else {
      resolve('Resolved!');
    }
  });
  return promise;
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function (please do NOT use async/await)
 */

function promisesChaining() {
  let chainingResult = '';

  //PLACE YOUR CODE BETWEEN THIS LINE:
  return firstPromise().then(data => {
    chainingResult += data;
    return secondPromise().then(data => {
      chainingResult += ' ';
      chainingResult += data;
      return chainingResult;
    });
  });
  //AND THIS ONE
}

/**
 * Task-5: Implement a function getAnimals() that will return the result of
 * 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * getAnimals() -> ["dogs", "cats", "birds"]
 * @returns {Promise<"["dogs", "cats", "birds"]">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * do NOT use async/await syntax here
 */

function getAnimals() {
  //PLACE YOUR CODE BETWEEN THIS LINE:
  return Promise.all([getDogs(), getCats(), getBirds()]);
  //AND THIS ONE
}

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
};
