/* eslint-disable */
import { strict as assert } from "assert";

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type PersonName = string;

let meinName: PersonName = 'Reiner';

// The PersonName is more descriptive in other contexts compare these:

function printMe( thing: string) {
	console.log(thing)
}

function printName( name: PersonName){
	console.log(name);
}