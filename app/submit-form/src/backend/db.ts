import { AsyncDatabase } from 'promised-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import type { HashedPassword } from './auth';

export interface User {
  id: number;
  email: string;
  password: HashedPassword;
  agreedToTerms: boolean;
}

// Repository pattern:
//   - Abstracts away the underlying data store
//   - Provides an interface for the business logic to interact with the data store
//   - Allows for easy swapping of data stores
export interface UserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  get(userId: number): Promise<User | undefined>;
}

// You could rewrite this to use a different data store, such as PostgreSQL
export class SqliteUserRepository implements UserRepository {
  constructor(private readonly db: AsyncDatabase) {}

  /**
   * Inserts a new user into the database and returns the created user with the generated ID.
   *
   * @param user - The user object containing email, password, and agreedToTerms.
   * @returns A promise that resolves to the created user with an assigned ID.
   */

  async create(user: User): Promise<User> {
    const userID: { id: number } = await this.db.get(
      'INSERT INTO users (email, password, agreedToTerms) VALUES (?, ?, ?) RETURNING id',
      [user.email, user.password.hashed, user.agreedToTerms]
    );

    return {
      ...user,
      id: userID.id,
    };
  }

  /**
   * Retrieves a user from the database by their email address.
   *
   * @param email - The email address of the user to find.
   * @returns A promise that resolves to the user object if found, or undefined if no user with the given email exists.
   */

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.db.get('SELECT * FROM users WHERE email = ?', email);
  }

  /**
   * Retrieves a user from the database by their unique ID.
   *
   * @param userId - The unique identifier of the user to retrieve.
   * @returns A promise that resolves to the user object if found, or undefined if no user with the given ID exists.
   */

  async get(userId: number): Promise<User | undefined> {
    return await this.db.get('SELECT * FROM users WHERE id = ?', userId);
  }
}

export class SqliteSession {
  constructor(private readonly db: AsyncDatabase) {}

  async create(userID: number): Promise<string> {
    const sessionID = uuidv4();
    await this.db.run(
      'INSERT INTO sessions (session_id, user_id) VALUES (?, ?)',
      [sessionID, userID]
    );
    return sessionID;
  }

  /**
   * Retrieves a user from the database by their session ID.
   *
   * @param sessionID - The session ID of the user to find.
   * @returns A promise that resolves to the user object if found, or undefined if no user with the given session ID exists.
   */
  async get(sessionID: string): Promise<User | undefined> {
    const userID: { user_id: number } | undefined = await this.db.get(
      'SELECT user_id FROM sessions WHERE session_id = ?',
      sessionID
    );
    if (userID === undefined) {
      return undefined;
    }

    const users = new SqliteUserRepository(this.db);
    return await users.get(userID.user_id);
  }
}

/**
 * Connects to the given database using the given connection string.
 *
 * @param connectionString The connection string to use
 * @returns A promise that resolves to the connected database
 */
export async function connect(
  connectionString: string
): Promise<AsyncDatabase> {
  return await AsyncDatabase.open(connectionString);
}

/**
 * Initializes the database with required tables if they do not already exist.
 *
 * This function creates the `users` table to store user information and the `sessions` table
 * to manage user sessions. The `users` table includes columns for user ID, email, hashed
 * password, and agreement to terms. The `sessions` table links each session to a user
 * through a foreign key relationship with the `users` table.
 *
 * @param db - The database instance to execute the table creation commands on.
 * @returns A promise that resolves when the table creation commands have been executed.
 */

export async function newDb(db: AsyncDatabase): Promise<void> {
  await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            agreedToTerms BOOLEAN NOT NULL
        );
        CREATE TABLE IF NOT EXISTS sessions (
        session_id UUID PRIMARY KEY,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `);
}
