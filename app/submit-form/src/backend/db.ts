import { AsyncDatabase } from 'promised-sqlite3';
import { v4 as uuidv4 } from "uuid";
import { HashedPassword } from './auth';

export interface User {
  id: number;
  email: string;
  hashedPassword: HashedPassword;
  agreedToTerms: boolean;
}

interface UserDto extends Omit<User, "hashedPassword"> {
  hashedPassword: string;
}

export interface UserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  get(userId: number): Promise<User | undefined>;
}

export class SqliteUserRepository implements UserRepository {
  constructor(private readonly db: AsyncDatabase) { }

  async get(userId: number): Promise<User | undefined> {
    const user: UserDto | undefined = await this.db.get('SELECT * FROM users WHERE id = ?', userId);
    if (user !== undefined) {
      return {
        ...user,
        hashedPassword: new HashedPassword(user.hashedPassword),
      };
    } else {
      return undefined;
    }
  }

  async create(user: User): Promise<User> {
    const userId: { id: number } = await this.db.get(
      'INSERT INTO users (email, hashedPassword, agreedToTerms) VALUES (?, ?, ?) RETURNING id',
      [user.email, user.hashedPassword.hashed, user.agreedToTerms]
    );
    return {
      ...user,
      id: userId.id,
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const id: { id: number } | undefined = await this.db.get('SELECT id FROM users WHERE email = ?', email);
    if (id !== undefined) {
      return await this.get(id.id);
    } else {
      return undefined;
    }
  }
}

export async function connect(connectionString: string): Promise<AsyncDatabase> {
  return await AsyncDatabase.open(connectionString);
}

export class SqliteSession {
  constructor(private readonly db: AsyncDatabase) { }

  async create(userId: number): Promise<string> {
    const sessionId = uuidv4();
    await this.db.run('INSERT INTO sessions (session_id, user_id) VALUES (?,?)', [sessionId, userId]);
    return sessionId;
  }

  async get(sessionId: string): Promise<User | undefined> {
    const userId: { user_id: number } | undefined = await this.db.get('SELECT user_id FROM sessions WHERE session_id = ?', sessionId);
    if (userId === undefined) {
      return undefined;
    }
    const users = new SqliteUserRepository(this.db);
    return await users.get(userId.user_id);
  }
}

export async function newDb(db: AsyncDatabase): Promise<void> {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      hashedPassword TEXT NOT NULL,
      agreedToTerms BOOLEAN NOT NULL
    );
    CREATE TABLE IF NOT EXISTS sessions (
      session_id UUID PRIMARY KEY,
      user_id INTEGER NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
}

