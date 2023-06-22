/* eslint-disable */
import { strict as assert } from "assert";

// `async/await` allows you to write asynchronous code in a synchronous way.
// The `async` keyword used with a function or closure creates asynchronous
// context. The `await` keyword can be used inside an asynchronous context to
// wait for a `Promise` to resolve before moving on to the next line of code.
// When the promise resolves, the value is returned and assigned to the
// variable on the left side of the `=` sign. This makes it easier to work with
// asynchronous code as you can write code in a more sequential way.


// We mark the function with the `async` keyword which means this function
// can now operate asynchronously.
async function fetchUserDataAsync(userId: number): Promise<{ name: string }> {
  // We call the `fetch` function as before, but prefix it using the `await`
  // keyword. `await` marks an asynchronous point in the function which allows
  // other parts of the program to run while waiting for the `fetch` call to
  // return.
  //
  // `fetch` returns a `Promise` which we `await` on. `await` automatically
  // takes the data out of the `Promise`, so we don't need to perform any
  // `.then()` chaining with closures:
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  // Once the call to `fetch` finishes, we will have the `response` that we can
  // work with. We can then read the data of the response into json. The
  // `.json()` function returns a `Promise`, so we can `await` again:
  const data = await response.json();

  // Once the above finishes, we now have the final JSON data. We can then
  // extract just the name and return it in an object:
  return { name: data.name };
}

// Using the above with async/await. This requires an `async` closure because
// using the `await` keyword only operates within an asynchronous context:
(async () => {
  // We need to use `try...catch` to catch an `await` failure, instead of the
  // `.catch()` present in the `Promise` API:
  try {
    const userData = await fetchUserDataAsync(1);
    console.log(userData.name);
  } catch (error) {
    console.error(error);
  }
})();

// Using the above with the `Promise` AP:
fetchUserDataAsync(1)
  .then((userData) => console.log(userData.name))
  // When a `Promise` fails, we use `catch` to handle the error:
  .catch((error) => console.error(error));
