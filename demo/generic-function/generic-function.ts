/* eslint-disable */
import { strict as assert } from "assert";

// Generic functions are functions that are designed to work with different
// types of data. They allow you to create a function that can be used with
// various types of data without having to write a separate function for each
// type. This makes your code more efficient, reusable, and easier to maintain.
// Generic functions are especially useful when working with collections of
// data, such as arrays, because they allow you to create a function that can
// work with any type of data in the collection.
//
// When writing functions we always specify the data type for each function.
// For example, this function gets the first element of an array, but it only
// works for arrays of numbers:
function getFirstNumber(arr: number[]): number | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}
// If we later need it to work on arrays of strings, we would need to write
// another function:
function getFirstString(arr: string[]): string | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

// This is inconvenient because we need another function for each data type.
//
// An alternative is to allow the function to operate on strings or numbers
// through the use of a union type. This works, but the signature starts
// becoming unwieldy and this code will produce a compiler errors whenever we
// try using a new type with the function:
function getFirstStringOrNumber(
  arr: (string | number)[]
): string | number | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

// Generics make it possible to write a single function that operates on some
// types or all types.
//
// To rewrite the above functions using generics, we introduce a generic
// parameter `T`. Generic parameter `T` is all types that use this function.
//
// For example, if we call this function with `number[]`, then the function is
// equivalent to the `getFirstNumber` function above. Likewise, if we call the
// function with `string[]` then the function is equivalent to `getFirstString`
// from above.
//
// TypeScript analyzes the code at compile time and makes sure that all usages
// of the function are valid.
function getFirst<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

// We use a generic function like any other function:
const nums = [1, 2, 3];
const one = getFirst(nums);
assert.equal(one, 1);

// Since the `getFirst` function is generic over any type, we can call it with
// an array of strings:
const letters = ["a", "b", "c"];
const a = getFirst(letters);
assert.equal(a, "a");

// And we can call it with an array of anything else we want:
const objects = [{ first: 1 }, { second: 2 }];
const first = getFirst(objects);
assert.deepEqual(first, { first: 1 });

// Much of the time it isn't desirable for a function to with _all_ types. In
// these cases, we can "constrain" the generic type by using interfaces.
//
// Here is a sample interface that allows the Area of something to be
// calculated:
interface Area {
  area(): number;
}

// Here we provide a "generic constraint" on generic type `T` by using the
// `extends` keyword. This will make the function work _only_ for types that
// implement the `Area` interface:
function getArea<T extends Area>(shape: T): number {
  // Since we now know that all type `T` implement the `Area` interface, we can
  // call the `area()` function:
  return shape.area();
}

// To use the function we need a type that implements the `Area` interface:
const bigSquare = {
  side: 500,
  area() {
    return this.side ** 2;
  },
};

// We can now use it with the `getArea` function:
assert.equal(getArea(bigSquare), 250000);

// Another example using a class that implements `Area`:
class Square implements Area {
  side: number;
  constructor() {
    this.side = 1;
  }
  area() {
    return this.side ** 2;
  }
}
const smallSquare = new Square();
// We can use it with the `getArea` function:
assert.equal(getArea(smallSquare), 1);

// If we try to use `getArea` with something that doesn't implement the `Area`
// interface, then we will get a compiler error:
//
// getArea("not a shape");
//
// ERROR: argument of type `string` is not assignable to parameter of type
// `Area`
