/* eslint-disable */
import { strict as assert } from "assert";

// String Includes - Validate Product Name Contains a Keyword
//
// Problem: A product filtering system needs to determine if an item is "organic" 
// by checking whether the product name includes the word.
//
// Example:
//   Given productName = "organic kale", return true.

function isOrganic(productName) {
  return productName.includes("organic");
}

// Test Cases
assert.strictEqual(isOrganic("organic kale"), true);
assert.strictEqual(isOrganic("kale salad"), false);
console.log("exercise complete!");


