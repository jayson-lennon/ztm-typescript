/* eslint-disable */
import { strict as assert } from "assert";

// ES modules provide a way to organize code into separate files that can be
// imported and used in other files.To use an ES module, the the `import`
// keyword is used.

// import individual items
import { add, sub, pi } from "./math.ts";

// rename an import
import { Vec as Vector } from "./math.ts";

// Use the "default" import (no curly braces) allows you to import the default
// exported item in the module, while also renaming it at the same time. You'll
// see this often, but try not to use it in your own code because of
// discoverability problems:
import Coordinate from "./coord.ts";
// Prefer this instead of the above:
// import { Point as coordinate } from "./coord.ts";

// Once imported, the items can be used as normal:
const four = add(2, 2);
assert.equal(four, 4);

const ten = sub(12, 2);
assert.equal(ten, 10);

const circleArea = pi * 10 ** 2;

const letters = new Vector<string>();
letters.push("a");
letters.push("b");
letters.push("c");


const origin: Coordinate = { x: 0, y: 0 };

