export function checkComplexity(password: string): string[] {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  // more rules here

  return errors;
}
