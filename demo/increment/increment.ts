/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Bugs can occur when assigning and postfix or prefix incrementing are
// combined:
let increment = 2;
const two = increment++; // still 2
// Here's what happens above:
//   const two = increment;
//   increment = increment + 1;
assert.equal(two, 2);

let increment_bis = 2;
const three = ++increment_bis; // 3
assert.equal(three, 3);
// Here's what happens above:
//   increment_bis = increment_bis + 1;
//   const three = increment_bis;

// 'Postfix' will return the original value then update the variable.
// 'Prefix' will update the original variable and then
// return the updated value.

// Use 'add assign' instead to avoid bugs...
let addAssign = 0;
addAssign += 1; // 1
assert.equal(addAssign, 1);
// ... which is the same as this:
let moreAdding = 0;
moreAdding = moreAdding + 1;
assert.equal(moreAdding, 1);

// You can use other arithmetic operators with 'assign':
let subAssign = 1;
subAssign -= 1; // 0
assert.equal(subAssign, 0);
