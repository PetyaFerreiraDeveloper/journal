import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { matchPasswordsValidator } from 'src/app/shared/utils/matchPasswordsValidator';
import { validateEmail } from 'src/app/shared/utils/validateEmailUtil';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required, validateEmail(EMAIL_DOMAINS)]],
    passGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPass: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'confirmPass')],
      }
    ),
  });

  get passGroup() {
    return this.form.get('passGroup')
  } 

  constructor(private formBuilder: FormBuilder) {}

  register(): void {
    // if (this.form.invalid) return;

    console.log(this.form.value);
  }
}
