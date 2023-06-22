// In the browser, there is always the possibility that an element does not
// exist. For this reason, `getElementById` returns `HTMLElement | null`. Type
// annotations have been added for clarity.
//
// There are multiple ways to handle the `null` possibility which are detailed
// below.

// Using an `if` block (recommended) is the safest way to handle this
// situation. It does take slightly more code, but it will always work and the
// program will not crash at runtime:
{
  const heading: HTMLElement | null = document.getElementById("heading");
  // Check for null. If we omit this check, we will get a compiler error
  // because `heading` might be `null`.
  if (heading !== null) {
    // Heading is definitely not `null`, so we can access the properties on the
    // `HTMLElement`:
    heading.textContent = "Hello from TypeScript!";
  }
}

// It's possible to use a non-null assertion (`!`) to ignore `null`. Using this
// will result in a runtime error if the element does not exist and effectively
// turns off some the benefits of TypeScript's type system. Use this sparingly.
{
  // Exclamation mark tells TypeScript to ignore the `null` case:
  const heading: HTMLElement = document.getElementById("heading")!;
  heading.textContent = "Hello from TypeScript!";
}

// This also removes the `null` case and is effectively the same as above, just
// more code:
{
  const heading: HTMLElement = document.getElementById(
    "heading"
  ) as HTMLElement;
  heading.textContent = "Hello from TypeScript!";
}

// If you only need to read some information from an element, you can use
// optional chaining:
{
  const heading: HTMLElement | null = document.getElementById("heading");
  console.log("Heading text: '%s'", heading?.textContent);
  // But you'll still need to check for `null` if you want to write some data:
  //
  // ERROR: possibly null
  // heading.textContent = "Hello from TypeScript!";
}

// `getElementById` only ever returns an `HTMLElement`, which can be any kind
// of element. If we want to work with an input box, for example, we need a way
// to convert `HTMLElement` into `HTMLInputElement`.

// Using the builtin `instanceof` type guard (recommended) is the safest way to
// handle this situation. It does take slightly more code, but it will always
// work and the program will not crash at runtime:
{
  const userInput: HTMLElement | null = document.getElementById("user-input");
  if (userInput instanceof HTMLInputElement) {
    userInput.value = "Text input from TypeScript!";
  }
}

// Just as with the "heading" examples, we can also just tell TypeScript "trust
// me, this is the correct type". If the element actually isn't an
// `HTMLInputElement`, then the program will crash at runtime.
{
  const userInput = document.getElementById(
    "user-input"
  ) as HTMLInputElement | null;
  if (userInput !== null) {
    userInput.value = "Text input from TypeScript!";
  }

  // Optional chaining works as well, but only for reads:
  console.log("Input text: '%s'", userInput?.value);
}

// No checks at all. The program will crash in two cases:
//   1. if `user-input` doesn't exist
//   2. if `user-input` is not an HTMLInputElement
{
  const userInput = document.getElementById("user-input") as HTMLInputElement;
  userInput.value = "Text input from TypeScript!";
}
