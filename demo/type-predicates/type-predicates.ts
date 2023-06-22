/* eslint-disable */
import { strict as assert } from "assert";

// Type predicates offer a way to determine the type of data based on a
// condition. This is achieved by defining a function that takes a some data as
// an argument, applies type guards, and returns a boolean indicating whether
// the data is a specific type. The function is then used to narrow down the
// type of the variable in subsequent code. Type predicates are useful when
// dealing with union types or other situations where the type of a variable
// may not be known at compile-time. Type predicates allow the type to be
// determined correctly which avoids runtime errors.

// `typeof` only works on basic types that exist in JavaScript.
// Type predicates allow us to work with custom types that we create
// in TypeScript.

interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

// The `shape is Square` is the type predicate.
// If the function returns `true`, then the input data `shape` is of type `Square`.
// If the function returns `false`, then the input data `shape` is _not_ a `Square`.
function isSquare(shape: Shape): shape is Square {
  // We can check to see if a particular field is equal to something:
  return shape.kind === "square";
}

function isCircle(shape: Shape): shape is Circle {
  // We can check if the type contains a member using a type guard:
  return "radius" in shape;
}

function calculateArea(shape: Shape): number {
  // We can use the type predicate function as a type guard:
  if (isSquare(shape)) {
    // TypeScript now knows that `shape` is a `Square` type, so we get safe
    // access to the `size` field:
    return shape.size ** 2;
  }
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }

  throw "unknown shape";
}

const square: Shape = { kind: "square", size: 5 };
const circle: Shape = { kind: "circle", radius: 2 };

assert.equal(calculateArea(square), 25);
assert.equal(calculateArea(circle), Math.PI * 2 ** 2);
