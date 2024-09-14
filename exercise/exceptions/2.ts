// You are building a application to manage a list of items. The application
// needs to handle cases where an item is not found or invalid data is
// provided. You'll use exceptions to manage these error conditions and ensure
// that the application can respond appropriately.
//
// Requirements:
// - Define a class `ItemNotFoundError` that extends the built-in `Error` class.
//   This class should be used to represent errors when an item is not found.
// - Implement a function `findItem` that searches for an item in a list of items
//   by its ID. If the item is not found, it should throw an `ItemNotFoundError`.
// - Create some test cases to ensure that your functions handle exceptions
//   properly. Specifically, test:
//   - Throwing and catching an `ItemNotFoundError` when searching for a
//     non-existent item.

import { strict as assert } from "assert";

// Item interface
interface Item {
  id: number;
  name: string;
}

//
// Create your `ItemNotFoundError` class here.
//
// Create your `findItem` function here.
//

// Test cases
const items: Item[] = [
  { id: 1, name: "Item1" },
  { id: 2, name: "Item2" }
];

try {
  findItem(items, 3);
} catch (error) {
  if (error instanceof ItemNotFoundError) {
    console.log(`Caught ItemNotFoundError: ${error.message}`); // Caught ItemNotFoundError: Item with ID 3 not found.
  } else {
    console.error(`Unexpected error: ${(error as Error).message}`);
  }
}

const item1 = findItem(items, 1);
assert.deepEqual(item1, { id: 1, name: "Item1" });

