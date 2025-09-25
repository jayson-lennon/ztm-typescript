// Write an asynchronous function that calls the existing getUser function and
// prints out the user's name.
//
// Note: The getUser function fails randomly. Make sure your function is able
// to handle a failure scenario by printing out what went wrong.
import { strict as assert } from "assert";

interface User {
  id: number;
  name: string;
}

async function getUser(): Promise<User> {
  return await new Promise((resolve, reject) => {
    const [time1, time2] = [Math.floor(Math.random() * 200), Math.floor(Math.random() * 200)];

    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, time1);
    setTimeout(() => {
      reject(new Error("failed to located user"));
    }, time2);
  });
}

