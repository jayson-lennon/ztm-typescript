// You are developing a application to manage a set of basic operations related
// to geometric shapes. The application should be able to calculate the area of
// a rectangle, the perimeter of a rectangle, and the area of a circle. You'll
// implement these functions and demonstrate their usage.
//
// Requirements:
// - Define a function named `calculateRectangleArea` that takes the width and
//   height of a rectangle and returns the area.
// - Define a function named `calculateRectanglePerimeter` that takes the width
//   and height of a rectangle and returns the perimeter.
// - Define a function named `calculateCircleArea` that takes the radius of a
//   circle and returns the area. Use the value of π (pi) as approximately 3.14.
// - Use these functions to perform some sample calculations and print the
//   results.

import { strict as assert } from "assert";

// Function to calculate the area of a rectangle
function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(width: number, height: number): number {
  return 2 * (width + height);
}

// Function to calculate the area of a circle
function calculateCircleArea(radius: number): number {
  const pi = 3.14;
  return pi * radius * radius;
}

// Perform sample calculations
const rectangleWidth = 5;
const rectangleHeight = 10;
const circleRadius = 7;

const rectangleArea = calculateRectangleArea(rectangleWidth, rectangleHeight);
const rectanglePerimeter = calculateRectanglePerimeter(rectangleWidth, rectangleHeight);
const circleArea = calculateCircleArea(circleRadius);

console.log(`Rectangle Area: ${rectangleArea}`); // Rectangle Area: 50
console.log(`Rectangle Perimeter: ${rectanglePerimeter}`); // Rectangle Perimeter: 30
console.log(`Circle Area: ${circleArea}`); // Circle Area: 153.86

// Test cases
assert.equal(calculateRectangleArea(5, 10), 50);
assert.equal(calculateRectanglePerimeter(5, 10), 30);
assert.equal(calculateCircleArea(7), 153.86);
