/* eslint-disable */
import { strict as assert } from "assert";

// String Substring - Extract Everything After the Protocol in a URL  
//
// Problem: A web application needs to extract part of a URL (e.g.,
// 'https://example.com/path/to/page') for processing by other systems.
//
// A URL typically starts with a protocol like `http://` or `https://`. This
// function should extract everything that comes after the protocol (i.e.,
// everything following `://`).
//
// Example:
//   Given `url = "https://example.com/path/to/page"`,
//   return `"example.com/path/to/page"`.

function getURLPath(url) {
  const protocolEnd = url.indexOf('://');
  return url.substring(protocolEnd + 3);
}

// Test Cases
assert.strictEqual(getURLPath("https://example.com/path/to/page"), "example.com/path/to/page");
assert.strictEqual(getURLPath("http://localhost:3000/users"), "localhost:3000/users");
console.log("exercise complete!");
