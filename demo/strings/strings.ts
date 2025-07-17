/* eslint-disable */

// JavaScript strings are sequences of characters used to represent text data.
// They are immutable, meaning they cannot be changed directly after creation –
// operations on strings always return new string values. JavaScript provides a
// rich set of methods for manipulating strings, including concatenation,
// substring extraction, searching, replacing, and formatting. Strings can be
// enclosed in single or double quotes, and understanding how to work with them
// is fundamental to handling textual information within JavaScript and
// TypeScript applications.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// "Concatenate" will put two or more strings together:
{
  const a = "Hello";
  const b = "World";
  const result = a.concat(" ", b);
  console.log(result); // "Hello World"
}

// Another way to concat strings is with '+'.
{
  const a = "Hello";
  const b = "World";
  const result = a + " " + b;
  console.log(result); // "Hello World"
}

// Replacing parts of a string with another uses the `replace` method:
{
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const input = "The internet loves dogs.";
  // `/dog/g` is a replacement pattern.
  const output = input.replace(/dog/g, "cat");
  console.log(output); // "The internet loves cats."
  // Recall that strings are immutable and cannot be changed. The `output` here
  // is a new string and we still have access to the old string:
  console.log(input); // "The internet loves dogs."
}

// To search for a specific string, we use the `indexOf` method:
{
  const input = "The quick brown fox jumps over the lazy dog";
  const index = input.indexOf("fox");
  console.log(index); // 16
}

// Parts of a string can be extracted using `substring`:
{
  const input = "JavaScript";
  // Note that the end of the substring is exclusive. Meaning that the letter
  // at the index will _not_ be included.
  const j = input.substring(0, 4);
  const s = input.substring(4, 10);
  console.log(j); // "Java"
  console.log(s); // "Script"
}

// Sometimes it's useful to determine if a string contains another string:
{
  const input = "Hello World";
  const hasWorld = input.includes("World");
  console.log(hasWorld); // true
}

// To remove whitespace from a string, use `trim`:
{
  const input = "   Hello World   ";
  const trimmed = input.trim();
  console.log(trimmed); // "Hello World"
}

// It's common to calculate the total length of a string to do things like
// ensuring page titles or item descriptions fit within a specified length. We
// use the `.length` property to determine the string length:
{
  const word = "JavaScript";
  console.log(word.length); // 10
}
