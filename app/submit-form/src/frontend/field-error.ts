export class FieldError {
  errors: Set<string> = new Set<string>();

  set(errKey: string, inputField: HTMLInputElement, label: HTMLElement, labelText: string): void {
    inputField.classList.add("input-error");
    label.classList.remove("hidden");
    label.innerHTML = labelText;
    this.errors.add(errKey);
  }

  remove(errKey: string, field: HTMLInputElement, label: HTMLElement): void {
    field.classList.remove("input-error");
    label.classList.add("hidden");
    this.errors.delete(errKey);
  }

  isEmpty(): boolean {
    return this.errors.size === 0;
  }

}


