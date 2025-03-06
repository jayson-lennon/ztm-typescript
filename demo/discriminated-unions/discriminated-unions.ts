/* eslint-disable */

// Discriminated unions are a way to declare a type that can have
// different properties or behaviors based on a specific discriminator property.
// Discriminated unions can be defined using the intersection of a set of types
// with a common property, and the property value can be used to determine which
// type to use.

// We can also use entire objects. Using objects creates
// a 'discriminated union'. Unions only allow the type to be one
// option at a time. Combining this with objects allows multiple
// pieces of data to be associated with each individual option.
//

type numbers = 1 | 2 | string | number; // normal unions

// Same as the above but with objects on separate lines and a common property as a discriminator
type AccountCreationMessage =
  | { kind: 'ok'; greeting: string }
  | { kind: 'passwordComplexityFailure'; message: string }
  | { kind: 'usernameExists' };

const ok: AccountCreationMessage = {
  kind: 'ok',
  greeting: 'Welcome to the platform',
};

const passwordTooShort: AccountCreationMessage = {
  kind: 'passwordComplexityFailure',
  message: 'Password too short',
};

const exists: AccountCreationMessage = {
  kind: 'usernameExists',
};

/**
 * Logs an appropriate message based on the type of `AccountCreationMessage`.
 *
 * @param msg - The message object that contains a `kind` property to determine
 * which message to log. It can be one of the following types:
 *  - `{ kind: 'ok', greeting: string }`: Logs the greeting message.
 *  - `{ kind: 'passwordComplexityFailure', message: string }`: Logs the failure message.
 *  - `{ kind: 'usernameExists' }`: Logs a default message indicating the username exists.
 */
function showMessage(msg: AccountCreationMessage) {
  switch (msg.kind) {
    case 'ok':
      console.log(msg.greeting);
      break;
    case 'passwordComplexityFailure':
      console.log(msg.message);
      break;
    case 'usernameExists':
      console.log('Username already exists');
      break;
  }
}

showMessage(ok);
showMessage(passwordTooShort);
showMessage(exists);
