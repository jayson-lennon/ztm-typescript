/* eslint-disable */
import { strict as assert } from "assert";

// String Trim - Clean User Input for Storage
//
// Problem: A user submits a comment that may include leading or trailing spaces, 
// and the application needs to clean this input before storing it.
//
// Example:
//   Given comment = "   Hello, world!   ",
//   return "Hello, world!".
//
function cleanComment(comment) {
  return comment.trim();
}

// Test Cases
assert.strictEqual(cleanComment("   Hello, world!   "), "Hello, world!");
assert.strictEqual(cleanComment("No extra spaces"), "No extra spaces");
console.log("exercise complete!");

