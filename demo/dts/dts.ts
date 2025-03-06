/* eslint-disable */
import { strict as assert } from 'assert';
import { add, max, quote, setCase } from './mylib';

// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
//

const message = 'hello';
const upper = setCase(message, 'upper');
assert.equal(upper, 'HELLO');
