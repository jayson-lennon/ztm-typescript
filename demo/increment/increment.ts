/* eslint-disable */
import { strict as assert } from "assert";

// ++ can increment by 1
let increment = 0;
// 'postfix'
increment++; // 1
assert.equal(increment, 1);
// 'prefix'
++increment; // 2
assert.equal(increment, 2);

// Bugs can occur when assigning and postfix or prefix incrementing are
// combined:
increment = 2;
const two = increment++; // still 2
// Here's what happens above:
//   const two = increment;
//   increment = increment + 1;
assert.equal(two, 2);

increment = 2;
const three = ++increment; // 3
assert.equal(three, 3);
// Here's what happens above:
//   increment = increment + 1;
//   const three = increment;

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
