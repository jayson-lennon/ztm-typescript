/* eslint-disable */
import { strict as assert } from "assert";

// Generic classes offer the ability to define a class that can work with a
// variety of different data types. By using generic type parameters, you can
// create a single class that can be customized to work with any type of data
// that you need.
//
// Similarly to generic functions, generic classes allow you to write more
// flexible and reusable code, since you don't have to create a separate class
// for every possible data type.

// Here is an example of a generic class. We create a class called `Stack`
// which allows us to push and pop elements from the stack. We use generic
// parameter `T` without any constraints which enables the stack to operate on
// any data type.
class Stack<T> {
  // We can use generic type `T` anywhere in our class. Anywhere you see
  // generic type `T`, you can imagine substituting it with the type that you
  // actually want to use. TypeScript will check the types during compile-time
  // to ensure that they are used appropriately.
  //
  // Here we have an array of `T`:
  private elements: T[] = [];

  // Here we use `T` as a function parameter:
  public push(element: T): void {
    this.elements.push(element);
  }

  // Here we return either a `T` or `undefined`:
  public pop(): T | undefined {
    return this.elements.pop();
  }

  public peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

// Make a new `Stack` using the `new` keyword, and we must also specify the
// type we intend to use with the `Stack` between the `<>`. Specifying the type
// is important because it tells TypeScript what data to expect for the class.
// If the type is _not_ specified, then it defaults to `unknown`, which would
// allow you to place anything on the stack at any time.
const strings = new Stack<string>();

// We can use the methods defined on the class as normal:
strings.push("hello");
strings.push("world");

const world = strings.pop();
assert.equal(world, "world");

// _DON'T_ do this:
const anything = new Stack(); // defaults to `unknown`
anything.push(1);
anything.push("anything goes!");
anything.push(undefined);
anything.push(null);
