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

class User {
  public name: string;
  private role: string;

  constructor(name: string, role: string) {
    this.name = name;
    if (this.isRoleValid(role)) {
      this.role = role;
    } else {
      throw new Error("Invalid role");
    }
  }

  public getRole(): string {
    return this.role;
  }

  public changeRole(newRole: string): void {
    if (this.isRoleValid(newRole)) {
      this.role = newRole;
    } else {
      throw new Error("Invalid role");
    }
  }

  private isRoleValid(role: string): boolean {
    return role === "admin" || role === "guest";
  }
}

// Create an instance of the User class
const user = new User("Alice", "guest");

// Display the user's role
console.log(user.getRole());
assert.equal(user.getRole(), "guest");

// Change the user's role
user.changeRole("admin");
console.log(user.getRole());
assert.equal(user.getRole(), "admin");

// Attempt to access the private role property (this will cause a TypeScript
// error if uncommented)
// console.log(user.role); // Error: Property 'role' is private and only accessible within class 'User'

// Attempt to set an invalid role (this will throw an error)
try {
  user.changeRole("superuser"); // Error: Invalid role
} catch (e: any) {
  console.log(e.message); // Output: Invalid role
}


