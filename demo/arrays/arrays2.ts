/* eslint-disable */
// import { strict as assert } from "assert";

// An array of user IDs (simple numbers)
let userIds = [101, 102, 103];

// An array of security PINs (strings to preserve leading zeros)
let securityPins = ["0011", "0022", "0033"];

// This is correct
userIds.push(104);

// This is an easy mistake to make, as a developer might see "105" and not realize
// that it needs to be a string. TypeScript prevents this.
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
securityPins.push(105);

// This is another easy mistake, trying to add a string to a number array.
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
userIds.push("106");


