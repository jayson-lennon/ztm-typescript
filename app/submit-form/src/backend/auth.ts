import bcrypt from "bcrypt";

const saltRounds = 10;

export class HashedPassword {
  constructor(readonly hashed: string) { }
}

export async function hashPassword(plainPassword: string): Promise<HashedPassword> {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(plainPassword, saltRounds, (err, hashed) => {
      if (err !== undefined) {
        reject(err);
      } else {
        resolve(new HashedPassword(hashed));
      }
    })
  });
}

export async function comparePassword(plainPassword: string, storedHash: HashedPassword): Promise<boolean> {
  return await bcrypt.compare(plainPassword, storedHash.hashed);
}
