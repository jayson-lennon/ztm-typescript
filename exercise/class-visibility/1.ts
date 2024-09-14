// You are enhancing a user management system where users have a name and a
// role. Some details, such as the user's role, should be kept private and only
// accessible through specific methods. You'll create a User class that
// utilizes visibility modifiers to control access to its properties.
//
// Requirements:
// - Create a `User` class with the following properties:
//   - `name`: A public string representing the user's name.
//   - `role`: A private string representing the user's role ("admin",
//     "guest").
// - Add a constructor to initialize both properties.
//   - Throw an exception if the role is not "admin" or "guest"
// - Add a public method `getRole()` that returns the user's role.
// - Add a public method `changeRole(newRole: string)` that updates the user's role.
//   - Throw an exception if the role is not "admin" or "guest"
// - Perform the following actions:
//   1. Create an instance of the `User` class
//   2. Display the user's role using `getRole()`
//   3. Change the role using `changeRole()`
//   4. Attempt to directly access the private role property (which should
//      result in an error).

import { strict as assert } from "assert";

// Create an instance of the User class. Replace `null` with your code.
const user = null;

// Display the user's role
//
// Put your code here
//
assert.equal(user.getRole(), "guest");

// Change the user's role
//
// Put your code here
//
assert.equal(user.getRole(), "admin");

// Attempt to access the private role property (this will cause a TypeScript
// error if uncommented)
// console.log(user.role); // Error: Property 'role' is private and only accessible within class 'User'

// Attempt to set an invalid role (this will throw an error)
try {
  //
  // Put your code here
  //
} catch (e: any) {
  console.log(e.message); // Output: Invalid role
}

