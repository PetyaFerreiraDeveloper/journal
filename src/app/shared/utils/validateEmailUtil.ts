import { ValidatorFn } from '@angular/forms';

export function validateEmail(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  const regExp = new RegExp(`[A-Za-z0-9]+@(${domainString})`);
  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    // this is the emailInput.errors? object, where we can pass custom error message and the name of the error
    return isEmailInvalid
      ? null
      : { validateEmail: true, expectedDomains: domains.join(', ') };
  };
}
