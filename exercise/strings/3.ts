/* eslint-disable */
import { strict as assert } from "assert";

// String IndexOf - Search for a Keyword in Document Text
//
// Problem: A developer is building a search feature that needs to highlight
// matches by locating the starting index of a keyword within document text.
//
// Example:
//   Given documentText = "The quick brown fox jumps over the lazy dog", 
//   and keyword = "fox", return 16.

function findKeywordIndex(documentText, keyword) {
  return documentText.indexOf(keyword);
}

// Test Cases
assert.strictEqual(findKeywordIndex("The quick brown fox jumps over the lazy dog", "fox"), 16);
assert.strictEqual(findKeywordIndex("Hello world", "moon"), -1);
console.log("exercise complete!");

