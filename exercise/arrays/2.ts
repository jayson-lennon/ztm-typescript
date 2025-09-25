// An event organizer is hosting an event for IT vendors to showcase their
// products. Each vendor gets a space of a specific size and has a short window
// of time in which they can pitch their product.
//
// The organizers partitioned the area into "large" (over 10 units) and "small"
// (10 units and under) spaces and want to figure out which vendors have small
// spaces. They also want to be able to find which vendors have a specific
// sized space based on the number of units.
//
// Finally, the organizers need to ability to adjust the total duration of each
// presentation in case someone drops out.
//
// Perform the following:
// 1. Create an array containing all vendors with a "small" sized space having
//    10 or less units
// 2. Determine if any vendors have a space of size 13
// 3. Add 3 minutes to all presentation durations
//
// Run the program to test the existing assertions.

import { strict as assert } from "assert";

const vendors = [
  { size: 10, name: "Super Software", presentationDuration: 10 },
  { size: 13, name: "Dyn-Data", presentationDuration: 8 },
  { size: 7, name: "Engineering 2.0", presentationDuration: 12 }
];


// perform step 1 here
const smallSpaces = []; // ...

assert.deepStrictEqual(smallSpaces, (() => {
  const cloned = Array.from(vendors);
  cloned.splice(1, 1);
  return cloned;
})());

// perform step 2 here
const sizeExists = []; // ...

assert.equal(sizeExists, true);

// perform step 3 here
const updatedDuration = []; // ...

assert.deepStrictEqual(updatedDuration,
  [
    { size: 10, name: "Super Software", presentationDuration: 13 },
    { size: 13, name: "Dyn-Data", presentationDuration: 11 },
    { size: 7, name: "Engineering 2.0", presentationDuration: 15 }
  ]
);
