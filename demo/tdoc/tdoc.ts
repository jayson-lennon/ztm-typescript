/* eslint-disable */
import { strict as assert } from "assert";

/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function sqrt(x: number): number {
  return Math.sqrt(x);
}

/**
 * Represents a user in the system.
 *
 * @remarks
 * This interface defines the properties and methods that a user object should have.
 */
export interface User {
  /** The unique identifier for the user. */
  id: number;
  /** The user's full name. */
  name: string;
  /** The user's email address. */
  email: string;
}

/**
 * Fetches a user by their unique identifier.
 *
 * @param id - The unique identifier of the user to fetch.
 * @returns A Promise that resolves with the user object, or rejects with an error.
 *
 * @remarks
 * This function uses the fetch API to make a request to the server for the user object.
 */
export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }
  return response.json() as Promise<User>;
}
