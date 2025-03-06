/* eslint-disable */
import { strict as assert } from 'assert';

// `async/await` allows you to write asynchronous code in a synchronous way.
// The `async` keyword used with a function or closure creates an asynchronous
// context. The `await` keyword can be used inside an asynchronous context to
// wait for a `Promise` to resolve before moving on to the next line of code.
// While waiting, other code outside the function will execute. When the
// promise resolves, the value is returned and assigned to the variable on the
// left side of the `=` sign. This makes it easier to work with asynchronous
// code as you can write code in a more sequential way.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
//

/**
 * Fetches a user object from a JSONPlaceholder API by a given ID.
 *
 * @param {number} id - The ID of the user to fetch.
 * @return {Promise<{name: string}>} - A promise that resolves to an object
 *     that contains the user's name.
 */
async function fetchUser(id: number): Promise<{ name: string }> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return { name: user.name as string }; // Don't necessarily need to cast, but it's a good practice
}

(async () => {
  try {
    const user = await fetchUser(1);
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
})(); // This is the same as `fetchUser(1).then(console.log)` (Promise API) but it's more readable
