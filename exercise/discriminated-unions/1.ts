// Write a program that calculates the total area of different shapes using
// discriminated unions. Include support for at least squares, rectangles, and
// circles. The functionality to calculate the area of each shape should exist
// in a single function and the function should select the appropriate
// calculation based on the disciminator.
//
// The area of a square: side^2
// The area of a rectangle: width * height
// The area of a circle: Math.PI * radius^2
//
// Make these assertions to check your code:
// - Square with side length of 5 has an area of 25
// - Rectangle with width of 4 and height of 6 has an area of 24
// - Circle with radius of 3 has an area of Math.PI * 9

import { strict as assert } from "assert";

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.sideLength * shape.sideLength;
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    default:
      throw new Error('Invalid shape');
  }
}

// Example usage
const square: Shape = { kind: 'square', sideLength: 5 };
const rectangle: Shape = { kind: 'rectangle', width: 4, height: 6 };
const circle: Shape = { kind: 'circle', radius: 3 };

assert.equal(calculateArea(square), 25);
assert.equal(calculateArea(rectangle), 24);
assert.equal(calculateArea(circle), Math.PI * 9);

