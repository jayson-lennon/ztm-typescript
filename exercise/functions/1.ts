// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";


function firstName(): string {
  return "John";
}

function lastName(): string {
  return "Doe";
}

function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

console.log(fullName(firstName(), lastName()));
