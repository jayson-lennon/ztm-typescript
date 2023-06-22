/* eslint-disable */
import { strict as assert } from "assert";

// Class visibility modifiers control the accessibility of class
// members (properties and methods) from outside the class.
//
// The available visibility modifiers are
//  - `public`: accessible anywhere
//  - `protected`: accessible from the defining class and all subclasses
//  - `private`: accessible only within the defining class
//
// Using visibility modifiers helps to enforce encapsulation and prevent
// unintended access to class members.

class Person {
  // `name` is accessible anywhere:
  public name: string;
  // `email` is accessible in `Person` and it's sublcasses:
  protected email: string;
  // `age` is accessible only in `Person`:
  private age: number;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // `greet` is accessible anywhere:
  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // `getEmail` is accessible in `Person` and it's subclasses:
  protected getEmail(): string {
    return this.email;
  }

  // `getAge` is accessible only in `Person`:
  private getAge(): number {
    return this.age;
  }
}

// Use `Person` as a subclass
class Employee extends Person {
  public department: string;

  constructor(name: string, age: number, email: string, department: string) {
    super(name, age, email);
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${
      this.name
    }, Email: ${this.getEmail()}, Age: not accessible, Department: ${
      this.department
    }`;
  }

  // Make the email publicly accessible by forwarding the function call:
  public override getEmail(): string {
    // Use the parent class implementation of `getEmail` through `super`. Even
    // though `getEmail` is marked as protected, we can still expose the data
    // publicly because the `Employee` class has permission to access
    // `getEmail`.
    return super.getEmail();
  }
}

const john = new Person("John", 30, "john@example.com");
assert.equal(john.name, "John");
john.greet(); // "Hello, my name is John."

const mary = new Employee("Mary", 25, "mary@example.com", "Sales");
assert.equal(mary.name, "Mary");
assert.equal(mary.department, "Sales");
assert.equal(mary.getEmail(), "mary@example.com");
assert.equal(
  mary.getEmployeeInfo(),
  "Name: Mary, Email: mary@example.com, Age: not accessible, Department: Sales"
);
// assert.equal(mary.getAge(), 25); // Error: Property 'age' is private and only accessible within class 'Person'.
