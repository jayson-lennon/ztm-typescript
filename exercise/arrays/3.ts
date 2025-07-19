/* eslint-disable */
import { strict as assert } from "assert";

// You are managing a sales report, and you want to calculate the total revenue
// from even-numbered orders. Use an array method to filter and sum only even
// numbers.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function sumEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

assert.equal(sumEvenNumbers([1, 2, 3, 4, 5]), 6);
assert.equal(sumEvenNumbers([10, 20, 30, 40]), 100);
assert.equal(sumEvenNumbers([-2, -4, 0]), -6);
console.log("exercise complete!");
