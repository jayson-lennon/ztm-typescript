import { checkComplexity } from "../shared/password-rules";
import { checkUsername } from "../shared/username-rules";
import { FieldError } from "./field-error";

const passwordField = document.getElementById("password") as HTMLInputElement;
const passwordInvalidLabel = document.getElementById("invalid-password") as HTMLElement;

const emailField = document.getElementById("email") as HTMLInputElement;
const emailInvalidLabel = document.getElementById("invalid-email") as HTMLElement;

const submitBtn = document.getElementById("form-submit");

const errors = new FieldError();

function updateSubmitBtn(): void {
  if (errors.isEmpty() && emailField.value.length > 0 && passwordField.value.length > 0) {
    submitBtn?.classList.remove("btn-disabled");
  } else {
    submitBtn?.classList.add("btn-disabled");
  }
}

emailField.addEventListener("input", (_) => {
  const usernameFailures = checkUsername(emailField.value);
  if (usernameFailures.length > 0) {
    const formattedErrors = usernameFailures.join("<br>");
    errors.set("invalid-email", emailField, emailInvalidLabel, formattedErrors);
  } else {
    errors.remove("invalid-email", emailField, emailInvalidLabel);
  }
  updateSubmitBtn();
});

passwordField.addEventListener("input", (_) => {
  const complexityFailures = checkComplexity(passwordField.value);
  if (complexityFailures.length > 0) {
    const formattedErrors = complexityFailures.join("<br>");
    errors.set("password-complexity-failure", passwordField, passwordInvalidLabel, formattedErrors);
  } else {
    errors.remove("password-complexity-failure", passwordField, passwordInvalidLabel);
  }
  updateSubmitBtn();
});
