export function checkUsername(username: string): string[] {
  const errors: string[] = [];
  if (!/\S+@\S+\.\S+/.test(username)) errors.push("Must use email format: name@domain.tld.");

  // more rules here;

  return errors;
}
