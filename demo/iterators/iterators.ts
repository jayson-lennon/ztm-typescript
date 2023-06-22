/* eslint-disable */

// Iterators offer a way to traverse the elements of a collection one by one.
// The purpose of iterators is to provide a standard way for accessing and
// iterating over collections, such as arrays or maps, in a language-agnostic
// way. Using iterators, you can iterate over collections in a loop without
// having to worry about the underlying implementation of the collection.

const abc = ["a", "b", "c"];

// Iterate through an array using a standard `for` loop:
for (let i = 0; i < abc.length; i++) {
  console.log(abc[i]); // 'a' 'b' 'c'
}

// Iterate through an array using a `for..of` loop:
for (const letter of abc) {
  console.log(letter); // 'a' 'b' 'c'
}

// Anonymous object:
const nums = {
  one: 1,
  two: 2,
  three: 3,
};

// Iterate through object properties with a `for..in` loop. Only
// use this for objects you define in TypeScript. Browsers and other
// code can add additional properties to objects at runtime, which
// will also show up when iterating using `for..in`. Do not use
// a `for..in` loop to iterate arrays. Use `for..of` instead.
//
// This will allow us to index into the object while iterating:
let k: keyof typeof nums;
// `for..in` iterates over properties:
for (k in nums) {
  // Print the property name and associated value:
  console.log(`[${k}]: ${nums[k]}`);
}
