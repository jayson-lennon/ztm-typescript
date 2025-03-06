import { checkComplexity } from '../shared/password-rules';
import { checkUsername } from '../shared/username-rules';
import { FieldError } from './field-error';

// HTML Elements
const passwordField = document.getElementById('password') as HTMLInputElement;
const passwordInvalidLabel = document.getElementById(
  'invalid-password'
) as HTMLElement;

const emailField = document.getElementById('email') as HTMLInputElement;
const emailInvalidLabel = document.getElementById(
  'invalid-email'
) as HTMLElement;

const submitBtn = document.getElementById('form-submit');

const errors = new FieldError();

/**
 * Enables or disables the submit button based on the presence of any errors.
 *
 * If errors.isEmpty() is true, the button is enabled by removing the 'btn-disabled'
 * class. Otherwise, the button is disabled by adding the 'btn-disabled' class.
 *
 * @returns {void}
 */
function updateSubmitBtn(): void {
  if (
    errors.isEmpty() &&
    emailField.value.length > 0 &&
    passwordField.value.length > 0
  ) {
    submitBtn?.classList.remove('btn-disabled');
  } else {
    submitBtn?.classList.add('btn-disabled');
  }
}

// Event Listeners

// (_) is a placeholder for the event object, used
// to avoid type errors when the event data is not used
emailField.addEventListener('input', (_) => {
  const usernameFailures = checkUsername(emailField.value);

  if (usernameFailures.length > 0) {
    const formattedErrors = usernameFailures.join('<br>');
    errors.set('invalid-email', emailField, emailInvalidLabel, formattedErrors);
  } else {
    errors.remove('invalid-email', emailField, emailInvalidLabel);
  }

  updateSubmitBtn();
});

passwordField.addEventListener('input', (_) => {
  const passwordFailures = checkComplexity(passwordField.value);

  if (passwordFailures.length > 0) {
    const formattedErrors = passwordFailures.join('<br>');
    errors.set(
      'invalid-email',
      passwordField,
      passwordInvalidLabel,
      formattedErrors
    );
  } else {
    errors.remove('invalid-email', passwordField, passwordInvalidLabel);
  }
  updateSubmitBtn();
});
