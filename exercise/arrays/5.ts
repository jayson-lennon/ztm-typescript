/* eslint-disable */
import { strict as assert } from "assert";

// You are creating a custom function to reverse an array without using
// .reverse(). Use a for loop and arrow functions.

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

assert.equal(JSON.stringify(reverseArray([1, 2, 3])), JSON.stringify([3, 2, 1]));
assert.equal(JSON.stringify(reverseArray(["a", "b", "c"])), JSON.stringify(["c", "b", "a"]));
console.log("exercise complete!");

