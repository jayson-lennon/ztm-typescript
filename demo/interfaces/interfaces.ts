/* eslint-disable */
import { strict as assert } from "assert";

// INFO: type alias works for any type, but cannot be extended
// INFO: interface made just for object types, can be extended

// Interfaces provide a way to define the shape of objects or classes. They
// define the contracts that objects must follow, specifying the properties and
// methods that an object must have. Interfaces make it easier to write
// type-safe code by providing a way to ensure that objects are of the correct
// shape before they are used in a program. They also allow for code to be more
// modular and reusable, since objects can be easily swapped out as long as
// they adhere to the interface's contract.

// Interfaces area created with the `interface` keyword.
interface Area {
  // Implementers of the interface are required to provide
  // an `area` function with this signature:
  area(): number;
}

interface Perimeter {
  // Implementers of the interface are required to provide
  // a `perimeter` function with this signature:
  perimeter(): number;
}

// We use the `implements` keyword when we want a class to implement
// an interface. Classes can implement more than one interface.
class Rectangle implements Area, Perimeter {
  // Since this is a class, we can have any fields we want.
  length: number = 1;
  width: number = 1;

  // We must provide an `area` function:
  area(): number {
    return this.length * this.width;
  }

  // We must provide a `perimeter` function:
  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}

// We can combine multiple interfaces into one for better ergonomics.
// Doing this creates an 'intersection type'.
type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
  radius: number = 4;

  // Since we are using an intersection of `Area` and `Perimeter`, both
  // the `area` and `perimeter` functions must be implemented.
  area(): number {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle();
// Calls the methods defined on `Rectangle`.
assert.equal(rect.area(), 1);
assert.equal(rect.perimeter(), 4);

const circ = new Circle();
// Calls the methods defined on `Circle`.
assert.equal(circ.area(), Math.PI * circ.radius ** 2);
assert.equal(circ.perimeter(), Math.PI * 2 * circ.radius);

// When classes implement an interface, they can be used together
// in the same collection:
const objectsWithArea: Area[] = [rect, circ];
for (let i = 0; i < objectsWithArea.length; i++) {
  console.log(objectsWithArea[i].area());
}

// We can also use interfaces to specify that some field must exist
// on the implementer:
interface CustomerInfo {
  name: string;
}

class Customer implements CustomerInfo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// The main differences between type aliases and interfaces are:
//  - type aliases are used for any type and for simplifying complex type names
//  - interfaces are meant only for object types and for implementation by classes
//
// So if you want something to be implemented by a class, then you'll need to
// use an interface. If you want to make your code more readable by reducing a
// complex type name, then you should use a type alias.
