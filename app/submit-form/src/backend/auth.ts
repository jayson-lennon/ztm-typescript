import bcrypt from 'bcrypt';

const saltRounds = 10;

// Serves to only create a type for the
// hashed password with the readonly modifier
export class HashedPassword {
  constructor(readonly hashed: string) {}
}

export async function hashPassword(plain: string): Promise<HashedPassword> {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(plain, saltRounds, (err, hashed: string) => {
      if (err === undefined) {
        reject(err);
      } else {
        resolve(new HashedPassword(hashed));
      }
    });
  });
}

export async function comparePassword(
  plain: string,
  storedHash: string
): Promise<boolean> {
  return (await bcrypt.compare(plain, storedHash)) as unknown as boolean;
}
