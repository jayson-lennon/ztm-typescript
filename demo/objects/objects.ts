/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html


type Coordinate = {
	x: number;
	y: number;
}

const origin: Coordinate = { 
	x:0, 
	y:0
}

let { x, y } = origin;

const xPosition = origin.x;
const yPosition = origin.y;

origin.x = 10;
origin.y = 30;