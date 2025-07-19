/* eslint-disable */
import { strict as assert } from "assert";

// You are filtering a list of user messages based on their length. Use
// .filter() to return only strings with more than 5 characters.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filterLongStrings(strings) {
  return strings.filter(str => str.length > 5);
}

assert.equal(JSON.stringify(filterLongStrings(["hi", "hello", "worldwide"])), JSON.stringify(["worldwide"]));
assert.equal(filterLongStrings(["a", "abc", "abcd", "abcdef"]).length, 1);
console.log("exercise complete!");
