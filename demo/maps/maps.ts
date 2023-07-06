/* eslint-disable */
import { strict as assert } from "assert";

// A `Map` is a data structure that allows you to store data in a key-value
// pair format. Keys in a map must be unique, and each key can map to only one
// value. You can use any type of value as the key, including objects and
// functions. Maps are useful when you want to quickly access data and you are
// able to maintain the key in memory. In situations where you have to search
// (you don't have a key) for the data you need, a different data structure
// would be more appropriate.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//
// Create some type aliases to make our intent more clear:
type Name = string;
type Score = number;

// Maps are created by using `new Map`. We should also set the data type
// with type annotations. `Name` is the type of the keys in the map, and
// `Score` is the type of values in the map.
const testScores: Map<Name, Score> = new Map();

// Use `.set` to set a key to a value:
testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

assert.equal(testScores.size, 3);

// We can iterate through the key/value pairs using a `for..of` loop.
// The square braces are a destructuring pattern: The first is the key
// and the second is the value. Maps are not sortable and the pairs
// will be accessed based on insertion order.
for (const [name, score] of testScores) {
  console.log(`${name} score is ${score}`);
}

// Delete a key from the map:
testScores.delete("Bob");
assert.equal(testScores.size, 2);

// Check if a key exists:
assert.equal(testScores.has("Bob"), false);

// If you just want the keys:
for (const name of testScores.keys()) {
  console.log(`Name: ${name}`);
}

// If you just want the values:
for (const score of testScores.values()) {
  console.log(`Score: ${score}`);
}

// If you want to delete all the keys from a map:
testScores.clear();
assert.equal(testScores.size, 0);
