/* eslint-disable */
import { strict as assert } from "assert";

import { add, setCase, quote, max } from './mylib';

const nums = [];

const m = max(nums);
if (m !== null) {
  console.log(`${m}`);
} else {
  console.log(quote("empty array")());
}

const message = "hello";
const updated = setCase(message, "uppercase");
