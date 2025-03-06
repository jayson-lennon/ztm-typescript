/* eslint-disable */

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
//

type Rgb = 'red' | 'green' | 'blue';

{
  const Color = ['red', 'green', 'blue'] as const; // Array is readonly
  type Color = (typeof Color)[number]; // Same as Rgb

  const color1: Rgb = 'red';
  const color2: Color = 'red';
  console.log(
    `The values are equal: ${color1 === color2}, but are the types?: ${
      typeof color1 === typeof color2
    }`
  );

  for (const c of Color) {
    console.log(c); // allows you to iterate over the type values
  }
}

{
  const Department = {
    Executive: 'top floor',
    Sales: 'middle floor',
    Warehouse: 'bottom floor',
  } as const;

  type Department = (typeof Department)[keyof typeof Department];

  let k: keyof typeof Department; // gets the type of the keys
  for (k in Department) {
    console.log(`department = ${k}, floor = ${Department[k]}`);
  }

  // When using APIs, this can be useful to ensure that the API is returning the expected values
  const executive: Department = Department.Executive;
}
