/* eslint-disable */
import { strict as assert } from "assert";

const numbers = [1, 2, 3];

let letters = ["a", "b", "c"];

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'
// letters.push(1);
