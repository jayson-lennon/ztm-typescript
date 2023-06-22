/* eslint-disable */
import { strict as assert } from "assert";

// Declaration merging is a way to combine multiple declarations of
// the same entity into a single definition. This allows you to extend existing
// types and interfaces or merge them with new ones. Declaration merging is
// particularly useful when working with third-party libraries or when you need
// to add additional properties or methods to an existing type.

// Define a simple interface for a user
interface User {
  name: string;
  email: string;
}

// Extend the User interface with additional properties
interface User {
  age: number;
  address: string;
}

// Define a function that takes a User object and returns their name and age
function getUserInfo(user: User) {
  return `${user.name} is ${user.age} years old.`;
}

// Create a user object with all the properties of the merged interfaces
const user: User = {
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
  address: "123 Main St",
};

// Call the function to get the user's name and age
console.log(getUserInfo(user)); // Output: John Doe is 30 years old.
