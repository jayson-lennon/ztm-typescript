/* eslint-disable */

// In this test file, we need to import all of the items we want to test from
// the source file:
import { concat, div, failedString, slowString } from "./strings";

// `jest` uses a fluent interface. The functions are designed to be read as if
// they are plain english. There are many different functions provided by
// `jest`. You can view what is available at https://jestjs.io/.
//
// A test begins with `it`, followed by a thing "it" should do, followed by
// what is expeted. This test reads:
//   It should say 'Hello, world!'. We expect the `concat` function having
//   arguments "Hello," and " world!" to be equal to "Hello, world!"
it('should say "Hello, world!"', () => {
  expect(concat("Hello,", " world!")).toEqual("Hello, world!");
});

// Another test:
it("should divide", () => {
  expect(div(10, 2)).toEqual(5);
});

// This test makes sure that the function throws an exception:
it("should fail to divide by zero", () => {
  // Need to wrap in an arrow function so `jest` can catch the error that we
  // are expecting.
  expect(() => {
    div(10, 0);
  }).toThrow();
});

// `test` is an alias for `it`, so use whichever makes your test easier to
// understand:
test("slow string fetches sample text", async () => {
  slowString()
    .then((data) => {
      expect(data).toEqual("sample");
    })
    .catch((err) => expect(err).toBeUndefined());
});

test("failed string fails with a 'whoops'", async () => {
  failedString()
    .then((data) => {
      expect(data).toBeUndefined();
    })
    .catch((err) => expect(err).toEqual("whoops"));
});
