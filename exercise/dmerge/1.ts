// You are developing a library for handling geometric shapes. The library
// provides basic shape types like Circle and Rectangle. You need to add
// additional methods to these shape types to calculate their area and
// perimeter using declaration merging.
//
// Requirements:
//
// - Define an initial interface Circle with the following property:
//   - radius: A number representing the radius of the circle.
// - Define an initial interface Rectangle with the following properties:
//   - width: A number representing the width of the rectangle.
//   - height: A number representing the height of the rectangle.
// - Use declaration merging to extend the Circle interface with methods:
//   - area(): A method that calculates and returns the area of the circle.
//   - perimeter(): A method that calculates and returns the perimeter of the
//   circle.
// - Use declaration merging to extend the Rectangle interface with methods:
//   - area(): A method that calculates and returns the area of the rectangle.
//   - perimeter(): A method that calculates and returns the perimeter of the
//   rectangle.
// - Create instances of Circle and Rectangle, calculate their area and
//   perimeter using the newly added methods, and print the results.

import { strict as assert } from "assert";

// Replace `null` with an instance of `Circle`.
const circle = null;

// Replace `null` with an instance of `Rectangle`.
const rectangle = null;

// Test cases
circle.radius = 5;
assert.equal(circle.area(), Math.PI * 5 * 5);
assert.equal(circle.perimeter(), 2 * Math.PI * 5);
rectangle.width = 10;
rectangle.height = 4;
assert.equal(rectangle.area(), 10 * 4);
assert.equal(rectangle.perimeter(), 2 * (10 + 4));


