import { ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordControlName: string,
  confirmPassControlName: string
): ValidatorFn {
  return (control) => {
    const passwordControl = control.get(passwordControlName);
    const confirmPasswordControl = control.get(confirmPassControlName);
    const areMatching =
      passwordControl?.value === confirmPasswordControl?.value;
    console.log({ areMatching });

    return areMatching ? null : { matchPasswordsValidator: true };
  };
}
