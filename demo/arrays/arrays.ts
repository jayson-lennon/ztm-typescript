/* eslint-disable */
import { strict as assert } from "assert";

// Arrays offer a way to store and manipulate collections of values of the same
// type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.

const numbers = [1, 2, 3];
let letters = ["a", "b", "c"];

// Each piece of data within an array is called an 'element' or 'item'.
// Elements are stored in the array starting from zero (0). These
// storage locations are called 'indexes' or 'indices'.
letters = ["a", "b", "c"];
//          0    1    2
// So if we want to access the letter 'b', we need to use index 1.
// Accessing index 1 from the `letters` array is done like this:
const b = letters[1];
assert.equal(b, "b");

// Updating the array is similar to accessing, except we move the array access
// to the left hand side of the equals:
letters[1] = "z";
assert(letters[1] === "z");
assert.deepEqual(letters, ["a", "z", "c"]);

// While it's possible to mix multiple types of data in the
// same array, it's recommended that you stick to one data type.
// Avoid:
const mixed = [1, "hello"];
// const mixed2: string[] = [1, 'hello'];  // ERROR
// const mixed3: number[] = [1, 'hello'];  // ERROR

// Multidimensional arrays can be created like this:
const names = [
  ["Alice", "Carol"],
  ["Bob", "Chuck"],
];

// Multidimensional arrays can be accessed like this:
const alice = names[0][0];
const bob = names[1][0];
const chuck = names[1][1];

// If you want an empty array to start with, you can create one like this:
const emptyArray = [];

// To add new elements to the end of the array:
letters = ["a", "b", "c"];
letters.push("d");
letters.push("e");
assert.deepEqual(letters, ["a", "b", "c", "d", "e"]);

// To remove the last element from the array:
const e = letters.pop();
assert.deepEqual(letters, ["a", "b", "c", "d"]);

// To remove the element at index 0 from the array, we use the `splice`
// function:
letters.splice(0, 1);
assert.deepEqual(letters, ["b", "c", "d"]);

//          0    1    2    3
letters = ["a", "b", "c", "d"];
// We can remove more than 1 element at a time using `splice`:
//     .splice(startIndex, numElementsToRemove)
letters.splice(1, 2);
// We accessed index 1 ('b'), then deleted two elements starting from 'b'.
assert.deepEqual(letters, ["a", "d"]);

// If you skip indexes when adding a value, you'll get empty slots
// in the array. This creates a "sparse array".
// Prefer using .push() to add items (when possible) to avoid sparse arrays.
letters = ["a", "b", "c"];
letters[4] = "d";
assert.deepEqual(letters, ["a", "b", "c", , "d"]);

// We can use loops to access all elements within an array.
//
// This isn't the recommended to iterate through an array, but it is simple
// and you will very likely encounter it when working on different codebases.
//
// The `.length` field on arrays tells us how many elements are available.
// We can use this to stop the loop once we get to the end of the array.
// Remember that arrays start at index 0. So if there are three elements,
// using `.length` will give us 3, but the highest index is 2. Therefore,
// we want to loop while the counter is less than (and not equal) to the
// length.
letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// For more info about arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//

