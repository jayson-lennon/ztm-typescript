/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values.

// We can create a "plain object" or "object literal" like so:
const person = {
  name: "Alice",
  age: 30,
};

// Objects are useful for grouping related pieces of information.

console.log(person); // `{ name: 'Alice', age: 30 }`

// To access properties of a `Person` object, we use dot notation:
const name = person.name;
console.log(name); // "Alice"
console.log(person.age); // 30

// Change object properties using assignment:
person.age = 35;
console.log(person.age); // 35

