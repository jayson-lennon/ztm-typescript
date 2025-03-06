/* eslint-disable */
import { strict as assert } from 'assert';

// Type predicates offer a way to determine the type of data based on a
// condition. This is achieved by defining a function that takes a some data as
// an argument, applies type guards, and returns a boolean indicating whether
// the data is a specific type. The function is then used to narrow down the
// type of the variable in subsequent code. Type predicates are useful when
// dealing with union types or other situations where the type of a variable
// may not be known at compile-time. Type predicates allow the type to be
// determined correctly which avoids runtime errors.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
//

// This was a type guard
type StrOrNum = string | number;
function sample(data: StrOrNum) {
  //previous code
}

// Type predicate - checks for non-primitive data
interface Square {
  kind: 'square';
  size: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

// returns Boolean
function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square';
}
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}

function calculateArea(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  }
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }

  throw new Error('unknown shape');
}

const myCircle: Circle = { radius: 30, kind: 'circle' };
const mySquare: Square = { size: 12, kind: 'square' };

console.log(calculateArea(myCircle));
console.log(calculateArea(mySquare));
