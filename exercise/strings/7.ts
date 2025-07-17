/* eslint-disable */
import { strict as assert } from "assert";

// String Length - Validate Username Length
//
// Problem: A registration form must ensure that the username is not too short
// or long for security and usability reasons. The minimum username length is
// 3, and the maximum length is 20.
//
// Example: Given username = "alice", return true.

function isValidUsername(username) {
  return username.length >= 3 && username.length <= 20;
}

// Test Cases
assert.strictEqual(isValidUsername("alice"), true);
assert.strictEqual(isValidUsername("a"), false);
assert.strictEqual(isValidUsername("tim"), true);
assert.strictEqual(isValidUsername("Sophia Ann Middleton"), true);
assert.strictEqual(isValidUsername("superlongusername1234"), false);
console.log("exercise complete!");
