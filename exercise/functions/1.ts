// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";
//1st attempt
//
function firstNameGenerator(firstName: string) {
  assert(typeof firstName === 'string', "Name has got to be a string man");
  assert(firstName.length >= 1, "Nobody's name is that short man");
  return firstName;
}
firstNameGenerator(Bryce);
console.log 


//testing the git
// we test the git again
