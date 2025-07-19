/* eslint-disable */
import { strict as assert } from "assert";

// JavaScript
const person = {
  name: "Alice",
  age: 30,
};
console.log(person); // `{ name: 'Alice', age: 30 }`

//-----------------------------------------

// TypeScript
//
// Define the interface
interface User {
  name: string;
  age: number;
}

// Create an object conforming to the interface
const user: User = {
  name: "Alice",
  age: 30
};

console.log(user); // `{ name: 'Alice', age: 30 }`

