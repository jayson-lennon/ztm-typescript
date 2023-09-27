/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// We can define the shape of an object using type aliases:
type Coordinate = {
  x: number; // field named `x` containing the type `number`
  y: number; // field named `y` containing the type `number`
};

// To create a `Coordinate`:
const origin: Coordinate = {
  x: 0,
  y: 0,
};

// To access fields of a `Coordinate`, we use dot notation:
const xPosition = origin.x;
assert.equal(xPosition, 0);

const yPosition = origin.y;
assert.equal(yPosition, 0);

// We also use dot notation to modify fields.
let coord: Coordinate = { x: 1, y: 1 };
coord.x = 20;
coord.y = 10;
assert.deepEqual(coord, { x: 20, y: 10 });

// Remember that `const` just means we cannot _reassign_ data.
// We can still update the fields of `origin`, even though we
// created it with `const`:
const oneOne: Coordinate = {
  x: 1,
  y: 1,
};
assert.deepEqual(oneOne, { x: 1, y: 1 });
// oneOne = { x: 2, y: 2 }  // ERROR: oneOne is a constant
oneOne.x = 2; // OK: field is not const
oneOne.y = 2; // OK: field is not const
assert.deepEqual(oneOne, { x: 2, y: 2 });

// We can use the type as a parameter in a function:
function printCoord(coord: Coordinate) {
  // Only the `x` and `y` fields can be accessed, because those
  // are the only things declared in the type alias.
  console.log(coord.x, coord.y);
}

printCoord(origin); // 0 0

// We can create an object without specifying a type:
const anonOrigin = { x: 0, y: 0 };
// `anonOrigin` has the same fields as `Coordinate`, so we
// are able to use it wherever we can use a `Coordinate`.
printCoord(anonOrigin); // 0 0

// This object has `x` and `y` fields, but also a `z`. It can still be
// used wherever we can use a `Coordinate` because it has both
// `x` and `y` fields. This is called _duck typing_. As long
// as the type has at least the fields required by some other type,
// it can be used wherever that other type is required.
const anotherOrigin = { x: 0, y: 0, z: 0 };

printCoord(anotherOrigin); // 0 0

// Objects can contain other objects & objects can be nested:
type PersonName = string;

type Location = {
  coord: Coordinate;
  name: PersonName;
};

let home = {
  coord: { x: 0, y: 0 },
  name: "home",
};

// Using dot notation, we can access fields from nested objects:
home.coord.x = 1; // change the x coordinate to 1
assert.deepEqual(home.coord, { x: 1, y: 0 });
