/* eslint-disable */
import { strict as assert } from "assert";


export function sqrt(x: number): number {
  return Math.sqrt(x);
}


export interface User {
  /** The unique identifier for the user. */
  id: number;
  /** The user's full name. */
  name: string;
  /** The user's email address. */
  email: string;
}


export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }
  return response.json() as Promise<User>;
}
