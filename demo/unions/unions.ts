/* eslint-disable */

import { assert } from 'console';

// Union types allows you to declare a variable or parameter that can hold
// multiple types of value and are declared using the pipe symbol (|) between
// the types. Union types can be useful when you want something to accept
// multiple types of input.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
//

type Color = 'red' | 'green' | 'blue';
const r: Color = 'red';

function setBgColor(c: Color) {
  switch (c) {
    case 'red':
      break;
    case 'blue':
      break;
    case 'green':
      break;
  }
}

setBgColor('blue');

type StrOrNum = string | number;
function sample(data: StrOrNum) {
  return typeof data === 'string'
    ? 'Type of data is string'
    : 'Type of data is number';
}

console.log(sample(12))
console.log(sample('hello'))

function find(): string | undefined {
    return undefined; // avoids try catch and exception handling
}
