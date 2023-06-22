/* eslint-disable */
import { strict as assert } from "assert";

// Classes are a way to define blueprints for objects. They encapsulate data
// and behavior and can be used to create instances of objects with predefined
// properties and methods. Classes can be extended and inherited, allowing for
// the creation of complex object hierarchies.

// To crete a class definition, we use the `class` keyword followed
// by the name of the object and then curly braces:
class Empty { }

// Classes can have 'properties' and they must have default values set.
// These defaults will be used when the objet is created.
class Color {
  // Always include the type annotation. It's optional, but
  // readability will be enhanced with the type specified.
  r = 0;
  g = 0;
  b = 0; // Not so great.
}

// We can crete a new object using the `new` keyword. Creating
// a new object is called 'instantiation'.
const c = new Color(); // Color { r: 0,   g: 0, b: 0 }

// We use dot notation to set values within the object:
c.r = 255; // Color { r: 255, g: 0, b: 0 }

// And we can read values using dot notation as well:
const redValue = c.r;

// Sometimes we may want to perform additional actions
// when instantiating a new class. To do so, we can use
// a class constructor:
class Dimension {
  // We aren't specifying the defaults directly on the properties.
  // We will set the defaults in the constructor instead.
  length: number;
  width: number;
  height: number;

  // Class constructor is a function that runs each time we create
  // a Dimension using the `new` keyword. Constructors always return
  // the type they are defined in (`Dimension` in this case). So
  // there is no need for the return type annotation.
  constructor() {
    // Each time we make a new Dimension, this message will be logged.
    console.log("created a new default Dimension");

    // Since we didn't specify the defaults, we _must_ do so here. Failure
    // to specify defaults will result in an error.
    this.length = 1;
    this.width = 1;
    this.height = 1;
  }
}

const one = new Dimension(); // 'created a new Dimension'

class Point {
  x: number;
  y: number;

  // We can also write the constructor with function parameters. This
  // allows us to easily set values during creation.
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // We can create 'class methods' which can be called using dot notation.
  // This method moves the point by the provided amount.
  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

const a = new Point(5, 5); // Point { x: 5, y: 5 }
a.translate(-5, -5); // Point { x: 0, y: o }
assert.deepEqual([a.x, a.y], [0, 0]);
