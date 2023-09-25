/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// or updated in other parts of the program.

// string
const courseName = "typescript";
// string
const someLetter = "k";
// string
const singleQuote = "i";
// string
const bquote = `hello`;

// number
const amount = 10;
// number
const fractionalAmount = 10.5;
// number in scientific notation
const oneThousand = 1e3;
// number using octal literal
const allPermissions = 0o777;
// number using hex literal
const hexByte = 0xff;
// number using binary literal
const binaryNumber = 0b01000001;
// bigint
const bigInteger = 9000n;

// boolean
const yes = true;
// boolean
const nope = false;

// We should mostly avoid `null` and `undefined` in TypeScript.
// undefined: completely missing
const missing = undefined;
// null: a value should exist here, but we specifically removed it.
const empty = null;

// Declarations created with `let` can be reassigned:
let someNum = 0;
someNum = 1;
someNum = 2;

// We cannot reuse the same name in the same block:
// let someNum = 0;   // ERROR: cannot same name in same scope

{
  // We made a new block with curly braces {}, so now we can
  // reuse the name:
  let someNum = 0;

  // When we do this, we are now accessing the `someNum` created within
  // this block. The `someNum` that exists outside of this block is now
  // 'shadowed' and can no longer be accessed from inside this block.
  someNum = 3;

  // Everything created within a block goes away when the block ends
  // (unless it gets moved somewhere prior to the block ending).
}
// `someNum` is 2 here because the previous block ended

// We can leave a `let` declarations uninitialized and then set it later:
let hello;
// If we use `hello` here, it will be `undefined`.

hello = "hi";
// `hello` has been defined: so it's OK to use now.

// `const` declarations must always be set:
// const goodbye;   // ERROR: `const` must be set
