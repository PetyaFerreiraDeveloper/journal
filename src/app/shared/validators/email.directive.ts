import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { validateEmail } from '../utils/validateEmailUtil';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  validator: ValidatorFn = () => null;
  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];

    if (currentValue?.length) {
      this.validator = validateEmail(currentValue);
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
}
