// You are building a utility that generates unique IDs for different elements
// on a webpage. Each ID should be unique and sequential, following a specific
// prefix. You'll use a generator function to create a sequence of these unique
// IDs.
//
// Requirements:
// - Create a generator function named `idGenerator` that takes a prefix string
//   as an argument.
// - The generator should produce unique IDs by appending a sequential number
//   to the prefix.
//     - For example, if the prefix is "item-", then the final IDs should be
//     "item-1", "item-2", etc.
// - Each time the generator is called using `next()`, it should return the
//   next ID in the sequence.
// - Create an instance of the `idGenerator` function for generating IDs with
//   the prefix "item-".
// - Generate three unique IDs using the `idGenerator` instance and print them
//   to the console.
// - Test the generator by ensuring that the generated IDs are "item-1",
//   "item-2", and "item-3".

import { strict as assert } from "assert";

// Create an instance of the idGenerator
//
// Replace `null` with a call to your `idGenerator` function.
const itemIdGenerator = null;

// Generate three unique IDs
const id1 = itemIdGenerator.next().value;
const id2 = itemIdGenerator.next().value;
const id3 = itemIdGenerator.next().value;

// Test cases
assert.equal(id1, "item-1");
assert.equal(id2, "item-2");
assert.equal(id3, "item-3");

