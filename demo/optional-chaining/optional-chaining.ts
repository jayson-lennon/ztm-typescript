/* eslint-disable */

// Optional fields are convenient because they allow situations
// where it may not be appropriate to have data present. However,
// they make it cumbersome to access any additional data that is
// behind the optional field. For example, trying to access multiple
// optional objects one after the other requires multiple checks for
// `undefined` and multiple `if` blocks.
//
// With 'Optional Chaining', it is possible to combine all of the `if`
// blocks into a single line using the 'optional property access' operator.

// The optional property access operator is a question mark (?) and allows
// access to optional fields. It will continue to access optional fields
// using the following behavior:
//  - Access fields until `undefined` is encountered, and then set the
//    expression to `undefined.`
//  - Access fields until the last field is accessed, and then set the
//    expression to the value of the last field.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//

interface Pii {
  age?: number;
  address?: string;
}

interface SearchResult {
  name: string;
  pii?: Pii;
}

class Database {
  search(name: string): SearchResult | undefined {
    switch (name) {
      case 'John':
        return {
          name: 'John Doe',
          pii: {
            age: 22,
          },
        };
      case 'Jane':
        return {
          name: 'Jane Doe',
        };
      default:
        return undefined;
    }
  }
}

const database = new Database();

const result = database.search('John');
if (
  result !== undefined &&
  result !== null &&
  result.pii !== undefined &&
  result.pii !== null &&
  result.pii.age !== undefined &&
  result.pii.age !== null
) {
  console.log(`${result.name} age is ${result.pii.age}`);
} // Don't do this, use optional chaining instead

const result2 = database.search('Jane');
if (result?.pii?.age) {
  console.log(`${result.name} age is ${result.pii.age}`);
}
