/* eslint-disable */
import { strict as assert } from 'assert';

// Generic functions are functions that are designed to work with different
// types of data. They allow you to create a function that can be used with
// various types of data without having to write a separate function for each
// type. This makes your code more efficient, reusable, and easier to maintain.
// Generic functions are especially useful when working with collections of
// data, such as arrays, because they allow you to create a function that can
// work with any type of data in the collection.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics
//

function getFirstNumber(arr: number[]): number | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

function getFirstString(arr: string[]): string | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

//! We just duplicated our code
//! We can use generics to avoid this duplication

//this could get long as we add more types
function getFirstStringOrNumber(
  arr: (string | number)[]
): string | number | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

getFirstStringOrNumber([1, 2, 3]);
getFirstStringOrNumber(['a', 'b', 'c']);
getFirstStringOrNumber([1, 'a', 2, 'b', 3, 'c']);

assert(getFirstStringOrNumber([1, 2, 3]) === 1);
assert(getFirstStringOrNumber(['a', 'b', 'c']) === 'a');
assert(getFirstStringOrNumber([1, 'a', 2, 'b', 3, 'c']) === 1);

// This is a generic function that works with any type
function getFirst<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

getFirst([1, 2, 3]);
getFirst(['a', 'b', 'c']);
getFirst([1, 'a', true, { name: 'John' }, 3, BigInt(1)]);
