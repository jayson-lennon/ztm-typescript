/* eslint-disable */
import { strict as assert } from "assert";

// String Concatenation - Combine Filename Parts
//
// Problem: A user is creating a unique filename for an uploaded file,
// combining a base name and extension stored in separate variables. They need
// to concatenate these parts properly.
//
// A filename is the name assigned to a file stored on a computer or server. It
// consists of two parts:
// - The base name, which identifies the file (e.g., "report")
// - The extension, which indicates the file type (e.g., ".txt" for
//   text files, ".jpg" for images).  
//
// Example file names are "report.txt" and "photo.jpg".

function combineFilename(baseName, extension) {
  return baseName.concat('.', extension);
}

// Test Cases
assert.strictEqual(combineFilename("report", "txt"), "report.txt");
assert.strictEqual(combineFilename("photo", "jpg"), "photo.jpg");
console.log("exercise complete!");

