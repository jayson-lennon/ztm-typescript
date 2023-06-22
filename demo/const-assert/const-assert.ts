/* eslint-disable */

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.

// Union type only allows us to assign these values:
type Rgb = "red" | "green" | "blue";

{
  // 'as const' is similar to a union type, but allows iteration of
  // each member.
  //
  // Array of our options:
  const Color = ["red", "green", "blue"] as const;
  // Create a type from the array members (same as union):
  type Color = (typeof Color)[number];
  // Colors can be assigned just like a union type:
  const red: Color = "red";

  // Iteration through all the colors is now possible because `Color` is
  // an array:
  for (const c of Color) {
    console.log(c); // red, green, blue
  }
}

{
  // 'as const' can also be used with objects:
  const Department = {
    Executive: "executive",
    Sales: "sales",
    Warehouse: "warehouse",
  } as const;
  type Department = (typeof Department)[keyof typeof Department];

  // `for..in` loop will allow us to iterate over the keys and values:
  let k: keyof typeof Department;
  for (k in Department) {
    console.log(`[${k}]: ${Department[k]}`);
  }

  const exec: Department = Department.Executive;
}
