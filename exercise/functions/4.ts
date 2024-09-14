// You are developing a application to determine whether a user is eligible for
// a discount.
//
// Requirements:
//
// - Create two functions to check for discount eligibility:
//   1. `isSenior`: returns `true` when the input `age` is 65 or older
//   2. `isLargePurchase`: returns `true` when the input `amount` is over 99
// - Define a function named `isEligibleForDiscount` and then use both the
//   `isSenior` and `isLargePurchase` functions that you created to determine
//   if there is discount eligibility.
//   - Use boolean logic and compound boolean operators to return `true` or
//   `false` from this function.
// - Print out whether a user is eligible for a discount.

/* eslint-disable */

import { strict as assert } from "assert";

// Function to check if a user is a senior
function isSenior(age: number): boolean {
  return age >= 65;
}

// Function to check if a purchase is large
function isLargePurchase(amount: number): boolean {
  return amount > 99;
}

// Function to determine if a user is eligible for a discount
function isEligibleForDiscount(age: number, amount: number): boolean {
  return isSenior(age) || isLargePurchase(amount);
}

const userAge = 70;
const purchaseAmount = 120;
const eligibility = isEligibleForDiscount(userAge, purchaseAmount);

console.log(`Is user eligible for discount? ${eligibility}`); // Is user eligible for discount? true

// Test cases
assert.equal(isEligibleForDiscount(60, 90), false);
assert.equal(isEligibleForDiscount(70, 90), true);
assert.equal(isEligibleForDiscount(60, 100), true);

