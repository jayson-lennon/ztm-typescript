/* eslint-disable */
import { strict as assert } from "assert";

// switches
const someNumber = parseInt("10");
const sample = "sample;"
const someString = `${sample}`;

// `switch` allows us to provide a list of possibilities.
switch (someString) {
  case "test":
    // when someString === 'test', we run this block
    //
    // We always use `break` to end a block. If we forget,
    // then the code in the next case will be executed
    // automatically even if the case doesn't match.
    break;
  case "sample":
    // when someString === 'sample', we run this block
    break;
}

// `switch` works with numbers too:
switch (someNumber) {
  case 1:
    // (code)
    break;
  case 2:
    // (code)
    break;
  default:
  // if someNumber is not 1 and not 2, then we run the 'default'
  // block of code. We don't need `break` because it's already
  // at the end of the block.
}

// If we want to run one block of code for multiple cases:
switch (someNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    // (code)
    break;
}

// If we want to run multiple different blocks of code, depending
// on the case, we can fall through on purpose. If you do this,
// leave a code comment so developers know this was intentional.
switch (someNumber) {
  case 1:
  case 2:
  case 3:
  // (code)
  // FALLTHROUGH
  case 4:
  case 5:
    // (code)
    break;
}
